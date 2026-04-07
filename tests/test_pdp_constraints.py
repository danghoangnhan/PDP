from model.node import PickupNode, DeliveryNode
from PDP import check_precedence, check_capacity


def _make_pair(order_id, p_lat=41.66, p_lon=-91.51, d_lat=41.65, d_lon=-91.53):
    p = PickupNode(
        node_id=order_id * 2 - 1, lat=p_lat, lon=p_lon, demand=1,
        earliest=0, latest=600, service_time=300, order_id=order_id,
    )
    d = DeliveryNode(
        node_id=order_id * 2, lat=d_lat, lon=d_lon, demand=-1,
        earliest=100, latest=1200, service_time=0, order_id=order_id,
    )
    p.pair = d
    d.pair = p
    return p, d


def test_precedence_valid():
    p1, d1 = _make_pair(1)
    p2, d2 = _make_pair(2)
    route = [p1, p2, d1, d2]
    assert check_precedence(route) is True


def test_precedence_invalid_delivery_before_pickup():
    p1, d1 = _make_pair(1)
    route = [d1, p1]  # delivery before pickup
    assert check_precedence(route) is False


def test_precedence_interleaved_valid():
    p1, d1 = _make_pair(1)
    p2, d2 = _make_pair(2)
    route = [p1, p2, d2, d1]  # interleaved but valid
    assert check_precedence(route) is True


def test_capacity_within_limit():
    p1, d1 = _make_pair(1)
    route = [p1, d1]
    assert check_capacity(route, max_capacity=2) is True


def test_capacity_exceeded():
    p1, d1 = _make_pair(1)
    p2, d2 = _make_pair(2)
    p3, d3 = _make_pair(3)
    route = [p1, p2, p3, d1, d2, d3]  # load peaks at 3
    assert check_capacity(route, max_capacity=2) is False


def test_capacity_drops_after_delivery():
    p1, d1 = _make_pair(1)
    p2, d2 = _make_pair(2)
    p3, d3 = _make_pair(3)
    route = [p1, d1, p2, d2, p3, d3]  # load never exceeds 1
    assert check_capacity(route, max_capacity=1) is True
