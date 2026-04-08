from model.node import Node


def test_pickup_node_attributes():
    p = Node(
        node_id=1, lat=41.66, lon=-91.51, demand=1,
        earliest=0, latest=600, service_time=300, order_id=10,
        is_pickup=True,
    )
    assert p.node_id == 1
    assert p.lat == 41.66
    assert p.lon == -91.51
    assert p.demand == 1
    assert p.earliest == 0
    assert p.latest == 600
    assert p.service_time == 300
    assert p.order_id == 10
    assert p.is_pickup is True
    assert p.pair is None


def test_delivery_node_attributes():
    d = Node(
        node_id=2, lat=41.65, lon=-91.53, demand=-1,
        earliest=100, latest=900, service_time=0, order_id=10,
        is_pickup=False,
    )
    assert d.demand == -1
    assert d.is_pickup is False


def test_pairing():
    p = Node(
        node_id=1, lat=41.66, lon=-91.51, demand=1,
        earliest=0, latest=600, service_time=300, order_id=10,
        is_pickup=True,
    )
    d = Node(
        node_id=2, lat=41.65, lon=-91.53, demand=-1,
        earliest=100, latest=900, service_time=0, order_id=10,
        is_pickup=False,
    )
    p.pair = d
    d.pair = p
    assert p.pair is d
    assert d.pair is p
    assert p.pair.is_pickup is False
    assert d.pair.is_pickup is True
