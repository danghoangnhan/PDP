# OR-Tools PDP Solver

## Overview

The solver uses [Google OR-Tools](https://developers.google.com/optimization) constraint solver to find optimal vehicle routes for the Pick-up and Delivery Problem (PDP).

Located in `pdp_ortools.py`.

## Solver Pipeline

### 1. Build Distance Matrix

`build_distance_matrix(nodes)` computes all-pairs Haversine distances:
- Input: list of nodes (depot + pickups + deliveries)
- Output: 2D integer matrix (distances in **meters**)
- Uses `Math.distance.distance()` (returns km), multiplied by 1000

### 2. Build Time Matrix

`build_time_matrix(distance_matrix, velocity)` converts distances to travel times:
- Input: distance matrix (meters), velocity (m/s)
- Output: 2D integer matrix (times in **seconds**)

### 3. Create Data Model

`create_data_model(orders, restaurants, drivers, prepare_time, velocity, capacity, depot_time_window=86400)`:
- Creates depot at centroid of all driver locations
- Builds node list: `[depot, P0, D0, P1, D1, ...]`
- Computes distance and time matrices
- Sets time windows (converted from minutes to seconds)
- Returns `DataModel` dataclass consumed by `solve_pdp()`

### 4. Solve

`solve_pdp(data, time_limit=30, search_parameters=None, time_slack=3600, max_time=86400, drop_penalty=100000)` configures and runs the OR-Tools routing solver:

#### Dimensions

| Dimension | Callback | Slack | Max | Purpose |
|-----------|----------|-------|-----|---------|
| Distance | `distance_callback` | -- | -- | Arc cost (objective) |
| Time | `time_callback` | 3600s | 86400s | Time windows + precedence |
| Capacity | `demand_callback` | 0 | per-vehicle | Load tracking |

#### Constraints

```python
# For each pickup-delivery pair:
routing.AddPickupAndDelivery(pickup_index, delivery_index)

# Same vehicle must serve both:
routing.VehicleVar(pickup) == routing.VehicleVar(delivery)

# Pickup must happen before delivery:
time_dimension.CumulVar(pickup) <= time_dimension.CumulVar(delivery)
```

#### Time Windows

Each node has `[earliest, latest]` bounds set via:
```python
time_dimension.CumulVar(index).SetRange(earliest, latest)
```

#### Dropped Orders

Infeasible orders are handled with disjunction penalties:
```python
routing.AddDisjunction([node_index], penalty=100000)
```

This allows the solver to drop orders that cannot be served within constraints rather than failing entirely.

#### Search Strategy

All search parameters are configurable via `solver_params.json` (protobuf JSON format). See [Configuration](Configuration) for the full list of available algorithms.

| Phase | Default Strategy | Configurable via |
|-------|----------|-----------------|
| Initial solution | `PATH_CHEAPEST_ARC` | `firstSolutionStrategy` in solver_params.json |
| Improvement | `GUIDED_LOCAL_SEARCH` | `localSearchMetaheuristic` in solver_params.json |
| Time limit | 10s | `time_limit` in config.toml or `--time-limit` CLI flag |
| CP-SAT accelerator | Enabled | `useCpSat` in solver_params.json |

### 5. Extract Results

`extract_routes(data, manager, routing, solution)` returns:
```python
[{
    'vehicle_id': int,
    'route': [node_indices],  # including depot at start/end
    'distance': int,          # meters
    'time': int,              # seconds
}]
```

`print_solution()` outputs routes with `P{id}`/`D{id}` notation and arrival times.

## Performance

| Orders | Vehicles | Time Limit | Active Vehicles | Orders Served | Distance |
|--------|----------|------------|-----------------|---------------|----------|
| 50 | 30 | 10s | 5 | 47/50 | 133 km |

Solver scales well for batches up to ~200 orders. For larger instances, increase `time_limit`.
