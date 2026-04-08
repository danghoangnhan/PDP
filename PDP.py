
from model.node import Node


def check_precedence(route):
    """Return True if every pickup appears before its paired delivery in the route."""
    picked_up = set()
    for node in route:
        if node.is_pickup:
            picked_up.add(node.order_id)
        else:
            if node.order_id not in picked_up:
                return False
    return True


def check_capacity(route, max_capacity):
    """Return True if cumulative load never exceeds max_capacity along the route."""
    load = 0
    for node in route:
        load += node.demand
        if load > max_capacity:
            return False
    return True


def build_requests(orders, restaurants, prepare_time):
    """Convert orders + restaurants into list of (pickup Node, delivery Node) pairs."""
    requests = []
    for idx, order in enumerate(orders):
        rest = restaurants[order.restaurant_id - 1]
        node_base_id = idx * 2

        pickup = Node(
            node_id=node_base_id + 1,
            lat=rest.latitude,
            lon=rest.longitude,
            demand=1,
            earliest=order.time_request,
            latest=order.time_request + prepare_time,
            service_time=prepare_time,
            order_id=idx,
            is_pickup=True,
        )

        delivery = Node(
            node_id=node_base_id + 2,
            lat=order.latitude,
            lon=order.longitude,
            demand=-1,
            earliest=order.time_request,
            latest=order.time_request + order.deadline,
            service_time=0,
            order_id=idx,
            is_pickup=False,
        )

        pickup.pair = delivery
        delivery.pair = pickup
        requests.append((pickup, delivery))

    return requests
