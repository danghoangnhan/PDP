import copy

import numpy as np

from generatingData import generateTestData
from Math.distance import distance
from Math.Geometry import interSectionCircleAndLine
from model.driver import driver
from model.order import Ds
from model.restaurant import restaurant


class RMDP:
    def __init__(
        self,
        maxLengthPost: int,
        capacity: int,
        velocity: int,
        restaurantPrepareTime: int,
    ):
        self.Ds_0, _, _ = generateTestData.importOrderValue()
        self.vehiceList, _, _ = generateTestData.importVehicleValue()
        self.restaurantList, _, _ = generateTestData.importRestaurantValue()
        self.D_0 = []
        self.Theta_x = [
            {"driverId": d.get_id(), "route": []} for d in self.vehiceList
        ]
        self.P_x = []
        self.time_buffer = 0
        self.t_Pmax = 40 * 60
        self.maxLengthPost = maxLengthPost
        self.capacity = capacity
        self.velocity = velocity
        self.restaurantPrepareTime = restaurantPrepareTime

        for vehicle in self.vehiceList:
            vehicle.setVelocity(self.velocity)
            vehicle.setCurrentCapacity(0)

        for rest in self.restaurantList:
            rest.setPrepareTime(self.restaurantPrepareTime)

    def _processOrders(self, sequence, Theta_hat, P_hat):
        for D in sequence:
            currentPairdDriver: driver = self.FindVehicle(D)
            D.setDriverId(currentPairdDriver.get_id())
            currentPairdRestaurent: restaurant = copy.deepcopy(
                self.restaurantList[D.getRestaurantId() - 1]
            )
            currentPairdRestaurent.setOrderId(D.getId())
            currentPairdDriver.setCurrentCapacity(
                currentPairdDriver.getCurrentCapacity() + 1
            )
            self.AssignOrder(Theta_hat, D, currentPairdDriver, currentPairdRestaurent)
            if self.Postponement(P_hat, D, self.maxLengthPost, self.t_Pmax):
                if D not in P_hat:
                    P_hat.append(D)
            else:
                while (D.t - P_hat[0].t) >= self.t_Pmax:
                    PairdDriver: driver = self.FindVehicle(P_hat[0])
                    P_hat[0].setDriverId(PairdDriver.get_id())
                    PairdDriver.setCurrentCapacity(PairdDriver.getCurrentCapacity() + 1)
                    PairedRestaurent = copy.deepcopy(
                        self.restaurantList[P_hat[0].getRestaurantId() - 1]
                    )
                    PairedRestaurent.setOrderId(D.getId())
                    self.AssignOrder(Theta_hat, P_hat[0], PairdDriver, PairedRestaurent)
                    P_hat.pop(0)
                    if len(P_hat) == 0:
                        break

                if len(P_hat) >= self.maxLengthPost:
                    for pospondedOrder in P_hat:
                        PairdDriver: driver = self.FindVehicle(pospondedOrder)
                        PairdDriver.setCurrentCapacity(
                            PairdDriver.getCurrentCapacity() + 1
                        )
                        pospondedOrder.setDriverId(PairdDriver.get_id())
                        PairedRestaurent = copy.deepcopy(
                            self.restaurantList[pospondedOrder.getRestaurantId() - 1]
                        )
                        PairedRestaurent.setOrderId(pospondedOrder.getId())
                        self.AssignOrder(
                            Theta_hat, pospondedOrder, PairdDriver, PairedRestaurent
                        )
                    P_hat.clear()
                P_hat.append(D)

    def runRMDP(self, T: int):
        delay: float = float("inf")
        Order_num = 5
        T *= Order_num
        slack = 0
        self.D_0.clear()
        for i in range(T, T + Order_num):
            self.D_0.append(self.Ds_0[i])

        permutation = self.sequencePermutation(self.D_0)
        Theta_hat = copy.deepcopy(self.Theta_x)
        P_hat = copy.deepcopy(self.P_x)
        self._processOrders(permutation, Theta_hat, P_hat)
        S = self.TotalDelay()
        if (S < delay) or ((S == delay) and (self.Slack() < slack)):
            slack = self.Slack()
            delay = S
            self.Theta_x = copy.deepcopy(Theta_hat)
            self.P_x = copy.deepcopy(P_hat)
        self.Remove()

    def deltaSDelay(self, route: list):
        delay: float = 0.0
        tripTime: float = 0.0
        for i in range(1, len(route["route"]), 1):
            previousNode = route["route"][i - 1]
            currentNode = route["route"][i]
            currentDistance = distance(
                previousNode.getLatitude(),
                previousNode.getLongitude(),
                currentNode.getLatitude(),
                currentNode.getLongitude(),
            )
            tripTime += currentDistance / self.velocity
            if isinstance(currentNode, Ds):
                delay += max(
                    0,
                    (tripTime + self.time_buffer)
                    - (currentNode.getDeadLine() + currentNode.get_timeRequest()),
                )
        return delay

    def AssignOrder(
        self, Theta_hat, D: Ds, V: driver, currentParedRestaurent: restaurant
    ):
        currentRoute: list = next(
            (route for route in Theta_hat if route.get("driverId") == V.get_id()), []
        )

        if not currentRoute["route"]:
            currentRoute["route"].append(currentParedRestaurent)
            currentRoute["route"].append(D)

        else:
            first: int = 0
            second: int = 1
            minDelayTime = float("inf")
            for i in range(0, len(currentRoute), 1):  # control Restaurant
                # find all the possible positioins of new order
                for j in range(i + 1, len(currentRoute) + 2, 1):
                    tempList = copy.deepcopy(currentRoute)
                    tempList["route"].insert(i, currentParedRestaurent)
                    tempList["route"].insert(j, D)
                    delayTime = self.deltaSDelay(tempList)

                    if minDelayTime > delayTime:
                        minDelayTime = delayTime
                        first = i
                        second = j

            currentRoute["route"].insert(first, currentParedRestaurent)
            currentRoute["route"].insert(second, D)

    def Slack(self):
        return sum(self.slackDelay(r) for r in self.Theta_x)

    def updateDriverLocation(self, time):
        hasOrderVehicle: list = [
            routePerVehicle
            for routePerVehicle in self.Theta_x
            if (routePerVehicle["route"] != [])
        ]
        for route in hasOrderVehicle:
            currentDriver: driver = self.vehiceList[route.get("driverId") - 1]
            targetDestination = route["route"][0]
            travledDistance = currentDriver.getVelocity() * time
            estimatedDistance = distance(
                currentDriver.getLatitude(),
                currentDriver.getLongitude(),
                targetDestination.getLatitude(),
                targetDestination.getLongitude(),
            )
            if travledDistance > 0:
                if travledDistance >= estimatedDistance:
                    currentDriver.setLatitude(targetDestination.getLatitude())
                    currentDriver.setLongitude(targetDestination.getLongitude())
                    route["route"].pop(0)
                else:
                    updatedLon, updatedLat = interSectionCircleAndLine(
                        currentDriver.getLongitude(),
                        currentDriver.getLatitude(),
                        travledDistance,
                        currentDriver.getLongitude(),
                        currentDriver.getLatitude(),
                        targetDestination.getLongitude(),
                        targetDestination.getLatitude(),
                    )
                    currentDriver.setLatitude(updatedLon)
                    currentDriver.setLongitude(updatedLat)

    def tripTime(self, driv: driver, res: restaurant, order: Ds):
        return (
            distance(driv.x, driv.y, res.xPosition, res.yPosition)
            + distance(res.xPosition, res.yPosition, order.x, order.y)
        ) / self.velocity

    def FindVehicle(self, Order: Ds):
        OrderRestaurant = self.restaurantList[Order.getRestaurantId() - 1]
        minTimeDriver = self.vehiceList[0]
        minTimeTolTal = float("inf")
        handleDriver = [
            driver
            for driver in self.vehiceList
            if driver.getCurrentCapacity() < self.capacity
        ]
        for currentDriver in handleDriver:
            currenTripTime: float = self.tripTime(currentDriver, OrderRestaurant, Order)
            if currenTripTime < minTimeTolTal:
                minTimeDriver = copy.deepcopy(currentDriver)
                minTimeTolTal = currenTripTime
        return minTimeDriver

    def slackDelay(self, route):
        delay: int = 0
        tripTime: int = 0
        currentDriver = self.vehiceList[route["driverId"] - 1]
        currentRoute: list = copy.deepcopy(route["route"])
        currentRoute.append(currentDriver)
        for i in range(1, len(currentRoute), 1):
            currentDistance = distance(
                currentRoute[i - 1].getLatitude(),
                currentRoute[i - 1].getLongitude(),
                currentRoute[i].getLatitude(),
                currentRoute[i].getLongitude(),
            )
            tripTime += currentDistance / self.velocity
            if isinstance(currentRoute[i], Ds):
                delay += max(
                    0, currentRoute[i].getDeadLine() - tripTime - self.time_buffer
                )
        return delay

    def TotalDelay(self):
        return sum(self.deltaSDelay(r) for r in self.Theta_x)

    def Remove(self):
        for pospondedOrder in self.P_x:
            driverId = self.vehiceList[pospondedOrder.getDriverId() - 1].get_id()
            targetRoute = next(
                (r for r in self.Theta_x if r.get("driverId") == driverId), []
            )
            orderId = pospondedOrder.getId()
            targetRoute["route"] = [
                node for node in targetRoute["route"]
                if (isinstance(node, Ds) and node.getId() != orderId)
                or (isinstance(node, restaurant) and node.getOrderId() != orderId)
            ]

    def Postponement(self, P_hat, D, p_max, t_Pmax):
        if len(P_hat) == 0:
            return True
        return len(P_hat) < self.maxLengthPost and D.t - P_hat[0].t < t_Pmax

    def sequencePermutation(self, sequence):
        # parameter init
        initT = 1000
        minT = 1
        iterL = 10
        eta = 0.95
        k = 1

        # simulated annealing
        t = initT
        old_sequence = copy.deepcopy(sequence)
        counter = 0
        while t > minT:
            for _ in range(iterL):  # MonteCarlo method reject propblity
                delay_old = self.sequenceRMDP(old_sequence)
                position_switch1 = np.random.randint(low=0, high=len(sequence))
                if position_switch1 <= (len(sequence) / 2):
                    position_switch2 = position_switch1 + int(len(sequence) / 2)
                else:
                    position_switch2 = position_switch1 - int(len(sequence) / 2)
                new_sequence = copy.deepcopy(old_sequence)
                new_sequence[position_switch1], new_sequence[position_switch2] = (
                    new_sequence[position_switch2],
                    new_sequence[position_switch1],
                )
                delay_new = self.sequenceRMDP(new_sequence)
                res = delay_new - delay_old
                if res < 0 or np.exp(-res / (k * t)) > np.random.rand():
                    old_sequence = copy.deepcopy(new_sequence)
                counter += 1
            t = t * eta
            # print(t)
        print(counter)
        return old_sequence

    def sequenceRMDP(self, sequence):
        Theta_hat = copy.deepcopy(self.Theta_x)
        P_hat = copy.deepcopy(self.P_x)
        self._processOrders(sequence, Theta_hat, P_hat)
        return self.TotalDelay()
