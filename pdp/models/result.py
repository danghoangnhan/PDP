from dataclasses import dataclass, field
from enum import Enum

from pdp.models.route import Route


class SolverStatus(Enum):
    """Outcome status from a solver run."""

    OPTIMAL = "optimal"
    FEASIBLE = "feasible"
    NO_SOLUTION = "no_solution"
    TIMEOUT = "timeout"
    ERROR = "error"


@dataclass
class SolveResult:
    """Standard result returned by all solver implementations."""

    status: SolverStatus
    routes: list[Route] = field(default_factory=list)
    total_distance: int = 0
    total_time: int = 0
    dropped_nodes: list[int] = field(default_factory=list)
    solver_wall_time: float = 0.0
    objective_value: int | None = None
