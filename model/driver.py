class driver:
    def __init__(self, driver_id, driver_x, driver_y, velocity: float = 0.0):
        self.id: int = driver_id
        self.x: float = driver_x
        self.y: float = driver_y
        self.velocity: float = velocity
        self.currentCapacity: int = 0

    def get_id(self):
        return self.id

    def setVelocity(self, velocity):
        self.velocity = velocity

    def getVelocity(self):
        return self.velocity

    def getCurrentCapacity(self):
        return self.currentCapacity

    def setCurrentCapacity(self, capacity):
        self.currentCapacity = capacity

    def getLatitude(self):
        return self.x

    def getLongitude(self):
        return self.y

    def setLatitude(self, latitude):
        self.y = latitude

    def setLongitude(self, longitude):
        self.x = longitude
