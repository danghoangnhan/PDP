from shapely.geometry import LineString, Point


def interSectionCircleAndLine(
    centerX: float,
    centerY: float,
    Radius: float,
    aX: float,
    aY: float,
    bX: float,
    bY: float,
):
    circleCoordinate = Point(centerX, centerY)
    circle = circleCoordinate.buffer(Radius).boundary
    line = LineString([(aX, aY), (bX, bY)])
    intersection = circle.intersection(line)
    return intersection.x, intersection.y
