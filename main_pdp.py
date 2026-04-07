from generatingData.generateTestData import importOrderValue, importVehicleValue, importRestaurantValue
from pdp_ortools import create_data_model, solve_pdp, extract_routes, print_solution


def main():
    # Load dataset
    orders, _, _ = importOrderValue()
    drivers, _, _ = importVehicleValue()
    restaurants, _, _ = importRestaurantValue()

    # Configuration
    velocity = 20 * 1000 / 3600     # 20 km/h -> 5.56 m/s
    prepare_time = 10 * 60          # 10 minutes in seconds
    capacity = 10                   # max orders per vehicle
    num_orders = 50                 # orders to process (limit for demo)
    time_limit = 10                 # solver time limit in seconds

    for d in drivers:
        d.setVelocity(velocity)
        d.setCurrentCapacity(0)

    batch = orders[:num_orders]

    print(f"PDP Solver (OR-Tools)")
    print(f"Orders: {len(batch)}, Vehicles: {len(drivers)}, Restaurants: {len(restaurants)}")
    print(f"Velocity: {velocity:.2f} m/s, Capacity: {capacity}, Prepare time: {prepare_time}s")
    print()

    # Build data model
    data = create_data_model(batch, restaurants, drivers, prepare_time, velocity, capacity)
    print(f"Nodes: {len(data['nodes'])} (1 depot + {len(batch)} pickups + {len(batch)} deliveries)")
    print(f"Pickup-delivery pairs: {len(data['pickups_deliveries'])}")
    print()

    # Solve
    print(f"Solving with {time_limit}s time limit...")
    manager, routing, solution = solve_pdp(data, time_limit=time_limit)

    if solution is None:
        print("No solution found!")
        return

    # Print results
    print()
    print_solution(data, manager, routing, solution)

    # Summary
    routes = extract_routes(data, manager, routing, solution)
    print(f"\nActive vehicles: {len(routes)} / {len(drivers)}")

    total_orders_served = 0
    for r in routes:
        # Count delivery nodes (non-depot, non-pickup)
        served = sum(1 for idx in r['route'] if idx != 0 and not data['nodes'][idx].is_pickup)
        total_orders_served += served

    print(f"Orders served: {total_orders_served} / {len(batch)}")
    dropped = len(batch) - total_orders_served
    if dropped > 0:
        print(f"Orders dropped: {dropped}")


if __name__ == "__main__":
    main()
