# tests/test_pdp_data.py
from PDP import build_requests
from model.order import Ds
from model.restaurant import restaurant


def test_build_requests_creates_paired_nodes():
    orders = [
        Ds(orderId=0, timeRequest=1, restaurantId=2, vehicle=0, L=0,
           x=41.6637, y=-91.5133, deadline=12),
    ]
    restaurants = [
        restaurant(1, 41.6427, -91.5055),
        restaurant(2, 41.6587, -91.5316),
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
        Ds(orderId=0, timeRequest=10, restaurantId=1, vehicle=0, L=0,
           x=41.66, y=-91.51, deadline=15),
    ]
    restaurants = [restaurant(1, 41.64, -91.50)]
    requests = build_requests(orders, restaurants, prepare_time=600)
    pickup, delivery = requests[0]
    assert pickup.earliest == 10
    assert pickup.latest == 610
    assert delivery.latest == 25


def test_build_requests_multiple_orders():
    orders = [
        Ds(0, 1, 1, 0, 0, 41.66, -91.51, 12),
        Ds(1, 2, 2, 0, 0, 41.65, -91.53, 15),
    ]
    restaurants = [
        restaurant(1, 41.64, -91.50),
        restaurant(2, 41.65, -91.52),
    ]
    requests = build_requests(orders, restaurants, prepare_time=600)
    assert len(requests) == 2
    assert requests[0][0].order_id != requests[1][0].order_id
