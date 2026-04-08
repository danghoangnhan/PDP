from dataclasses import dataclass
from typing import Optional


@dataclass
class Order:
    """A delivery order linking a restaurant to a customer location."""

    order_id: int
    time_request: int
    restaurant_id: int
    latitude: float
    longitude: float
    deadline: int
    vehicle: int = 0
    L: int = 0
    driver_id: Optional[int] = None
    arrive_time: int = 0
