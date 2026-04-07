class Ds:
    def __init__(self, orderId, timeRequest, restaurantId, vehicle, L, x, y, deadline):
        self.orderId = orderId
        self.t = timeRequest
        self.V = vehicle
        self.L = L
        self.x: float = x
        self.y: float = y
        self.deadline = deadline
        self.restaurantId = restaurantId
        self.arriveTime = 0
        self.driverId = None

    def get_timeRequest(self):
        return self.t

    def getLongitude(self):
        return self.y

    def getLatitude(self):
        return self.x

    def getDeadLine(self):
        return self.deadline

    def getRestaurantId(self):
        return self.restaurantId

    def setDriverId(self, driverId: int):
        self.driverId = driverId

    def getDriverId(self):
        return self.driverId

    def getId(self):
        return self.orderId
