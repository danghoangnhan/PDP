from dataclasses import dataclass


@dataclass
class Order:
    """A delivery order linking a restaurant to a customer location."""

    order_id: int
    time_request: int
    restaurant_id: int
    latitude: float
    longitude: float
    deadline: int
