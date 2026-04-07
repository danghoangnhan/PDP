# PDP - Pick-up and Delivery Problem Solver

A Pick-up and Delivery Problem (PDP) solver for restaurant meal delivery routing, powered by [Google OR-Tools](https://developers.google.com/optimization).

Based on the paper:
> Ulmer, M. W., Thomas, B. W., Campbell, A. M., & Woyak, N. (2020). *The Restaurant Meal Delivery Problem: Dynamic Pickup and Delivery with Deadlines and Random Ready Times.* Transportation Science. https://doi.org/10.1287/trsc.2020.1000

## Problem Description

Given a set of **restaurants** (pickup locations), **customers** (delivery locations), and **vehicles** (drivers), the solver finds optimal routes that:

- **Pair** each pickup (restaurant) with its corresponding delivery (customer)
- **Enforce precedence** -- pickup always occurs before delivery
- **Respect capacity** -- vehicles never exceed their load limit
- **Minimize delay** -- orders are delivered within their time windows
- Use **Guided Local Search** metaheuristic for route optimization

## Project Structure

```
PDP/
├── main_pdp.py              # Entry point
├── pdp_ortools.py           # OR-Tools solver (distance matrix, routing, solution)
├── PDP.py                   # Constraint validation & data conversion
├── setting.py               # Data file paths
├── model/
│   ├── node.py              # PickupNode / DeliveryNode with pairing
│   ├── driver.py            # Vehicle model
│   ├── order.py             # Order model (Ds)
│   └── restaurant.py        # Restaurant model
├── Math/
│   ├── distance.py          # Haversine distance (km)
│   └── Geometry.py          # Circle-line intersection
├── generatingData/
│   └── generateTestData.py  # Dataset loader (TSV/custom format)
├── data/rawData/
│   ├── restaurants.txt      # 110 restaurants (lat, lon)
│   ├── vehicles.txt         # 30 drivers (lat, lon)
│   └── 180_0.txt            # 719,660 orders
├── tests/                   # 16 pytest tests
└── paper/                   # Reference paper (Ulmer et al., 2020)
```

## Quick Start

### Install

```bash
# Requires Python >= 3.12
uv sync
```

### Run

```bash
python main_pdp.py
```

Example output:

```
PDP Solver (OR-Tools)
Orders: 50, Vehicles: 30, Restaurants: 110

Vehicle 23: Depot -> P1 -> P0 -> D0 -> D1 -> P35 -> D35 -> Depot
Vehicle 26: Depot -> P2 -> P9 -> D2 -> D9 -> P10 -> D10 -> Depot
...

Total distance: 133206m
Active vehicles: 5 / 30
Orders served: 47 / 50
```

### Test

```bash
python -m pytest tests/ -v
```

## Configuration

Edit `main_pdp.py` to change parameters:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `velocity` | 20 km/h | Vehicle travel speed |
| `prepare_time` | 600s | Meal preparation time |
| `capacity` | 10 | Max orders per vehicle |
| `num_orders` | 50 | Orders to process |
| `time_limit` | 10s | Solver time limit |

## How It Works

1. **Data Loading** -- Reads restaurants, drivers, and orders from `data/rawData/`
2. **Node Conversion** -- Each order becomes a `PickupNode` (restaurant) + `DeliveryNode` (customer) pair via `build_requests()`
3. **Distance Matrix** -- All-pairs Haversine distances computed between nodes
4. **OR-Tools Solver** -- Configures routing model with:
   - Distance and time dimensions
   - `AddPickupAndDelivery()` for each order pair
   - Same-vehicle constraints (pickup and delivery by same driver)
   - Time window constraints on each node
   - Capacity constraints per vehicle
   - Disjunction penalties to allow dropping infeasible orders
5. **Solution** -- `PATH_CHEAPEST_ARC` initial solution + `GUIDED_LOCAL_SEARCH` improvement

## Constraints

| Constraint | Implementation |
|------------|---------------|
| Precedence | `AddPickupAndDelivery()` + time ordering |
| Pairing | Same-vehicle constraint via `VehicleVar` |
| Capacity | `AddDimensionWithVehicleCapacity()` |
| Time Windows | `CumulVar().SetRange(earliest, latest)` |
| Dropped Orders | `AddDisjunction()` with penalty |

## Dataset

- **110 restaurants** in Iowa City area (lat/lon coordinates)
- **30 vehicles/drivers** with starting positions
- **719,660 orders** with request time, restaurant ID, customer location, and deadline

Distance is calculated using the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula).

## References

- Ulmer, M. W., Thomas, B. W., Campbell, A. M., & Woyak, N. (2020). The Restaurant Meal Delivery Problem: Dynamic Pickup and Delivery with Deadlines and Random Ready Times. *Transportation Science*.
- [Google OR-Tools Vehicle Routing](https://developers.google.com/optimization/routing)
- [OR-Tools Pickup and Delivery](https://developers.google.com/optimization/routing/pickup_delivery)
