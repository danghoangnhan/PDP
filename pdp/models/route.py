from dataclasses import dataclass


@dataclass
class Route:
    """A single vehicle route extracted from the solver solution."""

    vehicle_id: int
    route: list[int]
    distance: int
    time: int
