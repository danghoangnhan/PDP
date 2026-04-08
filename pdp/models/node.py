from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Node:
    """A pickup or delivery node in a PDP route."""

    node_id: int
    lat: float
    lon: float
    demand: int
    earliest: int
    latest: int
    service_time: int
    order_id: int
    is_pickup: bool = True
    pair: Optional['Node'] = field(default=None, repr=False)
