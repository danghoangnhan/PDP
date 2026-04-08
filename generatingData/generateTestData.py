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
    R, x_R, y_R = [], [], []
    for row in _read_tsv(setting.restaurant_dir):
        r = Restaurant(int(row[0]), float(row[1]), float(row[2]))
        R.append(r)
        x_R.append(r.latitude)
        y_R.append(r.longitude)
    return R, x_R, y_R


def importVehicleValue():
    V, x_V, y_V = [], [], []
    for row in _read_tsv(setting.vehicles_dir):
        v = Driver(int(row[0]), float(row[1]), float(row[2]))
        V.append(v)
        x_V.append(v.latitude)
        y_V.append(v.longitude)
    return V, x_V, y_V


def importOrderValue():
    D_0, D_x, D_y = [], [], []
    with open(setting.order_dir) as f:
        for lineNumb, line in enumerate(f):
            value = line.strip().split("_")
            o = Order(
                order_id=lineNumb,
                time_request=int(value[1]),
                restaurant_id=int(value[5]),
                latitude=float(value[3]),
                longitude=float(value[4]),
                deadline=int(value[6]),
            )
            D_0.append(o)
            D_x.append(o.latitude)
            D_y.append(o.longitude)
    return D_0, D_x, D_y
