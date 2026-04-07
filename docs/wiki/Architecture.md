# Architecture

## Module Overview

```
main_pdp.py          Entry point — orchestrates loading, solving, output
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
                       └── setting.py   File paths
```

## Data Flow

```
Raw Data (TSV files)
    │
    ▼
generateTestData.import*()  →  model objects (Ds, restaurant, driver)
    │
    ▼
build_requests()  →  (PickupNode, DeliveryNode) pairs
    │
    ▼
create_data_model()  →  OR-Tools data dict
    │                    ├── distance_matrix (meters, int)
    │                    ├── time_matrix (seconds, int)
    │                    ├── time_windows [(earliest, latest)]
    │                    ├── pickups_deliveries [(p_idx, d_idx)]
    │                    ├── demands [+1 pickup, -1 delivery]
    │                    └── vehicle_capacities [cap] * num_vehicles
    ▼
solve_pdp()  →  (manager, routing, solution)
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
