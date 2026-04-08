"""Configuration loader for PDP solver.

Loads settings from config.toml (TOML) and solver_params.json (protobuf JSON).
Falls back to built-in defaults if config files are missing.
"""

import os
import tomllib
from dataclasses import dataclass

from ortools.constraint_solver import routing_enums_pb2, pywrapcp
from google.protobuf import json_format


_ROOT = os.path.dirname(os.path.realpath(__file__))

DEFAULTS = {
    "application": {
        "velocity_kmh": 20,
        "prepare_time_min": 10,
        "capacity": 10,
        "num_orders": 50,
    },
    "solver": {
        "time_limit": 10,
        "drop_penalty": 100000,
        "time_slack": 3600,
        "max_time": 86400,
        "depot_time_window": 86400,
        "search_params_file": "solver_params.json",
    },
    "paths": {
        "data_dir": "data/rawData",
        "restaurant_file": "restaurants.txt",
        "vehicles_file": "vehicles.txt",
        "order_file": "180_0.txt",
    },
}


@dataclass
class AppConfig:
    """Resolved application configuration with computed values."""

    # Application (computed to internal units)
    velocity: float          # m/s
    prepare_time: int        # seconds
    capacity: int
    num_orders: int

    # Solver
    time_limit: int
    drop_penalty: int
    time_slack: int
    max_time: int
    depot_time_window: int

    # Paths (absolute)
    restaurant_dir: str
    vehicles_dir: str
    order_dir: str

    # OR-Tools search parameters (protobuf object)
    search_parameters: object


def _deep_merge(base: dict, override: dict) -> dict:
    """Merge override into base, section by section."""
    result = {}
    for key in base:
        if key in override and isinstance(base[key], dict):
            result[key] = {**base[key], **override[key]}
        elif key in override:
            result[key] = override[key]
        else:
            result[key] = {**base[key]} if isinstance(base[key], dict) else base[key]
    for key in override:
        if key not in result:
            result[key] = override[key]
    return result


def _load_search_params(search_params_path: str, time_limit: int):
    """Load OR-Tools RoutingSearchParameters from protobuf JSON file."""
    sp = pywrapcp.DefaultRoutingSearchParameters()
    if search_params_path and os.path.exists(search_params_path):
        with open(search_params_path) as f:
            json_format.Parse(f.read(), sp)
    else:
        sp.first_solution_strategy = (
            routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)
        sp.local_search_metaheuristic = (
            routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH)
        sp.use_cp_sat = pywrapcp.BOOL_TRUE
        sp.sat_parameters.num_workers = 0
        sp.log_search = True
    sp.time_limit.FromSeconds(time_limit)
    return sp


def load_config(config_path: str = None, cli_overrides: dict = None) -> AppConfig:
    """Load configuration from TOML file, with optional CLI overrides.

    Parameters
    ----------
    config_path : str, optional
        Path to config.toml. If None, looks for config.toml next to this file.
    cli_overrides : dict, optional
        Keys like {"time_limit": 30, "num_orders": 100} to override.
    """
    if config_path is None:
        config_path = os.path.join(_ROOT, "config.toml")

    raw = {}
    if os.path.exists(config_path):
        with open(config_path, "rb") as f:
            raw = tomllib.load(f)

    cfg = _deep_merge(DEFAULTS, raw)

    if cli_overrides:
        if "time_limit" in cli_overrides:
            cfg["solver"]["time_limit"] = cli_overrides["time_limit"]
        if "num_orders" in cli_overrides:
            cfg["application"]["num_orders"] = cli_overrides["num_orders"]

    app = cfg["application"]
    solver = cfg["solver"]
    paths = cfg["paths"]

    # Resolve paths
    data_dir = os.path.join(_ROOT, paths["data_dir"])

    # Load OR-Tools search params
    sp_file = solver.get("search_params_file", "")
    sp_path = os.path.join(_ROOT, sp_file) if sp_file else ""
    search_params = _load_search_params(sp_path, solver["time_limit"])

    return AppConfig(
        velocity=app["velocity_kmh"] * 1000 / 3600,
        prepare_time=int(app["prepare_time_min"] * 60),
        capacity=app["capacity"],
        num_orders=app["num_orders"],
        time_limit=solver["time_limit"],
        drop_penalty=solver["drop_penalty"],
        time_slack=solver["time_slack"],
        max_time=solver["max_time"],
        depot_time_window=solver["depot_time_window"],
        restaurant_dir=os.path.join(data_dir, paths["restaurant_file"]),
        vehicles_dir=os.path.join(data_dir, paths["vehicles_file"]),
        order_dir=os.path.join(data_dir, paths["order_file"]),
        search_parameters=search_params,
    )
