from dataclasses import dataclass

from pdp.models.node import Node
from pdp.constraints import build_requests
from pdp.utils.matrices import build_distance_matrix, build_time_matrix


@dataclass
class DataModel:
    """All data consumed by a PDP solver."""

    distance_matrix: list[list[int]]
    time_matrix: list[list[int]]
    time_windows: list[tuple[int, int]]
    pickups_deliveries: list[tuple[int, int]]
    demands: list[int]
    vehicle_capacities: list[int]
    num_vehicles: int
    depot: int
    nodes: list[Node]


def create_data_model(orders, restaurants, drivers, prepare_time, velocity, capacity,
                      depot_time_window=86400):
    """Build the DataModel consumed by solvers.

    Parameters
    ----------
    orders : list of Order
    restaurants : list of Restaurant
    drivers : list of Driver
    prepare_time : int  - seconds
    velocity : float - m/s
    capacity : int - max items per vehicle
    depot_time_window : int - depot latest time in seconds (default 24h)

    Returns
    -------
    DataModel
    """
    requests = build_requests(orders, restaurants, prepare_time)

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
        is_pickup=False,
    )

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

    time_windows = [(0, depot_time_window)]
    for node in nodes[1:]:
        time_windows.append((node.earliest * 60, node.latest * 60))

    demands = [node.demand for node in nodes]
    demands[0] = 0

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
