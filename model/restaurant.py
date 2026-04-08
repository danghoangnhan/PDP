from dataclasses import dataclass


@dataclass
class Restaurant:
    """A restaurant / pickup location."""

    id: int
    latitude: float
    longitude: float
    prepare_time: float = 0.0
