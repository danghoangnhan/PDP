import math

import setting
from data import rawData
from model import driver, order, restaurant


def importRestaurantValue():
    R: list = []
    x_R: list = []
    y_R: list = []
    with open(setting.restaurant_dir) as openfileobject:
        for line in openfileobject:
            if line.__contains__("\n"):
                line = line.replace("\n", "")
            value = line.split("\t")
            restaurantInfo = restaurant.restaurant(
                int(value[0]), float(value[1]), float(value[2])
            )
            R.append(restaurantInfo)
            x_R.append(restaurantInfo.xPosition)
            y_R.append(restaurantInfo.yPosition)
    return R, x_R, y_R


def importVehicleValue():
    V: list = []
    x_V: list = []
    y_V: list = []

    with open(setting.vehicles_dir) as openfileObject:
        for line in openfileObject:
            if line.__contains__("\n"):
                line = line.replace("\n", "")
            value = line.split("\t")
            vehicleInfo = driver.driver(int(value[0]), float(value[1]), float(value[2]))
            V.append(vehicleInfo)
            x_V.append(vehicleInfo.x)
            y_V.append(vehicleInfo.y)
    return V, x_V, y_V


def importOrderValue():
    D_0: list = []
    D_x: list = []
    D_y: list = []
    with open(setting.order_dir) as openFileObject:
        lineNumb: int = 0
        for line in openFileObject:
            if line.__contains__("\n"):
                line = line.replace("\n", "")
            value = line.split("_")
            orderInfo = order.Ds(
                lineNumb,
                int(value[1]),
                int(value[5]),
                0,
                0,
                float(value[3]),
                float(value[4]),
                int(value[6]),
            )
            D_0.append(orderInfo)
            D_x.append(orderInfo.x)
            D_y.append(orderInfo.y)
            lineNumb += 1
    return D_0, D_x, D_y
