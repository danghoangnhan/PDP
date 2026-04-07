class Node:
    """Base class for pickup/delivery nodes in a PDP route."""

    def __init__(self, node_id, lat, lon, demand, earliest, latest, service_time, order_id):
        self.node_id = node_id
        self.lat = lat
        self.lon = lon
        self.demand = demand        # +1 for pickup, -1 for delivery
        self.earliest = earliest    # earliest service start (seconds)
        self.latest = latest        # latest service start (seconds)
        self.service_time = service_time  # time spent at node (seconds)
        self.order_id = order_id    # links pickup-delivery pair
        self.pair = None            # reference to paired node

    def getLatitude(self):
        return self.lat

    def getLongitude(self):
        return self.lon


class PickupNode(Node):
    is_pickup = True


class DeliveryNode(Node):
    is_pickup = False
