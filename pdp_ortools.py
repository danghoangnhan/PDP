"""OR-Tools based Pickup-and-Delivery Problem (PDP) solver for meal delivery routing."""

from dataclasses import dataclass

from ortools.constraint_solver import pywrapcp, routing_enums_pb2

from Math.distance import distance
from model.node import Node
from PDP import build_requests


@dataclass
class DataModel:
    """All data consumed by the OR-Tools routing solver."""

    distance_matrix: list[list[int]]
    time_matrix: list[list[int]]
    time_windows: list[tuple[int, int]]
    pickups_deliveries: list[tuple[int, int]]
    demands: list[int]
    vehicle_capacities: list[int]
    num_vehicles: int
    depot: int
    nodes: list[Node]


@dataclass
class Route:
    """A single vehicle route extracted from the solver solution."""

    vehicle_id: int
    route: list[int]
    distance: int
    time: int


def build_distance_matrix(nodes):
    """Compute all-pairs Haversine distance matrix.

    Returns a 2D list of integers (distances in meters).
    """
    n = len(nodes)
    matrix = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            d = int(
                round(
                    distance(nodes[i].lat, nodes[i].lon, nodes[j].lat, nodes[j].lon)
                    * 1000
                )
            )
            matrix[i][j] = d
            matrix[j][i] = d
    return matrix


def build_time_matrix(distance_matrix, velocity):
    """Convert distance matrix (meters) to time matrix (seconds) given velocity in m/s.

    Returns a 2D list of integers.
    """
    n = len(distance_matrix)
    return [
        [
            int(round(distance_matrix[i][j] / velocity)) if velocity > 0 else 0
            for j in range(n)
        ]
        for i in range(n)
    ]


def create_data_model(orders, restaurants, drivers, prepare_time, velocity, capacity,
                      depot_time_window=86400):
    """Build the DataModel consumed by solve_pdp.

    Parameters
    ----------
    orders : list of Order
    restaurants : list of Restaurant
    drivers : list of Driver
    prepare_time : int  – seconds
    velocity : float – m/s
    capacity : int – max items per vehicle
    depot_time_window : int – depot latest time in seconds (default 24h)

    Returns
    -------
    DataModel
    """
    requests = build_requests(orders, restaurants, prepare_time)

    # Depot at centroid of driver locations
    depot_lat = sum(d.latitude for d in drivers) / len(drivers)
    depot_lon = sum(d.longitude for d in drivers) / len(drivers)
    depot = Node(
        node_id=0,
        lat=depot_lat,
        lon=depot_lon,
        demand=0,
        earliest=0,
        latest=0,
        service_time=0,
        order_id=-1,
    )

    # Node list: [depot, pickup_1, delivery_1, pickup_2, delivery_2, ...]
    nodes = [depot]
    pickups_deliveries = []
    for pickup, delivery in requests:
        p_idx = len(nodes)
        nodes.append(pickup)
        d_idx = len(nodes)
        nodes.append(delivery)
        pickups_deliveries.append((p_idx, d_idx))

    dist_matrix = build_distance_matrix(nodes)
    time_matrix = build_time_matrix(dist_matrix, velocity)

    # node.earliest / node.latest are stored in minutes (from raw data);
    # convert to seconds to match the time_matrix units.
    time_windows = [(0, depot_time_window)]  # depot
    for node in nodes[1:]:
        time_windows.append((node.earliest * 60, node.latest * 60))

    demands = [node.demand for node in nodes]
    demands[0] = 0  # depot

    return DataModel(
        distance_matrix=dist_matrix,
        time_matrix=time_matrix,
        time_windows=time_windows,
        pickups_deliveries=pickups_deliveries,
        demands=demands,
        vehicle_capacities=[capacity] * len(drivers),
        num_vehicles=len(drivers),
        depot=0,
        nodes=nodes,
    )


def solve_pdp(data, time_limit=30, search_parameters=None,
              time_slack=3600, max_time=86400, drop_penalty=100000):
    """Solve the PDP using OR-Tools routing solver.

    Parameters
    ----------
    data : DataModel
    time_limit : int – solver timeout in seconds (used only if search_parameters is None)
    search_parameters : RoutingSearchParameters, optional – pre-built protobuf object
    time_slack : int – time dimension slack in seconds
    max_time : int – max cumulative time in seconds
    drop_penalty : int – penalty for dropping a node

    Returns (manager, routing, solution) tuple.
    """
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
        return data.time_matrix[from_node][to_node]

    time_callback_index = routing.RegisterTransitCallback(time_callback)
    routing.AddDimension(
        time_callback_index,
        time_slack,
        max_time,
        False,  # don't fix start cumul to zero
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
        0,  # null capacity slack
        data.vehicle_capacities,
        True,  # start cumul to zero
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
        time_dimension.CumulVar(pickup_index).SetMax(
            time_dimension.CumulVar(delivery_index).Max()
        )
        routing.solver().Add(
            time_dimension.CumulVar(pickup_index)
            <= time_dimension.CumulVar(delivery_index)
        )

    # --- Allow dropping nodes with penalty ---
    for node in range(1, num_nodes):
        routing.AddDisjunction([manager.NodeToIndex(node)], drop_penalty)

    # --- Search parameters ---
    if search_parameters is None:
        search_parameters = pywrapcp.DefaultRoutingSearchParameters()
        search_parameters.first_solution_strategy = (
            routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC
        )
        search_parameters.local_search_metaheuristic = (
            routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH
        )
        search_parameters.time_limit.FromSeconds(time_limit)
        search_parameters.use_cp_sat = pywrapcp.BOOL_TRUE
        search_parameters.sat_parameters.num_workers = 0  # auto-detect CPU cores
        search_parameters.log_search = True

    solution = routing.SolveWithParameters(search_parameters)
    return manager, routing, solution


def extract_routes(data, manager, routing, solution):
    """Extract routes from the solution.

    Returns list of Route dataclasses.
    Only includes vehicles with non-empty routes (more than just depot).
    """
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
        # Add end depot
        route_nodes.append(manager.IndexToNode(index))

        # Skip vehicles that only visit depot -> depot
        if len(route_nodes) <= 2:
            continue

        # Route time = arrival at last node - departure from first
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


def print_solution(data, manager, routing, solution):
    """Print each vehicle's route with P/D notation and arrival times."""
    if solution is None:
        print("No solution found.")
        return

    time_dimension = routing.GetDimensionOrDie("Time")
    total_distance = 0
    total_time = 0

    for vehicle_id in range(data.num_vehicles):
        index = routing.Start(vehicle_id)
        route_str = ""
        route_distance = 0

        while not routing.IsEnd(index):
            node = manager.IndexToNode(index)
            time_var = time_dimension.CumulVar(index)
            arrival = solution.Value(time_var)

            if node == 0:
                label = "Depot"
            else:
                n = data.nodes[node]
                prefix = "P" if n.is_pickup else "D"
                label = f"{prefix}{n.order_id}"

            route_str += f" {label}(t={arrival}s) ->"
            next_index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                index, next_index, vehicle_id
            )
            index = next_index

        # End node
        end_time = solution.Value(time_dimension.CumulVar(index))
        route_str += f" Depot(t={end_time}s)"

        if route_distance > 0:
            print(f"Vehicle {vehicle_id}: {route_str}")
            print(f"  Distance: {route_distance}m  Time: {end_time}s")
            total_distance += route_distance
            total_time = max(total_time, end_time)

    print(f"\nTotal distance: {total_distance}m")
    print(f"Max route time: {total_time}s")
