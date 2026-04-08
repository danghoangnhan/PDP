import json
import pytest

from config import load_config, DEFAULTS


def test_load_config_defaults():
    """Config loads with sensible defaults when no config file exists."""
    cfg = load_config(config_path="/nonexistent/config.toml")
    assert cfg.velocity == pytest.approx(20 * 1000 / 3600)
    assert cfg.prepare_time == 600
    assert cfg.capacity == 10
    assert cfg.num_orders == 50
    assert cfg.time_limit == 10
    assert cfg.drop_penalty == 100000
    assert cfg.time_slack == 3600
    assert cfg.max_time == 86400
    assert cfg.depot_time_window == 86400


def test_cli_overrides():
    """CLI overrides take precedence over defaults."""
    cfg = load_config(
        config_path="/nonexistent/config.toml",
        cli_overrides={"time_limit": 30, "num_orders": 100},
    )
    assert cfg.time_limit == 30
    assert cfg.num_orders == 100


def test_toml_config_loading(tmp_path):
    """Config loads values from a TOML file."""
    config_file = tmp_path / "config.toml"
    config_file.write_text(
        "[application]\n"
        "velocity_kmh = 30\n"
        "capacity = 20\n"
        "\n"
        "[solver]\n"
        "time_limit = 60\n"
        "drop_penalty = 50000\n"
    )
    cfg = load_config(config_path=str(config_file))
    assert cfg.velocity == pytest.approx(30 * 1000 / 3600)
    assert cfg.capacity == 20
    assert cfg.time_limit == 60
    assert cfg.drop_penalty == 50000
    # Unspecified values fall back to defaults
    assert cfg.prepare_time == 600
    assert cfg.num_orders == 50


def test_search_params_from_json(tmp_path):
    """Search parameters load from protobuf JSON file."""
    sp_file = tmp_path / "sp.json"
    sp_file.write_text(json.dumps({
        "firstSolutionStrategy": "PATH_CHEAPEST_ARC",
        "logSearch": False,
    }))
    config_file = tmp_path / "config.toml"
    config_file.write_text(
        "[solver]\n"
        f'search_params_file = "{sp_file}"\n'
    )
    cfg = load_config(config_path=str(config_file))
    assert cfg.search_parameters.log_search is False


def test_search_params_fallback_without_file():
    """Search parameters fall back to defaults when JSON file is missing."""
    cfg = load_config(config_path="/nonexistent/config.toml")
    assert cfg.search_parameters is not None
    assert cfg.search_parameters.log_search is True


def test_cli_overrides_over_toml(tmp_path):
    """CLI overrides take precedence over TOML values."""
    config_file = tmp_path / "config.toml"
    config_file.write_text(
        "[solver]\n"
        "time_limit = 60\n"
        "\n"
        "[application]\n"
        "num_orders = 200\n"
    )
    cfg = load_config(
        config_path=str(config_file),
        cli_overrides={"time_limit": 5, "num_orders": 10},
    )
    assert cfg.time_limit == 5
    assert cfg.num_orders == 10
