# API Reference

## config.py

### `load_config(config_path=None, cli_overrides=None) -> AppConfig`

Load configuration from TOML file with optional CLI overrides.

- **config_path**: path to config.toml (default: project root)
- **cli_overrides**: dict with keys `time_limit`, `num_orders` to override
- **Returns**: `AppConfig` dataclass with computed values

### `AppConfig` (dataclass)

| Attribute | Type | Description |
|-----------|------|-------------|
| `velocity` | float | Vehicle speed in m/s |
| `prepare_time` | int | Preparation time in seconds |
| `capacity` | int | Max orders per vehicle |
| `num_orders` | int | Orders to process |
| `time_limit` | int | Solver timeout (seconds) |
| `drop_penalty` | int | Node drop penalty |
| `time_slack` | int | Time dimension slack (seconds) |
| `max_time` | int | Max cumulative time (seconds) |
| `depot_time_window` | int | Depot latest time (seconds) |
| `restaurant_dir` | str | Absolute path to restaurants file |
| `vehicles_dir` | str | Absolute path to vehicles file |
| `order_dir` | str | Absolute path to orders file |
| `search_parameters` | RoutingSearchParameters | OR-Tools protobuf object |

---

## PDP.py

### `check_precedence(route) -> bool`

Verify that every pickup appears before its paired delivery in a route.

- **route**: list of `PickupNode`/`DeliveryNode` objects
- **Returns**: `True` if all precedence constraints are satisfied

### `check_capacity(route, max_capacity) -> bool`

Verify that cumulative load never exceeds capacity along a route.

- **route**: list of nodes (demand +1 for pickup, -1 for delivery)
- **max_capacity**: maximum allowed load at any point
- **Returns**: `True` if capacity is never exceeded

### `build_requests(orders, restaurants, prepare_time) -> list[tuple]`

Convert raw dataset into pickup-delivery node pairs.

- **orders**: list of `Ds` objects
- **restaurants**: list of `restaurant` objects (1-indexed IDs)
- **prepare_time**: meal preparation time in seconds
- **Returns**: list of `(PickupNode, DeliveryNode)` tuples with `.pair` set

---

## pdp_ortools.py

### `build_distance_matrix(nodes) -> list[list[int]]`

Compute all-pairs Haversine distances.

- **nodes**: list of Node objects with `.lat`, `.lon`
- **Returns**: 2D integer matrix (distances in meters)

### `build_time_matrix(distance_matrix, velocity) -> list[list[int]]`

Convert distance matrix to travel time matrix.

- **distance_matrix**: 2D list (meters)
- **velocity**: float (m/s)
- **Returns**: 2D integer matrix (seconds)

### `create_data_model(orders, restaurants, drivers, prepare_time, velocity, capacity, depot_time_window=86400) -> DataModel`

Build the complete data model for OR-Tools.

- **depot_time_window**: depot latest time in seconds (default 24h)
- **Returns**: `DataModel` dataclass with attributes:
  - `distance_matrix`, `time_matrix`: 2D int lists
  - `time_windows`: list of (earliest, latest) tuples
  - `pickups_deliveries`: list of (pickup_idx, delivery_idx)
  - `demands`: list of int (+1, -1, 0)
  - `vehicle_capacities`: list of int
  - `num_vehicles`: int
  - `depot`: 0
  - `nodes`: list of Node objects

### `solve_pdp(data, time_limit=30, search_parameters=None, time_slack=3600, max_time=86400, drop_penalty=100000) -> tuple`

Run the OR-Tools routing solver.

- **data**: `DataModel` from `create_data_model()`
- **time_limit**: solver timeout in seconds (used only if `search_parameters` is None)
- **search_parameters**: pre-built `RoutingSearchParameters` protobuf object (from `config.py`)
- **time_slack**: time dimension slack in seconds
- **max_time**: max cumulative time in seconds
- **drop_penalty**: penalty for dropping a node
- **Returns**: `(manager, routing, solution)` tuple. `solution` is `None` if infeasible.

### `extract_routes(data, manager, routing, solution) -> list[Route]`

Extract vehicle routes from solution.

- **Returns**: list of `Route` dataclasses with attributes: `vehicle_id`, `route` (node indices), `distance` (meters), `time` (seconds). Only non-empty routes included.

### `print_solution(data, manager, routing, solution)`

Print formatted routes to stdout with P/D notation and arrival times.

---

## model/node.py

### `Node(node_id, lat, lon, demand, earliest, latest, service_time, order_id)`

Base class. Attributes: `node_id`, `lat`, `lon`, `demand`, `earliest`, `latest`, `service_time`, `order_id`, `pair`.

Methods: `getLatitude()`, `getLongitude()`.

### `PickupNode(Node)`

`is_pickup = True`. Represents a restaurant pickup.

### `DeliveryNode(Node)`

`is_pickup = False`. Represents a customer delivery.

---

## model/order.py

### `Ds(orderId, timeRequest, restaurantId, vehicle, L, x, y, deadline)`

Order from dataset.

Methods: `getId()`, `get_timeRequest()`, `getRestaurantId()`, `getLatitude()`, `getLongitude()`, `getDeadLine()`, `getDriverId()`, `setDriverId(id)`.

---

## model/restaurant.py

### `restaurant(restaurant_id, restaurant_x, restaurant_y, prepareTime=0.0)`

Methods: `getId()`, `getLatitude()`, `getLongitude()`, `setPrepareTime(time)`, `setOrderId(id)`, `getOrderId()`.

---

## model/driver.py

### `driver(driver_id, driver_x, driver_y, velocity=0.0)`

Methods: `get_id()`, `getLatitude()`, `getLongitude()`, `getVelocity()`, `setVelocity(v)`, `getCurrentCapacity()`, `setCurrentCapacity(c)`, `setLatitude(lat)`, `setLongitude(lon)`.

---

## Math/distance.py

### `distance(lat1, lon1, lat2, lon2) -> float`

Haversine great-circle distance between two coordinates.

- **Returns**: distance in **kilometers**
