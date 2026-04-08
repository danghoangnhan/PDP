# Configuration

## Overview

All solver and application parameters are externalized into config files. No code changes are needed to tune the solver.

**Config files:**
- `config.toml` -- Application parameters, solver constants, file paths
- `solver_params.json` -- OR-Tools search strategy (protobuf JSON format)

## config.toml

```toml
[application]
velocity_kmh = 20           # Vehicle speed in km/h
prepare_time_min = 10        # Restaurant preparation time in minutes
capacity = 10               # Max orders per vehicle
num_orders = 50             # Orders to process (0 = all)

[solver]
time_limit = 10             # Solver timeout in seconds
drop_penalty = 100000       # Penalty for dropping a node
time_slack = 3600           # Time dimension slack (seconds)
max_time = 86400            # Max cumulative time (seconds, 24h)
depot_time_window = 86400   # Depot latest time (seconds, 24h)
search_params_file = "solver_params.json"

[paths]
data_dir = "data/rawData"
restaurant_file = "restaurants.txt"
vehicles_file = "vehicles.txt"
order_file = "180_0.txt"
```

### Parameter Reference

| Section | Key | Default | Unit | Description |
|---------|-----|---------|------|-------------|
| application | `velocity_kmh` | 20 | km/h | Vehicle travel speed (converted to m/s internally) |
| application | `prepare_time_min` | 10 | minutes | Restaurant meal preparation time |
| application | `capacity` | 10 | orders | Maximum orders per vehicle |
| application | `num_orders` | 50 | count | Number of orders to process (0 = all) |
| solver | `time_limit` | 10 | seconds | Solver timeout |
| solver | `drop_penalty` | 100000 | -- | Penalty for dropping infeasible orders |
| solver | `time_slack` | 3600 | seconds | Time dimension slack (wait time allowed) |
| solver | `max_time` | 86400 | seconds | Maximum cumulative route time |
| solver | `depot_time_window` | 86400 | seconds | Depot time window upper bound |
| solver | `search_params_file` | solver_params.json | path | OR-Tools search parameters file |

## solver_params.json (OR-Tools Search Strategy)

This file uses OR-Tools' native protobuf JSON format. It is loaded directly by `google.protobuf.json_format.Parse()`.

```json
{
  "firstSolutionStrategy": "PATH_CHEAPEST_ARC",
  "localSearchMetaheuristic": "GUIDED_LOCAL_SEARCH",
  "useCpSat": "BOOL_TRUE",
  "satParameters": {"numWorkers": 0},
  "logSearch": true
}
```

### Available Algorithms

#### First Solution Strategies

How the solver finds an initial feasible solution:

| Strategy | Description |
|----------|-------------|
| `PATH_CHEAPEST_ARC` | Greedy: extend path with cheapest arc (default) |
| `PATH_MOST_CONSTRAINED_ARC` | Extend with most constrained arc |
| `SAVINGS` | Clarke-Wright savings algorithm |
| `PARALLEL_SAVINGS` | Parallel variant of savings |
| `SWEEP` | Sweep algorithm (angle-based) |
| `CHRISTOFIDES` | Christofides algorithm for TSP |
| `BEST_INSERTION` | Best insertion heuristic |
| `PARALLEL_CHEAPEST_INSERTION` | Parallel cheapest insertion |
| `SEQUENTIAL_CHEAPEST_INSERTION` | Sequential cheapest insertion |
| `LOCAL_CHEAPEST_INSERTION` | Local cheapest insertion |
| `LOCAL_CHEAPEST_COST_INSERTION` | Local cheapest cost insertion |
| `GLOBAL_CHEAPEST_ARC` | Global cheapest arc |
| `FIRST_UNBOUND_MIN_VALUE` | Assign minimum values first |

#### Local Search Metaheuristics

How the solver improves the initial solution:

| Metaheuristic | Description |
|---------------|-------------|
| `GUIDED_LOCAL_SEARCH` | Penalizes frequently used features to escape local optima (default) |
| `SIMULATED_ANNEALING` | Probabilistically accepts worse solutions to explore search space |
| `TABU_SEARCH` | Maintains tabu list to prevent cycling |
| `GENERIC_TABU_SEARCH` | Generic variant of tabu search |
| `GREEDY_DESCENT` | Only accepts improving moves (fastest, but easily stuck) |

#### Example: Switching to Simulated Annealing

```json
{
  "firstSolutionStrategy": "SAVINGS",
  "localSearchMetaheuristic": "SIMULATED_ANNEALING",
  "useCpSat": "BOOL_TRUE",
  "satParameters": {"numWorkers": 0},
  "logSearch": true
}
```

### Advanced OR-Tools Parameters

The protobuf JSON file supports 50+ parameters. Key advanced options:

| Field | Type | Description |
|-------|------|-------------|
| `useCpSat` | BOOL_TRUE/BOOL_FALSE | Enable CP-SAT accelerator |
| `satParameters.numWorkers` | int | CPU threads (0 = auto-detect) |
| `logSearch` | bool | Enable solver logging |
| `guidedLocalSearchLambdaCoefficient` | float | GLS penalty coefficient |
| `solutionLimit` | int | Stop after N solutions found |

Full reference: [OR-Tools RoutingSearchParameters](https://developers.google.com/optimization/reference/constraint_solver/routing_parameters/RoutingSearchParameters)

## CLI Overrides

Command-line arguments override config file values:

```bash
# Use default config.toml
python main_pdp.py

# Override time limit and order count
python main_pdp.py --time-limit 30 --num-orders 100

# Use a custom config file
python main_pdp.py --config my_config.toml
```

| Flag | Description |
|------|-------------|
| `--config PATH` | Path to config.toml (default: project root) |
| `--time-limit N` | Solver timeout in seconds |
| `--num-orders N` | Number of orders to process |

## Priority Order

Parameters are resolved in this order (highest priority first):
1. CLI arguments (`--time-limit`, `--num-orders`)
2. `config.toml` values
3. Built-in defaults (in `config.py`)

The solver runs with built-in defaults if no config file exists.

## config.py Module

`load_config(config_path=None, cli_overrides=None) -> AppConfig`

Loads configuration and returns an `AppConfig` dataclass with computed values:
- `velocity` (m/s, computed from `velocity_kmh`)
- `prepare_time` (seconds, computed from `prepare_time_min`)
- `search_parameters` (OR-Tools protobuf object, loaded from JSON)
- Absolute file paths resolved from project root
