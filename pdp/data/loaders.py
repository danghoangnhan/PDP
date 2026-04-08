"""Data loaders for PDP datasets. All functions take explicit file paths."""

from pathlib import Path

from pdp.models.order import Order
from pdp.models.driver import Driver
from pdp.models.restaurant import Restaurant


def _read_tsv(filepath: Path) -> list[list[str]]:
    rows = []
    with open(filepath) as f:
        for line in f:
            rows.append(line.strip().split("\t"))
    return rows


def load_restaurants(filepath: Path) -> list[Restaurant]:
    """Load restaurants from a tab-separated file."""
    return [Restaurant(int(row[0]), float(row[1]), float(row[2]))
            for row in _read_tsv(filepath)]


def load_drivers(filepath: Path) -> list[Driver]:
    """Load drivers from a tab-separated file."""
    return [Driver(int(row[0]), float(row[1]), float(row[2]))
            for row in _read_tsv(filepath)]


def load_orders(filepath: Path) -> list[Order]:
    """Load orders from an underscore-delimited file."""
    orders = []
    with open(filepath) as f:
        for line_num, line in enumerate(f):
            value = line.strip().split("_")
            orders.append(Order(
                order_id=line_num,
                time_request=int(value[1]),
                restaurant_id=int(value[5]),
                latitude=float(value[3]),
                longitude=float(value[4]),
                deadline=int(value[6]),
            ))
    return orders
