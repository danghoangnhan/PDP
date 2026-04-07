class restaurant:
    def __init__(self, restaurant_id, restaurant_x, restaurant_y, prepareTime: float = 0.0):
        self.id: int = restaurant_id
        self.xPosition: float = restaurant_x
        self.yPosition: float = restaurant_y
        self.prepareTime: float = prepareTime
        self.orderId = None

    def getLongitude(self):
        return self.yPosition

    def getLatitude(self):
        return self.xPosition

    def getId(self):
        return self.id

    def setPrepareTime(self, time):
        self.prepareTime = time

    def setOrderId(self, orderId: int):
        self.orderId = orderId

    def getOrderId(self):
        return self.orderId
