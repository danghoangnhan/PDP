import os

from config import load_config

root_dir = os.path.dirname(os.path.realpath(__file__))

_cfg = load_config()
rawData_dir = os.path.join(root_dir, 'data', 'rawData')
restaurant_dir = _cfg.restaurant_dir
vehicles_dir = _cfg.vehicles_dir
order_dir = _cfg.order_dir
