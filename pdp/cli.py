"""CLI entry point for PDP solver."""

import argparse

from pdp.config import load_config
from pdp.data.loaders import load_orders, load_drivers, load_restaurants
from pdp.models.data_model import create_data_model, DataModel
from pdp.models.result import SolveResult, SolverStatus
from pdp.solvers import ORToolsSolver


def parse_args():
    parser = argparse.ArgumentParser(description="PDP Meal Delivery Routing Solver")
    parser.add_argument("--config", default=None, help="Path to config.toml")
    parser.add_argument("--time-limit", type=int, default=None, help="Solver time limit (seconds)")
    parser.add_argument("--num-orders", type=int, default=None, help="Number of orders to process")
    return parser.parse_args()


def print_solution(result: SolveResult, data: DataModel):
    """Print solver results with P/D notation."""
    if result.status == SolverStatus.NO_SOLUTION:
        print("No solution found.")
        return

    for route_info in result.routes:
        route_str = ""
        for node_idx in route_info.route:
            if node_idx == 0:
                label = "Depot"
            else:
                n = data.nodes[node_idx]
                prefix = "P" if n.is_pickup else "D"
                label = f"{prefix}{n.order_id}"
            route_str += f" {label} ->"
        # Remove trailing arrow
        route_str = route_str.rstrip(" ->")
        print(f"Vehicle {route_info.vehicle_id}: {route_str}")
        print(f"  Distance: {route_info.distance}m  Time: {route_info.time}s")

    print(f"\nTotal distance: {result.total_distance}m")
    print(f"Max route time: {result.total_time}s")


def main():
    args = parse_args()
    cli_overrides = {}
    if args.time_limit is not None:
        cli_overrides["time_limit"] = args.time_limit
    if args.num_orders is not None:
        cli_overrides["num_orders"] = args.num_orders

    cfg = load_config(config_path=args.config, cli_overrides=cli_overrides)

    # Load dataset
    orders = load_orders(cfg.order_dir)
    drivers = load_drivers(cfg.vehicles_dir)
    restaurants = load_restaurants(cfg.restaurant_dir)

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
    solver = ORToolsSolver(cfg)
    result = solver.solve(data)

    if result.status == SolverStatus.NO_SOLUTION:
        print("No solution found!")
        return

    # Print results
    print()
    print_solution(result, data)

    # Summary
    print(f"\nActive vehicles: {len(result.routes)} / {len(drivers)}")
    total_orders_served = 0
    for r in result.routes:
        served = sum(1 for idx in r.route if idx != 0 and not data.nodes[idx].is_pickup)
        total_orders_served += served
    print(f"Orders served: {total_orders_served} / {len(batch)}")
    dropped = len(batch) - total_orders_served
    if dropped > 0:
        print(f"Orders dropped: {dropped}")


if __name__ == "__main__":
    main()
