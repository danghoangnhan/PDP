# API Reference

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

### `create_data_model(orders, restaurants, drivers, prepare_time, velocity, capacity) -> dict`

Build the complete data model for OR-Tools.

- **Returns**: dict with keys:
  - `distance_matrix`, `time_matrix`: 2D int lists
  - `time_windows`: list of (earliest, latest) tuples
  - `pickups_deliveries`: list of (pickup_idx, delivery_idx)
  - `demands`: list of int (+1, -1, 0)
  - `vehicle_capacities`: list of int
  - `num_vehicles`: int
  - `depot`: 0
  - `nodes`: list of Node objects

### `solve_pdp(data, time_limit=30) -> tuple`

Run the OR-Tools routing solver.

- **data**: dict from `create_data_model()`
- **time_limit**: solver timeout in seconds
- **Returns**: `(manager, routing, solution)` tuple. `solution` is `None` if infeasible.

### `extract_routes(data, manager, routing, solution) -> list[dict]`

Extract vehicle routes from solution.

- **Returns**: list of dicts with keys: `vehicle_id`, `route` (node indices), `distance` (meters), `time` (seconds). Only non-empty routes included.

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
