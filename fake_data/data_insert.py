import csv
import json
import pandas as pd
from pymongo import MongoClient

client = client = MongoClient('mongodb://test:test@140.136.151.94:27017/RMDP')
db = client["RMDP"]
testDriverCollection = db["test_driver"]
zomatoCollection = db["test_restaurant"]
testCountryCodeCollection = db["country_code"]
zomatoCollection = db["test_restaurant"]
test_restaurantCollection = db["test_restaurant"]

driverData = pd.read_csv('driver1.csv', encoding='ISO-8859-1')
restaurantData = pd.read_csv('zomato.csv', encoding='ISO-8859-1')
country_codeData = pd.read_csv('country_code.csv', encoding='ISO-8859-1')
wordCityData = pd.read_csv('worldcities.csv', encoding='ISO-8859-1')
test_restaurantData = pd.read_csv('RMDP_resteraurants.csv', encoding='ISO-8859-1')
# print(data['City'])

'''
driverData = json.loads(driverData.to_json(orient='records'))
restaurantJson = json.loads(restaurantData.to_json(orient='records'))
country_codeJson = json.loads((country_codeData.to_json(orient='records')))
test_restaurantJson = json.loads((test_restaurantData.to_json(orient='records')))

test_restaurantCollection.insert_many(test_restaurantJson)
testCountryCodeCollection.insert_many(country_codeJson)
'''