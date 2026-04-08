from pdp.models import Node
from pdp.utils.matrices import build_distance_matrix, build_time_matrix


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
    assert matrix[0][0] == 0
    assert matrix[0][1] > 0
    assert matrix[0][1] == matrix[1][0]


def test_build_time_matrix():
    dist_matrix = [[0, 1000, 2000], [1000, 0, 1500], [2000, 1500, 0]]
    velocity = 5.0
    time_matrix = build_time_matrix(dist_matrix, velocity)
    assert time_matrix[0][1] == 200
    assert time_matrix[0][0] == 0
