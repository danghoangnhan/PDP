from RMDP import RMDP


def main():
    maxLengthPost = 10
    capacity = 10
    velocity = 20 * 1000 / 3600
    restaurantPrepareTime = 10 * 60
    instance = RMDP(maxLengthPost, capacity, velocity, restaurantPrepareTime)
    for time in range(0, 480, 5):
        instance.runRMDP(time)
        instance.updateDriverLocation(time)


main()
