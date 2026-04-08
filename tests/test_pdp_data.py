# tests/test_pdp_data.py
from PDP import build_requests
from model.order import Order
from model.restaurant import Restaurant


def test_build_requests_creates_paired_nodes():
    orders = [
        Order(order_id=0, time_request=1, restaurant_id=2,
              latitude=41.6637, longitude=-91.5133, deadline=12),
    ]
    restaurants = [
        Restaurant(1, 41.6427, -91.5055),
        Restaurant(2, 41.6587, -91.5316),
    ]
    requests = build_requests(orders, restaurants, prepare_time=600)
    assert len(requests) == 1

    pickup, delivery = requests[0]
    assert pickup.is_pickup is True
    assert delivery.is_pickup is False
    assert pickup.order_id == delivery.order_id
    assert pickup.pair is delivery
    assert delivery.pair is pickup
    assert pickup.lat == 41.6587
    assert pickup.lon == -91.5316
    assert delivery.lat == 41.6637
    assert delivery.lon == -91.5133


def test_build_requests_pickup_time_windows():
    orders = [
        Order(order_id=0, time_request=10, restaurant_id=1,
              latitude=41.66, longitude=-91.51, deadline=15),
    ]
    restaurants = [Restaurant(1, 41.64, -91.50)]
    requests = build_requests(orders, restaurants, prepare_time=600)
    pickup, delivery = requests[0]
    assert pickup.earliest == 10
    assert pickup.latest == 610
    assert delivery.latest == 25


def test_build_requests_multiple_orders():
    orders = [
        Order(order_id=0, time_request=1, restaurant_id=1,
              latitude=41.66, longitude=-91.51, deadline=12),
        Order(order_id=1, time_request=2, restaurant_id=2,
              latitude=41.65, longitude=-91.53, deadline=15),
    ]
    restaurants = [
        Restaurant(1, 41.64, -91.50),
        Restaurant(2, 41.65, -91.52),
    ]
    requests = build_requests(orders, restaurants, prepare_time=600)
    assert len(requests) == 2
    assert requests[0][0].order_id != requests[1][0].order_id
