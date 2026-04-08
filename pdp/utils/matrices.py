"""Matrix construction utilities for PDP solvers."""

from pdp.utils.distance import haversine_km


def build_distance_matrix(nodes):
    """Compute all-pairs Haversine distance matrix.

    Returns a 2D list of integers (distances in meters).
    """
    n = len(nodes)
    matrix = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            d = int(
                round(
                    haversine_km(nodes[i].lat, nodes[i].lon, nodes[j].lat, nodes[j].lon)
                    * 1000
                )
            )
            matrix[i][j] = d
            matrix[j][i] = d
    return matrix


def build_time_matrix(distance_matrix, velocity):
    """Convert distance matrix (meters) to time matrix (seconds) given velocity in m/s.

    Returns a 2D list of integers.
    """
    n = len(distance_matrix)
    return [
        [
            int(round(distance_matrix[i][j] / velocity)) if velocity > 0 else 0
            for j in range(n)
        ]
        for i in range(n)
    ]
