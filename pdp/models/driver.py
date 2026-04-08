from dataclasses import dataclass


@dataclass
class Driver:
    """A delivery vehicle/driver."""

    id: int
    latitude: float
    longitude: float
    velocity: float = 0.0
    current_capacity: int = 0
