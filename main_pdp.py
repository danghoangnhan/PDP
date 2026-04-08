import argparse

from config import load_config
from generatingData.generateTestData import importOrderValue, importVehicleValue, importRestaurantValue
from pdp_ortools import create_data_model, solve_pdp, extract_routes, print_solution


def parse_args():
    parser = argparse.ArgumentParser(description="PDP Meal Delivery Routing Solver")
    parser.add_argument("--config", default=None, help="Path to config.toml")
    parser.add_argument("--time-limit", type=int, default=None, help="Solver time limit (seconds)")
    parser.add_argument("--num-orders", type=int, default=None, help="Number of orders to process")
    return parser.parse_args()


def main():
    args = parse_args()
    cli_overrides = {}
    if args.time_limit is not None:
        cli_overrides["time_limit"] = args.time_limit
    if args.num_orders is not None:
        cli_overrides["num_orders"] = args.num_orders

    cfg = load_config(config_path=args.config, cli_overrides=cli_overrides)

    # Load dataset
    orders = importOrderValue()
    drivers = importVehicleValue()
    restaurants = importRestaurantValue()

    for d in drivers:
        d.velocity = cfg.velocity
        d.current_capacity = 0

    batch = orders[:cfg.num_orders] if cfg.num_orders > 0 else orders

    print("PDP Solver (OR-Tools)")
    print(f"Orders: {len(batch)}, Vehicles: {len(drivers)}, Restaurants: {len(restaurants)}")
    print(f"Velocity: {cfg.velocity:.2f} m/s, Capacity: {cfg.capacity}, Prepare time: {cfg.prepare_time}s")
    print()

    # Build data model
    data = create_data_model(batch, restaurants, drivers, cfg.prepare_time, cfg.velocity,
                             cfg.capacity, depot_time_window=cfg.depot_time_window)
    print(f"Nodes: {len(data.nodes)} (1 depot + {len(batch)} pickups + {len(batch)} deliveries)")
    print(f"Pickup-delivery pairs: {len(data.pickups_deliveries)}")
    print()

    # Solve
    print(f"Solving with {cfg.time_limit}s time limit...")
    manager, routing, solution = solve_pdp(
        data,
        search_parameters=cfg.search_parameters,
        time_slack=cfg.time_slack,
        max_time=cfg.max_time,
        drop_penalty=cfg.drop_penalty,
    )

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
        served = sum(1 for idx in r.route if idx != 0 and not data.nodes[idx].is_pickup)
        total_orders_served += served

    print(f"Orders served: {total_orders_served} / {len(batch)}")
    dropped = len(batch) - total_orders_served
    if dropped > 0:
        print(f"Orders dropped: {dropped}")


if __name__ == "__main__":
    main()
