# PDP - Pick-up and Delivery Problem Solver

An extensible Pick-up and Delivery Problem (PDP) solver for restaurant meal delivery routing, with support for multiple algorithms and benchmarking.

Built on [Google OR-Tools](https://developers.google.com/optimization), with a pluggable architecture for custom solvers.

## Features

- **Multi-algorithm** -- Switch between OR-Tools strategies or plug in custom solvers (GA, RL, branch-and-price)
- **Configurable** -- All parameters in `config.toml`, search strategies in `solver_params.json` (OR-Tools protobuf JSON)
- **Benchmarking** -- Compare algorithms across standard VRP instances and custom real-world datasets
- **CLI interface** -- Override parameters from the command line (`--time-limit`, `--num-orders`, `--config`)
- **Zero extra dependencies** -- Config uses Python 3.12+ stdlib `tomllib`; OR-Tools protobuf handles solver params natively

## Supported Algorithms

### OR-Tools Strategies (available now)

| Phase | Strategy | Description |
|-------|----------|-------------|
| Initial Solution | `PATH_CHEAPEST_ARC` | Greedy cheapest arc extension (default) |
| | `SAVINGS` | Clarke-Wright savings |
| | `PARALLEL_CHEAPEST_INSERTION` | Parallel cheapest insertion |
| | `LOCAL_CHEAPEST_INSERTION` | Local cheapest insertion |
| | `CHRISTOFIDES` | Christofides TSP heuristic |
| | `SWEEP` | Angle-based sweep |
| Metaheuristic | `GUIDED_LOCAL_SEARCH` | Penalizes features to escape local optima (default) |
| | `SIMULATED_ANNEALING` | Probabilistic acceptance of worse solutions |
| | `TABU_SEARCH` | Tabu list prevents cycling |
| | `GREEDY_DESCENT` | Only accepts improving moves |

Switch algorithms by editing `solver_params.json` -- no code changes required. See [Configuration wiki](https://github.com/danghoangnhan/PDP/wiki/Configuration) for the full list.

### Planned Custom Solvers

| Solver | Status |
|--------|--------|
| Genetic Algorithm (GA) | Planned |
| Reinforcement Learning (RL) | Planned |
| Branch-and-Price | Planned |

## Benchmarks

### Datasets

| Dataset | Type | Status |
|---------|------|--------|
| Iowa City meal delivery (Ulmer et al.) | Real-world | Available |
| Solomon VRPTW instances | Standard benchmark | Planned |
| Li & Lim PDPTW instances | Standard benchmark | Planned |
| Custom real-world datasets | User-provided | Supported via config |

### Current Results (Iowa City)

| Orders | Vehicles | Time Limit | Active Vehicles | Orders Served | Distance |
|--------|----------|------------|-----------------|---------------|----------|
| 50 | 30 | 10s | 5 | 47/50 | 133 km |

## Quick Start

### Install

```bash
# Requires Python >= 3.12
uv sync
```

### Run

```bash
# Default config
python main_pdp.py

# Override parameters
python main_pdp.py --time-limit 30 --num-orders 100

# Custom config file
python main_pdp.py --config my_config.toml
```

### Test

```bash
python -m pytest tests/ -v   # 22 tests
```

## Configuration

All parameters live in two files:

- **`config.toml`** -- Application and solver parameters (velocity, capacity, time limits, penalties)
- **`solver_params.json`** -- OR-Tools search strategy (protobuf JSON, loaded natively by OR-Tools)

```toml
# config.toml
[application]
velocity_kmh = 20
prepare_time_min = 10
capacity = 10
num_orders = 50

[solver]
time_limit = 10
drop_penalty = 100000
search_params_file = "solver_params.json"
```

```json
// solver_params.json
{
  "firstSolutionStrategy": "PATH_CHEAPEST_ARC",
  "localSearchMetaheuristic": "GUIDED_LOCAL_SEARCH",
  "useCpSat": "BOOL_TRUE",
  "logSearch": true
}
```

Priority: CLI args > config.toml > built-in defaults. See [Configuration wiki](https://github.com/danghoangnhan/PDP/wiki/Configuration) for full reference.

## Project Structure

```
PDP/
├── main_pdp.py              # Entry point (argparse CLI)
├── config.py                # Config loader (TOML + protobuf JSON)
├── config.toml              # Application & solver parameters
├── solver_params.json       # OR-Tools search strategy
├── pdp_ortools.py           # OR-Tools solver
├── PDP.py                   # Constraint validation & data conversion
├── setting.py               # Data file paths
├── model/
│   ├── node.py              # Node dataclass (pickup/delivery)
│   ├── driver.py            # Driver dataclass
│   ├── order.py             # Order dataclass
│   └── restaurant.py        # Restaurant dataclass
├── Math/
│   └── distance.py          # Haversine distance
├── generatingData/
│   └── generateTestData.py  # Dataset loader
├── data/rawData/            # Iowa City dataset
├── tests/                   # 22 pytest tests
├── docs/wiki/               # Wiki source pages
└── paper/                   # Reference papers
```

## How It Works

1. **Load config** -- `config.py` reads `config.toml` + `solver_params.json`, applies CLI overrides
2. **Load data** -- Reads restaurants, drivers, and orders from `data/rawData/`
3. **Build nodes** -- Each order becomes a pickup (restaurant) + delivery (customer) pair
4. **Distance matrix** -- All-pairs Haversine distances between nodes
5. **OR-Tools solver** -- Configures routing model with time windows, capacity, pickup-delivery constraints, and disjunction penalties for infeasible orders
6. **Extract routes** -- Returns vehicle routes with distances and times

## Documentation

Full documentation is available on the [GitHub Wiki](https://github.com/danghoangnhan/PDP/wiki):

- [Architecture](https://github.com/danghoangnhan/PDP/wiki/Architecture) -- Module design and data flow
- [Configuration](https://github.com/danghoangnhan/PDP/wiki/Configuration) -- Config files, algorithms, CLI options
- [OR-Tools Solver](https://github.com/danghoangnhan/PDP/wiki/OR-Tools-Solver) -- Solver internals
- [Dataset](https://github.com/danghoangnhan/PDP/wiki/Dataset) -- Data format and structure
- [API Reference](https://github.com/danghoangnhan/PDP/wiki/API-Reference) -- Function and class reference

## References

- Ulmer, M. W., Thomas, B. W., Campbell, A. M., & Woyak, N. (2020). *The Restaurant Meal Delivery Problem: Dynamic Pickup and Delivery with Deadlines and Random Ready Times.* Transportation Science. https://doi.org/10.1287/trsc.2020.1000
- [Google OR-Tools Vehicle Routing](https://developers.google.com/optimization/routing)
- [OR-Tools Pickup and Delivery](https://developers.google.com/optimization/routing/pickup_delivery)
- [Solomon VRPTW Benchmark](http://web.cba.neu.edu/~msolomon/problems.htm)
- [Li & Lim PDPTW Benchmark](https://www.sintef.no/projectweb/top/pdptw/li-lim-benchmark/)
