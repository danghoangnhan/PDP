# Architecture

## Module Overview

```
main_pdp.py          Entry point — orchestrates loading, solving, output
     │
     ├── config.py         Configuration loader (TOML + protobuf JSON)
     │     ├── config.toml         Application & solver parameters
     │     └── solver_params.json  OR-Tools search strategy (protobuf JSON)
     │
     ├── pdp_ortools.py    OR-Tools solver
     │        │
     │        ├── PDP.py           Constraint validation + data conversion
     │        │     └── model/node.py    PickupNode / DeliveryNode
     │        │
     │        └── Math/distance.py  Haversine distance
     │
     └── generatingData/
              └── generateTestData.py   Dataset loader
                       └── setting.py   File paths (delegates to config.py)
```

## Data Flow

```
config.toml + solver_params.json
    │
    ▼
load_config()  →  AppConfig (velocities, limits, search_parameters, paths)
    │
    ▼
Raw Data (TSV files)
    │
    ▼
generateTestData.import*()  →  model objects (Order, Restaurant, Driver)
    │
    ▼
build_requests()  →  (PickupNode, DeliveryNode) pairs
    │
    ▼
create_data_model()  →  DataModel dataclass
    │                    ├── distance_matrix (meters, int)
    │                    ├── time_matrix (seconds, int)
    │                    ├── time_windows [(earliest, latest)]
    │                    ├── pickups_deliveries [(p_idx, d_idx)]
    │                    ├── demands [+1 pickup, -1 delivery]
    │                    └── vehicle_capacities [cap] * num_vehicles
    ▼
solve_pdp(data, search_parameters, ...)  →  (manager, routing, solution)
    │
    ▼
extract_routes() / print_solution()
```

## Models

### Node (`model/node.py`)

Base class for route nodes. Two subclasses:

| Class | `is_pickup` | `demand` | Purpose |
|-------|-------------|----------|---------|
| `PickupNode` | `True` | `+1` | Restaurant pickup location |
| `DeliveryNode` | `False` | `-1` | Customer delivery location |

Shared attributes: `node_id`, `lat`, `lon`, `earliest`, `latest`, `service_time`, `order_id`, `pair` (reference to paired node).

### Order (`model/order.py`)

Class `Ds` — raw order from dataset:
- `orderId`, `t` (request time), `restaurantId`, `x`/`y` (customer lat/lon), `deadline`

### Restaurant (`model/restaurant.py`)

- `id`, `xPosition`/`yPosition` (lat/lon), `prepareTime`

### Driver (`model/driver.py`)

- `id`, `x`/`y` (position), `velocity`, `currentCapacity`

## Constraint Functions (`PDP.py`)

| Function | Purpose |
|----------|---------|
| `check_precedence(route)` | Verifies every pickup appears before its delivery |
| `check_capacity(route, max_capacity)` | Verifies cumulative load never exceeds capacity |
| `build_requests(orders, restaurants, prepare_time)` | Converts raw data into `(PickupNode, DeliveryNode)` pairs |
