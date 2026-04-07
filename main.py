from RMDP import RMDP
from generatingData import generateTestData


def main():
    delay = float('inf')
    maxLengthPost = 10
    maxTimePost = 20 * 60
    capacity = 10
    velocity = 20 * 1000 / 3600
    restaurantPrepareTime = 10 * 60
    instance = RMDP(delay, maxLengthPost, maxTimePost, capacity, velocity, restaurantPrepareTime)
    for time in range(0, 480, 5):
        instance.runRMDP(0, time)
        instance.updateDriverLocation(time)


main()
