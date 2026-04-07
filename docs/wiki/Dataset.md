# Dataset

## Overview

The dataset represents meal delivery operations in the **Iowa City area** with 110 restaurants, 30 drivers, and 719,660 orders.

All files are in `data/rawData/`.

## Files

### `restaurants.txt` (110 entries)

Tab-separated: `id \t latitude \t longitude`

```
1	41.6427535	-91.5055967
2	41.6587212	-91.531678
3	41.6719283	-91.5737321
```

### `vehicles.txt` (30 entries)

Tab-separated: `id \t latitude \t longitude`

```
1	41.63562541	-91.51196354
2	41.64128623	-91.56508335
3	41.64885944	-91.55320966
```

### `180_0.txt` (719,660 entries)

Underscore-separated: `orderId_timeRequest_restaurantId_latitude_longitude_unknown_deadline`

```
1_1_2_41.66371064_-91.5133373_2_12
1_2_5_41.65839385_-91.50899192_2_15
1_3_5_41.65508284_-91.53274275_75_15
```

| Field | Index | Description |
|-------|-------|-------------|
| `orderId` | 0 | Order identifier |
| `timeRequest` | 1 | Time order was placed (minutes) |
| `restaurantId` | 2 | Restaurant ID (1-indexed) |
| `latitude` | 3 | Customer delivery latitude |
| `longitude` | 4 | Customer delivery longitude |
| `unknown` | 5 | Unused parameter |
| `deadline` | 6 | Delivery deadline (minutes from request) |

## Data Loading

`generatingData/generateTestData.py` provides three import functions:

```python
from generatingData.generateTestData import (
    importRestaurantValue,  # → (list[restaurant], x_coords, y_coords)
    importVehicleValue,     # → (list[driver], x_coords, y_coords)
    importOrderValue,       # → (list[Ds], x_coords, y_coords)
)
```

## Conversion to PDP Nodes

`PDP.build_requests(orders, restaurants, prepare_time)` converts raw data:

| Raw Data | PDP Node | Location | Time Window |
|----------|----------|----------|-------------|
| Restaurant | `PickupNode` | Restaurant lat/lon | `[time_request, time_request + prepare_time]` |
| Customer | `DeliveryNode` | Customer lat/lon | `[time_request, time_request + deadline]` |

## Distance Calculation

Haversine formula (`Math/distance.py`) for great-circle distance between coordinates:

```python
distance(lat1, lon1, lat2, lon2)  # returns kilometers
```

Reference: [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula)

## Reference

Dataset is based on the experimental setup from:

> Ulmer, M. W., Thomas, B. W., Campbell, A. M., & Woyak, N. (2020). *The Restaurant Meal Delivery Problem: Dynamic Pickup and Delivery with Deadlines and Random Ready Times.* Transportation Science.
