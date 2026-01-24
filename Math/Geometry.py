from numpy import ones, vstack
from numpy.linalg import lstsq
import numpy as np
import matplotlib.pyplot as plt
from shapely.geometry import LineString
from shapely.geometry import Point
from numpy import ones, vstack
from numpy.linalg import lstsq


def lineSolution(x1: float, x2: float, y1: float, y2: float):
    points = [(x1, x2), (y1, y2)]
    x_coords, y_coords = zip(*points)
    A = vstack([x_coords, ones(len(x_coords))]).T
    a, b = lstsq(A, y_coords)[0]
    print("Line Solution is y = {a}x + {b}".format(a=a, b=b))
    return a, b


def showCircle():
    x = np.linspace(-1.0, 1.0, 100)
    y = np.linspace(-1.0, 1.0, 100)
    X, Y = np.meshgrid(x, y)
    F = X ** 2 + Y ** 2 - 0.6
    plt.contour(X, Y, F, [0])
    plt.show()


def interSectionCircleAndLine(centerX: float, centerY: float, Radius: float, aX: float, aY: float, bX: float,
                              bY: float):
    # CenterPoint = Point(centerX, centerY)
    # circle = CenterPoint.buffer(Radius).boundary
    # lineEquation = LineString([(aX, aY), (bX, bY)])
    # intersection = circle.intersection(lineEquation)

    circleCoordinate = Point(centerX, centerY)
    circle = circleCoordinate.buffer(Radius).boundary
    line = LineString([(aX, aY), (bX, bY)])
    intersection = circle.intersection(line)

    # print(i.geoms[0].coords[0])
    # print(i.geoms[1].coords[0])
    # print(intersection.x, intersection.y)
    return intersection.x, intersection.y

    # print(intersection.geoms[0].coords[0])
    # (2.8786796564403576, 2.8786796564403576)
    # print(intersection.geoms[1].coords[0])
    # (7.121320343559642, 7.121320343559642)

    # circles are the boundries of points with buffer areas. This is why I do p.buffer(3).boundary. the intersection
    # i is a list of geometric shapes, both of them points in this case, this is why I have to get both of them from
    # i.geoms[]


def lineEquationOfTwoCoordinate(x1, y1, x2, y2):
    points = [(x1, y1), (x2, y2)]
    x_coords, y_coords = zip(*points)
    A = vstack([x_coords, ones(len(x_coords))]).T
    m, c = lstsq(A, y_coords)[0]
    print("Line Solution is y = {m}x + {c}".format(m=m, c=c))
