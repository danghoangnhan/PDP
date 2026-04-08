"""OR-Tools based PDP solver implementation."""

import json as _json

from ortools.constraint_solver import pywrapcp, routing_enums_pb2
from google.protobuf import json_format

from pdp.config import AppConfig
from pdp.models.data_model import DataModel
from pdp.models.route import Route
from pdp.models.result import SolveResult, SolverStatus
from pdp.solvers.base import SolverBase


class ORToolsSolver(SolverBase):
    """OR-Tools CP-SAT / routing solver for PDPTW."""

    def __init__(self, config: AppConfig):
        super().__init__(config)
        self._search_params = self._build_search_params(
            config.search_params_raw, config.time_limit
        )

    @staticmethod
    def _build_search_params(raw: dict | None, time_limit: int):
        """Convert raw JSON dict to OR-Tools RoutingSearchParameters protobuf."""
        sp = pywrapcp.DefaultRoutingSearchParameters()
        if raw is not None:
            json_format.Parse(_json.dumps(raw), sp)
        else:
            sp.first_solution_strategy = (
                routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC
            )
            sp.local_search_metaheuristic = (
                routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH
            )
            sp.use_cp_sat = pywrapcp.BOOL_TRUE
            sp.sat_parameters.num_workers = 0
            sp.log_search = True
        sp.time_limit.FromSeconds(time_limit)
        return sp

    def solve(self, data: DataModel) -> SolveResult:
        """Solve the PDP using OR-Tools routing solver."""
        num_nodes = len(data.distance_matrix)
        manager = pywrapcp.RoutingIndexManager(num_nodes, data.num_vehicles, data.depot)
        routing = pywrapcp.RoutingModel(manager)

        # --- Distance callback & arc cost ---
        def distance_callback(from_index, to_index):
            from_node = manager.IndexToNode(from_index)
            to_node = manager.IndexToNode(to_index)
            return data.distance_matrix[from_node][to_node]

        transit_callback_index = routing.RegisterTransitCallback(distance_callback)
        routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

        # --- Time callback & dimension ---
        def time_callback(from_index, to_index):
            from_node = manager.IndexToNode(from_index)
            to_node = manager.IndexToNode(to_index)
            return data.time_matrix[from_node][to_node] + data.nodes[from_node].service_time

        time_callback_index = routing.RegisterTransitCallback(time_callback)
        routing.AddDimension(
            time_callback_index,
            self._config.time_slack,
            self._config.max_time,
            False,
            "Time",
        )
        time_dimension = routing.GetDimensionOrDie("Time")

        # Time window constraints
        for node_idx in range(num_nodes):
            index = manager.NodeToIndex(node_idx)
            earliest, latest = data.time_windows[node_idx]
            time_dimension.CumulVar(index).SetRange(earliest, latest)

        # --- Demand callback & capacity dimension ---
        def demand_callback(from_index):
            from_node = manager.IndexToNode(from_index)
            return data.demands[from_node]

        demand_callback_index = routing.RegisterUnaryTransitCallback(demand_callback)
        routing.AddDimensionWithVehicleCapacity(
            demand_callback_index,
            0,
            data.vehicle_capacities,
            True,
            "Capacity",
        )

        # --- Pickup and delivery constraints ---
        for pickup_node, delivery_node in data.pickups_deliveries:
            pickup_index = manager.NodeToIndex(pickup_node)
            delivery_index = manager.NodeToIndex(delivery_node)
            routing.AddPickupAndDelivery(pickup_index, delivery_index)
            routing.solver().Add(
                routing.VehicleVar(pickup_index) == routing.VehicleVar(delivery_index)
            )
            routing.solver().Add(
                time_dimension.CumulVar(pickup_index)
                <= time_dimension.CumulVar(delivery_index)
            )

        # --- Allow dropping nodes with penalty ---
        for node in range(1, num_nodes):
            routing.AddDisjunction([manager.NodeToIndex(node)], self._config.drop_penalty)

        # --- Solve ---
        solution = routing.SolveWithParameters(self._search_params)

        if solution is None:
            return SolveResult(status=SolverStatus.NO_SOLUTION)

        # --- Extract routes ---
        routes = self._extract_routes(data, manager, routing, solution)

        total_distance = sum(r.distance for r in routes)
        total_time = max((r.time for r in routes), default=0)

        # Find dropped nodes
        dropped = []
        for node_idx in range(1, num_nodes):
            index = manager.NodeToIndex(node_idx)
            if solution.Value(routing.NextVar(index)) == index:
                dropped.append(node_idx)

        return SolveResult(
            status=SolverStatus.FEASIBLE,
            routes=routes,
            total_distance=total_distance,
            total_time=total_time,
            dropped_nodes=dropped,
            objective_value=solution.ObjectiveValue(),
        )

    @staticmethod
    def _extract_routes(data, manager, routing, solution):
        """Extract routes from the OR-Tools solution."""
        routes = []
        time_dimension = routing.GetDimensionOrDie("Time")

        for vehicle_id in range(data.num_vehicles):
            index = routing.Start(vehicle_id)
            route_nodes = []
            route_distance = 0
            while not routing.IsEnd(index):
                node = manager.IndexToNode(index)
                route_nodes.append(node)
                next_index = solution.Value(routing.NextVar(index))
                route_distance += routing.GetArcCostForVehicle(
                    index, next_index, vehicle_id
                )
                index = next_index
            route_nodes.append(manager.IndexToNode(index))

            if len(route_nodes) <= 2:
                continue

            start_time = solution.Value(time_dimension.CumulVar(routing.Start(vehicle_id)))
            end_time = solution.Value(time_dimension.CumulVar(index))
            route_time = end_time - start_time

            routes.append(
                Route(
                    vehicle_id=vehicle_id,
                    route=route_nodes,
                    distance=route_distance,
                    time=route_time,
                )
            )

        return routes
