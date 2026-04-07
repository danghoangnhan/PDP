import copy

from Math.distance import distance
from model.node import PickupNode, DeliveryNode


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
