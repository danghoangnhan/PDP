import setting
from model.driver import Driver
from model.order import Order
from model.restaurant import Restaurant


def _read_tsv(filepath):
    rows = []
    with open(filepath) as f:
        for line in f:
            rows.append(line.strip().split("\t"))
    return rows


def importRestaurantValue():
    return [Restaurant(int(row[0]), float(row[1]), float(row[2]))
            for row in _read_tsv(setting.restaurant_dir)]


def importVehicleValue():
    return [Driver(int(row[0]), float(row[1]), float(row[2]))
            for row in _read_tsv(setting.vehicles_dir)]


def importOrderValue():
    orders = []
    with open(setting.order_dir) as f:
        for line_num, line in enumerate(f):
            value = line.strip().split("_")
            orders.append(Order(
                order_id=line_num,
                time_request=int(value[1]),
                restaurant_id=int(value[5]),
                latitude=float(value[3]),
                longitude=float(value[4]),
                deadline=int(value[6]),
            ))
    return orders
