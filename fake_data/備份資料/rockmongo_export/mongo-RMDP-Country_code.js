
/** country_code indexes **/
db.getCollection("country_code").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** country_code records **/
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf43f"),
  "country_code": NumberInt(1),
  "country": "India"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf440"),
  "country_code": NumberInt(14),
  "country": "Australia"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf441"),
  "country_code": NumberInt(30),
  "country": "Brazil"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf442"),
  "country_code": NumberInt(37),
  "country": "Canada"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf443"),
  "country_code": NumberInt(94),
  "country": "Indonesia"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf444"),
  "country_code": NumberInt(148),
  "country": "New Zealand"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf445"),
  "country_code": NumberInt(162),
  "country": "Phillipines"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf446"),
  "country_code": NumberInt(166),
  "country": "Qatar"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf447"),
  "country_code": NumberInt(184),
  "country": "Singapore"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf448"),
  "country_code": NumberInt(189),
  "country": "South Africa"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf449"),
  "country_code": NumberInt(191),
  "country": "Sri Lanka"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf44a"),
  "country_code": NumberInt(208),
  "country": "Turkey"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf44b"),
  "country_code": NumberInt(214),
  "country": "UAE"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf44c"),
  "country_code": NumberInt(215),
  "country": "United Kingdom"
});
db.getCollection("country_code").insert({
  "_id": ObjectId("6120e1b51ca9fa6180ecf44d"),
  "country_code": NumberInt(216),
  "country": "United States"
});
