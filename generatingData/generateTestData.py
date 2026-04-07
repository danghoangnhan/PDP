import setting
from model import driver, order, restaurant


def _read_tsv(filepath):
    rows = []
    with open(filepath) as f:
        for line in f:
            rows.append(line.strip().split("\t"))
    return rows


def importRestaurantValue():
    R, x_R, y_R = [], [], []
    for row in _read_tsv(setting.restaurant_dir):
        r = restaurant.restaurant(int(row[0]), float(row[1]), float(row[2]))
        R.append(r)
        x_R.append(r.xPosition)
        y_R.append(r.yPosition)
    return R, x_R, y_R


def importVehicleValue():
    V, x_V, y_V = [], [], []
    for row in _read_tsv(setting.vehicles_dir):
        v = driver.driver(int(row[0]), float(row[1]), float(row[2]))
        V.append(v)
        x_V.append(v.x)
        y_V.append(v.y)
    return V, x_V, y_V


def importOrderValue():
    D_0, D_x, D_y = [], [], []
    with open(setting.order_dir) as f:
        for lineNumb, line in enumerate(f):
            value = line.strip().split("_")
            o = order.Ds(
                lineNumb, int(value[1]), int(value[5]),
                0, 0, float(value[3]), float(value[4]), int(value[6]),
            )
            D_0.append(o)
            D_x.append(o.x)
            D_y.append(o.y)
    return D_0, D_x, D_y
