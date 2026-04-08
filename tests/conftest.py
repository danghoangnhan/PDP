import pytest
from model.node import Node
from model.driver import Driver


@pytest.fixture
def sample_pickup_delivery_pair():
    """A single paired pickup (restaurant) and delivery (customer) node."""
    p = Node(
        node_id=1, lat=41.6427, lon=-91.5055, demand=1,
        earliest=0, latest=600, service_time=300, order_id=10,
        is_pickup=True,
    )
    d = Node(
        node_id=2, lat=41.6637, lon=-91.5133, demand=-1,
        earliest=100, latest=1200, service_time=0, order_id=10,
        is_pickup=False,
    )
    p.pair = d
    d.pair = p
    return p, d


@pytest.fixture
def sample_driver():
    """A driver at a known location with velocity."""
    return Driver(id=1, latitude=41.6356, longitude=-91.5119, velocity=5.56)
