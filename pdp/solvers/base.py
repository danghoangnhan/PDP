from abc import ABC, abstractmethod

from pdp.config import AppConfig
from pdp.models.data_model import DataModel
from pdp.models.result import SolveResult


class SolverBase(ABC):
    """Abstract base for PDP solvers."""

    def __init__(self, config: AppConfig):
        self._config = config

    @abstractmethod
    def solve(self, data: DataModel) -> SolveResult:
        """Solve the PDP instance described by data.

        Parameters
        ----------
        data : DataModel
            Fully constructed problem instance.

        Returns
        -------
        SolveResult
            Standardized result with status, routes, and metrics.
        """
        ...

    @property
    def name(self) -> str:
        """Human-readable solver name for logging."""
        return self.__class__.__name__
