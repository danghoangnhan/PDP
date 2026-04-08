from pdp_ortools import build_distance_matrix, build_time_matrix, create_data_model, solve_pdp, extract_routes
from model.node import Node
from model.driver import Driver
from model.order import Order
from model.restaurant import Restaurant


def _make_node(node_id, lat, lon, is_pickup=True):
    return Node(node_id=node_id, lat=lat, lon=lon, demand=1 if is_pickup else -1,
                earliest=0, latest=3600, service_time=0, order_id=node_id,
                is_pickup=is_pickup)


def test_build_distance_matrix():
    nodes = [
        _make_node(0, 41.64, -91.51),
        _make_node(1, 41.65, -91.52),
        _make_node(2, 41.66, -91.53, is_pickup=False),
    ]
    matrix = build_distance_matrix(nodes)
    assert len(matrix) == 3
    assert len(matrix[0]) == 3
    assert matrix[0][0] == 0  # self-distance
    assert matrix[0][1] > 0   # different locations
    assert matrix[0][1] == matrix[1][0]  # symmetric


def test_build_time_matrix():
    dist_matrix = [[0, 1000, 2000], [1000, 0, 1500], [2000, 1500, 0]]
    velocity = 5.0  # m/s
    time_matrix = build_time_matrix(dist_matrix, velocity)
    assert time_matrix[0][1] == 200  # 1000m / 5 m/s = 200s
    assert time_matrix[0][0] == 0


def test_create_data_model():
    orders = [Order(order_id=0, time_request=1, restaurant_id=1,
                    latitude=41.66, longitude=-91.51, deadline=900)]
    restaurants = [Restaurant(1, 41.64, -91.50)]
    drivers = [Driver(id=1, latitude=41.63, longitude=-91.49, velocity=5.56)]
    data = create_data_model(orders, restaurants, drivers, prepare_time=600, velocity=5.56, capacity=10)

    assert data.num_vehicles == 1
    assert data.depot == 0
    assert len(data.pickups_deliveries) == 1
    assert len(data.distance_matrix) == 3  # depot + pickup + delivery
    assert len(data.time_windows) == 3
    assert data.demands[0] == 0  # depot demand


def test_solve_pdp_small():
    """Test solver with a small problem."""
    orders = [
        Order(order_id=0, time_request=0, restaurant_id=1,
              latitude=41.66, longitude=-91.51, deadline=7200),
        Order(order_id=1, time_request=0, restaurant_id=2,
              latitude=41.67, longitude=-91.52, deadline=7200),
    ]
    restaurants = [
        Restaurant(1, 41.64, -91.50),
        Restaurant(2, 41.65, -91.51),
    ]
    drivers = [
        Driver(id=1, latitude=41.63, longitude=-91.49, velocity=5.56),
        Driver(id=2, latitude=41.64, longitude=-91.50, velocity=5.56),
    ]
    data = create_data_model(orders, restaurants, drivers, prepare_time=600, velocity=5.56, capacity=10)
    manager, routing, solution = solve_pdp(data, time_limit=5)
    assert solution is not None

    routes = extract_routes(data, manager, routing, solution)
    assert len(routes) > 0

    # Verify all pickups come before deliveries in each route
    for route_info in routes:
        picked_up = set()
        for node_idx in route_info.route:
            if node_idx == 0:  # depot
                continue
            node = data.nodes[node_idx]
            if node.is_pickup:
                picked_up.add(node.order_id)
            else:
                assert node.order_id in picked_up, "Delivery before pickup!"
