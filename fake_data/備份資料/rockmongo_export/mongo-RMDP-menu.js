
/** menu indexes **/
db.getCollection("menu").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** menu records **/
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fe8"),
  "id": "ribs-brisket-and-burnt-ends",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "bbqs",
  "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
  "price": 110.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fe9"),
  "id": "005-kings-carolina-oink-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "Carolina BBQ Oink Sampler",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fea"),
  "id": "texas-monthlys-1-bbq-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "bbqs",
  "dsc": "Texas Monthly's #1 BBQ Brisket",
  "price": 199,
  "rate": NumberInt(4),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224feb"),
  "id": "17352-ribs-and-pulled-pork-small-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137366/Central-BBQ-Ribs-Pulled-Pork-Dinner-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "bbqs",
  "dsc": "Ribs & Pulled Pork Dinner for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fec"),
  "id": "whole-brisket-texas-bbq-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110384/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franklin Barbecue",
  "sections": "bbqs",
  "dsc": "Whole Brisket + Texas Barbecue BBQ Sauce",
  "price": 249,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fed"),
  "id": "whole-texas-smoked-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101071/whole-texas-smoked-brisket.a5558a25381e271408e197936e7985d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "bbqs",
  "dsc": "Whole Texas Smoked Brisket",
  "price": 189,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fee"),
  "id": "barbeque-Sampler-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110287/barbeque-sampler-for-4-6.edb4e60564852c9d0227634c31fab279.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Bryant's Barbeque",
  "sections": "bbqs",
  "dsc": "Barbeque Sampler for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fef"),
  "id": "17352-ribs-and-pulled-pork-medium-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137368/Central-BBQ-Ribs-Pulled-Pork-Party-Pack-1_.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "bbqs",
  "dsc": "Ribs & Pulled Pork Dinner for 8",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff0"),
  "id": "mini-trinity-bbq-combo-brisket-ribs-and-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90406/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "bbqs",
  "dsc": "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff1"),
  "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "bbqs",
  "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff2"),
  "id": "whole-brisket-sausage-texas-barbecue-bbq-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131846/whole-brisket-sausage-texas-barbecue-bbq-sauce.ffb470cab2f454fd848faa5dddfe65f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franklin Barbecue",
  "sections": "bbqs",
  "dsc": "Whole Brisket + Sausage + Texas Barbecue BBQ Sauce",
  "price": 289,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff3"),
  "id": "006-kings-meat-lovers-special",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66734/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Meat Lovers Special for 10",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff4"),
  "id": "the-big-ugly-bbq-dinner-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132122/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "bbqs",
  "dsc": "The Big Ugly BBQ Dinner for 6",
  "price": 229,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff5"),
  "id": "17796-mighty-quinns-bbq-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134182/mighty-quinns-bbq-sampler-pack.1bfe4a0665edc565756f5241bf25840e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mighty Quinn's BBQ",
  "sections": "bbqs",
  "dsc": "Mighty Quinn's BBQ Sampler Pack",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff6"),
  "id": "post-oak-smoked-half-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92395/post-oak-smoked-usda-prime-half-brisket.6f17178dde7d806670bcc73ff11762b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "bbqs",
  "dsc": "Post Oak Smoked USDA Prime Half Brisket",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff7"),
  "id": "best-of-texas-bbq-combo-serves-14",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91821/best-of-texas-bbq-combo-serves-14.7ae90266335e539c67e77fed14b43029.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "bbqs",
  "dsc": "Best of Texas BBQ Combo - Serves 14",
  "price": 269,
  "rate": NumberInt(5),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff8"),
  "id": "choose-your-own-world-championship-bbq-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133378/choose-your-own-world-championship-bbq-4-pack.d5216e2b1c2a92f481fc9d1c7a15e8df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Bob Gibson Bar-B-Q",
  "sections": "bbqs",
  "dsc": "Choose Your Own World Championship BBQ - 4 Pack",
  "price": 109.95,
  "rate": NumberInt(4),
  "country": "Decatur, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ff9"),
  "id": "bbq-ribs-and-pulled-pork-dinner-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96242/bbq-ribs-and-pulled-pork-dinner-for-6.ba9ea2ed663fc67effa9fd7a85624625.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "bbqs",
  "dsc": "BBQ Ribs & Pulled Pork Dinner for 6",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ffa"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "bbqs",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ffb"),
  "id": "bbq-rib-tips-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90450/bbq-rib-tips-serves-10-15.c3f35f44d3b1650273c3cdd42494fb66.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Rib Tips - Serves 10-15",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ffc"),
  "id": "texas-sized-smoked-beef-ribs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131304/texas-sized-smoked-beef-ribs.2b95cb8fcdb4eb21b28ae948f84e6b51.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "bbqs",
  "dsc": "Texas-Sized Smoked Beef Ribs",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ffd"),
  "id": "just-the-meat-bbq-faves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115147/just-the-meat-bbq-faves.420232635cdaf0d4df3f4a78e6f3ca56.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Famous Dave's",
  "sections": "bbqs",
  "dsc": "Just the Meat BBQ Faves for 6",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224ffe"),
  "id": "guys-bbq-trash-can-nachos-caliente-margaritas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134759/guys-bbq-trash-can-nachos-caliente-margaritas.8e15c70f4f0aef2bc3643274bd29459a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "bbqs",
  "dsc": "Guy's BBQ Trash Can Nachos + Caliente Margaritas",
  "price": 95,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e224fff"),
  "id": "bbq-sides-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133014/bbq-sides-4-pack.64fe417f2fda9ad40fb4034cf416a91e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "bbqs",
  "dsc": "BBQ Sides - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225000"),
  "id": "ribs-and-chicken-combo-pack-serves-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133206/ribs-and-chicken-combo-pack-serves-6-8.cef1f90b5c3193c06e1c4b4cc9cff611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dinosaur BBQ",
  "sections": "bbqs",
  "dsc": "Ribs & Chicken Combo Pack - Serves 6-8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Syracuse, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225001"),
  "id": "half-texas-smoked-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96692/half-texas-angus-smoked-brisket.c2b96b9fbe7f8bf7a3436777b3b79bc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "bbqs",
  "dsc": "Texas Smoked Half Brisket",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225002"),
  "id": "bbq-meat-and-sides-feast-serves-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96632/bbq-meat-and-sides-feast.e330bee9ac3a6e322500b411094b3ca4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Micklethwait Craft Meats",
  "sections": "bbqs",
  "dsc": "BBQ Meat and Sides Feast",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225003"),
  "id": "choose-your-own-world-championship-bbq-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131356/choose-your-own-world-championship-bbq-2-pack.aed7c509b847060a8fc8a5bc255e07c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Bob Gibson Bar-B-Q",
  "sections": "bbqs",
  "dsc": "Choose Your Own World Championship BBQ - 2 Pack",
  "price": 64.95,
  "rate": NumberInt(5),
  "country": "Decatur, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225004"),
  "id": "18650-food-explorer-carolina-bbq-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75438/food-explorer-carolina-bbq-pack.fdbd5d5d3f4f92d6c27ad8ef0243f0b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "Food Explorer Carolina BBQ Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225005"),
  "id": "mesquite-smoked-peppered-beef-tenderloin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Perini Ranch Steakhouse",
  "sections": "bbqs",
  "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
  "price": 165,
  "rate": NumberInt(4),
  "country": "Buffalo Gap, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225006"),
  "id": "20154-bacon-wrapped-cheddar-jalapeno-sausage-slammers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131365/bacon-wrapped-cheddar-jalapeno-sausage-slammers.1aad356ed0b86ebefde0c645520fddb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "bbqs",
  "dsc": "Bacon Wrapped Cheddar JalapeÃ±o Sausage Slammers",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225007"),
  "id": "bbq-ribs-and-pulled-pork-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96250/bbq-ribs-and-pulled-pork-dinner-for-8.283f3612fdcc300876b961dc513056ea.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "bbqs",
  "dsc": "BBQ Ribs & Pulled Pork Dinner for 8",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225008"),
  "id": "pit-smoked-bbq-ham",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97720/pit-smoked-bbq-ham.0f460774046cd1293c0ce10596021399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "bbqs",
  "dsc": "Pit Smoked BBQ Ham",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225009"),
  "id": "ribs-and-pulled-pork-combo-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101081/ribs-and-pulled-pork-combo-for-4.fda85caa87209b57671b893e01f5deea.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Ribs & Pulled Pork Combo for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500a"),
  "id": "guys-bbq-pulled-pork-trash-can-nachos",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115312/guys-bbq-pulled-pork-trash-can-nachos.5783c0f7459bfc0adbbcf063edced3fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "bbqs",
  "dsc": "Guy's BBQ Pulled Pork Trash Can Nachos",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500b"),
  "id": "legendary-brisket-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "bbqs",
  "dsc": "Legendary Brisket Z-Man Sandwich Kit - 8 Pack",
  "price": 99.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500c"),
  "id": "16124-pork-bbq-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69634/pulled-pork-bbq-pie.fdc5123609d3dcf39d9f9342a9433732.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "bbqs",
  "dsc": "Pulled Pork BBQ Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500d"),
  "id": "17358-rubs-and-sauces-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135170/image004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Sauce & Rubs Kit",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500e"),
  "id": "kc-bbq-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78975/kc-bbq-sampler.440771bc7783f25ff6bccc8cb8d779ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meat Mitch",
  "sections": "bbqs",
  "dsc": "KC BBQ Sampler",
  "price": 239,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22500f"),
  "id": "backyard-bbq-picnic-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134212/backyard-bbq-picnic-for-6.2be8d9286f622c9cfe873c6b728b3175.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "bbqs",
  "dsc": "Backyard BBQ Picnic for 6",
  "price": 239,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225010"),
  "id": "007-kings-pig-out-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66741/kings-pig-out-party-pack.06e697890e8ff7674df25ec980412cac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "Kings' BBQ Best Sellers - Pig Out Party Pack",
  "price": 189,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225011"),
  "id": "smoked-whole-bbq-brisket-serves-15-20",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134189/smoked-whole-bbq-brisket-unsliced-serves-16.9858b33f5b689898903a184261a9d731.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "bbqs",
  "dsc": "Smoked Whole BBQ Brisket, Unsliced - Serves 16+",
  "price": 199,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225012"),
  "id": "unconventional-texas-bbq-sampler-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126766/unconventional-texas-bbq-sampler-for-4-6.ee40a926a0863ceeb13b1eafb987c7d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Underbelly by Chris Shepherd",
  "sections": "bbqs",
  "dsc": "Unconventional Texas BBQ Sampler for 4-6",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225013"),
  "id": "bbq-pork-spare-ribs-2-racks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91839/texas-sized-bbq-ribs-2-racks.317434b983d87ea730139222ae983774.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "bbqs",
  "dsc": "Texas Sized BBQ Ribs - 2 Racks",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225014"),
  "id": "15048-best-sellers-bbq-buffet-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134229/best-sellers-bbq-buffet-pack.995326b83b438923e7109f6cabe4f01a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jack Stack BBQ",
  "sections": "bbqs",
  "dsc": "Best Seller's BBQ Buffet Pack",
  "price": 239,
  "rate": NumberInt(4),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225015"),
  "id": "barbeque-assortment-for-12-16",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132527/barbeque-feast-for-8-12.33d57b4d33aee93b40c12c876061b0a6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Bryant's Barbeque",
  "sections": "bbqs",
  "dsc": "Barbeque Sampler for 12-16",
  "price": 239,
  "rate": NumberInt(5),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225016"),
  "id": "half-pit-smoked-pastrami-brisket-3-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101803/half-pit-smoked-pastrami-brisket-3-lbs.46a73b67344b4c19a012476ef4937ffd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "bbqs",
  "dsc": "Half Pit-Smoked Pastrami Brisket - 3 lbs.",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225017"),
  "id": "15317-kings-bbq-pork-ribs-4-racks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67771/bbq-pork-ribs-4-racks.7605c73ff368c5e344eb8637a363e991.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Pork Ribs - 2 Racks",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225018"),
  "id": "bbq-ribs-2-slabs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133247/bbq-ribs-2-slabs.3d97cdf81e046ecf67c889cd8eafacd4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Ribs - 2 Slabs",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225019"),
  "id": "original-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "bbqs",
  "dsc": "Original Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501a"),
  "id": "the-presidential-smoked-meat-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106403/the-presidential-smoked-meat-sampler.9ff90178b5b0f41ce433acb7724220bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "bbqs",
  "dsc": "The Presidential Smoked Meat Sampler",
  "price": 219,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501b"),
  "id": "smoked-whole-bbq-pork-shoulder-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90419/smoked-whole-bbq-pork-shoulder-serves-10-15.cc662e8f02f2910f67d482bbdd555954.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "bbqs",
  "dsc": "Smoked Whole BBQ Pork Shoulder - Serves 10-15",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501c"),
  "id": "pitmaster-bbq-brisket-pulled-pork-sandwich-kit-for-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132949/pitmaster-bbq-brisket-pulled-pork-sandwich-kit-for-6-8.18c8d7b8fa8e77497a40716a4e004469.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hill Country Barbecue Market",
  "sections": "bbqs",
  "dsc": "Pitmaster BBQ Brisket + Pulled Pork Sandwich Kit for 6-8",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501d"),
  "id": "bbq-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132234/choose-your-own-bbq-dinner-for-4-6.d11e1e15eaa4d3da043b21e91ebcb300.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schmidt Family BBQ",
  "sections": "bbqs",
  "dsc": "BBQ Dinner for 4-6",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Bee Cave, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501e"),
  "id": "slow-smoked-bbq-ribs-dinner",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133855/slow-smoked-bbq-ribs-package.7bde36fe69d69f296b74199ef0b765d9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goode Co. Barbeque",
  "sections": "bbqs",
  "dsc": "Slow Smoked BBQ Ribs Dinner",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22501f"),
  "id": "junior-smoked-meat-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106412/pork-spare-ribs-chicken-sausage-combo-platter.2da90e0e7a49f4dafde4ce15d13db6ed.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "bbqs",
  "dsc": "Junior Smoked Meat Sampler",
  "price": 159,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225020"),
  "id": "texas-smoked-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96687/texas-smoked-angus-brisket.ddabf04270ab511bf77e4c3623e4411a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "bbqs",
  "dsc": "Texas Smoked Whole Brisket",
  "price": 169,
  "rate": NumberInt(4),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225021"),
  "id": "memphis-style-bbq-ribs-4-slabs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90693/memphis-style-bbq-ribs-4-slabs.63c29722abeb159245d54ae166433560.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "17th Street BBQ",
  "sections": "bbqs",
  "dsc": "Grand World Champion BBQ Baby Back Ribs - 4 Slabs",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Murphsboro, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225022"),
  "id": "001-kings-hand-chopped-pork-bbq",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66742/kings-hand-chopped-pork-bbq.fe84b9394dd765ab13b26611595226fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "bbqs",
  "dsc": "Kings' Hand-Chopped Pork BBQ",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225023"),
  "id": "bo-ssam-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "best-food",
  "dsc": "Half Bo SsÃ¤m Dinner for 4-6",
  "price": 169,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225024"),
  "id": "legendary-seafood-gumbo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Commander's Palace",
  "sections": "best-food",
  "dsc": "Legendary Seafood Gumbo",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225025"),
  "id": "the-gramercy-tavern-burger-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "best-food",
  "dsc": "The Gramercy Tavern Burger - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225026"),
  "id": "the-coop-complete-fried-chicken-dinner-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "best-food",
  "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225027"),
  "id": "traditional-beef-empanadas-with-llajua-sauce-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132987/traditional-meat-empanadas-with-llajua-sauce-12-pack.f2adcfeb4ccf027675047f1367ce83ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "best-food",
  "dsc": "Traditional Beef Empanadas with Llajua Sauce - 12 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225028"),
  "id": "pork-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "best-food",
  "dsc": "Pork Buns - 12 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225029"),
  "id": "hot-honey-chicken-and-cornbread-waffles-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Marcus Samuelsson's Streetbird",
  "sections": "best-food",
  "dsc": "Marcusâ Hot Honey Chicken & Cornbread Waffles Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502a"),
  "id": "zahav-hummus-and-salatim-spread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114579/zahav-hummus-and-salatim-spread-for-6-8.137df09ea04ec063480f58ead8fe4b83.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zahav",
  "sections": "best-food",
  "dsc": "Zahav Hummus & Salatim Spread",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502b"),
  "id": "wood-fired-pizzas-best-seller-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "best-food",
  "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502c"),
  "id": "gramercy-tavern-mushroom-lasagna-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134704/gramercy-tavern-mushroom-lasagna-4-pack.88c671dec184d8bee908d6f5d8d860f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "best-food",
  "dsc": "Gramercy Tavern Mushroom Lasagna for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502d"),
  "id": "brown-butter-lobster-roll-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133343/brown-butter-lobster-roll-kit-4-pack.f97b1254243c8628ad1a5cd41227f5d7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eventide Oyster Co.",
  "sections": "best-food",
  "dsc": "Brown Butter Lobster Roll Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Portland, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502e"),
  "id": "commanders-palace-three-course-dinner-for-2-shrimp-and-grits",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104768/commanders-palace-three-course-shrimp-and-grits-dinner-for-2.984253533e589547e834420efccc174a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Commander's Palace",
  "sections": "best-food",
  "dsc": "Commander's Palace Three-Course Shrimp & Grits Dinner for 2",
  "price": 169,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22502f"),
  "id": "butchers-feast-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104628/butchers-feast-for-4.cf40ca583a3bc2de78ac6355ee4b2995.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cote Korean Steakhouse",
  "sections": "best-food",
  "dsc": "The Original Butcher's FeastÂ® for 4",
  "price": 259,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225030"),
  "id": "whole-peking-duck-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132862/decoys-whole-peking-duck-for-4.36f80dd5235f5495f279ed8765c33167.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "RedFarm",
  "sections": "best-food",
  "dsc": "Whole Peking Duck Kit for 4",
  "price": 139,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225031"),
  "id": "unconventional-texas-bbq-sampler-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126766/unconventional-texas-bbq-sampler-for-4-6.ee40a926a0863ceeb13b1eafb987c7d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Underbelly by Chris Shepherd",
  "sections": "best-food",
  "dsc": "Unconventional Texas BBQ Sampler for 4-6",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225032"),
  "id": "diy-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113695/traditional-negiri-sushi-and-cutroll-kit-for-2.381bee7a4e1be32ad5818d93524b0bef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon Sushi",
  "sections": "best-food",
  "dsc": "Blue Ribbon Sushi - DIY Kit for 2",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225033"),
  "id": "zahav-lamb-shoulder-meal-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114544/zahav-lamb-shoulder-meal-kit-for-4-6.58cfa4d3d5eca52ac45b2d37a9d0f2d4.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zahav",
  "sections": "best-food",
  "dsc": "Zahav Lamb Shoulder Meal Kit",
  "price": 249,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225034"),
  "id": "the-classic-plateau-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131364/the-classic-plateau-dinner-for-2.9906825037a76931415a8fb5e8a2dcbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "best-food",
  "dsc": "The Classic Plateau Seafood Dinner for 2",
  "price": 139,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225035"),
  "id": "mac-and-cheese-chicken-pot-pie-combo-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112776/mac-and-cheese-chicken-pot-pie-combo-for-4.c77be8dcb4fabfa1870a2ff4a6bd4c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wolfgang Puck Catering",
  "sections": "best-food",
  "dsc": "Mac and Cheese + Chicken Pot Pie Combo for 4",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225036"),
  "id": "prime-galbi-steak-feast-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104674/prime-galbi-steak-feast-for-4.51c78b5ba768078b166fe91325e60edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cote Korean Steakhouse",
  "sections": "best-food",
  "dsc": "Prime Galbi Steak Feast for 4",
  "price": 249,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225037"),
  "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "best-food",
  "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
  "price": 225,
  "rate": NumberInt(4),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225038"),
  "id": "wood-fired-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "best-food",
  "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
  "price": 135,
  "rate": NumberInt(4),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225039"),
  "id": "pasta-dinner-gift-basket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111490/pasta-sauce-gift-basket.e7d2b1afaeef767b7327843716d15203.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fox & the Knife",
  "sections": "best-food",
  "dsc": "Pasta Dinner Gift Basket",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503a"),
  "id": "chinese-tea-smoked-whole-duck",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112821/chinese-tea-smoked-whole-duck.97b321323431f1453d204a3ba9a35293.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Chinese Tea Smoked Whole Duck",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503b"),
  "id": "traditional-beef-empanadas-with-llajua-sauce-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133293/traditional-meat-empanadas-with-llajua-sauce-24-pack.800489d1d8db1e649e129968ed91e449.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "best-food",
  "dsc": "Traditional Beef Empanadas with Llajua Sauce - 24 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503c"),
  "id": "choose-your-own-pasta-dinner-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111241/choose-your-own-pasta-dinner-for-4.1195531d1b5fd7958e85d2640bd4d5bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fox & the Knife",
  "sections": "best-food",
  "dsc": "Pasta Dinner for 4 - Choose Your Own",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503d"),
  "id": "marcus-hot-fried-chicken-wings-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129322/marcus-fried-chicken-wings.95e4f4d5cb4d3e069f4addcb3e33b111.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Marcus Samuelsson's Streetbird",
  "sections": "best-food",
  "dsc": "Marcusâ Fried Chicken Wings for 2",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503e"),
  "id": "taco-combo-kit-for-4-6-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133992/taco-combo-kit-for-4-6-choose-your-own.62a9fa8e0b5912c035e2999508fe36e1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Johnny Sanchez",
  "sections": "best-food",
  "dsc": "Taco Combo Kit for 4-6 - Choose Your Own",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22503f"),
  "id": "shiitake-mushroom-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110987/shiitake-mushroom-buns-12-pack.449e51af13ae6204f3c2914355d427ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "best-food",
  "dsc": "Shiitake Mushroom Buns - 12 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225040"),
  "id": "turtle-soup",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102811/legendary-turtle-soup.12d6f4c9806c3cf11cd2ff2a160657e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Commander's Palace",
  "sections": "best-food",
  "dsc": "Legendary Turtle Soup",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225041"),
  "id": "blue-ribbon-special-sushi-diy-kit-for-2-3",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119272/blue-ribbon-special-sushi-diy-kit-for-2-3.08c8f6c674366187e651ccb03cd1747d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon Sushi",
  "sections": "best-food",
  "dsc": "Blue Ribbon Special Sushi - DIY Kit for 2-3",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225042"),
  "id": "burger-au-poivre-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "best-food",
  "dsc": "Burger Au Poivre Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225043"),
  "id": "pork-and-shrimp-wontons-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98019/pork-and-shrimp-wontons-20-pack.1489740a2c5ab4c5585b49ebbde2f1c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Pork and Shrimp Wontons - 20 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225044"),
  "id": "pasta-dinner-for-2-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112230/pasta-dinner-for-2-choose-your-own.f5edf5a6c05115eec571d2c2f3805300.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fox & the Knife",
  "sections": "best-food",
  "dsc": "Pasta Dinner for 2 - Choose Your Own",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225045"),
  "id": "traditional-argentinian-asado-dinner-kit-for-10-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126975/traditional-argentinian-asado-dinner-kit-for-8.0143a30b0ccda3282a3f81a0c13a6f7b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "best-food",
  "dsc": "Traditional Argentinian Asado Feast for 10-12",
  "price": 469,
  "rate": NumberInt(5),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225046"),
  "id": "neapolitan-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Delfina",
  "sections": "best-food",
  "dsc": "Neapolitan Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225047"),
  "id": "double-stack-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holeman & Finch",
  "sections": "best-food",
  "dsc": "Double Stack Burger Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225048"),
  "id": "bo-ssam-dinner-for-8-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111005/bo-ssam-dinner-for-4-6.20cb5b3dede7ecca90c888aadc93567f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "best-food",
  "dsc": "Whole Bo SsÃ¤m Dinner for 8-10",
  "price": 269,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225049"),
  "id": "chicken-jiaozi-dumplings-giant-cheese-burger-potstickers-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134028/chicken-jiaozi-dumplings-giant-cheese-burger-potstickers-best-seller-pack.908a1c285e5356202e5163fc03ede65e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Ms. Chi Potstickers and Dumplings - Combo Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504a"),
  "id": "vietnamese-dinner-kit-for-4-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133221/vietnamese-dinner-kit-for-4-choose-your-own.6adf8528fae31fa5260ee6c1bed222c4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Slanted Door",
  "sections": "best-food",
  "dsc": "Vietnamese Dinner Kit for 4 - Choose Your Own",
  "price": 149,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504b"),
  "id": "chicken-jiaozi-dumplings-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97105/chicken-jiaozi-dumplings-20-pack.15df330a0f96492d492d6f3ed6518aa8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Chicken Jiaozi Dumplings - 20 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504c"),
  "id": "whole-plate-short-rib-dinner-for-3-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117831/whole-plate-short-rib-dinner-for-3-4.3d4f7a1d5441c0a3a50263c89ef3fb47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "best-food",
  "dsc": "Whole Plate Short Rib Dinner for 3-4",
  "price": 249,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504d"),
  "id": "pasta-dinner-bestsellers-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111245/pasta-dinner-bestsellers-for-4.94ca16a49a00a4f50714e827ab686510.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fox & the Knife",
  "sections": "best-food",
  "dsc": "Best Sellers - Pasta Dinner for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504e"),
  "id": "best-seller-ramen-kits-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119444/best-seller-ramen-kits-for-4.6946ea916af35904079d82208a0cb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ivan Ramen",
  "sections": "best-food",
  "dsc": "Best Seller Ramen Kits for 4",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22504f"),
  "id": "carnitas-taco-kit-for-2-3",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133954/carnitas-taco-kit-for-2.8e93e32c7ad6399ab54ffd4ccffc648a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Frontera Grill",
  "sections": "best-food",
  "dsc": "Carnitas Taco Kit for 2-3",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225050"),
  "id": "neapolitan-pizza-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114414/neapolitan-pizza-choose-your-own-3-pack.5b29cea22f1eeee4b8d95057b9bc7abd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Delfina",
  "sections": "best-food",
  "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225051"),
  "id": "brown-butter-lobster-roll-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/93518/brown-butter-lobster-roll-kit-6-pack.b09e74d8a0f05fa77d00773d2daf12c6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eventide Oyster Co.",
  "sections": "best-food",
  "dsc": "Brown Butter Lobster Roll Kit - 6 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Portland, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225052"),
  "id": "taco-fiesta-pack-queso-margarita-mix-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119163/taco-party-pack-queso-margarita-mix-for-4-6.1468490bf51e9f474a2562f8d0f76be9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Johnny Sanchez",
  "sections": "best-food",
  "dsc": "Taco Fiesta Pack + Queso + Margarita Mix for 4-6",
  "price": 179,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225053"),
  "id": "the-crustacean-plateau-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131730/the-crustacean-plateau-dinner-for-4-6.d0de88df7471976c81acdcfa94806bee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "best-food",
  "dsc": "The Crustacean Plateau Seafood Dinner for 4-6",
  "price": 239,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225054"),
  "id": "the-family-coop-complete-fried-chicken-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "best-food",
  "dsc": "\"The Family Coop\" Complete Fried Chicken Dinner for 8-10",
  "price": 189,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225055"),
  "id": "gramercy-tavern-burger-kielbasa-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "best-food",
  "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
  "price": 149,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225056"),
  "id": "lobster-pot-pie-and-crab-cake-combo-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117760/lobster-pot-pie-and-crab-cake-combo-for-4.a3f470732ece5228abe8cdb25af96043.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Summer Shack",
  "sections": "best-food",
  "dsc": "Lobster Pot Pie and Crab Cake Combo for 4",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225057"),
  "id": "truffle-chicken-pot-pie-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132863/chicken-pot-pie-kit-for-4.7fb17eea18a6ef99129f189fcc130fca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wolfgang Puck Catering",
  "sections": "best-food",
  "dsc": "Truffle Chicken Pot Pie Kit for 4",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225058"),
  "id": "carnitas-taco-kit-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122300/carnitas-taco-kit-for-4.984935855d88edab90fe5859999221cb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Frontera Grill",
  "sections": "best-food",
  "dsc": "Carnitas Taco Kit for 4-6",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225059"),
  "id": "gluten-free-chinese-orange-chicken-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132017/gluten-free-chinese-orange-chicken-kit-for-4.b5618b86376b9ca33a0180504df4ccd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Gluten-Free Chinese Orange Chicken Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505a"),
  "id": "taiwanese-style-pork-chop-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107818/taiwanese-style-pork-chop-dinner-kit-for-4.af151d422000d25f084e36e5f83cccba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "best-food",
  "dsc": "Taiwanese Style Pork Chop Dinner Kit for 4",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505b"),
  "id": "best-seller-falafel-kit-for-6-vegan",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134459/best-seller-falafel-kit-for-6.5dc557098f859293bc45cefda7ecb3af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "TaÃ¯m",
  "sections": "best-food",
  "dsc": "Best Seller Falafel Kit for 6 (Vegan)",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505c"),
  "id": "signature-spicy-tuna-crispy-rice-diy-kit-for-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113679/spicy-tuna-crispy-rice-kit-for-4.53612097e152d97482a074c3250c6e28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon Sushi",
  "sections": "best-food",
  "dsc": "Signature Spicy Tuna Crispy Rice DIY Kit for 2-4",
  "price": 149,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505d"),
  "id": "redfarm-signature-sampler-for-3-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131850/redfarm-sampler-for-3-4.b47a4dad3b06d719e9fc17380238afd2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "RedFarm",
  "sections": "best-food",
  "dsc": "RedFarm Signature Sampler for 3-4",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505e"),
  "id": "yuzu-shio-ramen-kit-for-3",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132439/yuzu-shio-ramen-kit-for-3.eff2c00445f04ccad761867bf8083ab6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "AFURI",
  "sections": "best-food",
  "dsc": "Yuzu Shio Ramen Kit for 3",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22505f"),
  "id": "artisanal-bread-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "breads",
  "dsc": "Artisanal Bread - Choose Your Own 3 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225060"),
  "id": "artisanal-bread-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "breads",
  "dsc": "Artisanal Bread - Choose Your Own 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225061"),
  "id": "corn-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "breads",
  "dsc": "Corn Cheese Bread - 2 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225062"),
  "id": "tartine-bread-loaves-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tartine Bakery",
  "sections": "breads",
  "dsc": "Tartine Bread Loaves - Choose Your Own 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225063"),
  "id": "japanese-milk-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Craftsman and Wolves",
  "sections": "breads",
  "dsc": "Japanese Milk Bread - 2 Loaves",
  "price": 55,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225064"),
  "id": "artisanal-bread-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "breads",
  "dsc": "Artisanal Bread - Choose Your Own 6 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225065"),
  "id": "23572-artichoke-bread-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "breads",
  "dsc": "Artichoke Bread Sampler - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225066"),
  "id": "bavarian-soft-pretzel-twists-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "breads",
  "dsc": "Bavarian Soft Pretzel Twists - 10 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225067"),
  "id": "banana-bread-6-pack-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99033/mini-banana-bread-loaves-18-pack-choose-your-own.cf136bd604f91d94d067045b13ad0227.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Maui Banana Bread Co",
  "sections": "breads",
  "dsc": "Banana Bread- Choose Your Own 6 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Lahaina, HI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225068"),
  "id": "stuffed-bread-loaves-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128801/stuffed-bread-loaves-choose-your-own-2-pack.40c693cca82e78bf496dc14bf1f52d61.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Antique Bar & Bakery",
  "sections": "breads",
  "dsc": "Stuffed Bread Loaves - Choose Your Own 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225069"),
  "id": "15277-hot-and-spicy-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129676/hot-and-spicy-cheese-bread-2-pack.014477417093300bfb5e9ed8645bd0a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stella's of Madison",
  "sections": "breads",
  "dsc": "Hot & Spicy Cheese Bread - 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506a"),
  "id": "savory-bread-assortment-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116300/savory-bread-assortment-4-pack.3f088d3d463da68582c2ea93a7c1d547.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "breads",
  "dsc": "Savory Bread Assortment - 4 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506b"),
  "id": "classic-clam-chowder-and-bread-bowls-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98280/classic-clam-chowder-and-bread-bowls-4-pack.ce07ef6072a276e55bb2924f56d74ebb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Boudin Bakery",
  "sections": "breads",
  "dsc": "Classic Clam Chowder and Bread Bowls Kit - 4 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506c"),
  "id": "bread-and-roses-care-package",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132930/bread-and-roses-care-package.c60ba288ef2a179a3d6da325d33ff402.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bread and Roses Bakery",
  "sections": "breads",
  "dsc": "Bread & Roses Care Package",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Wells, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506d"),
  "id": "choose-your-own-gourmet-breadsticks-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90781/choose-your-own-gourmet-breadsticks-16-pack.887e7e2eb8f22d3cd4d89f1a11affd5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "breads",
  "dsc": "Choose Your Own Gourmet Breadsticks - 16 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506e"),
  "id": "babka-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106973/babka-choose-your-own-2-pack.7f0a32a47bf3e7d9582b94b6aaabbb10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kossar's Bagels & Bialys",
  "sections": "breads",
  "dsc": "Babka - Choose Your Own 2 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22506f"),
  "id": "original-garlic-cream-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105205/original-garlic-cream-cheese-bread-2-pack.7cb55509860ca0311b97222aae4eb0b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "breads",
  "dsc": "Original Garlic Cream Cheese Bread - 2 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225070"),
  "id": "artisanal-bread-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/88948/artisanal-bread-choose-your-own-2-pack.a33cb2854267dfc70780af82847e5557.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "High Street Philadelphia",
  "sections": "breads",
  "dsc": "Artisanal Bread - Choose Your Own 2 Pack",
  "price": 44,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225071"),
  "id": "artisanal-bread-best-sellers-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126686/artisanal-bread-best-sellers-3-pack.1dcfccc1a446fe9163fe9015fec5be11.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "breads",
  "dsc": "Artisanal Bread Best Sellers - 3 Pack",
  "price": 45,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225072"),
  "id": "italian-bread-2-loaves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134811/italian-bread-2-loaves.8a42be072eac0f8abdb93d256061515a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tomaro's Bakery",
  "sections": "breads",
  "dsc": "Italian Bread - 2 Loaves",
  "price": 35,
  "rate": NumberInt(4),
  "country": "Clarksburg, WV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225073"),
  "id": "24239-essa-bagel-bakers-dozen-kosher",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91160/essa-bagel-bakers-dozen-kosher.b69c2a8053463ce34cfb35f71e3ccee2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Essa Bagel",
  "sections": "breads",
  "dsc": "Essa Bagel Baker's Dozen (Kosher)",
  "price": 59,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225074"),
  "id": "pain-au-chocolat-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90466/pain-au-chocolat-8-pack.58a1a9fdc9920b4b8406fbb98a304a68.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ceci-Cela Patisserie",
  "sections": "breads",
  "dsc": "Pain au Chocolat - 8 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225075"),
  "id": "choose-your-own-gourmet-breadsticks-15-lb-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90725/choose-your-own-gourmet-breadsticks-5-lb-3-pack.030d6d0ed9eb8e65b1ff18f5d9212326.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "breads",
  "dsc": "Choose Your Own Gourmet Breadsticks - 15-lb. Pack",
  "price": 170,
  "rate": NumberInt(5),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225076"),
  "id": "pretzel-lovers-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123858/pretzel-lovers-combo-pack.73ed8b17c5dec3f399e3e2a9eea4ffbe.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "breads",
  "dsc": "Pretzel Lover's Combo Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225077"),
  "id": "korean-cream-cheese-bread-combo-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105212/korean-cream-cheese-bread-choose-your-own-2-pack.8b70b1b0f22846a1c0267b24a59378b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "breads",
  "dsc": "Korean Cream Cheese Bread Combo - 2 Pack",
  "price": 85,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225078"),
  "id": "15277-hot-and-spicy-cheese-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73537/hot-and-spicy-cheese-bread-4-pack.47296ecafd93e3f1fafea23458ae75b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stella's of Madison",
  "sections": "breads",
  "dsc": "Hot & Spicy Cheese Bread - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225079"),
  "id": "bavarian-pretzel-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124047/bavarian-pretzel-sticks-12-pack.6558773971c97369e557cc3b96bd846b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "breads",
  "dsc": "Bavarian Pretzel Buns - 12 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507a"),
  "id": "scratch-made-raisin-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98345/scratch-made-raisin-bread.6205c1a82759bc0249a62fe6ca7cdac6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Miller's Bakery",
  "sections": "breads",
  "dsc": "Scratch Made Raisin Bread - 2 Pack",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Ronks, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507b"),
  "id": "tartine-bread-loaves-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132859/tartine-bread-loaves-choose-your-own-4-pack.d51f0fdc2d4e345f0a08441190ef6c0b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tartine Bakery",
  "sections": "breads",
  "dsc": "Tartine Bread Loaves - Choose Your Own 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507c"),
  "id": "23572-pescadero-breads-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89536/pescadero-breads-sampler-4-pack.1a9082c2fbc58f9f6cd1d610b18aa64f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "breads",
  "dsc": "Choose Your Own Pescadero Breads - 4 Pack",
  "price": 54,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507d"),
  "id": "new-york-bagel-brunch-kit-for-6-sale",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105782/new-york-bagel-brunch-kit-for-6-6-free-bagels.7db930fc7e86f43f658f551ffc7ad967.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Utopia Bagels",
  "sections": "breads",
  "dsc": "New York Bagel Brunch Kit for 6 + 6 FREE Bagels",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Queens, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507e"),
  "id": "24011-breads-bakery-chocolate-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90530/breads-bakery-chocolate-babka-3-pack.82ccccf0e109eaa03af3f8f0a4405ced.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "breads",
  "dsc": "Breads Bakery Chocolate Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22507f"),
  "id": "signature-garlic-bread-with-sauces-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131203/garlic-bread-for-4-6.a227994dee61ef69e777a6a8ac1eadde.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "LAVO",
  "sections": "breads",
  "dsc": "Signature Garlic Bread with Sauces for 4-6",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225080"),
  "id": "choose-your-own-gourmet-breadsticks-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90702/choose-your-own-gourmet-breadsticks-4-pack.17986d6fdad9457523c4276d09ffd346.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "breads",
  "dsc": "Choose Your Own Gourmet Breadsticks - 4 Pack",
  "price": 35,
  "rate": NumberInt(5),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225081"),
  "id": "essa-bagel-bakers-dozen-kosher-buy-1-get-1-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/100871/essa-bagel-dozen-kosher-buy-1-get-1-free.9a369a3f64e48283b57e929a82a67565.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ess-a-Bagel",
  "sections": "breads",
  "dsc": "Ess-a-Bagel Dozen (Kosher) - BUY 1 GET 1 FREE",
  "price": 59.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225082"),
  "id": "kosher-frozendorf-ready-to-bake-braided-challah-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108248/kosher-frozendorf-frozen-braided-challah-2-pack.75fe43e83efa6c3d37634364fcab109b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charm City Kosher",
  "sections": "breads",
  "dsc": "Kosher Frozendorf Ready-to-Bake Braided Challah - 2 Pack",
  "price": 11,
  "rate": NumberInt(5),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225083"),
  "id": "235721-choose-your-own-artichoke-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134798/choose-your-own-artichoke-bread-4-pack.25422502c71cd2b37333f3acc70b6d55.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "breads",
  "dsc": "Choose Your Own Artichoke Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225084"),
  "id": "zucchini-loaf-cake-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109080/zucchini-loaf-cake-2-pack.e69149106247bb5bf112decf3a9c8e02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Gingered Peach",
  "sections": "breads",
  "dsc": "Zucchini Bread Loaf Cake - 2 Pack",
  "price": 54,
  "rate": NumberInt(5),
  "country": "Lawrence Twp, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225085"),
  "id": "bavarian-soft-pretzel-bites-100-pacl",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106719/bavarian-soft-pretzel-bites-100-pack.9e249cb79e3d6af92114fe2f80d97186.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "breads",
  "dsc": "Bavarian Soft Pretzel Bites - 100 Pack",
  "price": 45,
  "rate": NumberInt(4),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225086"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "breads",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225087"),
  "id": "pretzel-challah-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77556/pretzel-challah-3-pack.54741d680d90984246da074a143300f7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Butterflake Bakery",
  "sections": "breads",
  "dsc": "Pretzel Challah - 3 pack (Kosher)",
  "price": 54.99,
  "rate": NumberInt(5),
  "country": "Teaneck, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225088"),
  "id": "choose-your-own-bialy-bagel-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95079/6-bagel-6-bialy-combo-pack.8ad8c22bd9d4bdb633b40878facb9703.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kossar's Bagels & Bialys",
  "sections": "breads",
  "dsc": "6  Bagel + 6 Bialy Combo Pack",
  "price": 45,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225089"),
  "id": "hand-braided-baked-challah",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132919/hand-braided-challah-2-pack.0cebe56b739fd7d071d3c9b42d31a34e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zaro's Family Bakery",
  "sections": "breads",
  "dsc": "Hand Braided Challah - 2 Pack",
  "price": 35,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508a"),
  "id": "fresh-butter-croissants-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90481/fresh-butter-croissants-16-pack.aeced89575dd02fb89f30a3b7e1fab13.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ceci-Cela Patisserie",
  "sections": "breads",
  "dsc": "Fresh Butter Croissants - 16 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508b"),
  "id": "23572-pesto-artichoke-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134782/pesto-artichoke-bread-4-pack.e2ad53faef619e6e0b22b5f211d9a4d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "breads",
  "dsc": "Pesto Artichoke Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508c"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "breads",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508d"),
  "id": "bestselling-banana-bread-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99486/bestselling-mini-loaves-6-pack.c48bdbf6c2584b921841f50db863f438.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Maui Banana Bread Co",
  "sections": "breads",
  "dsc": "Best Seller Banana Bread - 6 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Lahaina, HI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508e"),
  "id": "sourdough-bread-assortment-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116312/sourdough-bread-assortment-4-pack.f5d3eb1f7d778a9ecf46d5b783572be6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "breads",
  "dsc": "Sourdough Bread Assortment - 4 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22508f"),
  "id": "choose-your-own-bagel-2-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/100125/choose-your-own-bagel-2-dozen.2bff022a30852d49a00f049e23536b97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "St-Viateur Bagel",
  "sections": "breads",
  "dsc": "Choose Your Own Bagel 2 Dozen",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Montreal, CN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225090"),
  "id": "monster-cream-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105193/monster-cream-cheese-bread-2-pack.6a26a695237d3c695607677f6d5e50c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "breads",
  "dsc": "Monster Cream Cheese Bread - 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225091"),
  "id": "240146-loaf-cake-combo-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134395/loaf-cake-combo-3-pack.2d0f371aea6b091b0cdca22d5a26068c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "breads",
  "dsc": "Loaf Cake Combo - 3 pack",
  "price": 47.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225092"),
  "id": "sourdough-bread-bowl-and-chowder-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121915/sourdough-bread-bowl-and-chowder-kit-for-4.cf1f14f389cfd87f4b8366ca2d04c1a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pike Place Chowder",
  "sections": "breads",
  "dsc": "Sourdough Bread Bowl & Chowder Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Seattle, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225093"),
  "id": "23572-artichoke-garlic-herb-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89520/artichoke-garlic-herb-bread-4-pack.a89e7791fb44a7aaae95f2b208e6c9d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "breads",
  "dsc": "Artichoke Garlic Herb Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225094"),
  "id": "choose-your-own-rye-breads-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131377/choose-your-own-rye-breads-4-pack.04acb73372123b696d02ee87d1b1bc22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lithuanian Bakery",
  "sections": "breads",
  "dsc": "Choose Your Own Rye Breads - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Omaha, NE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225095"),
  "id": "wisconsin-spicy-cheese-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77410/wisconsin-spicy-cheese-bread.c75334ccbc78903dc99156bb8eb5a7d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Uncle Mike's Bake Shoppe",
  "sections": "breads",
  "dsc": "Wisconsin Spicy Cheese Bread",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Suamico, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225096"),
  "id": "calic-bagel-assortment-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134209/calic-bagel-assortment-dozen.81c962f02ca8c4bb1ef2e45e1aad6c59.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "breads",
  "dsc": "Calic Bagel Assortment - Dozen",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225097"),
  "id": "lobster-roll-kit-and-wild-maine-blueberry-bread-pudding",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89278/lobster-roll-kit-and-wild-maine-blueberry-bread-pudding.78e91ec6331d032ae4d24f0d4026bdee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "McLoons Lobster Shack",
  "sections": "breads",
  "dsc": "Lobster Roll Kit And Wild Maine Blueberry Bread Pudding",
  "price": 155,
  "rate": NumberInt(5),
  "country": "South Thomaston, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225098"),
  "id": "loaf-cakes-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132543/loaf-cakes-choose-your-own-3-pack.0c0d456631e4b4e4b3aa30edf999ad07.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Gingered Peach",
  "sections": "breads",
  "dsc": "Loaf Cakes - Choose Your Own 3 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Lawrence Twp, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225099"),
  "id": "the-gramercy-tavern-burger-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "burgers",
  "dsc": "The Gramercy Tavern Burger - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509a"),
  "id": "shake-shack-shackburger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shake Shack",
  "sections": "burgers",
  "dsc": "Shake Shack ShackBurgerÂ® â 8 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509b"),
  "id": "gotts-cheeseburger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "burgers",
  "dsc": "Gott's Complete Cheeseburger Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509c"),
  "id": "le-big-matt-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "burgers",
  "dsc": "Le Big Matt Burger Kit for 6",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509d"),
  "id": "shake-shack-shackburger-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shake Shack",
  "sections": "burgers",
  "dsc": "Shake Shack ShackburgerÂ® â 16 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509e"),
  "id": "wagyu-burger-patties-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "burgers",
  "dsc": "Wagyu Burger Patties - 12 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22509f"),
  "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "burgers",
  "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
  "price": 175.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a0"),
  "id": "burger-bomb-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "burgers",
  "dsc": "Burger Bomb Kit for 6",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a1"),
  "id": "double-stack-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holeman & Finch",
  "sections": "burgers",
  "dsc": "Double Stack Burger Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a2"),
  "id": "goldbelly-burger-bash-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Goldbelly \"Burger Bash\" Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a3"),
  "id": "burger-au-poivre-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "burgers",
  "dsc": "Burger Au Poivre Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a4"),
  "id": "goldbelly-burger-blend-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "burgers",
  "dsc": "Goldbelly Burger Blend - 4 lbs.",
  "price": 79,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a5"),
  "id": "gotts-complete-cheeseburger-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133967/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "burgers",
  "dsc": "Gott's Complete Cheeseburger Kit for 8",
  "price": 149,
  "rate": NumberInt(4),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a6"),
  "id": "gramercy-tavern-burger-kielbasa-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "burgers",
  "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
  "price": 149,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a7"),
  "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114296/classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack.b726cfe63b6e1584a4e3c01db24f97d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "burgers",
  "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a8"),
  "id": "juicy-lucy-burger-kit-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132203/juicy-lucy-burger-kit-5-pack.2902a0c8549449529e87f902f425f9ae.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Whitmans",
  "sections": "burgers",
  "dsc": "Juicy Lucy Burger Kit - 5 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250a9"),
  "id": "blue-aged-cheddar-jalapeno-burgers-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124204/blue-aged-cheddar-jalapeno-burgers-6-pack.a8e79d575c4a6883a0a4daed6a18b635.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "burgers",
  "dsc": "Blue Aged Cheddar Jalapeno Burgers - 6 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250aa"),
  "id": "wagyu-burger-patties-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106998/wagyu-burger-patties-6-pack.7837b88faa095c92a0a1a00414296beb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "burgers",
  "dsc": "Wagyu Burger Patties - 6 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ab"),
  "id": "american-wagyu-burger-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109633/american-wagyu-burger-party-pack.6bb259a1c95c067d5da9a1057a9517e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holy Grail Steak Co.",
  "sections": "burgers",
  "dsc": "American Wagyu Burger Party Pack",
  "price": 199,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ac"),
  "id": "best-damn-cheeseburger-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134005/best-damn-cheeseburger-kit-8-pack.0c2ca295cc1b754d2867651184a07140.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "burgers",
  "dsc": "Best Damn Cheeseburger Kit - 8 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ad"),
  "id": "foie-gras-teriyaki-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137097/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "burgers",
  "dsc": "Foie Gras Teriyaki Burger Kit - 8 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ae"),
  "id": "juicy-lucifer-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120623/juicy-lucifer-burger-kit-for-4.5a231c2ed989431218aa6062ff89b20a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hell's Kitchen",
  "sections": "burgers",
  "dsc": "Juicy Lucifer Burger Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250af"),
  "id": "le-pig-mac-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106701/le-pig-mac-kit-for-4.d9b274673ffc1a1a2035c9573291cae2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cochon Butcher",
  "sections": "burgers",
  "dsc": "Le Pig Mac Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b0"),
  "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132910/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack.c2994c945ac66b003c7763c4b3fd5255.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "burgers",
  "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b1"),
  "id": "the-cheeseburger-wellington-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132490/the-burger-wellington-2-pack.eb53bc9ad74634bb0c5da44bc55f9362.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wellingtons LA",
  "sections": "burgers",
  "dsc": "\"The Cheeseburger\" Wellington - 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b2"),
  "id": "dry-aged-blend-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103715/dry-aged-blend-burgers.90e05b1839eff99eb724e7d6265e84f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Master Purveyors",
  "sections": "burgers",
  "dsc": "Dry-Aged Blend Burgers",
  "price": 54,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b3"),
  "id": "double-stack-burger-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132733/handf-double-stack-burger-kit-for-2.4ecf6b1bee6b0ecef3b82606860a1b5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holeman & Finch",
  "sections": "burgers",
  "dsc": "Double Stack Burger Kit for 2",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b4"),
  "id": "the-gold-label-burger-4-patties-6oz-each-15-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/130074/the-gold-label-burger-4-patties-6oz-each-15-lbs.492945fff05ba5f036eca31df024d22f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Gold Label Burger",
  "price": 69,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b5"),
  "id": "legendary-cheesy-western-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131302/legendary-cheesy-western-burger-kit-4-pack.393ceddb3bca3acd862e762e48e4c207.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Texas Inn",
  "sections": "burgers",
  "dsc": "Legendary \"Cheesy Western\" Burger Kit - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Lynchburg, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b6"),
  "id": "foie-gras-teriyaki-wagyu-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137099/Hall-by-Odo-Burger-Combo.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "burgers",
  "dsc": "Foie Gras Teriyaki + Wagyu Burger Kit - 8 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b7"),
  "id": "keens-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105255/keens-burger-kit-for-4.862e70d1671202747d23f732f3453c81.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Keens Steakhouse",
  "sections": "burgers",
  "dsc": "Keens Burger Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b8"),
  "id": "16001-100-fullblood-wagyu-beef-ground-beef",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134623/100-fullblood-wagyu-beef-ground-beef.3ce763ed33cc05cddecc1978cb197a7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "burgers",
  "dsc": "100% Fullblood Wagyu Beef Ground Beef",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250b9"),
  "id": "the-cheeseburger-wellington-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131557/the-burger-wellington-4-pack.aca42e69c68050d853d94eb5d4076dac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wellingtons LA",
  "sections": "burgers",
  "dsc": "\"The Cheeseburger\" Wellington - 4 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ba"),
  "id": "17663-mesquite-smoked-brisket-burger-patties-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131538/mesquite-smoked-brisket-burger-patties-dry-rub.628f7434c98a870a57b36c0c1dc4ec3f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Davila's BBQ",
  "sections": "burgers",
  "dsc": "Mesquite Smoked Brisket Burger Patties + Dry Rub",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Seguin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250bb"),
  "id": "gotts-impossible-burger-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129127/gott-s-impossible-burger-kit-for-8.83516ceaacc8918f0ccad6575a6b8425.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "burgers",
  "dsc": "Gottâs Impossibleâ¢ Burger Kit for 8",
  "price": 169,
  "rate": NumberInt(4),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250bc"),
  "id": "goldbelly-steak-burger-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Goldbelly Steak + Burger Sampler",
  "price": 135,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250bd"),
  "id": "hall-signature-wagyu-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137095/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "burgers",
  "dsc": "HALL Signature Wagyu Burger Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250be"),
  "id": "gourmet-burger-box-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97480/gourmet-burger-box-12-pack.a35a99e7afd03e8d1f5d3bf2eb33c46a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alewel's Country Meats",
  "sections": "burgers",
  "dsc": "Gourmet Burger Box - 12 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Warrensburg, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250bf"),
  "id": "foie-gras-teriyaki-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137098/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "burgers",
  "dsc": "Foie Gras Teriyaki Burger Kit - 4 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c0"),
  "id": "hall-signature-wagyu-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137096/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "burgers",
  "dsc": "HALL Signature Wagyu Burger Kit - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c1"),
  "id": "burger-patty-assortment-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108388/burger-patty-assortment-12-pack.1a508c39aa7b49a00c1c4349f88670a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "burgers",
  "dsc": "Burger Patty Assortment - 12 Pack",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c2"),
  "id": "gotts-roadside-impossible-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135117/IB_Burgers_2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Impossible Foods Shop",
  "sections": "burgers",
  "dsc": "Gottâs Roadside Impossibleâ¢ Burger Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c3"),
  "id": "short-rib-blend-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103717/short-rib-blend-burgers.a078c983a9ba2b3628a944a0c885ae14.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Master Purveyors",
  "sections": "burgers",
  "dsc": "Short Rib Blend Burgers",
  "price": 52,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c4"),
  "id": "classic-shrimp-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112675/classic-shrimp-burgers.965772a8abe95e6e5579e86312d74de6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "burgers",
  "dsc": "Classic Shrimp Burgers",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c5"),
  "id": "moobys-meal-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134095/moobys-meal-kit-6-pack.d0e1a6e3dd32eb2673b5df60c3db1818.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mooby's",
  "sections": "burgers",
  "dsc": "Mooby's Meal Kit - 6 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c6"),
  "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132978/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack.54ad2dc40fb4708ec1b6e5c3ccdf2f89.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "burgers",
  "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 8 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c7"),
  "id": "mesquite-smoked-brisket-burger-patties-hot-links-dry-rub",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79492/mesquite-smoked-brisket-burger-patties-hot-links-dry-rub.41cbe9a5d29f1a4ef3491ab6eb8713a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Davila's BBQ",
  "sections": "burgers",
  "dsc": "Mesquite Smoked Brisket Burger Patties + Hot Links + Dry Rub",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Seguin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c8"),
  "id": "hatch-green-chile-cheeseburger-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/25753/green-chile-cheeseburger-6-pack.f3b980b43c8661e8fac3634b082668a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sparky's Hatch Green Chile Burgers",
  "sections": "burgers",
  "dsc": "Hatch Green Chile Cheeseburger Kit - 6 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Hatch, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250c9"),
  "id": "Giant-cheese-burger-potstickers-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97098/giant-cheese-burger-potstickers-6-pack.36899150ea75b8869bc2bd46ad126a57.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "burgers",
  "dsc": "Giant Cheese Burger Potstickers - 6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ca"),
  "id": "juicy-lucy-burger-kit-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105731/juicy-lucy-burger-kit-10-pack.41d77903b061d6c6b080f990b4ad2fb7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Whitmans",
  "sections": "burgers",
  "dsc": "Juicy Lucy Burger Kit - 10 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250cb"),
  "id": "vegan-burger-grill-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lekka Burger",
  "sections": "burgers",
  "dsc": "Vegan Burger Grill Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250cc"),
  "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114319/classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack.36c8d716563c1af2d2ca1c1140d36273.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "burgers",
  "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 8 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250cd"),
  "id": "brisket-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124922/short-rib-burger-blend.6275c3ffad67f0e93de4eafbc4f809df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Brisket Burger - 8 Pack",
  "price": 31.9,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ce"),
  "id": "bfbol-original-blend-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124841/original-blend-burger.50bb5cf520d3f653b0b80187716cc3e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Original Blend Burger - 8 Pack",
  "price": 31.9,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250cf"),
  "id": "ribeye-burger-patties-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133972/ribeye-burger-patties-6-pack.dd62bc3b8a096f15429571865ba5d561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "burgers",
  "dsc": "Ribeye Burger Patties - 6 Pack",
  "price": 45,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d0"),
  "id": "raouls-steak-and-burgers-au-poivre-kit-2-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133421/raouls-burgers-and-steaks-au-poivre-kit.aeafc64d55d6ad7274cb8ba1b562f8eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "burgers",
  "dsc": "Raoul's Burgers and Steaks Au Poivre Kit",
  "price": 249,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d1"),
  "id": "bfbsr-short-rib-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132398/short-rib-burger-blend.586f10c35edd4d7c6e9cfa41e3b2d0d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "burgers",
  "dsc": "Short Rib Burger - 8 Pack",
  "price": 36,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d2"),
  "id": "gotts-impossible-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133852/gott-s-impossible-burger-kit-for-4.1170c94bac2ddef7de0c52cd7df6e0a3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "burgers",
  "dsc": "Gottâs Impossibleâ¢ Burger Kit for 4",
  "price": 109,
  "rate": NumberInt(5),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d3"),
  "id": "famous-french-bread-burger-fries-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129511/burger-fries-kit-for-4.ffc10e462cadece50d64f8ce5fd8ea7a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rotier's Restaurant",
  "sections": "burgers",
  "dsc": "Famous French Bread Burger + Fries Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d4"),
  "id": "vegan-burger-patties-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119472/vegan-burger-patties-12-pack.56f31f18b126e7f84b02b6f1babd5d12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Burgerlords",
  "sections": "burgers",
  "dsc": "Vegan Burger Patties - 12 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d5"),
  "id": "signature-chocolate-collection-25-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106318/large-signature-collection.6f21146f2b1945d80f7931d69b763ba7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Knipschildt Chocolatier",
  "sections": "chocolates",
  "dsc": "Signature Chocolate Collection Chocolate Gift Box - 25 Piece",
  "price": 60,
  "rate": NumberInt(4),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d6"),
  "id": "20482-chocolate-truffle-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131261/chocolate-truffle-cake.289d1e58e4f0ca2dd39568fba9c17e91.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ferrara Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Truffle Cake",
  "price": 59,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d7"),
  "id": "signature-macarons-chocolates-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132333/signature-macarons-chocolates-16-pieces.6072c1e13db3f2ebca89db228f421715.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "chocolates",
  "dsc": "Signature Macarons + Chocolates - 16 Pieces",
  "price": 65,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d8"),
  "id": "jacques-world-famous-chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "chocolates",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 6 Pack",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250d9"),
  "id": "milk-chocolate-turtle-gophers-gift-box-of-24",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97018/milk-chocolate-turtle-gophers-gift-box-of-24.9e12dafbdf9401faa776c2389c05b850.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Savannah's Candy Kitchen",
  "sections": "chocolates",
  "dsc": "Milk Chocolate Turtle Gophers - Gift Box of 24",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Savannah, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250da"),
  "id": "chocolate-stack-12-bars",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82587/chocolate-stack-12-bars.1d613389b988a1b21bcf46105306a55a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "chocolates",
  "dsc": "Chocolate Stack - 12 Bars",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250db"),
  "id": "15259-german-chocolate-killer-brownie-tin-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "chocolates",
  "dsc": "German Chocolate Killer BrownieÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250dc"),
  "id": "dark-chocolate-truffle-collection-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131532/dark-chocolate-truffle-collection-16-pieces.4109f4f80d9d9ddf81d7b704424245f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "chocolates",
  "dsc": "Dark Chocolate Truffle Collection - 16 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250dd"),
  "id": "raspberry-chocolate-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pietisserie",
  "sections": "chocolates",
  "dsc": "Raspberry Chocolate Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250de"),
  "id": "k-m-chocolate-sampler-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97479/k-m-chocolate-sampler-gift-box.e29912ba4410a090b1659cbe8aa8e2fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chocolate by Thomas Keller + Armando Manni",
  "sections": "chocolates",
  "dsc": "K+M Chocolate Sampler Gift Box",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Napa, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250df"),
  "id": "chocolate-fudge-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89476/chocolate-fudge-cake.1b255e0cd6b684b34d9e8f7c3f0fbb3a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Fudge Cake",
  "price": 69.95,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e0"),
  "id": "chocolate-covered-cupcake-half-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98898/chocolate-covered-cupcake-half-dozen.90ecdfa8028d2e46ead8f3c210e1946e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "chocolates",
  "dsc": "Chocolate Covered Cupcake - 6 Pack",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e1"),
  "id": "double-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131604/double-chocolate-cake.bff63e243145fe04ec8a384d1bc1926c.gif?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "chocolates",
  "dsc": "Double Chocolate Cake",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e2"),
  "id": "chocolate-ganache-fudge-brownie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108595/chocolate-ganache-fudge-brownie.fb14f000098178f7520f89e167756deb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "chocolates",
  "dsc": "Chocolate Ganache Fudge Brownie",
  "price": 45,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e3"),
  "id": "award-winning-chocolate-4-layer-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90005/award-winning-chocolate-4-layer-cake.b1667fe724c35e1461aad64bc1f982d3.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "We Take the Cake",
  "sections": "chocolates",
  "dsc": "Award-Winning Chocolate 4-Layer Cake",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Ft Lauderdale, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e4"),
  "id": "signature-chocolate-collection-15-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123407/signature-chocolate-collection-15-pieces.a2e79d99347af6d6247636f08083167c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "chocolates",
  "dsc": "Signature Chocolate Collection - 15 Pieces",
  "price": 65,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e5"),
  "id": "whisky-dark-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134355/whisky-dark-chocolate-cake.bef20867a13e7e802310b10b63eba282.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lady M Confections",
  "sections": "chocolates",
  "dsc": "Whisky Dark Chocolate Cake",
  "price": 125,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e6"),
  "id": "signature-chocolate-collection-12-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106341/medium-signature-chocolate-box.51543f5d16b82434582d85c9c40b201c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Knipschildt Chocolatier",
  "sections": "chocolates",
  "dsc": "Signature Chocolate Collection Gift Box- 12 Piece",
  "price": 32,
  "rate": NumberInt(5),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e7"),
  "id": "double-chocolate-cheesecake-with-ghirardelli-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134351/double-chocolate-cheesecake-with-ghirardelli-chocolate.8dbc9e4bd74b2ef7d962e1b3811dd43e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eli's Cheesecake Company",
  "sections": "chocolates",
  "dsc": "Double Chocolate Cheesecake with GhirardelliÂ® Chocolate",
  "price": 74,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e8"),
  "id": "chocolate-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77825/chocolate-cheesecake.0ec6ea97866d14cef7f66b58abd98ea9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Nuns of New Skete",
  "sections": "chocolates",
  "dsc": "Chocolate Cheesecake - 6\"",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Cambridge, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250e9"),
  "id": "dark-chocolate-truffle-collection-9-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133303/dark-chocolate-truffle-collection-9-pieces.4135c2ff34f76c89830c15e6048afd50.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "chocolates",
  "dsc": "Dark Chocolate Truffle Collection - 9 Pieces",
  "price": 34,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ea"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "chocolates",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250eb"),
  "id": "chocolate-mousse-supreme-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133142/chocolate-mousse-supreme-cake.5fe7244dd7efb592e941587d8e336ad3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "chocolates",
  "dsc": "Chocolate Mousse Supreme Cake",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ec"),
  "id": "the-boys-chocolate-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97161/famous-chocolate-pizza-3-pack.23e77730a97a44b9b6918f8c6b844e51.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Craig's LA",
  "sections": "chocolates",
  "dsc": "Famous Chocolate Pizza - 3 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ed"),
  "id": "chocolate-pretzel-passion-gift-assortment",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123066/chocolate-pretzel-passion-gift-assortment.a74f130ab33eb159450541f6b2932389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Plum",
  "sections": "chocolates",
  "dsc": "Chocolate Pretzel Passion Gift Assortment",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Forty Fort, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ee"),
  "id": "chocolate-tease-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90318/chocolate-tease-gift-box.2115f3d653b78b791d9ace9354509614.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cake Chicago",
  "sections": "chocolates",
  "dsc": "Chocolate Tease Gift Box",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ef"),
  "id": "milk-chocolate-truffle-collection-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81236/milk-chocolate-truffle-collection-16-pieces.be97988ab2fff3c32ed9f7c2187b33c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "chocolates",
  "dsc": "Milk Chocolate Truffle Collection - 16 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f0"),
  "id": "15678-not-a-nutter-killer-brownies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68639/not-a-nutter-killer-brownies.d152046f07bd1947176e1650891fd9f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "chocolates",
  "dsc": "Triple Chocolate Killer BrowniesÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f1"),
  "id": "signature-chocolate-collection-8-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132095/signature-chocolate-collection-8-pieces.d253c3253a84123d64a4792c9e4363b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "chocolates",
  "dsc": "Signature Chocolate Collection - 8 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f2"),
  "id": "chocolate-whoopie-pies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77887/chocolate-whoopie-pies.80ab8b83a3f272ff8e1eee50e7c5869d.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "McClure's Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Whoopie Pies",
  "price": 35,
  "rate": NumberInt(5),
  "country": "Gap, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f3"),
  "id": "outrageous-dark-chocolate-chocolate-chunk-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137162/SweetHedys-Outrageous-Dark-Chocolate-Chunk-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sweet Hedy",
  "sections": "chocolates",
  "dsc": "Outrageous Dark Chocolate Chocolate Chunk Cookies - 12 Pack",
  "price": 64,
  "rate": NumberInt(4),
  "country": "Miami, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f4"),
  "id": "double-chocolate-almond-fudge-cookies-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134450/double-chocolate-almond-fudge-cookies-dozen.df65a64c34daa39545f013ceee53a4f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "chocolates",
  "dsc": "Double Chocolate Almond Fudge Cookies - Dozen",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f5"),
  "id": "20-layer-chocolate-peanut-butter-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133914/20-layer-chocolate-peanut-butter-cake-for-6-8.4dd9bebd3e21ec24b4f8344f080ee5ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "LAVO",
  "sections": "chocolates",
  "dsc": "20 Layer Chocolate Peanut Butter Cake",
  "price": 105,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f6"),
  "id": "14913-chocolate-bees",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132418/chocolate-bees-with-caramelized-honey-center.eac0fef67d17204cc38d6742b7f36115.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John & Kira's",
  "sections": "chocolates",
  "dsc": "Chocolate Bees With Caramelized Honey Center",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f7"),
  "id": "heart-shaped-chocolate-pizza-with-mallet",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98003/heart-shaped-chocolate-pizza-with-mallet.58490f28e404729412d52e0b224f20cb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Plum",
  "sections": "chocolates",
  "dsc": "Heart Shaped Chocolate Pizza with Mallet",
  "price": 55,
  "rate": NumberInt(5),
  "country": "Forty Fort, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f8"),
  "id": "chocolate-mille-crepes-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126479/chocolate-mille-crepes-cake.3ed3d988314b5f42fcc3d24095f2105d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lady M Confections",
  "sections": "chocolates",
  "dsc": "Chocolate Mille CrÃªpes Cake",
  "price": 95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250f9"),
  "id": "chocolate-outrage-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/93607/chocolate-outrage-cake.52608e8b20476800690445ad646ff7f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "chocolates",
  "dsc": "Chocolate Outrage Cake",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250fa"),
  "id": "chocolate-fudge-rainbow-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91119/chocolate-fudge-rainbow-cake.b55af0b5cbbd3d65e0bb9486efe24c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Fudge Rainbow Cake",
  "price": 69.95,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250fb"),
  "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "chocolates",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 12 Pack",
  "price": 69.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250fc"),
  "id": "chocolate-rads-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119489/chocolate-rads-4-pack.2b8ba40b738f8394205d150abd0f8d72.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Model Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Rads - 4 Pack",
  "price": 19,
  "rate": NumberInt(5),
  "country": "Napa Valley, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250fd"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "chocolates",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250fe"),
  "id": "signature-chocolate-tower",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132872/signature-chocolate-tower.143747076dc0b522fa5043abc1ec0e59.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John & Kira's",
  "sections": "chocolates",
  "dsc": "Signature Chocolate Gift Tower",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2250ff"),
  "id": "chocolate-candy-striped-gift-tin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97032/chocolate-candy-striped-gift-tin.ab7c2ebff7fa9dc77e6386b9a9c97473.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Savannah's Candy Kitchen",
  "sections": "chocolates",
  "dsc": "Chocolate Candy Striped Gift Tin",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Savannah, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225100"),
  "id": "flourless-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121527/flourless-chocolate-cake.3d1d6395d574403aa10c1e0249a09539.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goldberg's Fine Foods",
  "sections": "chocolates",
  "dsc": "Flourless Chocolate Cake",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225101"),
  "id": "chocolate-dipped-macaroons",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69848/chocolate-dipped-macaroons.df025cfd54bffa6a05d2cbf371516959.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Danny Macaroons",
  "sections": "chocolates",
  "dsc": "Chocolate Dipped Macaroons",
  "price": 34,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225102"),
  "id": "dark-chocolate-nutty-cups",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134701/dark-chocolate-nutty-cups-assortment.eb1e3506a38ece5b86415bfd84198fe2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jessie's Nutty Cups",
  "sections": "chocolates",
  "dsc": "Dark Chocolate Nutty Cups Assortment",
  "price": 35,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225103"),
  "id": "chocolate-cherry-sumptuous-assortment",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96299/chocolate-cherries-and-nuts-sumptuous-assortment.afeacf174313c4fc32fa4c443ffa3dfc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chukar Cherries",
  "sections": "chocolates",
  "dsc": "Chocolate Cherries and Nuts Sumptuous Assortment",
  "price": 74.95,
  "rate": NumberInt(4),
  "country": "Prosser, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225104"),
  "id": "15538-chocolate-pecan-bourbon",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131607/chocolate-pecan-bourbon-pie.2ff5b3a4721d65bc7d40e6206a45b5ee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Michele's Pies",
  "sections": "chocolates",
  "dsc": "Chocolate Pecan Bourbon Pie",
  "price": 64,
  "rate": NumberInt(5),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225105"),
  "id": "chocolate-chip-cookie-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118296/chocolate-chip-cookie-cake.6d422e0c37ada9eef8032a3fda4ed7b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mini Melanie",
  "sections": "chocolates",
  "dsc": "Chocolate Chip Cookie Cake",
  "price": 64,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225106"),
  "id": "2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "chocolates",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
  "price": 104.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225107"),
  "id": "chocolate-marshmallows",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108670/chocolate-marshmallows.a5bb2a6f0b25f6058e82e486bc34020b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "chocolates",
  "dsc": "Chocolate Marshmallows",
  "price": 25,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225108"),
  "id": "chocolate-peanut-butter-smith-island-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112338/chocolate-peanut-butter-smith-island-cake.0f8b6c0c3d55fcab6f56b0a1b6fd8145.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "chocolates",
  "dsc": "Chocolate Peanut Butter Smith Island Cake",
  "price": 64,
  "rate": NumberInt(5),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225109"),
  "id": "chocolate-fudge-cake-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117940/chocolate-fudge-cake-8.8b8a6b0d787c2a69513e637f8d063c7f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rustika Cafe and Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Fudge Cake - 8\"",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510a"),
  "id": "jumbo-chocolate-chip-cookie-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134742/jumbo-chocolate-chip-cookie-cake.46a332c5fb281e93c82e6578365937d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "chocolates",
  "dsc": "Jumbo Chocolate Chip Cookie Cake",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510b"),
  "id": "double-chocolate-almond-fudge-chocolate-chip-cookie-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106645/double-chocolate-almond-fudge-chocolate-chip-cookie-dozen.9581815c5f57c01c26353c8eb52a6a08.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "chocolates",
  "dsc": "Double Chocolate Almond Fudge + Chocolate Chip Cookie Dozen",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510c"),
  "id": "20363-triple-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134638/triple-chocolate-cake.122224edae9326c45d6f08f343414bbf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Red Truck Bakery",
  "sections": "chocolates",
  "dsc": "Triple Chocolate Cake",
  "price": 32,
  "rate": NumberInt(5),
  "country": "Marshall, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510d"),
  "id": "17641-wilbur-the-chocolate-moose",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133618/wilbur-the-chocolate-moose.2503248c80b80f9fd7ca0c7fd865cccf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wilbur's of Maine Chocolate Confections",
  "sections": "chocolates",
  "dsc": "Wilbur the Chocolate Moose - 2 Pack",
  "price": 44,
  "rate": NumberInt(4),
  "country": "Freeport, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510e"),
  "id": "dutch-chocolate-basque-burnt-cheesecake-gluten-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131928/dutch-chocolate-basque-cheesecake.c814a4fd4ead01b27f323b3428f2b6e4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Little Grace Bakery",
  "sections": "chocolates",
  "dsc": "Dutch Chocolate Basque Burnt Cheesecake (Gluten Free)",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22510f"),
  "id": "chocolate-passion-layer-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97605/chocolate-passion-layer-cake.0562eb95df61a64486764db7f3ab4ddf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Owl Bakery",
  "sections": "chocolates",
  "dsc": "Chocolate Passion Layer Cake",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Kimmswick, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225110"),
  "id": "15259-german-chocolate-killer-brownie-tin-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "desserts",
  "dsc": "German Chocolate Killer BrownieÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225111"),
  "id": "world-famous-banana-pudding-party-sized",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "desserts",
  "dsc": "World Famous Banana Pudding Bowl (64 oz.)",
  "price": 56,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225112"),
  "id": "jacques-world-famous-chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "desserts",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 6 Pack",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225113"),
  "id": "luigis-original-cannoli-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Cannoli Pie Company",
  "sections": "desserts",
  "dsc": "Original Cannoli Pie",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeport, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225114"),
  "id": "sea-salted-caramel-swirl-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cotton Blues Cheesecake Company",
  "sections": "desserts",
  "dsc": "Sea-Salted Caramel Swirl Cheesecake",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Hattiesburg, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225115"),
  "id": "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Blackout Company",
  "sections": "desserts",
  "dsc": "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225116"),
  "id": "smores-variety-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78037/smores-variety-pack.86cf47d40c0c3508ce14d2659b3f99d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gotta Have S'more",
  "sections": "desserts",
  "dsc": "S'mores - Variety Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225117"),
  "id": "best-seller-cupcake-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94478/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crave Cupcakes",
  "sections": "desserts",
  "dsc": "Best Seller Cupcake Dozen",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225118"),
  "id": "choose-your-own-ice-cream-donuts-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "desserts",
  "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225119"),
  "id": "17481-jewish-dessert-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72507/jewish-classics-dessert-pack.7d4b76630f2fe75dcb7bbcf2501b7390.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ess-a-Bagel",
  "sections": "desserts",
  "dsc": "Jewish Classics Dessert Pack",
  "price": 89.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511a"),
  "id": "dessert-bar-care-package",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131609/dessert-bar-care-package.324aa28fe98c9dc67b75aac43376902e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bread and Roses Bakery",
  "sections": "desserts",
  "dsc": "Dessert Bar Care Package",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Wells, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511b"),
  "id": "donut-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97746/donut-cookies-12-pack.46f42c61c4a79fd2051a99b2f23e890e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stan's Donuts",
  "sections": "desserts",
  "dsc": "Donut Cookies - 12 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511c"),
  "id": "gulab-jamun-ice-cream-cakes-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105133/gulab-jamun-ice-cream-cakes-2-pack.c45b4d0750ad22d741f84dc1f26d20e7.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Malai Ice Cream",
  "sections": "desserts",
  "dsc": "Gulab Jamun Ice Cream Cakes - 2 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511d"),
  "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "desserts",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 12 Pack",
  "price": 69.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511e"),
  "id": "assorted-rice-krispie-treats-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95324/assorted-rice-krispie-treats-12-pack.801c4bad4750f54e7a27652df3a7b6ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Treat House",
  "sections": "desserts",
  "dsc": "Assorted Rice Krispie Treats - 12 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22511f"),
  "id": "choose-your-own-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "desserts",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 79.95,
  "rate": NumberInt(4),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225120"),
  "id": "candy-cookie-cheesecake-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82267/candy-cookie-cheesecake-sampler.bb8e5e3fb399edaa00a529271565d16f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eli's Cheesecake Company",
  "sections": "desserts",
  "dsc": "Candy Cookie Cheesecake Sampler",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225121"),
  "id": "chocolate-marshmallows",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108670/chocolate-marshmallows.a5bb2a6f0b25f6058e82e486bc34020b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "desserts",
  "dsc": "Chocolate Marshmallows",
  "price": 25,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225122"),
  "id": "magnolia-banana-pudding-explore",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136779/Magnolia-NEW-BP-Pudding-Cup.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "desserts",
  "dsc": "World Famous Banana Pudding",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225123"),
  "id": "brooklyn-blackout-parfait",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82266/brooklyn-blackout-parfait.756b6c8cf3066aaca322fb12595bb3a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "desserts",
  "dsc": "Brooklyn Blackout Cupcake Jars",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225124"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "desserts",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225125"),
  "id": "dessert-bars-choose-your-own-9-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109092/dessert-bars-choose-your-own-9-pack.38ec1ad968769f3ab76bcb0826a0b8b7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Gingered Peach",
  "sections": "desserts",
  "dsc": "Dessert Bars - Choose Your Own 9 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Lawrence Twp, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225126"),
  "id": "cinnamon-rolls-honey-bees-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103958/sweet-roll-sampler-2-dozen.8b0fd9bfd3acc7aadc1a478d5b4f27ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Weikel's Bakery",
  "sections": "desserts",
  "dsc": "Cinnamon Rolls and Honey Bees Sampler Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "La Grange, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225127"),
  "id": "original-ny-plain-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133583/plain-cheesecake.10ff643fb84a50e131e0a216dfb66f09.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "desserts",
  "dsc": "Junior's Original Cheesecake",
  "price": 64.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225128"),
  "id": "little-italy-dessert-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101477/little-italy-dessert-pack.3540a0f8d95494fa394f494d19f8c9e4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ferrara Bakery",
  "sections": "desserts",
  "dsc": "Little Italy Dessert Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225129"),
  "id": "cookie-monster-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131739/cookie-monster-ice-cream-sandwich-8-pack.9ad71ce3dd6f39fcbddc35af60a3b866.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nightingale Ice Cream Sandwiches",
  "sections": "desserts",
  "dsc": "Cookie Monster Ice Cream Sandwich - 8 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Richmond, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512a"),
  "id": "cinnamon-roll-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134085/cinnamon-roll-cheesecake.57da7d19317f774571fe8f667f38d8c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Honey Cheesecakes",
  "sections": "desserts",
  "dsc": "Cinnamon Roll Cheesecake",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Statesboro, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512b"),
  "id": "23595-choose-your-own-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89591/choose-your-own-ice-cream-sandwich-8-pack.aca778cca349220b2cf682a0577e1b7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "desserts",
  "dsc": "Choose Your Own Ice Cream Sandwich - 8 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512c"),
  "id": "banana-pudding-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121725/banana-pudding-deluxe-4-pack.36e4c2a89b15ec4352a7b68b471a982b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Puddery",
  "sections": "desserts",
  "dsc": "Banana Pudding Sampler - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Long Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512d"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "desserts",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512e"),
  "id": "24011-breads-bakery-chocolate-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90530/breads-bakery-chocolate-babka-3-pack.82ccccf0e109eaa03af3f8f0a4405ced.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "desserts",
  "dsc": "Breads Bakery Chocolate Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22512f"),
  "id": "cheesecake-macarons-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91242/cheesecake-macarons-24-pack.98311118ad15fcff82a74763d1a8ed32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "desserts",
  "dsc": "Cheesecake Macarons - 24 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225130"),
  "id": "brownie-explosion-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86905/plain-cheesecake.0ff81b367c16fb722c66d6d1deab0fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "desserts",
  "dsc": "Brownie Explosion Cheesecake",
  "price": 74.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225131"),
  "id": "chocolate-mousse-supreme-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133142/chocolate-mousse-supreme-cake.5fe7244dd7efb592e941587d8e336ad3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "desserts",
  "dsc": "Chocolate Mousse Supreme Cake",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225132"),
  "id": "smores-cookie-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133252/smores-cookie-12-pack.2fefcfed46bc853bc16b28421b935e72.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cookie Good",
  "sections": "desserts",
  "dsc": "S'mores Cookie - 12 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225133"),
  "id": "choose-your-own-ice-cream-donuts-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87214/choose-your-own-ice-cream-donuts-12-pack.f6794011fbc58adfac58b3e1d2f2abe5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "desserts",
  "dsc": "Choose Your Own Ice Cream Donuts - 12 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225134"),
  "id": "chocolate-covered-cupcake-half-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98898/chocolate-covered-cupcake-half-dozen.90ecdfa8028d2e46ead8f3c210e1946e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "desserts",
  "dsc": "Chocolate Covered Cupcake - 6 Pack",
  "price": 65,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225135"),
  "id": "raspberry-chocolate-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pietisserie",
  "sections": "desserts",
  "dsc": "Raspberry Chocolate Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225136"),
  "id": "23595-best-sellers-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132372/best-sellers-ice-cream-sandwiches-8-pack.d30351bef255e98e3ca8fa4118c997fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "desserts",
  "dsc": "Best Sellers Ice Cream Sandwiches - 8 Pack",
  "price": 74,
  "rate": NumberInt(4),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225137"),
  "id": "chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78119/chocolate-chip-cookies.6897d911cf557257517e1ddcb648214b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Appalachia Cookie Company",
  "sections": "desserts",
  "dsc": "Chocolate Chip Cookies",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Boone, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225138"),
  "id": "17228-4-pint-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71773/choose-your-own-boozy-ice-cream-4-pints.cecb4c1a4d29b16b44c2b88fa59b3e86.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "desserts",
  "dsc": "Choose Your Own Boozy Ice Cream - 4 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225139"),
  "id": "cheesecake-macarons-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107554/cheesecake-macarons-12-pack.e6d5a23285fc17c227aab7c574163077.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "desserts",
  "dsc": "Cheesecake Macarons - 12 Pack",
  "price": 55,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513a"),
  "id": "banana-pudding-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121746/pudding-choose-your-own-4-pack.5239bcb1356691a502359132f4574288.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Puddery",
  "sections": "desserts",
  "dsc": "Banana Pudding - Choose Your Own 4 Pack",
  "price": 74,
  "rate": NumberInt(4),
  "country": "Long Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513b"),
  "id": "hong-kong-boba-tea-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "drinks",
  "dsc": "Hong Kong Boba Tea Kit for 6",
  "price": 59,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513c"),
  "id": "guys-caliente-margaritas-for-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "drinks",
  "dsc": "Guy's Caliente Margaritas for 12",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513d"),
  "id": "woodford-reserve-mint-julep-syrup",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "drinks",
  "dsc": "Woodford Reserve Mint Julep Syrup",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513e"),
  "id": "new-orleans-hurricane-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franco's Hurricane Mix",
  "sections": "drinks",
  "dsc": "New Orleans Hurricane Mix",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Natchitoches, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22513f"),
  "id": "evan-williams-gourmet-mint-julep-mix-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Evan Williams",
  "sections": "drinks",
  "dsc": "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225140"),
  "id": "margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Johnny Sanchez",
  "sections": "drinks",
  "dsc": "Margarita Mix",
  "price": 59,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225141"),
  "id": "woodford-reserve-mint-julep-syrup-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "drinks",
  "dsc": "Woodford Reserve Mint Julep Syrup - 2 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225142"),
  "id": "evan-williams-gourmet-mint-julep-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Evan Williams",
  "sections": "drinks",
  "dsc": "Evan Williams Gourmet Mint Julep Mix",
  "price": 25,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225143"),
  "id": "knock-you-naked-strawberry-margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132264/knock-you-naked-strawberry-margarita-mix.c51ce9329ab84709e5b1d3d474cbb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fat Mama's Tamales",
  "sections": "drinks",
  "dsc": "\"Knock-You-Naked\" Strawberry Margarita Mix",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Natchez, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225144"),
  "id": "cold-brew-concentrate-variety-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134399/cold-brew-concentrate-variety-6-pack.ee2c1ff6e21556a824d07fcd6dc96682.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "Cold Brew Concentrate Variety - 6 Pack",
  "price": 60,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225145"),
  "id": "organic-shots-bundle-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "drinks",
  "dsc": "Organic Shots Bundle-12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225146"),
  "id": "papaya-king-tropical-drink",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Papaya King",
  "sections": "drinks",
  "dsc": "Papaya King - Tropical Drink",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225147"),
  "id": "dels-x-iggys-frozen-lemonade-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136231/Iggys-Del-Lemonade-Mix-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Iggy's",
  "sections": "drinks",
  "dsc": "Del's x Iggy's Frozen Lemonade Mix",
  "price": 10,
  "rate": NumberInt(4),
  "country": "Warwick, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225148"),
  "id": "unicorn-parade-milkshake-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "drinks",
  "dsc": "Unicorn Parade Milkshake Kit for 8",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225149"),
  "id": "15193-old-honey-barn-mint-julep-mixer-750ml",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133924/old-honey-barn-mint-julep-750ml.169d91ce479cb7cd99ed97b2148ff6ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Honey Barn Mint Julep",
  "sections": "drinks",
  "dsc": "Old Honey Barn Mint Julep - 750ml Fifth",
  "price": 34,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514a"),
  "id": "15323-cocktail-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132819/cocktail-party-4-pack.97b92c6a6c87168fc547da5f7bed8c73.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rick's Picks",
  "sections": "drinks",
  "dsc": "Cocktail Party 4 PACK",
  "price": 49,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514b"),
  "id": "chickpea-chiller-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Hummus & Pita Co.",
  "sections": "drinks",
  "dsc": "Chickpea Chiller Kit for 6",
  "price": 89,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514c"),
  "id": "16591-knock-you-naked-margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70442/knock-you-naked-margarita-mix.e5d122df55fdae061eb72e95336328a0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fat Mama's Tamales",
  "sections": "drinks",
  "dsc": "\"Knock-You-Naked\" Margarita Mix",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Natchez, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514d"),
  "id": "hazelnut-mocha-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/65884/hazelnut-mocha-cold-brew-concentrate-6-pack.f5cfd77c0666af4bbbc6243a4c613ce7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "Hazelnut Mocha Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514e"),
  "id": "15194-old-honey-barn-mint-julep-mixer-200ml",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/950/old-honey-barn-mint-julep-mixer-200ml.e0b131d6d9b69963706b43fd4334ab74.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Honey Barn Mint Julep",
  "sections": "drinks",
  "dsc": "Old Honey Barn Mint Julep Mixer - 200ml Flask",
  "price": 25,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22514f"),
  "id": "mr-grumpy-milkshake-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/75112/mr-grumpy-milkshake-kit-for-8.174f846e3252d7c668d034776db22cd6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "drinks",
  "dsc": "Mr. Grumpy Milkshake Kit for 8",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225150"),
  "id": "low-sugar-juice-cleanse-7-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104418/low-sugar-juice-cleanse-7-pack.9496c3e8b94cb767497158f4502536e8.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "drinks",
  "dsc": "Low Sugar Juice Cleanse-7 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225151"),
  "id": "kentucky-derby-mint-julep-gift-set",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/103859/kentucky-derby-mint-julep-gift-set.79720eda4e9c8e3fcf9ecb5c79827f2c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "drinks",
  "dsc": "Kentucky Derby Mint Julep Gift Set",
  "price": 59.95,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225152"),
  "id": "french-vanilla-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134205/french-vanilla-cold-brew-concentrate-6-pack.aada7a4ffa58cae68695d132fece746c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "French Vanilla Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225153"),
  "id": "iggys-soda-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136853/Iggys-Soda-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Iggy's",
  "sections": "drinks",
  "dsc": "Iggy's Soda - 4 Pack",
  "price": 11,
  "rate": NumberInt(4),
  "country": "Warwick, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225154"),
  "id": "002-charleston-bloody-mary-mix-weekender-bold-and-spicy",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66364/weekender-charleston-bloody-mary-mix-bold-and-spicy.c372868c9937e407a299a22001e210e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "drinks",
  "dsc": "Weekender | Charleston Bloody Mary Mix Bold & Spicy",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225155"),
  "id": "nola-cold-brew-concentrate-bag-in-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104363/nola-cold-brew-concentrate-bag-in-box.3df6fde8bd83f29235565984ae8ed22b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "NOLA Cold Brew Concentrate Bag-in-Box",
  "price": 40,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225156"),
  "id": "002-original-cold-brewed-coffee-syrup",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/1228/original-cold-brewed-coffee-syrup.9a2306691f0a5681e98300a98cd1c243.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dave's Coffee",
  "sections": "drinks",
  "dsc": "Original Cold Brewed Coffee Syrup - 3 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Charlestown, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225157"),
  "id": "signature-juice-cleanse-7-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104373/signature-juice-cleanse-7-pack.7db8a0fcef0a9bfb72bcaa5c6d635470.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "drinks",
  "dsc": "Signature Juice Cleanse-7 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225158"),
  "id": "metal-drink-bottle",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87464/metal-drink-bottle.2ebe632ef74921a6a2c5cf8b6cdddc4b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Russ & Daughters",
  "sections": "drinks",
  "dsc": "Metal Drink Bottle",
  "price": 24,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225159"),
  "id": "greens-juice-bundle-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/90472/greens-juice-bundle-5-pack.2301dfa6fc273a6bf41c235733590aaf.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "drinks",
  "dsc": "Greens Juice Bundle-5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515a"),
  "id": "16990-frozen-hot-chocolate-party-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131963/frozen-hot-chocolate-party-gift-box.d59c47117dedfc24b39ca5359564e26e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "drinks",
  "dsc": "Frozen Hot Chocolate Party Gift Box",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515b"),
  "id": "duck-duck-goat-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/71796/duck-duck-goat-dinner-for-2-meal-kit.ab94e26065d34ca87a138379f9f20887.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stephanie Izard of Girl & The Goat",
  "sections": "drinks",
  "dsc": "Duck Duck Goat Dinner & Drinks Kit for 2",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515c"),
  "id": "15451-bold-and-spicy-8-oz-case",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55350/bold-and-spicy-8-oz-case.d62f69b498aa580d5101214262b18672.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "drinks",
  "dsc": "Bold and Spicy 8 oz. Case",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515d"),
  "id": "immune-boosting-juice-bundle-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133353/immune-boosting-juice-bundle-6-pack.9ddda68328b0b72d6a0872d1d967272e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "drinks",
  "dsc": "Immune Boosting Juice Bundle-6 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515e"),
  "id": "nola-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134045/nola-cold-brew-concentrate-6-pack.51aeb42af09ff5b076dac0310b92bb9c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "NOLA Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22515f"),
  "id": "kermits-double-strength-key-lime-juice",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132276/kermits-double-strength-key-lime-juice.38a582bc4996cca8e8f1e52476001c60.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kermit's Key West Key Lime Shoppe",
  "sections": "drinks",
  "dsc": "Kermit's Double-Strength Key Lime Juice - 2 Pack",
  "price": 29,
  "rate": NumberInt(4),
  "country": "Key West, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225160"),
  "id": "16991-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/6979/hot-chocolate-mix.9be2c47c82bad10c222bded8baaa9de7.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "drinks",
  "dsc": "Hot Chocolate Mix",
  "price": 35,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225161"),
  "id": "nola-cold-brew-concentrate-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134067/nola-cold-brew-concentrate-12-pack.71a8cd3ae912d3fe69ed92bb507b3b29.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "NOLA Cold Brew Concentrate - 12 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225162"),
  "id": "POB1-pat-obriens-new-orleans-drink-mixes",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/27512/pat-obriens-new-orleans-drink-mixes.977ee6c9de74923c63a180468ff94a86.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat O'Brien's Hurricanes",
  "sections": "drinks",
  "dsc": "Pat O'Brien's New Orleans Drink Mixes",
  "price": 25,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225163"),
  "id": "15703-frrrozen-mint-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55314/frrrozen-mint-hot-chocolate.742cfc89989890eb38dc3092f189b967.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "drinks",
  "dsc": "Frrrozen Mint Hot Chocolate",
  "price": 29,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225164"),
  "id": "234234-frrrozen-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134225/frrrozen-hot-chocolate.867217d2781ea3db60b7ea2b116f9cd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "drinks",
  "dsc": "Frrrozen Hot Chocolate",
  "price": 29,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225165"),
  "id": "15702-frrrozen-salted-caramel-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133019/frrrozen-salted-caramel-hot-chocolate.1efee40abefcefda7716fa965375f399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "drinks",
  "dsc": "Frrrozen Salted Caramel Hot Chocolate",
  "price": 29,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225166"),
  "id": "003-bender-charleston-bloody-mary-mix-bold-and-spicy",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66370/bender-charleston-bloody-mary-mix-bold-and-spicy.72a356456124c0663bd8c0d9110414b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "drinks",
  "dsc": "Bender | Charleston Bloody Mary Mix Bold & Spicy",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225167"),
  "id": "lil-easy-nola-cold-brew-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132671/lil-easy-nola-cold-brew-12-pack.f80c2041d4720acb3f099e41bab2b436.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "drinks",
  "dsc": "Lil' Easy NOLA Cold Brew - 12 Pack",
  "price": 40,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225168"),
  "id": "hot-dogs-tropical-drink",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133348/papaya-king-hot-dogs-tropical-drink.0e00794e37b13765181d2d7f0785cd9a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Papaya King",
  "sections": "drinks",
  "dsc": "Papaya King Hot Dogs + Tropical Drink",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225169"),
  "id": "virtual-cocktail-party-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102046/virtual-cocktail-party-kit.32af5b8dcdc21513673ff28a32f79edc.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "drinks",
  "dsc": "Boozy Ice Cream Cocktail Party Kit",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516a"),
  "id": "002-cafe-du-monde-coffee-and-beignets",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55362/cafe-du-monde-coffee-and-beignet-mix.c9db4d8ac11248a827f9e5dbf056fe7f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cafe du Monde Beignets",
  "sections": "drinks",
  "dsc": "Cafe du Monde Coffee & Beignet Mix",
  "price": 29,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516b"),
  "id": "the-coop-complete-fried-chicken-dinner-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516c"),
  "id": "hot-chicken-whole-bird",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110733/hot-chicken-whole-bird.bfd696b1cf611210ee813293c4c1bf28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Hot Chicken - Whole Bird",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516d"),
  "id": "the-bird-fried-chicken-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132392/fried-chicken-for-4.0e6dfb35e3b83144791a5ddae71836e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Bird\" Fried Chicken for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516e"),
  "id": "fried-chicken-biscuit-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sunrise Biscuit Kitchen",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken Biscuit Sandwich Kit",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Chapel Hill, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22516f"),
  "id": "nashville-hot-chicken-family-meal-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103169/nashville-hot-chicken-family-meal-for-4.43a0ea9ae1b7663ff18d82f4930fa561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Nashville Hot Chicken Family Meal for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225170"),
  "id": "the-family-coop-complete-fried-chicken-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Family Coop\" Complete Fried Chicken Dinner for 8-10",
  "price": 189,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225171"),
  "id": "korean-fried-chicken-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108361/korean-fried-chicken-kit-for-4.4c354ab17c40cd78402d4697b1e075e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "fried-chicken",
  "dsc": "Korean Fried Chicken Kit for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225172"),
  "id": "the-family-bird-fried-chicken-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132849/fried-chicken-for-8.7f488618ab57ac91a8e230eb70a35a19.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Family Bird\" Fried Chicken for 8",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225173"),
  "id": "nashville-hot-chicken-family-meal-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103192/nashville-hot-chicken-family-meal-for-8.9b522371aa18fb4be255db66e39e3e1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Nashville Hot Chicken Family Meal for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225174"),
  "id": "hot-honey-chicken-and-cornbread-waffles-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Marcus Samuelsson's Streetbird",
  "sections": "fried-chicken",
  "dsc": "Marcusâ Hot Honey Chicken & Cornbread Waffles Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225175"),
  "id": "fried-chicken-dinner-kit-for-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118643/fried-chicken-dinner-kit-for-2-4.2f685dc798e641bed96151b31e4b9910.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Yardbird",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken Dinner Kit for 2-4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Miami Beach, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225176"),
  "id": "fried-chicken-sandwich-combo-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115433/fried-chicken-sandwich-combo-kit-for-6.649e00580828a749ee120ec205cf9bb8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken Sandwich Combo Kit for 6",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225177"),
  "id": "picnic-chicken-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119467/picnic-chicken-sandwich-kit-for-4.f77dbec2fbf26fd8e2482a640e51a6af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "fried-chicken",
  "dsc": "Picnic Chicken Sandwich Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225178"),
  "id": "jumbo-hot-chicken-wings-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133195/jumbo-hot-chicken-wings-12-pack.a386d81ef4c0d23fb23eb39493248004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Jumbo Hot Chicken Wings - 12 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225179"),
  "id": "japanese-fried-chicken-dinner-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116269/en-fried-chicken-dinner-kit-for-2.5655f91f8092ca3f732d396623e06476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "En Japanese Brasserie",
  "sections": "fried-chicken",
  "dsc": "Japanese Fried Chicken Dinner Kit for 2",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517a"),
  "id": "world-famous-hot-chicken-and-waffles-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119032/world-famous-hot-chicken-and-waffles-for-6.9274da723865fe9f76ef20e6039dfa68.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "World Famous Hot Chicken & Waffles for 6",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517b"),
  "id": "chicken-tenders-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115439/chicken-tenders-25-pack.97435f460ba110b72cd0848240ab7180.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "fried-chicken",
  "dsc": "Chicken Tenders - 25 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517c"),
  "id": "pappys-ribs-and-chicken-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106948/pappys-ribs-and-chicken-dinner-for-8.904cebbd327940da15399e0608dffa55.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "fried-chicken",
  "dsc": "Pappy's Ribs & Chicken - Dinner for 8",
  "price": 129,
  "rate": NumberInt(4),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517d"),
  "id": "game-day-jumbo-fried-chicken-wings-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117190/game-day-jumbo-fried-chicken-wings-24-pack.2fc78e31cee5717c75fba7481e013798.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"Game Day\" Jumbo Fried Chicken Wings - 24 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517e"),
  "id": "hot-chicken-2-whole-birds",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133896/hot-chicken-2-whole-birds.4894d5973260e21e1e8d7cfd3a24a0c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Hot Chicken - 2 Whole Birds",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22517f"),
  "id": "fried-chicken-10-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107261/fried-chicken-10-pieces.31a36850d1e10c93437a6619072e1264.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wayfare Tavern",
  "sections": "fried-chicken",
  "dsc": "Wayfare Tavern Fried Chicken - 10 Pieces",
  "price": 89,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225180"),
  "id": "carla-halls-nashville-hot-fried-chicken-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116359/carla-hall-s-hot-fried-chicken-dinner-for-4-6.d10131654587d8e4c81319cd8b2408e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Carla Hall",
  "sections": "fried-chicken",
  "dsc": "Carla Hallâs Nashville Hot Fried Chicken Dinner for 4-6",
  "price": 189,
  "rate": NumberInt(5),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225181"),
  "id": "fried-chicken-and-wings-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113738/fried-chicken-and-wings-for-6.b0daa38a283c32fbbb56263919d80475.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken & Jumbo Wings for 6",
  "price": 159,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225182"),
  "id": "18635-signature-chicken-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75440/oprahs-favorite-signature-chicken-pie.13051bc388a198084460367c102db36f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Centerville Pie Co.",
  "sections": "fried-chicken",
  "dsc": "\"Oprah's Favorite\" Signature Chicken Pie",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Centerville, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225183"),
  "id": "korean-bbq-sausage-fried-chicken-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108394/korean-bbq-sausage-fried-chicken-kit-for-8.8d3be80287dda24f8153f28e9efab6a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "fried-chicken",
  "dsc": "Korean BBQ Sausage + Fried Chicken Kit for 8",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225184"),
  "id": "korean-fried-chicken-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123844/korean-fried-chicken-10-pack.e0b9eb5e82d9ff1718d31d88f78b5e6c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Parachute",
  "sections": "fried-chicken",
  "dsc": "Korean Fried Chicken - 10 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225185"),
  "id": "chicken-pot-pie-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102828/chicken-pot-pie-4-pack.00e5d95a6fbca63c074cc23a27049020.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Little Pie Company",
  "sections": "fried-chicken",
  "dsc": "Chicken Pot Pie - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225186"),
  "id": "picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119533/picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-8.6b388604d0650e0335b703b7cd7bb3cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "fried-chicken",
  "dsc": "Picnic Chicken Sandwich with Memphis Mustard Slaw Kit for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225187"),
  "id": "the-big-game-combo-fried-chicken-drums-and-jumbo-wings-for-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132683/the-big-game-combo-fried-chicken-drums-and-jumbo-wings-for-12.3139f00d0c50b0fa18739175561f0841.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Big Game Combo\" Fried Chicken Drums & Jumbo Wings for 12",
  "price": 199,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225188"),
  "id": "nashville-hot-jumbo-chicken-tenders-family-meal-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133718/nashville-hot-jumbo-chicken-tenders-family-meal-for-8.4dfbb330cc846e6157ca5556bba659f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Nashville Hot JUMBO Chicken Tenders Family Meal for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225189"),
  "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "fried-chicken",
  "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518a"),
  "id": "wing-it-up-fried-chicken-wings-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133927/fried-chicken-wings-25-pack.957f793865cffef6b18db109a88b7bcb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"Wing It Up!\" Jumbo Fried Chicken Wings - 24 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518b"),
  "id": "crispy-crunchy-breaded-nashville-hot-wings-50-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133486/crispy-crunchy-breaded-nashville-hot-wings-50-pack.afefab29fd329bb7e37fd7cc4a2cedb0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Crispy Crunchy Breaded Nashville Hot Wings - 50 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518c"),
  "id": "chicken-pot-pie-bites",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112636/chicken-pot-pie-bites.bede4e52d18fef8fcc6ec934dc952c37.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goldberg's Fine Foods",
  "sections": "fried-chicken",
  "dsc": "Chicken Pot Pie Bites",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518d"),
  "id": "japanese-fried-chicken-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116252/en-fried-chicken-dinner-kit-for-4.1f6589c80f57036522563c34c80aff79.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "En Japanese Brasserie",
  "sections": "fried-chicken",
  "dsc": "Japanese Fried Chicken Dinner Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518e"),
  "id": "chicken-biscuits-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107702/chicken-biscuits-6-pack.70a198d39dbcaa2fbacb7e314a9d6e8f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Se7enbites",
  "sections": "fried-chicken",
  "dsc": "Chicken + Biscuits for 6",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Orlando, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22518f"),
  "id": "smoked-chicken-halves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119767/smoked-chicken-halves.e4dacbe78f6b66103339d8bfbd9b83ec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "fried-chicken",
  "dsc": "Smoked Chicken Halves",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225190"),
  "id": "hot-chicken-whole-bird-12-jumbo-wings",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132361/hot-chicken-whole-bird-12-jumbo-wings.edcc8a798c57d1b6a799bb94caad87c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Hot Chicken - Whole Bird + 12 Jumbo Wings",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225191"),
  "id": "fried-chicken-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134846/fried-chicken-dinner-kit-for-4.65f90c7fe1636eb652133050a6fc4e7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wayfare Tavern",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken Dinner Kit for 4",
  "price": 179,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225192"),
  "id": "oven-roasted-chicken-wings-50-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134874/plain-oven-roasted-buffalo-wings-50-piece.ff7df6a40b1e46ae630caee3e5d4bef5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "La Nova",
  "sections": "fried-chicken",
  "dsc": "Oven Roasted Chicken Wings - 50 Piece",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225193"),
  "id": "hot-party-wings-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127462/whole-party-wings-24-pack.b364415bd3fb0b78090d200242f60f04.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Hot Party Wings - 24 Pack",
  "price": 115,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225194"),
  "id": "chicken-wings-choose-your-own-50-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110867/chicken-wings-choose-your-own-50-pack.cd226df19f0bb4af94ab5f69dc781083.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magic City Kitchen",
  "sections": "fried-chicken",
  "dsc": "Chicken Wings - Choose Your Own 50 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225195"),
  "id": "balsamic-chicken-rice-dinner-kit-for-2-3",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/125026/balsamic-chicken-rice-dinner-kit-for-2-3.3aab895e18a1169ba481f6e6e54453a8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mother Kelly's",
  "sections": "fried-chicken",
  "dsc": "Balsamic Chicken + Rice Dinner Kit for 2-3",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Long Island, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225196"),
  "id": "chicken-jiaozi-dumplings-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97105/chicken-jiaozi-dumplings-20-pack.15df330a0f96492d492d6f3ed6518aa8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "fried-chicken",
  "dsc": "Chicken Jiaozi Dumplings - 20 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225197"),
  "id": "picnic-chicken-sandwich-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119504/picnic-chicken-sandwich-kit-for-8.515b50a03c09b047c7a565f2f301dd1b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "fried-chicken",
  "dsc": "Picnic Chicken Sandwich Kit for 8",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225198"),
  "id": "korean-fried-chicken-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123866/korean-fried-chicken-20-pack.3d78b065e21594f4ff152ebd439fa147.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Parachute",
  "sections": "fried-chicken",
  "dsc": "Korean Fried Chicken - 20 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225199"),
  "id": "game-day-jumbo-fried-chicken-wings-48-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117209/game-day-jumbo-fried-chicken-wings-48-pack.78a57d34edbff19ffe831262b69ae4f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"Game Day\" Jumbo Fried Chicken Wings - 48 Pack",
  "price": 189,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519a"),
  "id": "002-five-pound-chicken-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134485/chicken-sausage-sampler-for-10.b4ac88fcbabc55e4ee9ff096060cb5af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "fried-chicken",
  "dsc": "Chicken Sausage Sampler for 10",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519b"),
  "id": "hot-mess-sandwich-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119051/hot-mess-sandwich-kit-for-6.72e9e8e82babf83cca91f4d744d5da98.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "fried-chicken",
  "dsc": "Hot Mess SandwichÂ® Kit for 6",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519c"),
  "id": "backyard-barbecue-chicken",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105379/backyard-barbecue-chicken.321a1babf487d24419a8c3947a94a20b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "fried-chicken",
  "dsc": "Backyard Barbecue Chicken",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519d"),
  "id": "17542-cajun-mild-deep-fried-turkey",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72664/cajun-mild-deep-fried-turkey.6fc839ea4311c28f322e437829097e54.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Uncle Ray's Fried Turkeys",
  "sections": "fried-chicken",
  "dsc": "Cajun Mild Deep Fried Turkey",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Dallas, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519e"),
  "id": "fried-chicken-dinner-kit-for-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134754/fried-chicken-dinner-kit-for-6-8.c92859bc67d820b347f01877ff2e88c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Yardbird",
  "sections": "fried-chicken",
  "dsc": "Fried Chicken Dinner Kit for 6-8",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Miami Beach, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22519f"),
  "id": "picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132380/picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4.c9f4e235ad2a2151df272744ccfba476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "fried-chicken",
  "dsc": "Picnic Chicken Sandwich with Memphis Mustard Slaw Kit for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a0"),
  "id": "19388-buffalo-chicken-and-blue-cheese-fried-pies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77052/buffalo-chicken-and-blue-cheese-fried-pies.35544d16f7256a0ba50b56843d33c4b6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dale's Fried Pies",
  "sections": "fried-chicken",
  "dsc": "Buffalo Chicken and Blue Cheese Fried Pies - 12 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Knoxville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a1"),
  "id": "the-drum-kit-fried-chicken-drumsticks-48-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131813/the-drum-kit-fried-chicken-drumsticks-48-pack.b1b16b5c386aa68ef96133efd52060bc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "fried-chicken",
  "dsc": "\"The Drum Kit\" Fried Chicken Drumsticks - 48 Pack",
  "price": 199,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a2"),
  "id": "chicken-wings-choose-your-own-100-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110907/chicken-wings-choose-your-own-100-pack.fbeb35b46643e99da6ffcf9e14e04b2c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magic City Kitchen",
  "sections": "fried-chicken",
  "dsc": "Chicken Wings - Choose Your Own 100 Pack",
  "price": 159,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a3"),
  "id": "mac-and-cheese-chicken-pot-pie-combo-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112776/mac-and-cheese-chicken-pot-pie-combo-for-4.c77be8dcb4fabfa1870a2ff4a6bd4c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wolfgang Puck Catering",
  "sections": "fried-chicken",
  "dsc": "Mac and Cheese + Chicken Pot Pie Combo for 4",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a4"),
  "id": "marcus-hot-fried-chicken-wings-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129322/marcus-fried-chicken-wings.95e4f4d5cb4d3e069f4addcb3e33b111.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Marcus Samuelsson's Streetbird",
  "sections": "fried-chicken",
  "dsc": "Marcusâ Fried Chicken Wings for 2",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a5"),
  "id": "choose-your-own-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 79.95,
  "rate": NumberInt(5),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a6"),
  "id": "23952-nancys-italian-gelato-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90388/nancys-italian-gelato-gift-box.d44dba927ca67daf7765e0c3a59f3587.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nancy Silverton's Nancy's Fancy",
  "sections": "ice-cream",
  "dsc": "Nancy Silverton's Favorite Gelato Gift Box",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a7"),
  "id": "237283342-choose-your-own-frozen-custard-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133888/choose-your-own-frozen-custard-6-pack.f13e3415fd09547371a184d04166ff77.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "ice-cream",
  "dsc": "Frozen Custard + Handmade Ice Cream - Choose Your Own - 6 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a8"),
  "id": "ice-cream-choose-your-own-5-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103364/ice-cream-choose-your-own-5-pints.05ed6c9fab612b8e5f0367e87428ebf7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 5 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251a9"),
  "id": "17228-4-pint-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71773/choose-your-own-boozy-ice-cream-4-pints.cecb4c1a4d29b16b44c2b88fa59b3e86.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "ice-cream",
  "dsc": "Choose Your Own Boozy Ice Cream - 4 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251aa"),
  "id": "ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110356/ice-cream-choose-your-own-6-pints.7e3199bc794ac9d43c69d8a632430dc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Museum of Ice Cream",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ab"),
  "id": "23595-choose-your-own-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89591/choose-your-own-ice-cream-sandwich-8-pack.aca778cca349220b2cf682a0577e1b7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "ice-cream",
  "dsc": "Choose Your Own Ice Cream Sandwich - 8 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ac"),
  "id": "ice-cream-choose-your-own-4-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107316/ice-cream-choose-your-own-4-pints.22c48c4004a36083da64a69635076e6e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Hill Creamery",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 4 Pints",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ad"),
  "id": "choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78414/ice-cream-choose-your-own-6-pints.ec19c8772f1fc363e86ef01890a56124.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Malai Ice Cream",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ae"),
  "id": "choose-your-own-ice-cream-12-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96047/ice-cream-choose-your-own-12-pints.e57770eaab1a0b7837095eda979e9a2b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "ice-cream",
  "dsc": "Ice Cream - Choose Your Own 12 Pints",
  "price": 119.95,
  "rate": NumberInt(4),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251af"),
  "id": "best-sellers-ice-cream-collection-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95838/taste-of-kentucky-ice-cream-collection-6-pints.dc03a97b15828e9a01e81efc0b309d4d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crank & Boom Craft Ice Cream",
  "sections": "ice-cream",
  "dsc": "Best Sellers Ice Cream Collection - 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Lexington, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b0"),
  "id": "choose-your-own-ice-cream-donuts-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "ice-cream",
  "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b1"),
  "id": "choose-your-own-ice-cream-5-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133840/choose-your-own-ice-cream-5-pints.6507a1156121c05779e1363a268b8f80.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ice Cream Jubilee",
  "sections": "ice-cream",
  "dsc": "Choose Your Own Ice Cream - 5 Pints",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b2"),
  "id": "pannas-choice-ice-cream-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127541/pannas-choice-ice-cream-6-pack.e49718042829aae8705f72dac2c97b5f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "CaffÃ¨ Panna Ice Cream",
  "sections": "ice-cream",
  "dsc": "Panna's Choice Ice Cream 6-Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b3"),
  "id": "gelato-and-sorbetto-minis-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102254/gelato-and-sorbetto-minis-12-pack.9cefc719fccb400e58167847ebd66a80.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nancy Silverton's Nancy's Fancy",
  "sections": "ice-cream",
  "dsc": "Gelato & Sorbetto Minis - 12 pack",
  "price": 94,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b4"),
  "id": "mochi-ice-cream-choose-your-own-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122636/mochi-ice-cream-choose-your-own-12-pack.f6eb9b1a2020a9ff88c8bb069a910b22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mochii",
  "sections": "ice-cream",
  "dsc": "Mochi Ice Cream - Choose Your Own 12 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b5"),
  "id": "giant-ice-cream-sandwich-kit-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132386/build-your-own-ice-cream-sandwich-kit-6-pack.c81bd69ed1a452decb5bc599358dc644.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "ice-cream",
  "dsc": "Build Your Own Ice Cream Sandwich Kit - 6 Pack",
  "price": 84,
  "rate": NumberInt(5),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b6"),
  "id": "mini-ice-cream-sandwiches-choose-your-own-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134845/mini-ice-cream-sandwiches-choose-your-own-16-pack.4f75836908c8ce41789c4af346bfa9d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream + Sugar",
  "sections": "ice-cream",
  "dsc": "Mini Ice Cream Sandwiches - Choose Your Own 16 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b7"),
  "id": "layered-ice-cream-sundae-jar-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129301/layered-ice-cream-sundae-jar-choose-your-own-6-pack.a018cc2bb407befc6d7b618441849c28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Yard Milkshake Bar",
  "sections": "ice-cream",
  "dsc": "Layered Ice Cream Sundae Jar - Choose Your Own 6 Pack",
  "price": 125,
  "rate": NumberInt(5),
  "country": "Gulf Shores, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b8"),
  "id": "cookie-monster-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131739/cookie-monster-ice-cream-sandwich-8-pack.9ad71ce3dd6f39fcbddc35af60a3b866.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nightingale Ice Cream Sandwiches",
  "sections": "ice-cream",
  "dsc": "Cookie Monster Ice Cream Sandwich - 8 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Richmond, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251b9"),
  "id": "best-seller-ice-cream-pack-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113988/best-seller-ice-cream-pack-6-pints.0d2fe2cd8b15418dbfff9b07e5387dbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bridgeman's Ice Cream",
  "sections": "ice-cream",
  "dsc": "Best Seller Ice Cream Pack - 6 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Woodbury, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ba"),
  "id": "choose-your-own-ice-cream-creamwich-combo-for-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132414/6-creamwich-4-pint-ice-cream-combo.6196f68326686c2decd8847bf730fe0e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream'wich",
  "sections": "ice-cream",
  "dsc": "4 Pint Ice Cream + 6 Cream'wich Combo",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Manhattan Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251bb"),
  "id": "giant-ice-cream-sandwich-kit-choose-your-own-9-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103337/build-your-own-ice-cream-sandwich-kit-9-pack.e972c9c8819bfc245d671eaf98107247.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "ice-cream",
  "dsc": "Build Your Own Ice Cream Sandwich Kit - 9 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251bc"),
  "id": "artisan-ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131929/artisan-ice-cream-choose-your-own-6-pints.fc029dfaf6c0b6143ed09f3dc6f72745.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream + Sugar",
  "sections": "ice-cream",
  "dsc": "Artisan Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251bd"),
  "id": "bonastyle-ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134416/bonastyle-ice-cream-choose-your-own-6-pints.a10293b457234788157c88905a57612a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bona Bona Ice Cream",
  "sections": "ice-cream",
  "dsc": "Meringue Topped Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Port Chester, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251be"),
  "id": "flavors-of-kentucky-ice-cream-collection-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95847/taste-of-kentucky-ice-cream-collection-6-pints.8e530e9a1dd44524fb25ab59976024da.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crank & Boom Craft Ice Cream",
  "sections": "ice-cream",
  "dsc": "Flavors of Kentucky Ice Cream Collection - 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Lexington, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251bf"),
  "id": "signature-chip-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133218/signature-chip-ice-cream-6-pints.32228ca3b762a1f5970a14fea82139ec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "ice-cream",
  "dsc": "Signature Chip Ice Cream - 6 Pints",
  "price": 79.95,
  "rate": NumberInt(5),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c0"),
  "id": "ribs-brisket-and-burnt-ends",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
  "price": 110.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c1"),
  "id": "005-kings-carolina-oink-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Carolina BBQ Oink Sampler",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c2"),
  "id": "texas-monthlys-1-bbq-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "our-foods",
  "dsc": "Texas Monthly's #1 BBQ Brisket",
  "price": 199,
  "rate": NumberInt(5),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c3"),
  "id": "17352-ribs-and-pulled-pork-small-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137366/Central-BBQ-Ribs-Pulled-Pork-Dinner-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Pulled Pork Dinner for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c4"),
  "id": "barbeque-Sampler-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110287/barbeque-sampler-for-4-6.edb4e60564852c9d0227634c31fab279.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Bryant's Barbeque",
  "sections": "our-foods",
  "dsc": "Barbeque Sampler for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c5"),
  "id": "whole-brisket-texas-bbq-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110384/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franklin Barbecue",
  "sections": "our-foods",
  "dsc": "Whole Brisket + Texas Barbecue BBQ Sauce",
  "price": 249,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c6"),
  "id": "whole-texas-smoked-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101071/whole-texas-smoked-brisket.a5558a25381e271408e197936e7985d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "our-foods",
  "dsc": "Whole Texas Smoked Brisket",
  "price": 189,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c7"),
  "id": "17352-ribs-and-pulled-pork-medium-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137368/Central-BBQ-Ribs-Pulled-Pork-Party-Pack-1_.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Pulled Pork Dinner for 8",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c8"),
  "id": "mini-trinity-bbq-combo-brisket-ribs-and-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90406/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "our-foods",
  "dsc": "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251c9"),
  "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ca"),
  "id": "006-kings-meat-lovers-special",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66734/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Meat Lovers Special for 10",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251cb"),
  "id": "choose-your-own-world-championship-bbq-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133378/choose-your-own-world-championship-bbq-4-pack.d5216e2b1c2a92f481fc9d1c7a15e8df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Bob Gibson Bar-B-Q",
  "sections": "our-foods",
  "dsc": "Choose Your Own World Championship BBQ - 4 Pack",
  "price": 109.95,
  "rate": NumberInt(4),
  "country": "Decatur, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251cc"),
  "id": "best-of-texas-bbq-combo-serves-14",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91821/best-of-texas-bbq-combo-serves-14.7ae90266335e539c67e77fed14b43029.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "our-foods",
  "dsc": "Best of Texas BBQ Combo - Serves 14",
  "price": 269,
  "rate": NumberInt(4),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251cd"),
  "id": "17796-mighty-quinns-bbq-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134182/mighty-quinns-bbq-sampler-pack.1bfe4a0665edc565756f5241bf25840e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mighty Quinn's BBQ",
  "sections": "our-foods",
  "dsc": "Mighty Quinn's BBQ Sampler Pack",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ce"),
  "id": "the-big-ugly-bbq-dinner-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132122/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "our-foods",
  "dsc": "The Big Ugly BBQ Dinner for 6",
  "price": 229,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251cf"),
  "id": "post-oak-smoked-half-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92395/post-oak-smoked-usda-prime-half-brisket.6f17178dde7d806670bcc73ff11762b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Post Oak Smoked USDA Prime Half Brisket",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d0"),
  "id": "bbq-ribs-and-pulled-pork-dinner-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96242/bbq-ribs-and-pulled-pork-dinner-for-6.ba9ea2ed663fc67effa9fd7a85624625.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "BBQ Ribs & Pulled Pork Dinner for 6",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d1"),
  "id": "whole-brisket-sausage-texas-barbecue-bbq-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131846/whole-brisket-sausage-texas-barbecue-bbq-sauce.ffb470cab2f454fd848faa5dddfe65f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franklin Barbecue",
  "sections": "our-foods",
  "dsc": "Whole Brisket + Sausage + Texas Barbecue BBQ Sauce",
  "price": 289,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d2"),
  "id": "texas-sized-smoked-beef-ribs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131304/texas-sized-smoked-beef-ribs.2b95cb8fcdb4eb21b28ae948f84e6b51.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "our-foods",
  "dsc": "Texas-Sized Smoked Beef Ribs",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d3"),
  "id": "just-the-meat-bbq-faves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115147/just-the-meat-bbq-faves.420232635cdaf0d4df3f4a78e6f3ca56.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Famous Dave's",
  "sections": "our-foods",
  "dsc": "Just the Meat BBQ Faves for 6",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d4"),
  "id": "bbq-rib-tips-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90450/bbq-rib-tips-serves-10-15.c3f35f44d3b1650273c3cdd42494fb66.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Rib Tips - Serves 10-15",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d5"),
  "id": "ribs-and-chicken-combo-pack-serves-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133206/ribs-and-chicken-combo-pack-serves-6-8.cef1f90b5c3193c06e1c4b4cc9cff611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dinosaur BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Chicken Combo Pack - Serves 6-8",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Syracuse, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d6"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d7"),
  "id": "bbq-sides-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133014/bbq-sides-4-pack.64fe417f2fda9ad40fb4034cf416a91e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "BBQ Sides - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d8"),
  "id": "pit-smoked-bbq-ham",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97720/pit-smoked-bbq-ham.0f460774046cd1293c0ce10596021399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "Pit Smoked BBQ Ham",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251d9"),
  "id": "choose-your-own-world-championship-bbq-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131356/choose-your-own-world-championship-bbq-2-pack.aed7c509b847060a8fc8a5bc255e07c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Bob Gibson Bar-B-Q",
  "sections": "our-foods",
  "dsc": "Choose Your Own World Championship BBQ - 2 Pack",
  "price": 64.95,
  "rate": NumberInt(4),
  "country": "Decatur, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251da"),
  "id": "18650-food-explorer-carolina-bbq-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75438/food-explorer-carolina-bbq-pack.fdbd5d5d3f4f92d6c27ad8ef0243f0b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Food Explorer Carolina BBQ Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251db"),
  "id": "bbq-meat-and-sides-feast-serves-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96632/bbq-meat-and-sides-feast.e330bee9ac3a6e322500b411094b3ca4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Micklethwait Craft Meats",
  "sections": "our-foods",
  "dsc": "BBQ Meat and Sides Feast",
  "price": 159,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251dc"),
  "id": "half-texas-smoked-brisket",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96692/half-texas-angus-smoked-brisket.c2b96b9fbe7f8bf7a3436777b3b79bc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "our-foods",
  "dsc": "Texas Smoked Half Brisket",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251dd"),
  "id": "mesquite-smoked-peppered-beef-tenderloin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Perini Ranch Steakhouse",
  "sections": "our-foods",
  "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
  "price": 165,
  "rate": NumberInt(4),
  "country": "Buffalo Gap, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251de"),
  "id": "ribs-and-pulled-pork-combo-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101081/ribs-and-pulled-pork-combo-for-4.fda85caa87209b57671b893e01f5deea.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Ribs & Pulled Pork Combo for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251df"),
  "id": "16124-pork-bbq-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69634/pulled-pork-bbq-pie.fdc5123609d3dcf39d9f9342a9433732.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "our-foods",
  "dsc": "Pulled Pork BBQ Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e0"),
  "id": "20154-bacon-wrapped-cheddar-jalapeno-sausage-slammers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131365/bacon-wrapped-cheddar-jalapeno-sausage-slammers.1aad356ed0b86ebefde0c645520fddb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Bacon Wrapped Cheddar JalapeÃ±o Sausage Slammers",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e1"),
  "id": "bbq-ribs-and-pulled-pork-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96250/bbq-ribs-and-pulled-pork-dinner-for-8.283f3612fdcc300876b961dc513056ea.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "BBQ Ribs & Pulled Pork Dinner for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e2"),
  "id": "guys-bbq-trash-can-nachos-caliente-margaritas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134759/guys-bbq-trash-can-nachos-caliente-margaritas.8e15c70f4f0aef2bc3643274bd29459a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "our-foods",
  "dsc": "Guy's BBQ Trash Can Nachos + Caliente Margaritas",
  "price": 95,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e3"),
  "id": "007-kings-pig-out-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66741/kings-pig-out-party-pack.06e697890e8ff7674df25ec980412cac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Kings' BBQ Best Sellers - Pig Out Party Pack",
  "price": 189,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e4"),
  "id": "kc-bbq-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78975/kc-bbq-sampler.440771bc7783f25ff6bccc8cb8d779ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meat Mitch",
  "sections": "our-foods",
  "dsc": "KC BBQ Sampler",
  "price": 239,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e5"),
  "id": "unconventional-texas-bbq-sampler-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126766/unconventional-texas-bbq-sampler-for-4-6.ee40a926a0863ceeb13b1eafb987c7d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Underbelly by Chris Shepherd",
  "sections": "our-foods",
  "dsc": "Unconventional Texas BBQ Sampler for 4-6",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e6"),
  "id": "17358-rubs-and-sauces-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135170/image004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Sauce & Rubs Kit",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e7"),
  "id": "backyard-bbq-picnic-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134212/backyard-bbq-picnic-for-6.2be8d9286f622c9cfe873c6b728b3175.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Backyard BBQ Picnic for 6",
  "price": 239,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e8"),
  "id": "15048-best-sellers-bbq-buffet-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134229/best-sellers-bbq-buffet-pack.995326b83b438923e7109f6cabe4f01a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jack Stack BBQ",
  "sections": "our-foods",
  "dsc": "Best Seller's BBQ Buffet Pack",
  "price": 239,
  "rate": NumberInt(4),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251e9"),
  "id": "legendary-brisket-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Legendary Brisket Z-Man Sandwich Kit - 8 Pack",
  "price": 99.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ea"),
  "id": "smoked-whole-bbq-brisket-serves-15-20",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134189/smoked-whole-bbq-brisket-unsliced-serves-16.9858b33f5b689898903a184261a9d731.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "our-foods",
  "dsc": "Smoked Whole BBQ Brisket, Unsliced - Serves 16+",
  "price": 199,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251eb"),
  "id": "bbq-pork-spare-ribs-2-racks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91839/texas-sized-bbq-ribs-2-racks.317434b983d87ea730139222ae983774.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snow's BBQ",
  "sections": "our-foods",
  "dsc": "Texas Sized BBQ Ribs - 2 Racks",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Lexington, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ec"),
  "id": "15317-kings-bbq-pork-ribs-4-racks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67771/bbq-pork-ribs-4-racks.7605c73ff368c5e344eb8637a363e991.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Pork Ribs - 2 Racks",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ed"),
  "id": "smoked-whole-bbq-pork-shoulder-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90419/smoked-whole-bbq-pork-shoulder-serves-10-15.cc662e8f02f2910f67d482bbdd555954.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "our-foods",
  "dsc": "Smoked Whole BBQ Pork Shoulder - Serves 10-15",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ee"),
  "id": "bbq-ribs-2-slabs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133247/bbq-ribs-2-slabs.3d97cdf81e046ecf67c889cd8eafacd4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Ribs - 2 Slabs",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ef"),
  "id": "pitmaster-bbq-brisket-pulled-pork-sandwich-kit-for-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132949/pitmaster-bbq-brisket-pulled-pork-sandwich-kit-for-6-8.18c8d7b8fa8e77497a40716a4e004469.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hill Country Barbecue Market",
  "sections": "our-foods",
  "dsc": "Pitmaster BBQ Brisket + Pulled Pork Sandwich Kit for 6-8",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f0"),
  "id": "barbeque-assortment-for-12-16",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132527/barbeque-feast-for-8-12.33d57b4d33aee93b40c12c876061b0a6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Bryant's Barbeque",
  "sections": "our-foods",
  "dsc": "Barbeque Sampler for 12-16",
  "price": 239,
  "rate": NumberInt(5),
  "country": "Kansas City, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f1"),
  "id": "the-presidential-smoked-meat-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106403/the-presidential-smoked-meat-sampler.9ff90178b5b0f41ce433acb7724220bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "our-foods",
  "dsc": "The Presidential Smoked Meat Sampler",
  "price": 219,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f2"),
  "id": "original-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "our-foods",
  "dsc": "Original Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f3"),
  "id": "half-pit-smoked-pastrami-brisket-3-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101803/half-pit-smoked-pastrami-brisket-3-lbs.46a73b67344b4c19a012476ef4937ffd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "our-foods",
  "dsc": "Half Pit-Smoked Pastrami Brisket - 3 lbs.",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f4"),
  "id": "bbq-chopped-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85746/bbq-chopped-pork.3747d8035f680d0e20b0cf8604454ed9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "White Swan BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Chopped Pork",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Smithfield, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f5"),
  "id": "bbq-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132234/choose-your-own-bbq-dinner-for-4-6.d11e1e15eaa4d3da043b21e91ebcb300.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schmidt Family BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Dinner for 4-6",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Bee Cave, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f6"),
  "id": "guys-bbq-pulled-pork-trash-can-nachos",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115312/guys-bbq-pulled-pork-trash-can-nachos.5783c0f7459bfc0adbbcf063edced3fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "our-foods",
  "dsc": "Guy's BBQ Pulled Pork Trash Can Nachos",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f7"),
  "id": "memphis-style-bbq-ribs-4-slabs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90693/memphis-style-bbq-ribs-4-slabs.63c29722abeb159245d54ae166433560.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "17th Street BBQ",
  "sections": "our-foods",
  "dsc": "Grand World Champion BBQ Baby Back Ribs - 4 Slabs",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Murphsboro, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f8"),
  "id": "junior-smoked-meat-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106412/pork-spare-ribs-chicken-sausage-combo-platter.2da90e0e7a49f4dafde4ce15d13db6ed.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "our-foods",
  "dsc": "Junior Smoked Meat Sampler",
  "price": 159,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251f9"),
  "id": "001-kings-hand-chopped-pork-bbq",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66742/kings-hand-chopped-pork-bbq.fe84b9394dd765ab13b26611595226fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Kings' Hand-Chopped Pork BBQ",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251fa"),
  "id": "slow-smoked-bbq-ribs-dinner",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133855/slow-smoked-bbq-ribs-package.7bde36fe69d69f296b74199ef0b765d9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goode Co. Barbeque",
  "sections": "our-foods",
  "dsc": "Slow Smoked BBQ Ribs Dinner",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251fb"),
  "id": "artisanal-bread-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "our-foods",
  "dsc": "Artisanal Bread - Choose Your Own 3 Pack",
  "price": 45,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251fc"),
  "id": "artisanal-bread-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "our-foods",
  "dsc": "Artisanal Bread - Choose Your Own 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251fd"),
  "id": "corn-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "our-foods",
  "dsc": "Corn Cheese Bread - 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251fe"),
  "id": "tartine-bread-loaves-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tartine Bakery",
  "sections": "our-foods",
  "dsc": "Tartine Bread Loaves - Choose Your Own 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2251ff"),
  "id": "bavarian-soft-pretzel-twists-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "our-foods",
  "dsc": "Bavarian Soft Pretzel Twists - 10 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225200"),
  "id": "japanese-milk-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Craftsman and Wolves",
  "sections": "our-foods",
  "dsc": "Japanese Milk Bread - 2 Loaves",
  "price": 55,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225201"),
  "id": "23572-artichoke-bread-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "our-foods",
  "dsc": "Artichoke Bread Sampler - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225202"),
  "id": "artisanal-bread-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "our-foods",
  "dsc": "Artisanal Bread - Choose Your Own 6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225203"),
  "id": "stuffed-bread-loaves-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128801/stuffed-bread-loaves-choose-your-own-2-pack.40c693cca82e78bf496dc14bf1f52d61.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Antique Bar & Bakery",
  "sections": "our-foods",
  "dsc": "Stuffed Bread Loaves - Choose Your Own 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225204"),
  "id": "banana-bread-6-pack-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99033/mini-banana-bread-loaves-18-pack-choose-your-own.cf136bd604f91d94d067045b13ad0227.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Maui Banana Bread Co",
  "sections": "our-foods",
  "dsc": "Banana Bread- Choose Your Own 6 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Lahaina, HI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225205"),
  "id": "bread-and-roses-care-package",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132930/bread-and-roses-care-package.c60ba288ef2a179a3d6da325d33ff402.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bread and Roses Bakery",
  "sections": "our-foods",
  "dsc": "Bread & Roses Care Package",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Wells, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225206"),
  "id": "choose-your-own-gourmet-breadsticks-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90781/choose-your-own-gourmet-breadsticks-16-pack.887e7e2eb8f22d3cd4d89f1a11affd5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "our-foods",
  "dsc": "Choose Your Own Gourmet Breadsticks - 16 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225207"),
  "id": "15277-hot-and-spicy-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129676/hot-and-spicy-cheese-bread-2-pack.014477417093300bfb5e9ed8645bd0a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stella's of Madison",
  "sections": "our-foods",
  "dsc": "Hot & Spicy Cheese Bread - 2 Pack",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225208"),
  "id": "savory-bread-assortment-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116300/savory-bread-assortment-4-pack.3f088d3d463da68582c2ea93a7c1d547.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "our-foods",
  "dsc": "Savory Bread Assortment - 4 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225209"),
  "id": "24239-essa-bagel-bakers-dozen-kosher",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91160/essa-bagel-bakers-dozen-kosher.b69c2a8053463ce34cfb35f71e3ccee2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Essa Bagel",
  "sections": "our-foods",
  "dsc": "Essa Bagel Baker's Dozen (Kosher)",
  "price": 59,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520a"),
  "id": "artisanal-bread-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/88948/artisanal-bread-choose-your-own-2-pack.a33cb2854267dfc70780af82847e5557.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "High Street Philadelphia",
  "sections": "our-foods",
  "dsc": "Artisanal Bread - Choose Your Own 2 Pack",
  "price": 44,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520b"),
  "id": "classic-clam-chowder-and-bread-bowls-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98280/classic-clam-chowder-and-bread-bowls-4-pack.ce07ef6072a276e55bb2924f56d74ebb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Boudin Bakery",
  "sections": "our-foods",
  "dsc": "Classic Clam Chowder and Bread Bowls Kit - 4 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520c"),
  "id": "original-garlic-cream-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105205/original-garlic-cream-cheese-bread-2-pack.7cb55509860ca0311b97222aae4eb0b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "our-foods",
  "dsc": "Original Garlic Cream Cheese Bread - 2 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520d"),
  "id": "babka-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106973/babka-choose-your-own-2-pack.7f0a32a47bf3e7d9582b94b6aaabbb10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kossar's Bagels & Bialys",
  "sections": "our-foods",
  "dsc": "Babka - Choose Your Own 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520e"),
  "id": "artisanal-bread-best-sellers-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126686/artisanal-bread-best-sellers-3-pack.1dcfccc1a446fe9163fe9015fec5be11.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "our-foods",
  "dsc": "Artisanal Bread Best Sellers - 3 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22520f"),
  "id": "choose-your-own-gourmet-breadsticks-15-lb-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90725/choose-your-own-gourmet-breadsticks-5-lb-3-pack.030d6d0ed9eb8e65b1ff18f5d9212326.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "our-foods",
  "dsc": "Choose Your Own Gourmet Breadsticks - 15-lb. Pack",
  "price": 170,
  "rate": NumberInt(4),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225210"),
  "id": "pretzel-lovers-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123858/pretzel-lovers-combo-pack.73ed8b17c5dec3f399e3e2a9eea4ffbe.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "our-foods",
  "dsc": "Pretzel Lover's Combo Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225211"),
  "id": "pain-au-chocolat-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90466/pain-au-chocolat-8-pack.58a1a9fdc9920b4b8406fbb98a304a68.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ceci-Cela Patisserie",
  "sections": "our-foods",
  "dsc": "Pain au Chocolat - 8 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225212"),
  "id": "italian-bread-2-loaves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134811/italian-bread-2-loaves.8a42be072eac0f8abdb93d256061515a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tomaro's Bakery",
  "sections": "our-foods",
  "dsc": "Italian Bread - 2 Loaves",
  "price": 35,
  "rate": NumberInt(4),
  "country": "Clarksburg, WV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225213"),
  "id": "korean-cream-cheese-bread-combo-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105212/korean-cream-cheese-bread-choose-your-own-2-pack.8b70b1b0f22846a1c0267b24a59378b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "our-foods",
  "dsc": "Korean Cream Cheese Bread Combo - 2 Pack",
  "price": 85,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225214"),
  "id": "15277-hot-and-spicy-cheese-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73537/hot-and-spicy-cheese-bread-4-pack.47296ecafd93e3f1fafea23458ae75b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stella's of Madison",
  "sections": "our-foods",
  "dsc": "Hot & Spicy Cheese Bread - 4 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225215"),
  "id": "23572-pescadero-breads-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89536/pescadero-breads-sampler-4-pack.1a9082c2fbc58f9f6cd1d610b18aa64f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "our-foods",
  "dsc": "Choose Your Own Pescadero Breads - 4 Pack",
  "price": 54,
  "rate": NumberInt(4),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225216"),
  "id": "essa-bagel-bakers-dozen-kosher-buy-1-get-1-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/100871/essa-bagel-dozen-kosher-buy-1-get-1-free.9a369a3f64e48283b57e929a82a67565.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ess-a-Bagel",
  "sections": "our-foods",
  "dsc": "Ess-a-Bagel Dozen (Kosher) - BUY 1 GET 1 FREE",
  "price": 59.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225217"),
  "id": "scratch-made-raisin-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98345/scratch-made-raisin-bread.6205c1a82759bc0249a62fe6ca7cdac6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Miller's Bakery",
  "sections": "our-foods",
  "dsc": "Scratch Made Raisin Bread - 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Ronks, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225218"),
  "id": "bavarian-pretzel-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124047/bavarian-pretzel-sticks-12-pack.6558773971c97369e557cc3b96bd846b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "our-foods",
  "dsc": "Bavarian Pretzel Buns - 12 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225219"),
  "id": "tartine-bread-loaves-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132859/tartine-bread-loaves-choose-your-own-4-pack.d51f0fdc2d4e345f0a08441190ef6c0b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tartine Bakery",
  "sections": "our-foods",
  "dsc": "Tartine Bread Loaves - Choose Your Own 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521a"),
  "id": "new-york-bagel-brunch-kit-for-6-sale",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105782/new-york-bagel-brunch-kit-for-6-6-free-bagels.7db930fc7e86f43f658f551ffc7ad967.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Utopia Bagels",
  "sections": "our-foods",
  "dsc": "New York Bagel Brunch Kit for 6 + 6 FREE Bagels",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Queens, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521b"),
  "id": "signature-garlic-bread-with-sauces-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131203/garlic-bread-for-4-6.a227994dee61ef69e777a6a8ac1eadde.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "LAVO",
  "sections": "our-foods",
  "dsc": "Signature Garlic Bread with Sauces for 4-6",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521c"),
  "id": "kosher-frozendorf-ready-to-bake-braided-challah-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108248/kosher-frozendorf-frozen-braided-challah-2-pack.75fe43e83efa6c3d37634364fcab109b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charm City Kosher",
  "sections": "our-foods",
  "dsc": "Kosher Frozendorf Ready-to-Bake Braided Challah - 2 Pack",
  "price": 11,
  "rate": NumberInt(5),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521d"),
  "id": "235721-choose-your-own-artichoke-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134798/choose-your-own-artichoke-bread-4-pack.25422502c71cd2b37333f3acc70b6d55.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "our-foods",
  "dsc": "Choose Your Own Artichoke Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521e"),
  "id": "24011-breads-bakery-chocolate-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90530/breads-bakery-chocolate-babka-3-pack.82ccccf0e109eaa03af3f8f0a4405ced.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Breads Bakery Chocolate Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22521f"),
  "id": "choose-your-own-gourmet-breadsticks-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90702/choose-your-own-gourmet-breadsticks-4-pack.17986d6fdad9457523c4276d09ffd346.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Claudio's Specialty Breads",
  "sections": "our-foods",
  "dsc": "Choose Your Own Gourmet Breadsticks - 4 Pack",
  "price": 35,
  "rate": NumberInt(5),
  "country": "Castroville, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225220"),
  "id": "bavarian-soft-pretzel-bites-100-pacl",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106719/bavarian-soft-pretzel-bites-100-pack.9e249cb79e3d6af92114fe2f80d97186.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Milwaukee Pretzel Company",
  "sections": "our-foods",
  "dsc": "Bavarian Soft Pretzel Bites - 100 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "Milwaukee, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225221"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "our-foods",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225222"),
  "id": "sourdough-bread-bowl-and-chowder-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121915/sourdough-bread-bowl-and-chowder-kit-for-4.cf1f14f389cfd87f4b8366ca2d04c1a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pike Place Chowder",
  "sections": "our-foods",
  "dsc": "Sourdough Bread Bowl & Chowder Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Seattle, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225223"),
  "id": "zucchini-loaf-cake-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109080/zucchini-loaf-cake-2-pack.e69149106247bb5bf112decf3a9c8e02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Gingered Peach",
  "sections": "our-foods",
  "dsc": "Zucchini Bread Loaf Cake - 2 Pack",
  "price": 54,
  "rate": NumberInt(4),
  "country": "Lawrence Twp, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225224"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225225"),
  "id": "23572-pesto-artichoke-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134782/pesto-artichoke-bread-4-pack.e2ad53faef619e6e0b22b5f211d9a4d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "our-foods",
  "dsc": "Pesto Artichoke Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225226"),
  "id": "fresh-butter-croissants-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90481/fresh-butter-croissants-16-pack.aeced89575dd02fb89f30a3b7e1fab13.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ceci-Cela Patisserie",
  "sections": "our-foods",
  "dsc": "Fresh Butter Croissants - 16 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225227"),
  "id": "pretzel-challah-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77556/pretzel-challah-3-pack.54741d680d90984246da074a143300f7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Butterflake Bakery",
  "sections": "our-foods",
  "dsc": "Pretzel Challah - 3 pack (Kosher)",
  "price": 54.99,
  "rate": NumberInt(4),
  "country": "Teaneck, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225228"),
  "id": "choose-your-own-bialy-bagel-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95079/6-bagel-6-bialy-combo-pack.8ad8c22bd9d4bdb633b40878facb9703.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kossar's Bagels & Bialys",
  "sections": "our-foods",
  "dsc": "6  Bagel + 6 Bialy Combo Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225229"),
  "id": "hand-braided-baked-challah",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132919/hand-braided-challah-2-pack.0cebe56b739fd7d071d3c9b42d31a34e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zaro's Family Bakery",
  "sections": "our-foods",
  "dsc": "Hand Braided Challah - 2 Pack",
  "price": 35,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522a"),
  "id": "23572-artichoke-garlic-herb-bread-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89520/artichoke-garlic-herb-bread-4-pack.a89e7791fb44a7aaae95f2b208e6c9d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcangeli Grocery",
  "sections": "our-foods",
  "dsc": "Artichoke Garlic Herb Bread - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Pescadero, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522b"),
  "id": "sourdough-bread-assortment-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116312/sourdough-bread-assortment-4-pack.f5d3eb1f7d778a9ecf46d5b783572be6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "our-foods",
  "dsc": "Sourdough Bread Assortment - 4 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522c"),
  "id": "choose-your-own-rye-breads-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131377/choose-your-own-rye-breads-4-pack.04acb73372123b696d02ee87d1b1bc22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lithuanian Bakery",
  "sections": "our-foods",
  "dsc": "Choose Your Own Rye Breads - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Omaha, NE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522d"),
  "id": "monster-cream-cheese-bread-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105193/monster-cream-cheese-bread-2-pack.6a26a695237d3c695607677f6d5e50c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Calic Bread",
  "sections": "our-foods",
  "dsc": "Monster Cream Cheese Bread - 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522e"),
  "id": "240146-loaf-cake-combo-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134395/loaf-cake-combo-3-pack.2d0f371aea6b091b0cdca22d5a26068c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Loaf Cake Combo - 3 pack",
  "price": 47.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22522f"),
  "id": "bread-pudding-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112314/bread-pudding-choose-your-own.0544d32589325a7cf413b4716747100c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "our-foods",
  "dsc": "Bread Pudding - Choose Your Own",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225230"),
  "id": "caramel-bread-pudding-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133028/bread-pudding.afe4893680585e23ad8fd12b7d6de7df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Antique Bar & Bakery",
  "sections": "our-foods",
  "dsc": "Caramel Bread Pudding - 2 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225231"),
  "id": "bestselling-banana-bread-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99486/bestselling-mini-loaves-6-pack.c48bdbf6c2584b921841f50db863f438.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Maui Banana Bread Co",
  "sections": "our-foods",
  "dsc": "Best Seller Banana Bread - 6 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Lahaina, HI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225232"),
  "id": "vegan-bread-assortment-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132272/vegan-bread-assortment-4-pack.bc6f54dc3a947c3d581a30032ef5a96d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grateful Bread Company",
  "sections": "our-foods",
  "dsc": "Vegan Bread Assortment - 4 Pack",
  "price": 54,
  "rate": NumberInt(4),
  "country": "Sacramento, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225233"),
  "id": "wisconsin-spicy-cheese-bread",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77410/wisconsin-spicy-cheese-bread.c75334ccbc78903dc99156bb8eb5a7d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Uncle Mike's Bake Shoppe",
  "sections": "our-foods",
  "dsc": "Wisconsin Spicy Cheese Bread",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Suamico, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225234"),
  "id": "lobster-roll-kit-and-wild-maine-blueberry-bread-pudding",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89278/lobster-roll-kit-and-wild-maine-blueberry-bread-pudding.78e91ec6331d032ae4d24f0d4026bdee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "McLoons Lobster Shack",
  "sections": "our-foods",
  "dsc": "Lobster Roll Kit And Wild Maine Blueberry Bread Pudding",
  "price": 155,
  "rate": NumberInt(4),
  "country": "South Thomaston, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225235"),
  "id": "the-gramercy-tavern-burger-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "our-foods",
  "dsc": "The Gramercy Tavern Burger - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225236"),
  "id": "shake-shack-shackburger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shake Shack",
  "sections": "our-foods",
  "dsc": "Shake Shack ShackBurgerÂ® â 8 Pack",
  "price": 49,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225237"),
  "id": "gotts-cheeseburger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "our-foods",
  "dsc": "Gott's Complete Cheeseburger Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225238"),
  "id": "le-big-matt-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "our-foods",
  "dsc": "Le Big Matt Burger Kit for 6",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225239"),
  "id": "shake-shack-shackburger-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shake Shack",
  "sections": "our-foods",
  "dsc": "Shake Shack ShackburgerÂ® â 16 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523a"),
  "id": "wagyu-burger-patties-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu Burger Patties - 12 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523b"),
  "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
  "price": 175.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523c"),
  "id": "double-stack-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holeman & Finch",
  "sections": "our-foods",
  "dsc": "Double Stack Burger Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523d"),
  "id": "burger-bomb-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "our-foods",
  "dsc": "Burger Bomb Kit for 6",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523e"),
  "id": "goldbelly-burger-bash-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Goldbelly \"Burger Bash\" Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22523f"),
  "id": "burger-au-poivre-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "our-foods",
  "dsc": "Burger Au Poivre Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225240"),
  "id": "goldbelly-burger-blend-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "Goldbelly Burger Blend - 4 lbs.",
  "price": 79,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225241"),
  "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114296/classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack.b726cfe63b6e1584a4e3c01db24f97d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "our-foods",
  "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225242"),
  "id": "wagyu-burger-patties-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106998/wagyu-burger-patties-6-pack.7837b88faa095c92a0a1a00414296beb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu Burger Patties - 6 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225243"),
  "id": "gramercy-tavern-burger-kielbasa-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "our-foods",
  "dsc": "Gramercy Tavern Burger + Kielbasa Combo",
  "price": 149,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225244"),
  "id": "best-damn-cheeseburger-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134005/best-damn-cheeseburger-kit-8-pack.0c2ca295cc1b754d2867651184a07140.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "our-foods",
  "dsc": "Best Damn Cheeseburger Kit - 8 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225245"),
  "id": "juicy-lucy-burger-kit-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132203/juicy-lucy-burger-kit-5-pack.2902a0c8549449529e87f902f425f9ae.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Whitmans",
  "sections": "our-foods",
  "dsc": "Juicy Lucy Burger Kit - 5 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225246"),
  "id": "american-wagyu-burger-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109633/american-wagyu-burger-party-pack.6bb259a1c95c067d5da9a1057a9517e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holy Grail Steak Co.",
  "sections": "our-foods",
  "dsc": "American Wagyu Burger Party Pack",
  "price": 199,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225247"),
  "id": "blue-aged-cheddar-jalapeno-burgers-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124204/blue-aged-cheddar-jalapeno-burgers-6-pack.a8e79d575c4a6883a0a4daed6a18b635.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "our-foods",
  "dsc": "Blue Aged Cheddar Jalapeno Burgers - 6 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225248"),
  "id": "gotts-complete-cheeseburger-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133967/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "our-foods",
  "dsc": "Gott's Complete Cheeseburger Kit for 8",
  "price": 149,
  "rate": NumberInt(5),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225249"),
  "id": "foie-gras-teriyaki-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137097/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "our-foods",
  "dsc": "Foie Gras Teriyaki Burger Kit - 8 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524a"),
  "id": "juicy-lucifer-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120623/juicy-lucifer-burger-kit-for-4.5a231c2ed989431218aa6062ff89b20a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hell's Kitchen",
  "sections": "our-foods",
  "dsc": "Juicy Lucifer Burger Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524b"),
  "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132910/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-4-pack.c2994c945ac66b003c7763c4b3fd5255.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "our-foods",
  "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524c"),
  "id": "the-cheeseburger-wellington-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132490/the-burger-wellington-2-pack.eb53bc9ad74634bb0c5da44bc55f9362.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wellingtons LA",
  "sections": "our-foods",
  "dsc": "\"The Cheeseburger\" Wellington - 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524d"),
  "id": "the-gold-label-burger-4-patties-6oz-each-15-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/130074/the-gold-label-burger-4-patties-6oz-each-15-lbs.492945fff05ba5f036eca31df024d22f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Gold Label Burger",
  "price": 69,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524e"),
  "id": "le-pig-mac-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106701/le-pig-mac-kit-for-4.d9b274673ffc1a1a2035c9573291cae2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cochon Butcher",
  "sections": "our-foods",
  "dsc": "Le Pig Mac Kit for 4",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22524f"),
  "id": "foie-gras-teriyaki-wagyu-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137099/Hall-by-Odo-Burger-Combo.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "our-foods",
  "dsc": "Foie Gras Teriyaki + Wagyu Burger Kit - 8 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225250"),
  "id": "double-stack-burger-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132733/handf-double-stack-burger-kit-for-2.4ecf6b1bee6b0ecef3b82606860a1b5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holeman & Finch",
  "sections": "our-foods",
  "dsc": "Double Stack Burger Kit for 2",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225251"),
  "id": "gourmet-burger-box-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97480/gourmet-burger-box-12-pack.a35a99e7afd03e8d1f5d3bf2eb33c46a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alewel's Country Meats",
  "sections": "our-foods",
  "dsc": "Gourmet Burger Box - 12 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Warrensburg, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225252"),
  "id": "dry-aged-blend-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103715/dry-aged-blend-burgers.90e05b1839eff99eb724e7d6265e84f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Master Purveyors",
  "sections": "our-foods",
  "dsc": "Dry-Aged Blend Burgers",
  "price": 54,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225253"),
  "id": "the-cheeseburger-wellington-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131557/the-burger-wellington-4-pack.aca42e69c68050d853d94eb5d4076dac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wellingtons LA",
  "sections": "our-foods",
  "dsc": "\"The Cheeseburger\" Wellington - 4 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225254"),
  "id": "17663-mesquite-smoked-brisket-burger-patties-sauce",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131538/mesquite-smoked-brisket-burger-patties-dry-rub.628f7434c98a870a57b36c0c1dc4ec3f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Davila's BBQ",
  "sections": "our-foods",
  "dsc": "Mesquite Smoked Brisket Burger Patties + Dry Rub",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Seguin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225255"),
  "id": "16001-100-fullblood-wagyu-beef-ground-beef",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134623/100-fullblood-wagyu-beef-ground-beef.3ce763ed33cc05cddecc1978cb197a7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "our-foods",
  "dsc": "100% Fullblood Wagyu Beef Ground Beef",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225256"),
  "id": "keens-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105255/keens-burger-kit-for-4.862e70d1671202747d23f732f3453c81.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Keens Steakhouse",
  "sections": "our-foods",
  "dsc": "Keens Burger Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225257"),
  "id": "legendary-cheesy-western-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131302/legendary-cheesy-western-burger-kit-4-pack.393ceddb3bca3acd862e762e48e4c207.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Texas Inn",
  "sections": "our-foods",
  "dsc": "Legendary \"Cheesy Western\" Burger Kit - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Lynchburg, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225258"),
  "id": "goldbelly-steak-burger-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Goldbelly Steak + Burger Sampler",
  "price": 135,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225259"),
  "id": "hall-signature-wagyu-burger-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137095/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "our-foods",
  "dsc": "HALL Signature Wagyu Burger Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525a"),
  "id": "foie-gras-teriyaki-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137098/Hall-by-Odo-Foie-Gras-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "our-foods",
  "dsc": "Foie Gras Teriyaki Burger Kit - 4 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525b"),
  "id": "hall-signature-wagyu-burger-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137096/Hall-by-Odo-Signature-Burger-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "HALL by Odo",
  "sections": "our-foods",
  "dsc": "HALL Signature Wagyu Burger Kit - 4 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525c"),
  "id": "burger-patty-assortment-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108388/burger-patty-assortment-12-pack.1a508c39aa7b49a00c1c4349f88670a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "our-foods",
  "dsc": "Burger Patty Assortment - 12 Pack",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525d"),
  "id": "gotts-impossible-burger-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129127/gott-s-impossible-burger-kit-for-8.83516ceaacc8918f0ccad6575a6b8425.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gott's Roadside",
  "sections": "our-foods",
  "dsc": "Gottâs Impossibleâ¢ Burger Kit for 8",
  "price": 169,
  "rate": NumberInt(5),
  "country": "St. Helena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525e"),
  "id": "juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132978/juicy-lucy-burgers-sweet-potato-puffs-choose-your-own-8-pack.54ad2dc40fb4708ec1b6e5c3ccdf2f89.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "our-foods",
  "dsc": "Juicy Lucy Burgers + Sweet Potato Puffs - Choose Your Own 8 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22525f"),
  "id": "moobys-meal-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134095/moobys-meal-kit-6-pack.d0e1a6e3dd32eb2673b5df60c3db1818.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mooby's",
  "sections": "our-foods",
  "dsc": "Mooby's Meal Kit - 6 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225260"),
  "id": "short-rib-blend-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103717/short-rib-blend-burgers.a078c983a9ba2b3628a944a0c885ae14.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Master Purveyors",
  "sections": "our-foods",
  "dsc": "Short Rib Blend Burgers",
  "price": 52,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225261"),
  "id": "mesquite-smoked-brisket-burger-patties-hot-links-dry-rub",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79492/mesquite-smoked-brisket-burger-patties-hot-links-dry-rub.41cbe9a5d29f1a4ef3491ab6eb8713a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Davila's BBQ",
  "sections": "our-foods",
  "dsc": "Mesquite Smoked Brisket Burger Patties + Hot Links + Dry Rub",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Seguin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225262"),
  "id": "gotts-roadside-impossible-burger-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135117/IB_Burgers_2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Impossible Foods Shop",
  "sections": "our-foods",
  "dsc": "Gottâs Roadside Impossibleâ¢ Burger Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225263"),
  "id": "bfbol-original-blend-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124841/original-blend-burger.50bb5cf520d3f653b0b80187716cc3e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Original Blend Burger - 8 Pack",
  "price": 31.9,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225264"),
  "id": "classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114319/classic-juicy-lucy-burgers-sweet-potato-puffs-8-pack.36c8d716563c1af2d2ca1c1140d36273.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "5-8 Club",
  "sections": "our-foods",
  "dsc": "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 8 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Minneapolis, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225265"),
  "id": "brisket-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124922/short-rib-burger-blend.6275c3ffad67f0e93de4eafbc4f809df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Brisket Burger - 8 Pack",
  "price": 31.9,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225266"),
  "id": "ribeye-burger-patties-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133972/ribeye-burger-patties-6-pack.dd62bc3b8a096f15429571865ba5d561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "our-foods",
  "dsc": "Ribeye Burger Patties - 6 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225267"),
  "id": "Giant-cheese-burger-potstickers-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97098/giant-cheese-burger-potstickers-6-pack.36899150ea75b8869bc2bd46ad126a57.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "our-foods",
  "dsc": "Giant Cheese Burger Potstickers - 6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225268"),
  "id": "juicy-lucy-burger-kit-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105731/juicy-lucy-burger-kit-10-pack.41d77903b061d6c6b080f990b4ad2fb7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Whitmans",
  "sections": "our-foods",
  "dsc": "Juicy Lucy Burger Kit - 10 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225269"),
  "id": "classic-shrimp-burgers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112675/classic-shrimp-burgers.965772a8abe95e6e5579e86312d74de6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Classic Shrimp Burgers",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526a"),
  "id": "vegan-burger-grill-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105946/vegan-burger-grill-kit-for-4.1450ccef8c44f7394c93f58450ce67b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lekka Burger",
  "sections": "our-foods",
  "dsc": "Vegan Burger Grill Kit for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526b"),
  "id": "bfbsr-short-rib-burger-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132398/short-rib-burger-blend.586f10c35edd4d7c6e9cfa41e3b2d0d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Short Rib Burger - 8 Pack",
  "price": 36,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526c"),
  "id": "prime-burger-grilling-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132129/prime-burger-grilling-kit.30c705d39dae521329f7759d0e52e48f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Churchill's Steakhouse",
  "sections": "our-foods",
  "dsc": "Prime Burger Grilling Kit",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Spokane, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526d"),
  "id": "bfbda-dry-aged-burgers-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124898/original-blend-burger.be1f1d7924783b4af5cccb89cf4e2ff6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Dry-Aged Burgers - 8 Pack",
  "price": 44.2,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526e"),
  "id": "the-presidential-smoked-meat-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106403/the-presidential-smoked-meat-sampler.9ff90178b5b0f41ce433acb7724220bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "our-foods",
  "dsc": "The Presidential Smoked Meat Sampler",
  "price": 219,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22526f"),
  "id": "raouls-steak-and-burgers-au-poivre-kit-2-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133421/raouls-burgers-and-steaks-au-poivre-kit.aeafc64d55d6ad7274cb8ba1b562f8eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "our-foods",
  "dsc": "Raoul's Burgers and Steaks Au Poivre Kit",
  "price": 249,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225270"),
  "id": "famous-french-bread-burger-fries-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129511/burger-fries-kit-for-4.ffc10e462cadece50d64f8ce5fd8ea7a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rotier's Restaurant",
  "sections": "our-foods",
  "dsc": "Famous French Bread Burger + Fries Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225271"),
  "id": "signature-chocolate-collection-25-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106318/large-signature-collection.6f21146f2b1945d80f7931d69b763ba7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Knipschildt Chocolatier",
  "sections": "our-foods",
  "dsc": "Signature Chocolate Collection Chocolate Gift Box - 25 Piece",
  "price": 60,
  "rate": NumberInt(5),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225272"),
  "id": "milk-chocolate-turtle-gophers-gift-box-of-24",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97018/milk-chocolate-turtle-gophers-gift-box-of-24.9e12dafbdf9401faa776c2389c05b850.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Savannah's Candy Kitchen",
  "sections": "our-foods",
  "dsc": "Milk Chocolate Turtle Gophers - Gift Box of 24",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Savannah, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225273"),
  "id": "signature-macarons-chocolates-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132333/signature-macarons-chocolates-16-pieces.6072c1e13db3f2ebca89db228f421715.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "our-foods",
  "dsc": "Signature Macarons + Chocolates - 16 Pieces",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225274"),
  "id": "20482-chocolate-truffle-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131261/chocolate-truffle-cake.289d1e58e4f0ca2dd39568fba9c17e91.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ferrara Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Truffle Cake",
  "price": 59,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225275"),
  "id": "jacques-world-famous-chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "our-foods",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 6 Pack",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225276"),
  "id": "chocolate-stack-12-bars",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82587/chocolate-stack-12-bars.1d613389b988a1b21bcf46105306a55a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "our-foods",
  "dsc": "Chocolate Stack - 12 Bars",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225277"),
  "id": "15259-german-chocolate-killer-brownie-tin-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "our-foods",
  "dsc": "German Chocolate Killer BrownieÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225278"),
  "id": "k-m-chocolate-sampler-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97479/k-m-chocolate-sampler-gift-box.e29912ba4410a090b1659cbe8aa8e2fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chocolate by Thomas Keller + Armando Manni",
  "sections": "our-foods",
  "dsc": "K+M Chocolate Sampler Gift Box",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Napa, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225279"),
  "id": "dark-chocolate-truffle-collection-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131532/dark-chocolate-truffle-collection-16-pieces.4109f4f80d9d9ddf81d7b704424245f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "our-foods",
  "dsc": "Dark Chocolate Truffle Collection - 16 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527a"),
  "id": "raspberry-chocolate-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pietisserie",
  "sections": "our-foods",
  "dsc": "Raspberry Chocolate Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527b"),
  "id": "chocolate-covered-cupcake-half-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98898/chocolate-covered-cupcake-half-dozen.90ecdfa8028d2e46ead8f3c210e1946e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "our-foods",
  "dsc": "Chocolate Covered Cupcake - 6 Pack",
  "price": 65,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527c"),
  "id": "chocolate-fudge-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89476/chocolate-fudge-cake.1b255e0cd6b684b34d9e8f7c3f0fbb3a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Fudge Cake",
  "price": 69.95,
  "rate": NumberInt(5),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527d"),
  "id": "chocolate-ganache-fudge-brownie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108595/chocolate-ganache-fudge-brownie.fb14f000098178f7520f89e167756deb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "our-foods",
  "dsc": "Chocolate Ganache Fudge Brownie",
  "price": 45,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527e"),
  "id": "signature-chocolate-collection-12-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106341/medium-signature-chocolate-box.51543f5d16b82434582d85c9c40b201c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Knipschildt Chocolatier",
  "sections": "our-foods",
  "dsc": "Signature Chocolate Collection Gift Box- 12 Piece",
  "price": 32,
  "rate": NumberInt(5),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22527f"),
  "id": "award-winning-chocolate-4-layer-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90005/award-winning-chocolate-4-layer-cake.b1667fe724c35e1461aad64bc1f982d3.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "We Take the Cake",
  "sections": "our-foods",
  "dsc": "Award-Winning Chocolate 4-Layer Cake",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Ft Lauderdale, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225280"),
  "id": "whisky-dark-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134355/whisky-dark-chocolate-cake.bef20867a13e7e802310b10b63eba282.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lady M Confections",
  "sections": "our-foods",
  "dsc": "Whisky Dark Chocolate Cake",
  "price": 125,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225281"),
  "id": "chocolate-pretzel-passion-gift-assortment",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123066/chocolate-pretzel-passion-gift-assortment.a74f130ab33eb159450541f6b2932389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Plum",
  "sections": "our-foods",
  "dsc": "Chocolate Pretzel Passion Gift Assortment",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Forty Fort, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225282"),
  "id": "signature-chocolate-collection-15-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123407/signature-chocolate-collection-15-pieces.a2e79d99347af6d6247636f08083167c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "our-foods",
  "dsc": "Signature Chocolate Collection - 15 Pieces",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225283"),
  "id": "double-chocolate-cheesecake-with-ghirardelli-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134351/double-chocolate-cheesecake-with-ghirardelli-chocolate.8dbc9e4bd74b2ef7d962e1b3811dd43e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eli's Cheesecake Company",
  "sections": "our-foods",
  "dsc": "Double Chocolate Cheesecake with GhirardelliÂ® Chocolate",
  "price": 74,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225284"),
  "id": "milk-chocolate-truffle-collection-16-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81236/milk-chocolate-truffle-collection-16-pieces.be97988ab2fff3c32ed9f7c2187b33c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "our-foods",
  "dsc": "Milk Chocolate Truffle Collection - 16 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225285"),
  "id": "chocolate-tease-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90318/chocolate-tease-gift-box.2115f3d653b78b791d9ace9354509614.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cake Chicago",
  "sections": "our-foods",
  "dsc": "Chocolate Tease Gift Box",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225286"),
  "id": "signature-chocolate-tower",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132872/signature-chocolate-tower.143747076dc0b522fa5043abc1ec0e59.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John & Kira's",
  "sections": "our-foods",
  "dsc": "Signature Chocolate Gift Tower",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225287"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "our-foods",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225288"),
  "id": "chocolate-mousse-supreme-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133142/chocolate-mousse-supreme-cake.5fe7244dd7efb592e941587d8e336ad3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "our-foods",
  "dsc": "Chocolate Mousse Supreme Cake",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225289"),
  "id": "double-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131604/double-chocolate-cake.bff63e243145fe04ec8a384d1bc1926c.gif?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "our-foods",
  "dsc": "Double Chocolate Cake",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528a"),
  "id": "the-boys-chocolate-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97161/famous-chocolate-pizza-3-pack.23e77730a97a44b9b6918f8c6b844e51.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Craig's LA",
  "sections": "our-foods",
  "dsc": "Famous Chocolate Pizza - 3 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528b"),
  "id": "chocolate-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77825/chocolate-cheesecake.0ec6ea97866d14cef7f66b58abd98ea9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Nuns of New Skete",
  "sections": "our-foods",
  "dsc": "Chocolate Cheesecake - 6\"",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Cambridge, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528c"),
  "id": "dark-chocolate-truffle-collection-9-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133303/dark-chocolate-truffle-collection-9-pieces.4135c2ff34f76c89830c15e6048afd50.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Vosges Haut-Chocolat",
  "sections": "our-foods",
  "dsc": "Dark Chocolate Truffle Collection - 9 Pieces",
  "price": 34,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528d"),
  "id": "chocolate-whoopie-pies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77887/chocolate-whoopie-pies.80ab8b83a3f272ff8e1eee50e7c5869d.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "McClure's Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Whoopie Pies",
  "price": 35,
  "rate": NumberInt(4),
  "country": "Gap, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528e"),
  "id": "heart-shaped-chocolate-pizza-with-mallet",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98003/heart-shaped-chocolate-pizza-with-mallet.58490f28e404729412d52e0b224f20cb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Plum",
  "sections": "our-foods",
  "dsc": "Heart Shaped Chocolate Pizza with Mallet",
  "price": 55,
  "rate": NumberInt(5),
  "country": "Forty Fort, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22528f"),
  "id": "chocolate-dipped-macaroons",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69848/chocolate-dipped-macaroons.df025cfd54bffa6a05d2cbf371516959.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Danny Macaroons",
  "sections": "our-foods",
  "dsc": "Chocolate Dipped Macaroons",
  "price": 34,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225290"),
  "id": "15678-not-a-nutter-killer-brownies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68639/not-a-nutter-killer-brownies.d152046f07bd1947176e1650891fd9f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "our-foods",
  "dsc": "Triple Chocolate Killer BrowniesÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225291"),
  "id": "double-chocolate-almond-fudge-cookies-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134450/double-chocolate-almond-fudge-cookies-dozen.df65a64c34daa39545f013ceee53a4f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "our-foods",
  "dsc": "Double Chocolate Almond Fudge Cookies - Dozen",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225292"),
  "id": "chocolate-candy-striped-gift-tin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97032/chocolate-candy-striped-gift-tin.ab7c2ebff7fa9dc77e6386b9a9c97473.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Savannah's Candy Kitchen",
  "sections": "our-foods",
  "dsc": "Chocolate Candy Striped Gift Tin",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Savannah, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225293"),
  "id": "signature-chocolate-collection-8-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132095/signature-chocolate-collection-8-pieces.d253c3253a84123d64a4792c9e4363b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "SucrÃ©",
  "sections": "our-foods",
  "dsc": "Signature Chocolate Collection - 8 Pieces",
  "price": 49,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225294"),
  "id": "chocolate-mille-crepes-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126479/chocolate-mille-crepes-cake.3ed3d988314b5f42fcc3d24095f2105d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lady M Confections",
  "sections": "our-foods",
  "dsc": "Chocolate Mille CrÃªpes Cake",
  "price": 95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225295"),
  "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "our-foods",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 12 Pack",
  "price": 69.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225296"),
  "id": "20-layer-chocolate-peanut-butter-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133914/20-layer-chocolate-peanut-butter-cake-for-6-8.4dd9bebd3e21ec24b4f8344f080ee5ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "LAVO",
  "sections": "our-foods",
  "dsc": "20 Layer Chocolate Peanut Butter Cake",
  "price": 105,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225297"),
  "id": "14913-chocolate-bees",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132418/chocolate-bees-with-caramelized-honey-center.eac0fef67d17204cc38d6742b7f36115.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John & Kira's",
  "sections": "our-foods",
  "dsc": "Chocolate Bees With Caramelized Honey Center",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225298"),
  "id": "dark-chocolate-nutty-cups",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134701/dark-chocolate-nutty-cups-assortment.eb1e3506a38ece5b86415bfd84198fe2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jessie's Nutty Cups",
  "sections": "our-foods",
  "dsc": "Dark Chocolate Nutty Cups Assortment",
  "price": 35,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225299"),
  "id": "chocolate-fudge-rainbow-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91119/chocolate-fudge-rainbow-cake.b55af0b5cbbd3d65e0bb9486efe24c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Fudge Rainbow Cake",
  "price": 69.95,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529a"),
  "id": "outrageous-dark-chocolate-chocolate-chunk-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137162/SweetHedys-Outrageous-Dark-Chocolate-Chunk-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sweet Hedy",
  "sections": "our-foods",
  "dsc": "Outrageous Dark Chocolate Chocolate Chunk Cookies - 12 Pack",
  "price": 64,
  "rate": NumberInt(4),
  "country": "Miami, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529b"),
  "id": "chocolate-outrage-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/93607/chocolate-outrage-cake.52608e8b20476800690445ad646ff7f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "our-foods",
  "dsc": "Chocolate Outrage Cake",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529c"),
  "id": "chocolate-cherry-sumptuous-assortment",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96299/chocolate-cherries-and-nuts-sumptuous-assortment.afeacf174313c4fc32fa4c443ffa3dfc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chukar Cherries",
  "sections": "our-foods",
  "dsc": "Chocolate Cherries and Nuts Sumptuous Assortment",
  "price": 74.95,
  "rate": NumberInt(5),
  "country": "Prosser, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529d"),
  "id": "dark-chocolate-covered-coffee-beans",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95007/dark-chocolate-covered-coffee-beans.cbb5a21a14d141da7be37f71dd26b744.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eilenberger's Bakery",
  "sections": "our-foods",
  "dsc": "Dark Chocolate Covered Coffee Beans",
  "price": 26.95,
  "rate": NumberInt(4),
  "country": "Palestine, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529e"),
  "id": "chocolate-marshmallows",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108670/chocolate-marshmallows.a5bb2a6f0b25f6058e82e486bc34020b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "our-foods",
  "dsc": "Chocolate Marshmallows",
  "price": 25,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22529f"),
  "id": "20363-triple-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134638/triple-chocolate-cake.122224edae9326c45d6f08f343414bbf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Red Truck Bakery",
  "sections": "our-foods",
  "dsc": "Triple Chocolate Cake",
  "price": 32,
  "rate": NumberInt(5),
  "country": "Marshall, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a0"),
  "id": "17641-wilbur-the-chocolate-moose",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133618/wilbur-the-chocolate-moose.2503248c80b80f9fd7ca0c7fd865cccf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wilbur's of Maine Chocolate Confections",
  "sections": "our-foods",
  "dsc": "Wilbur the Chocolate Moose - 2 Pack",
  "price": 44,
  "rate": NumberInt(4),
  "country": "Freeport, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a1"),
  "id": "jumbo-chocolate-chip-cookie-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134742/jumbo-chocolate-chip-cookie-cake.46a332c5fb281e93c82e6578365937d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carlo's Bakery",
  "sections": "our-foods",
  "dsc": "Jumbo Chocolate Chip Cookie Cake",
  "price": 39.95,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a2"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a3"),
  "id": "deluxe-chocolate-assortment-32-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133496/deluxe-chocolate-assortment-32-pack.f385c58994b97745c23b671073a89f1b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mary of Puddin Hill",
  "sections": "our-foods",
  "dsc": "Deluxe Chocolate Assortment - 32 Pack",
  "price": 36.99,
  "rate": NumberInt(5),
  "country": "Palestine, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a4"),
  "id": "chocolate-rads-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119489/chocolate-rads-4-pack.2b8ba40b738f8394205d150abd0f8d72.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Model Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Rads - 4 Pack",
  "price": 19,
  "rate": NumberInt(5),
  "country": "Napa Valley, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a5"),
  "id": "dark-chocolate-salted-caramel-truffles-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120628/dark-chocolate-salted-caramel-truffles-24-pack.d99dbdcd29c4f969f2b67a4092245c0a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "our-foods",
  "dsc": "Dark Chocolate Salted Caramel Ganache Truffles - 24 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a6"),
  "id": "14910-chocolate-covered-figs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129657/chocolate-covered-figs.c665af836e1b1f45f56ce59445b3bc92.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John & Kira's",
  "sections": "our-foods",
  "dsc": "Chocolate Covered Figs",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a7"),
  "id": "2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "our-foods",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
  "price": 104.99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a8"),
  "id": "flourless-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121527/flourless-chocolate-cake.3d1d6395d574403aa10c1e0249a09539.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goldberg's Fine Foods",
  "sections": "our-foods",
  "dsc": "Flourless Chocolate Cake",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252a9"),
  "id": "dutch-chocolate-basque-burnt-cheesecake-gluten-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131928/dutch-chocolate-basque-cheesecake.c814a4fd4ead01b27f323b3428f2b6e4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Little Grace Bakery",
  "sections": "our-foods",
  "dsc": "Dutch Chocolate Basque Burnt Cheesecake (Gluten Free)",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252aa"),
  "id": "chocolate-passion-layer-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97605/chocolate-passion-layer-cake.0562eb95df61a64486764db7f3ab4ddf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Owl Bakery",
  "sections": "our-foods",
  "dsc": "Chocolate Passion Layer Cake",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Kimmswick, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ab"),
  "id": "15538-chocolate-pecan-bourbon",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131607/chocolate-pecan-bourbon-pie.2ff5b3a4721d65bc7d40e6206a45b5ee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Michele's Pies",
  "sections": "our-foods",
  "dsc": "Chocolate Pecan Bourbon Pie",
  "price": 64,
  "rate": NumberInt(4),
  "country": "Norwalk, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ac"),
  "id": "15259-german-chocolate-killer-brownie-tin-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Killer BrownieÂ®",
  "sections": "our-foods",
  "dsc": "German Chocolate Killer BrownieÂ®",
  "price": 39.99,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ad"),
  "id": "world-famous-banana-pudding-party-sized",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "our-foods",
  "dsc": "World Famous Banana Pudding Bowl (64 oz.)",
  "price": 56,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ae"),
  "id": "jacques-world-famous-chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "our-foods",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 6 Pack",
  "price": 39.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252af"),
  "id": "luigis-original-cannoli-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Cannoli Pie Company",
  "sections": "our-foods",
  "dsc": "Original Cannoli Pie",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeport, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b0"),
  "id": "sea-salted-caramel-swirl-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cotton Blues Cheesecake Company",
  "sections": "our-foods",
  "dsc": "Sea-Salted Caramel Swirl Cheesecake",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Hattiesburg, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b1"),
  "id": "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Blackout Company",
  "sections": "our-foods",
  "dsc": "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b2"),
  "id": "smores-variety-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78037/smores-variety-pack.86cf47d40c0c3508ce14d2659b3f99d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gotta Have S'more",
  "sections": "our-foods",
  "dsc": "S'mores - Variety Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b3"),
  "id": "best-seller-cupcake-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94478/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crave Cupcakes",
  "sections": "our-foods",
  "dsc": "Best Seller Cupcake Dozen",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b4"),
  "id": "choose-your-own-ice-cream-donuts-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b5"),
  "id": "17481-jewish-dessert-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72507/jewish-classics-dessert-pack.7d4b76630f2fe75dcb7bbcf2501b7390.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ess-a-Bagel",
  "sections": "our-foods",
  "dsc": "Jewish Classics Dessert Pack",
  "price": 89.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b6"),
  "id": "dessert-bar-care-package",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131609/dessert-bar-care-package.324aa28fe98c9dc67b75aac43376902e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bread and Roses Bakery",
  "sections": "our-foods",
  "dsc": "Dessert Bar Care Package",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Wells, ME"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b7"),
  "id": "donut-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97746/donut-cookies-12-pack.46f42c61c4a79fd2051a99b2f23e890e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stan's Donuts",
  "sections": "our-foods",
  "dsc": "Donut Cookies - 12 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b8"),
  "id": "gulab-jamun-ice-cream-cakes-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105133/gulab-jamun-ice-cream-cakes-2-pack.c45b4d0750ad22d741f84dc1f26d20e7.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Malai Ice Cream",
  "sections": "our-foods",
  "dsc": "Gulab Jamun Ice Cream Cakes - 2 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252b9"),
  "id": "jacques-world-famous-chocolate-chip-cookies-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jacques Torres Chocolate",
  "sections": "our-foods",
  "dsc": "Jacquesâ World Famous Chocolate Chip Cookies - 12 Pack",
  "price": 69.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ba"),
  "id": "assorted-rice-krispie-treats-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95324/assorted-rice-krispie-treats-12-pack.801c4bad4750f54e7a27652df3a7b6ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Treat House",
  "sections": "our-foods",
  "dsc": "Assorted Rice Krispie Treats - 12 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252bb"),
  "id": "choose-your-own-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 79.95,
  "rate": NumberInt(4),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252bc"),
  "id": "candy-cookie-cheesecake-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82267/candy-cookie-cheesecake-sampler.bb8e5e3fb399edaa00a529271565d16f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Eli's Cheesecake Company",
  "sections": "our-foods",
  "dsc": "Candy Cookie Cheesecake Sampler",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252bd"),
  "id": "chocolate-marshmallows",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108670/chocolate-marshmallows.a5bb2a6f0b25f6058e82e486bc34020b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Colts Chocolate",
  "sections": "our-foods",
  "dsc": "Chocolate Marshmallows",
  "price": 25,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252be"),
  "id": "magnolia-banana-pudding-explore",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136779/Magnolia-NEW-BP-Pudding-Cup.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magnolia Bakery",
  "sections": "our-foods",
  "dsc": "World Famous Banana Pudding",
  "price": 65,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252bf"),
  "id": "brooklyn-blackout-parfait",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82266/brooklyn-blackout-parfait.756b6c8cf3066aaca322fb12595bb3a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "our-foods",
  "dsc": "Brooklyn Blackout Cupcake Jars",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c0"),
  "id": "24011-chocolate-and-cinnamon-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c1"),
  "id": "dessert-bars-choose-your-own-9-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109092/dessert-bars-choose-your-own-9-pack.38ec1ad968769f3ab76bcb0826a0b8b7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Gingered Peach",
  "sections": "our-foods",
  "dsc": "Dessert Bars - Choose Your Own 9 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Lawrence Twp, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c2"),
  "id": "cinnamon-rolls-honey-bees-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103958/sweet-roll-sampler-2-dozen.8b0fd9bfd3acc7aadc1a478d5b4f27ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Weikel's Bakery",
  "sections": "our-foods",
  "dsc": "Cinnamon Rolls and Honey Bees Sampler Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "La Grange, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c3"),
  "id": "original-ny-plain-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133583/plain-cheesecake.10ff643fb84a50e131e0a216dfb66f09.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "our-foods",
  "dsc": "Junior's Original Cheesecake",
  "price": 64.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c4"),
  "id": "little-italy-dessert-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101477/little-italy-dessert-pack.3540a0f8d95494fa394f494d19f8c9e4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ferrara Bakery",
  "sections": "our-foods",
  "dsc": "Little Italy Dessert Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c5"),
  "id": "cookie-monster-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131739/cookie-monster-ice-cream-sandwich-8-pack.9ad71ce3dd6f39fcbddc35af60a3b866.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nightingale Ice Cream Sandwiches",
  "sections": "our-foods",
  "dsc": "Cookie Monster Ice Cream Sandwich - 8 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Richmond, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c6"),
  "id": "cinnamon-roll-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134085/cinnamon-roll-cheesecake.57da7d19317f774571fe8f667f38d8c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Honey Cheesecakes",
  "sections": "our-foods",
  "dsc": "Cinnamon Roll Cheesecake",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Statesboro, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c7"),
  "id": "23595-choose-your-own-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89591/choose-your-own-ice-cream-sandwich-8-pack.aca778cca349220b2cf682a0577e1b7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream Sandwich - 8 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c8"),
  "id": "banana-pudding-sampler-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121725/banana-pudding-deluxe-4-pack.36e4c2a89b15ec4352a7b68b471a982b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Puddery",
  "sections": "our-foods",
  "dsc": "Banana Pudding Sampler - 4 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Long Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252c9"),
  "id": "double-chocolate-babka",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Oneg Bakery",
  "sections": "our-foods",
  "dsc": "Double Chocolate Babka",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ca"),
  "id": "24011-breads-bakery-chocolate-babka-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90530/breads-bakery-chocolate-babka-3-pack.82ccccf0e109eaa03af3f8f0a4405ced.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Breads Bakery",
  "sections": "our-foods",
  "dsc": "Breads Bakery Chocolate Babka - 3 Pack",
  "price": 49.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252cb"),
  "id": "cheesecake-macarons-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91242/cheesecake-macarons-24-pack.98311118ad15fcff82a74763d1a8ed32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "our-foods",
  "dsc": "Cheesecake Macarons - 24 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252cc"),
  "id": "brownie-explosion-cheesecake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86905/plain-cheesecake.0ff81b367c16fb722c66d6d1deab0fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "our-foods",
  "dsc": "Brownie Explosion Cheesecake",
  "price": 74.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252cd"),
  "id": "chocolate-mousse-supreme-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133142/chocolate-mousse-supreme-cake.5fe7244dd7efb592e941587d8e336ad3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Carousel Cakes",
  "sections": "our-foods",
  "dsc": "Chocolate Mousse Supreme Cake",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Nanuet, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ce"),
  "id": "smores-cookie-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133252/smores-cookie-12-pack.2fefcfed46bc853bc16b28421b935e72.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cookie Good",
  "sections": "our-foods",
  "dsc": "S'mores Cookie - 12 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252cf"),
  "id": "choose-your-own-ice-cream-donuts-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87214/choose-your-own-ice-cream-donuts-12-pack.f6794011fbc58adfac58b3e1d2f2abe5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream Donuts - 12 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d0"),
  "id": "chocolate-covered-cupcake-half-dozen",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98898/chocolate-covered-cupcake-half-dozen.90ecdfa8028d2e46ead8f3c210e1946e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Brooklyn Cupcake",
  "sections": "our-foods",
  "dsc": "Chocolate Covered Cupcake - 6 Pack",
  "price": 65,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d1"),
  "id": "raspberry-chocolate-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pietisserie",
  "sections": "our-foods",
  "dsc": "Raspberry Chocolate Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Oakland, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d2"),
  "id": "23595-best-sellers-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132372/best-sellers-ice-cream-sandwiches-8-pack.d30351bef255e98e3ca8fa4118c997fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "our-foods",
  "dsc": "Best Sellers Ice Cream Sandwiches - 8 Pack",
  "price": 74,
  "rate": NumberInt(4),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d3"),
  "id": "chocolate-chip-cookies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78119/chocolate-chip-cookies.6897d911cf557257517e1ddcb648214b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Appalachia Cookie Company",
  "sections": "our-foods",
  "dsc": "Chocolate Chip Cookies",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Boone, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d4"),
  "id": "17228-4-pint-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71773/choose-your-own-boozy-ice-cream-4-pints.cecb4c1a4d29b16b44c2b88fa59b3e86.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "our-foods",
  "dsc": "Choose Your Own Boozy Ice Cream - 4 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d5"),
  "id": "cheesecake-macarons-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107554/cheesecake-macarons-12-pack.e6d5a23285fc17c227aab7c574163077.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kreuther Handcrafted Chocolate",
  "sections": "our-foods",
  "dsc": "Cheesecake Macarons - 12 Pack",
  "price": 55,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d6"),
  "id": "banana-pudding-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121746/pudding-choose-your-own-4-pack.5239bcb1356691a502359132f4574288.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Puddery",
  "sections": "our-foods",
  "dsc": "Banana Pudding - Choose Your Own 4 Pack",
  "price": 74,
  "rate": NumberInt(5),
  "country": "Long Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d7"),
  "id": "hong-kong-boba-tea-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "our-foods",
  "dsc": "Hong Kong Boba Tea Kit for 6",
  "price": 59,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d8"),
  "id": "guys-caliente-margaritas-for-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "our-foods",
  "dsc": "Guy's Caliente Margaritas for 12",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252d9"),
  "id": "woodford-reserve-mint-julep-syrup-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "our-foods",
  "dsc": "Woodford Reserve Mint Julep Syrup - 2 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252da"),
  "id": "evan-williams-gourmet-mint-julep-mix-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Evan Williams",
  "sections": "our-foods",
  "dsc": "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252db"),
  "id": "new-orleans-hurricane-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Franco's Hurricane Mix",
  "sections": "our-foods",
  "dsc": "New Orleans Hurricane Mix",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Natchitoches, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252dc"),
  "id": "woodford-reserve-mint-julep-syrup",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "our-foods",
  "dsc": "Woodford Reserve Mint Julep Syrup",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252dd"),
  "id": "margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Johnny Sanchez",
  "sections": "our-foods",
  "dsc": "Margarita Mix",
  "price": 59,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252de"),
  "id": "cold-brew-concentrate-variety-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134399/cold-brew-concentrate-variety-6-pack.ee2c1ff6e21556a824d07fcd6dc96682.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "Cold Brew Concentrate Variety - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252df"),
  "id": "evan-williams-gourmet-mint-julep-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Evan Williams",
  "sections": "our-foods",
  "dsc": "Evan Williams Gourmet Mint Julep Mix",
  "price": 25,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e0"),
  "id": "organic-shots-bundle-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "our-foods",
  "dsc": "Organic Shots Bundle-12 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e1"),
  "id": "15323-cocktail-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132819/cocktail-party-4-pack.97b92c6a6c87168fc547da5f7bed8c73.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rick's Picks",
  "sections": "our-foods",
  "dsc": "Cocktail Party 4 PACK",
  "price": 49,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e2"),
  "id": "dels-x-iggys-frozen-lemonade-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136231/Iggys-Del-Lemonade-Mix-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Iggy's",
  "sections": "our-foods",
  "dsc": "Del's x Iggy's Frozen Lemonade Mix",
  "price": 10,
  "rate": NumberInt(5),
  "country": "Warwick, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e3"),
  "id": "papaya-king-tropical-drink",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Papaya King",
  "sections": "our-foods",
  "dsc": "Papaya King - Tropical Drink",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e4"),
  "id": "knock-you-naked-strawberry-margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132264/knock-you-naked-strawberry-margarita-mix.c51ce9329ab84709e5b1d3d474cbb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fat Mama's Tamales",
  "sections": "our-foods",
  "dsc": "\"Knock-You-Naked\" Strawberry Margarita Mix",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Natchez, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e5"),
  "id": "15193-old-honey-barn-mint-julep-mixer-750ml",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133924/old-honey-barn-mint-julep-750ml.169d91ce479cb7cd99ed97b2148ff6ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Honey Barn Mint Julep",
  "sections": "our-foods",
  "dsc": "Old Honey Barn Mint Julep - 750ml Fifth",
  "price": 34,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e6"),
  "id": "unicorn-parade-milkshake-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "our-foods",
  "dsc": "Unicorn Parade Milkshake Kit for 8",
  "price": 109,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e7"),
  "id": "low-sugar-juice-cleanse-7-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104418/low-sugar-juice-cleanse-7-pack.9496c3e8b94cb767497158f4502536e8.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "our-foods",
  "dsc": "Low Sugar Juice Cleanse-7 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e8"),
  "id": "hazelnut-mocha-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/65884/hazelnut-mocha-cold-brew-concentrate-6-pack.f5cfd77c0666af4bbbc6243a4c613ce7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "Hazelnut Mocha Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252e9"),
  "id": "16591-knock-you-naked-margarita-mix",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70442/knock-you-naked-margarita-mix.e5d122df55fdae061eb72e95336328a0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fat Mama's Tamales",
  "sections": "our-foods",
  "dsc": "\"Knock-You-Naked\" Margarita Mix",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Natchez, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ea"),
  "id": "iggys-soda-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136853/Iggys-Soda-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Iggy's",
  "sections": "our-foods",
  "dsc": "Iggy's Soda - 4 Pack",
  "price": 11,
  "rate": NumberInt(5),
  "country": "Warwick, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252eb"),
  "id": "chickpea-chiller-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106484/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Hummus & Pita Co.",
  "sections": "our-foods",
  "dsc": "Chickpea Chiller Kit for 6",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ec"),
  "id": "15194-old-honey-barn-mint-julep-mixer-200ml",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/950/old-honey-barn-mint-julep-mixer-200ml.e0b131d6d9b69963706b43fd4334ab74.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Honey Barn Mint Julep",
  "sections": "our-foods",
  "dsc": "Old Honey Barn Mint Julep Mixer - 200ml Flask",
  "price": 25,
  "rate": NumberInt(5),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ed"),
  "id": "kentucky-derby-mint-julep-gift-set",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/103859/kentucky-derby-mint-julep-gift-set.79720eda4e9c8e3fcf9ecb5c79827f2c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Woodford Reserve",
  "sections": "our-foods",
  "dsc": "Kentucky Derby Mint Julep Gift Set",
  "price": 59.95,
  "rate": NumberInt(4),
  "country": "Louisville, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ee"),
  "id": "mr-grumpy-milkshake-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/75112/mr-grumpy-milkshake-kit-for-8.174f846e3252d7c668d034776db22cd6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "New Territories",
  "sections": "our-foods",
  "dsc": "Mr. Grumpy Milkshake Kit for 8",
  "price": 109,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ef"),
  "id": "french-vanilla-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134205/french-vanilla-cold-brew-concentrate-6-pack.aada7a4ffa58cae68695d132fece746c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "French Vanilla Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f0"),
  "id": "nola-cold-brew-concentrate-bag-in-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104363/nola-cold-brew-concentrate-bag-in-box.3df6fde8bd83f29235565984ae8ed22b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "NOLA Cold Brew Concentrate Bag-in-Box",
  "price": 40,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f1"),
  "id": "signature-juice-cleanse-7-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104373/signature-juice-cleanse-7-pack.7db8a0fcef0a9bfb72bcaa5c6d635470.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "our-foods",
  "dsc": "Signature Juice Cleanse-7 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f2"),
  "id": "002-charleston-bloody-mary-mix-weekender-bold-and-spicy",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66364/weekender-charleston-bloody-mary-mix-bold-and-spicy.c372868c9937e407a299a22001e210e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "our-foods",
  "dsc": "Weekender | Charleston Bloody Mary Mix Bold & Spicy",
  "price": 39.95,
  "rate": NumberInt(5),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f3"),
  "id": "002-original-cold-brewed-coffee-syrup",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/1228/original-cold-brewed-coffee-syrup.9a2306691f0a5681e98300a98cd1c243.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dave's Coffee",
  "sections": "our-foods",
  "dsc": "Original Cold Brewed Coffee Syrup - 3 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Charlestown, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f4"),
  "id": "metal-drink-bottle",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87464/metal-drink-bottle.2ebe632ef74921a6a2c5cf8b6cdddc4b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Russ & Daughters",
  "sections": "our-foods",
  "dsc": "Metal Drink Bottle",
  "price": 24,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f5"),
  "id": "greens-juice-bundle-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/90472/greens-juice-bundle-5-pack.2301dfa6fc273a6bf41c235733590aaf.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "our-foods",
  "dsc": "Greens Juice Bundle-5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f6"),
  "id": "duck-duck-goat-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/71796/duck-duck-goat-dinner-for-2-meal-kit.ab94e26065d34ca87a138379f9f20887.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Stephanie Izard of Girl & The Goat",
  "sections": "our-foods",
  "dsc": "Duck Duck Goat Dinner & Drinks Kit for 2",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f7"),
  "id": "16990-frozen-hot-chocolate-party-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131963/frozen-hot-chocolate-party-gift-box.d59c47117dedfc24b39ca5359564e26e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "our-foods",
  "dsc": "Frozen Hot Chocolate Party Gift Box",
  "price": 39.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f8"),
  "id": "immune-boosting-juice-bundle-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133353/immune-boosting-juice-bundle-6-pack.9ddda68328b0b72d6a0872d1d967272e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Juice Press",
  "sections": "our-foods",
  "dsc": "Immune Boosting Juice Bundle-6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252f9"),
  "id": "nola-cold-brew-concentrate-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134045/nola-cold-brew-concentrate-6-pack.51aeb42af09ff5b076dac0310b92bb9c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "NOLA Cold Brew Concentrate - 6 Pack",
  "price": 60,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252fa"),
  "id": "kermits-double-strength-key-lime-juice",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132276/kermits-double-strength-key-lime-juice.38a582bc4996cca8e8f1e52476001c60.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kermit's Key West Key Lime Shoppe",
  "sections": "our-foods",
  "dsc": "Kermit's Double-Strength Key Lime Juice - 2 Pack",
  "price": 29,
  "rate": NumberInt(4),
  "country": "Key West, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252fb"),
  "id": "15451-bold-and-spicy-8-oz-case",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55350/bold-and-spicy-8-oz-case.d62f69b498aa580d5101214262b18672.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "our-foods",
  "dsc": "Bold and Spicy 8 oz. Case",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252fc"),
  "id": "16991-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/6979/hot-chocolate-mix.9be2c47c82bad10c222bded8baaa9de7.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "our-foods",
  "dsc": "Hot Chocolate Mix",
  "price": 35,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252fd"),
  "id": "nola-cold-brew-concentrate-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134067/nola-cold-brew-concentrate-12-pack.71a8cd3ae912d3fe69ed92bb507b3b29.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "NOLA Cold Brew Concentrate - 12 Pack",
  "price": 60,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252fe"),
  "id": "POB1-pat-obriens-new-orleans-drink-mixes",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/27512/pat-obriens-new-orleans-drink-mixes.977ee6c9de74923c63a180468ff94a86.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat O'Brien's Hurricanes",
  "sections": "our-foods",
  "dsc": "Pat O'Brien's New Orleans Drink Mixes",
  "price": 25,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2252ff"),
  "id": "hot-dogs-tropical-drink",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133348/papaya-king-hot-dogs-tropical-drink.0e00794e37b13765181d2d7f0785cd9a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Papaya King",
  "sections": "our-foods",
  "dsc": "Papaya King Hot Dogs + Tropical Drink",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225300"),
  "id": "234234-frrrozen-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134225/frrrozen-hot-chocolate.867217d2781ea3db60b7ea2b116f9cd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "our-foods",
  "dsc": "Frrrozen Hot Chocolate",
  "price": 29,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225301"),
  "id": "15703-frrrozen-mint-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55314/frrrozen-mint-hot-chocolate.742cfc89989890eb38dc3092f189b967.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "our-foods",
  "dsc": "Frrrozen Mint Hot Chocolate",
  "price": 29,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225302"),
  "id": "15702-frrrozen-salted-caramel-hot-chocolate",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133019/frrrozen-salted-caramel-hot-chocolate.1efee40abefcefda7716fa965375f399.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Serendipity",
  "sections": "our-foods",
  "dsc": "Frrrozen Salted Caramel Hot Chocolate",
  "price": 29,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225303"),
  "id": "lil-easy-nola-cold-brew-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132671/lil-easy-nola-cold-brew-12-pack.f80c2041d4720acb3f099e41bab2b436.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Grady's Cold Brew",
  "sections": "our-foods",
  "dsc": "Lil' Easy NOLA Cold Brew - 12 Pack",
  "price": 40,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225304"),
  "id": "003-bender-charleston-bloody-mary-mix-bold-and-spicy",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66370/bender-charleston-bloody-mary-mix-bold-and-spicy.72a356456124c0663bd8c0d9110414b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charleston Beverage Company",
  "sections": "our-foods",
  "dsc": "Bender | Charleston Bloody Mary Mix Bold & Spicy",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Charleston, SC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225305"),
  "id": "virtual-cocktail-party-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102046/virtual-cocktail-party-kit.32af5b8dcdc21513673ff28a32f79edc.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "our-foods",
  "dsc": "Boozy Ice Cream Cocktail Party Kit",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225306"),
  "id": "002-cafe-du-monde-coffee-and-beignets",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/55362/cafe-du-monde-coffee-and-beignet-mix.c9db4d8ac11248a827f9e5dbf056fe7f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cafe du Monde Beignets",
  "sections": "our-foods",
  "dsc": "Cafe du Monde Coffee & Beignet Mix",
  "price": 29,
  "rate": NumberInt(4),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225307"),
  "id": "the-coop-complete-fried-chicken-dinner-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225308"),
  "id": "hot-chicken-whole-bird",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110733/hot-chicken-whole-bird.bfd696b1cf611210ee813293c4c1bf28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Hot Chicken - Whole Bird",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225309"),
  "id": "the-bird-fried-chicken-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132392/fried-chicken-for-4.0e6dfb35e3b83144791a5ddae71836e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Bird\" Fried Chicken for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530a"),
  "id": "fried-chicken-biscuit-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sunrise Biscuit Kitchen",
  "sections": "our-foods",
  "dsc": "Fried Chicken Biscuit Sandwich Kit",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Chapel Hill, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530b"),
  "id": "nashville-hot-chicken-family-meal-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103169/nashville-hot-chicken-family-meal-for-4.43a0ea9ae1b7663ff18d82f4930fa561.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Nashville Hot Chicken Family Meal for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530c"),
  "id": "the-family-coop-complete-fried-chicken-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Family Coop\" Complete Fried Chicken Dinner for 8-10",
  "price": 189,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530d"),
  "id": "korean-fried-chicken-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108361/korean-fried-chicken-kit-for-4.4c354ab17c40cd78402d4697b1e075e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "our-foods",
  "dsc": "Korean Fried Chicken Kit for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530e"),
  "id": "the-family-bird-fried-chicken-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132849/fried-chicken-for-8.7f488618ab57ac91a8e230eb70a35a19.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Family Bird\" Fried Chicken for 8",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22530f"),
  "id": "nashville-hot-chicken-family-meal-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103192/nashville-hot-chicken-family-meal-for-8.9b522371aa18fb4be255db66e39e3e1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Nashville Hot Chicken Family Meal for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225310"),
  "id": "hot-honey-chicken-and-cornbread-waffles-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Marcus Samuelsson's Streetbird",
  "sections": "our-foods",
  "dsc": "Marcusâ Hot Honey Chicken & Cornbread Waffles Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225311"),
  "id": "fried-chicken-dinner-kit-for-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118643/fried-chicken-dinner-kit-for-2-4.2f685dc798e641bed96151b31e4b9910.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Yardbird",
  "sections": "our-foods",
  "dsc": "Fried Chicken Dinner Kit for 2-4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Miami Beach, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225312"),
  "id": "fried-chicken-sandwich-combo-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115433/fried-chicken-sandwich-combo-kit-for-6.649e00580828a749ee120ec205cf9bb8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "our-foods",
  "dsc": "Fried Chicken Sandwich Combo Kit for 6",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225313"),
  "id": "picnic-chicken-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119467/picnic-chicken-sandwich-kit-for-4.f77dbec2fbf26fd8e2482a640e51a6af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "our-foods",
  "dsc": "Picnic Chicken Sandwich Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225314"),
  "id": "jumbo-hot-chicken-wings-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133195/jumbo-hot-chicken-wings-12-pack.a386d81ef4c0d23fb23eb39493248004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Jumbo Hot Chicken Wings - 12 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225315"),
  "id": "japanese-fried-chicken-dinner-kit-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116269/en-fried-chicken-dinner-kit-for-2.5655f91f8092ca3f732d396623e06476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "En Japanese Brasserie",
  "sections": "our-foods",
  "dsc": "Japanese Fried Chicken Dinner Kit for 2",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225316"),
  "id": "ribs-and-chicken-combo-pack-serves-6-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133206/ribs-and-chicken-combo-pack-serves-6-8.cef1f90b5c3193c06e1c4b4cc9cff611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dinosaur BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Chicken Combo Pack - Serves 6-8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Syracuse, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225317"),
  "id": "world-famous-hot-chicken-and-waffles-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119032/world-famous-hot-chicken-and-waffles-for-6.9274da723865fe9f76ef20e6039dfa68.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "World Famous Hot Chicken & Waffles for 6",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225318"),
  "id": "chicken-tenders-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115439/chicken-tenders-25-pack.97435f460ba110b72cd0848240ab7180.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "our-foods",
  "dsc": "Chicken Tenders - 25 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225319"),
  "id": "pappys-ribs-and-chicken-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106948/pappys-ribs-and-chicken-dinner-for-8.904cebbd327940da15399e0608dffa55.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "our-foods",
  "dsc": "Pappy's Ribs & Chicken - Dinner for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531a"),
  "id": "the-drum-kit-fried-chicken-drumsticks-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131341/the-drum-kit-fried-chicken-drumsticks-24-pack.4223a97e0b26575602350bc51b7bab27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Drum Kit\" Fried Chicken Drumsticks - 24 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531b"),
  "id": "game-day-jumbo-fried-chicken-wings-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117190/game-day-jumbo-fried-chicken-wings-24-pack.2fc78e31cee5717c75fba7481e013798.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"Game Day\" Jumbo Fried Chicken Wings - 24 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531c"),
  "id": "hot-chicken-2-whole-birds",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133896/hot-chicken-2-whole-birds.4894d5973260e21e1e8d7cfd3a24a0c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Hot Chicken - 2 Whole Birds",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531d"),
  "id": "fried-chicken-10-pieces",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107261/fried-chicken-10-pieces.31a36850d1e10c93437a6619072e1264.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wayfare Tavern",
  "sections": "our-foods",
  "dsc": "Wayfare Tavern Fried Chicken - 10 Pieces",
  "price": 89,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531e"),
  "id": "carla-halls-nashville-hot-fried-chicken-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116359/carla-hall-s-hot-fried-chicken-dinner-for-4-6.d10131654587d8e4c81319cd8b2408e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Carla Hall",
  "sections": "our-foods",
  "dsc": "Carla Hallâs Nashville Hot Fried Chicken Dinner for 4-6",
  "price": 189,
  "rate": NumberInt(4),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22531f"),
  "id": "fried-chicken-and-wings-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113738/fried-chicken-and-wings-for-6.b0daa38a283c32fbbb56263919d80475.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "Fried Chicken & Jumbo Wings for 6",
  "price": 159,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225320"),
  "id": "18635-signature-chicken-pie",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75440/oprahs-favorite-signature-chicken-pie.13051bc388a198084460367c102db36f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Centerville Pie Co.",
  "sections": "our-foods",
  "dsc": "\"Oprah's Favorite\" Signature Chicken Pie",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Centerville, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225321"),
  "id": "korean-bbq-sausage-fried-chicken-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108394/korean-bbq-sausage-fried-chicken-kit-for-8.8d3be80287dda24f8153f28e9efab6a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "our-foods",
  "dsc": "Korean BBQ Sausage + Fried Chicken Kit for 8",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225322"),
  "id": "korean-fried-chicken-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123844/korean-fried-chicken-10-pack.e0b9eb5e82d9ff1718d31d88f78b5e6c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Parachute",
  "sections": "our-foods",
  "dsc": "Korean Fried Chicken - 10 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225323"),
  "id": "nashville-hot-chicken-tenders-family-meal-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103386/nashville-hot-jumbo-chicken-tenders-family-meal-for-4.ab26565dc94fde23a686856b95a4f7e1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Nashville Hot JUMBO Chicken Tenders Family Meal for 4",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225324"),
  "id": "chicken-pot-pie-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102828/chicken-pot-pie-4-pack.00e5d95a6fbca63c074cc23a27049020.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Little Pie Company",
  "sections": "our-foods",
  "dsc": "Chicken Pot Pie - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225325"),
  "id": "picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119533/picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-8.6b388604d0650e0335b703b7cd7bb3cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "our-foods",
  "dsc": "Picnic Chicken Sandwich with Memphis Mustard Slaw Kit for 8",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225326"),
  "id": "the-big-game-combo-fried-chicken-drums-and-jumbo-wings-for-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132683/the-big-game-combo-fried-chicken-drums-and-jumbo-wings-for-12.3139f00d0c50b0fa18739175561f0841.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"The Big Game Combo\" Fried Chicken Drums & Jumbo Wings for 12",
  "price": 199,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225327"),
  "id": "nashville-hot-jumbo-chicken-tenders-family-meal-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133718/nashville-hot-jumbo-chicken-tenders-family-meal-for-8.4dfbb330cc846e6157ca5556bba659f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Nashville Hot JUMBO Chicken Tenders Family Meal for 8",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225328"),
  "id": "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225329"),
  "id": "wing-it-up-fried-chicken-wings-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133927/fried-chicken-wings-25-pack.957f793865cffef6b18db109a88b7bcb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"Wing It Up!\" Jumbo Fried Chicken Wings - 24 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532a"),
  "id": "crispy-crunchy-breaded-nashville-hot-wings-50-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133486/crispy-crunchy-breaded-nashville-hot-wings-50-pack.afefab29fd329bb7e37fd7cc4a2cedb0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Crispy Crunchy Breaded Nashville Hot Wings - 50 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532b"),
  "id": "chicken-pot-pie-bites",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112636/chicken-pot-pie-bites.bede4e52d18fef8fcc6ec934dc952c37.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goldberg's Fine Foods",
  "sections": "our-foods",
  "dsc": "Chicken Pot Pie Bites",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532c"),
  "id": "japanese-fried-chicken-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116252/en-fried-chicken-dinner-kit-for-4.1f6589c80f57036522563c34c80aff79.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "En Japanese Brasserie",
  "sections": "our-foods",
  "dsc": "Japanese Fried Chicken Dinner Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532d"),
  "id": "chicken-biscuits-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107702/chicken-biscuits-6-pack.70a198d39dbcaa2fbacb7e314a9d6e8f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Se7enbites",
  "sections": "our-foods",
  "dsc": "Chicken + Biscuits for 6",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Orlando, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532e"),
  "id": "smoked-chicken-halves",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119767/smoked-chicken-halves.e4dacbe78f6b66103339d8bfbd9b83ec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Smoked Chicken Halves",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22532f"),
  "id": "hot-chicken-whole-bird-12-jumbo-wings",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132361/hot-chicken-whole-bird-12-jumbo-wings.edcc8a798c57d1b6a799bb94caad87c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Hot Chicken - Whole Bird + 12 Jumbo Wings",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225330"),
  "id": "fried-chicken-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134846/fried-chicken-dinner-kit-for-4.65f90c7fe1636eb652133050a6fc4e7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wayfare Tavern",
  "sections": "our-foods",
  "dsc": "Fried Chicken Dinner Kit for 4",
  "price": 179,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225331"),
  "id": "chicken-and-chive-dumplings-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137122/Dumpling-Monster-Chicken-and-Chive-Dumplings-25pk-12.30.20-72ppi-1x1-12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dumpling Monster",
  "sections": "our-foods",
  "dsc": "Chicken and Chive Dumplings - 25 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225332"),
  "id": "smoked-half-chickens-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133969/smoked-half-chickens-4-pack.7393f481fd5cb21559541f007a9e477a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schmidt Family BBQ",
  "sections": "our-foods",
  "dsc": "Smoked Half Chickens - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Bee Cave, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225333"),
  "id": "oven-roasted-chicken-wings-50-piece",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134874/plain-oven-roasted-buffalo-wings-50-piece.ff7df6a40b1e46ae630caee3e5d4bef5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "La Nova",
  "sections": "our-foods",
  "dsc": "Oven Roasted Chicken Wings - 50 Piece",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225334"),
  "id": "hot-party-wings-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127462/whole-party-wings-24-pack.b364415bd3fb0b78090d200242f60f04.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Hot Party Wings - 24 Pack",
  "price": 115,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225335"),
  "id": "chicken-wings-choose-your-own-50-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110867/chicken-wings-choose-your-own-50-pack.cd226df19f0bb4af94ab5f69dc781083.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Magic City Kitchen",
  "sections": "our-foods",
  "dsc": "Chicken Wings - Choose Your Own 50 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Atlanta, GA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225336"),
  "id": "ribs-and-chicken-combo-pack-small",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83659/ribs-and-chicken-combo-pack-serves-4.db6a3fd3a3c9a43ca9b2bc59ba451459.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dinosaur BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Chicken Combo Pack - Serves 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Syracuse, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225337"),
  "id": "balsamic-chicken-rice-dinner-kit-for-2-3",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/125026/balsamic-chicken-rice-dinner-kit-for-2-3.3aab895e18a1169ba481f6e6e54453a8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mother Kelly's",
  "sections": "our-foods",
  "dsc": "Balsamic Chicken + Rice Dinner Kit for 2-3",
  "price": 49,
  "rate": NumberInt(5),
  "country": "Long Island, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225338"),
  "id": "jumbo-hot-chicken-wings-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110700/jumbo-hot-chicken-wings-24-pack.b7eca4314dc88b8d6290b9e11f6249d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hattie B's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Jumbo Hot Chicken Wings - 24 Pack",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225339"),
  "id": "chicken-jiaozi-dumplings-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97105/chicken-jiaozi-dumplings-20-pack.15df330a0f96492d492d6f3ed6518aa8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "our-foods",
  "dsc": "Chicken Jiaozi Dumplings - 20 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533a"),
  "id": "picnic-chicken-sandwich-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119504/picnic-chicken-sandwich-kit-for-8.515b50a03c09b047c7a565f2f301dd1b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "our-foods",
  "dsc": "Picnic Chicken Sandwich Kit for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533b"),
  "id": "korean-fried-chicken-20-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123866/korean-fried-chicken-20-pack.3d78b065e21594f4ff152ebd439fa147.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Parachute",
  "sections": "our-foods",
  "dsc": "Korean Fried Chicken - 20 Pack",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533c"),
  "id": "game-day-jumbo-fried-chicken-wings-48-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117209/game-day-jumbo-fried-chicken-wings-48-pack.78a57d34edbff19ffe831262b69ae4f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Ribbon",
  "sections": "our-foods",
  "dsc": "\"Game Day\" Jumbo Fried Chicken Wings - 48 Pack",
  "price": 189,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533d"),
  "id": "002-five-pound-chicken-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134485/chicken-sausage-sampler-for-10.b4ac88fcbabc55e4ee9ff096060cb5af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Chicken Sausage Sampler for 10",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533e"),
  "id": "hot-mess-sandwich-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119051/hot-mess-sandwich-kit-for-6.72e9e8e82babf83cca91f4d744d5da98.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Big Shake's Hot Chicken",
  "sections": "our-foods",
  "dsc": "Hot Mess SandwichÂ® Kit for 6",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Franklin, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22533f"),
  "id": "backyard-barbecue-chicken",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105379/backyard-barbecue-chicken.321a1babf487d24419a8c3947a94a20b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Backyard Barbecue Chicken",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225340"),
  "id": "17542-cajun-mild-deep-fried-turkey",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72664/cajun-mild-deep-fried-turkey.6fc839ea4311c28f322e437829097e54.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Uncle Ray's Fried Turkeys",
  "sections": "our-foods",
  "dsc": "Cajun Mild Deep Fried Turkey",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Dallas, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225341"),
  "id": "choose-your-own-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 79.95,
  "rate": NumberInt(4),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225342"),
  "id": "23952-nancys-italian-gelato-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90388/nancys-italian-gelato-gift-box.d44dba927ca67daf7765e0c3a59f3587.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nancy Silverton's Nancy's Fancy",
  "sections": "our-foods",
  "dsc": "Nancy Silverton's Favorite Gelato Gift Box",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225343"),
  "id": "237283342-choose-your-own-frozen-custard-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133888/choose-your-own-frozen-custard-6-pack.f13e3415fd09547371a184d04166ff77.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "our-foods",
  "dsc": "Frozen Custard + Handmade Ice Cream - Choose Your Own - 6 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225344"),
  "id": "ice-cream-choose-your-own-5-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103364/ice-cream-choose-your-own-5-pints.05ed6c9fab612b8e5f0367e87428ebf7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 5 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225345"),
  "id": "17228-4-pint-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71773/choose-your-own-boozy-ice-cream-4-pints.cecb4c1a4d29b16b44c2b88fa59b3e86.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tipsy Scoop Boozy Ice Cream",
  "sections": "our-foods",
  "dsc": "Choose Your Own Boozy Ice Cream - 4 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225346"),
  "id": "ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110356/ice-cream-choose-your-own-6-pints.7e3199bc794ac9d43c69d8a632430dc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Museum of Ice Cream",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225347"),
  "id": "23595-choose-your-own-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89591/choose-your-own-ice-cream-sandwich-8-pack.aca778cca349220b2cf682a0577e1b7c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nye's Cream Sandwiches",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream Sandwich - 8 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Wilmington, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225348"),
  "id": "ice-cream-choose-your-own-4-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107316/ice-cream-choose-your-own-4-pints.22c48c4004a36083da64a69635076e6e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sugar Hill Creamery",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 4 Pints",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Harlem, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225349"),
  "id": "choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78414/ice-cream-choose-your-own-6-pints.ec19c8772f1fc363e86ef01890a56124.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Malai Ice Cream",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 6 Pints",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534a"),
  "id": "choose-your-own-ice-cream-12-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96047/ice-cream-choose-your-own-12-pints.e57770eaab1a0b7837095eda979e9a2b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "our-foods",
  "dsc": "Ice Cream - Choose Your Own 12 Pints",
  "price": 119.95,
  "rate": NumberInt(5),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534b"),
  "id": "best-sellers-ice-cream-collection-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95838/taste-of-kentucky-ice-cream-collection-6-pints.dc03a97b15828e9a01e81efc0b309d4d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crank & Boom Craft Ice Cream",
  "sections": "our-foods",
  "dsc": "Best Sellers Ice Cream Collection - 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Lexington, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534c"),
  "id": "choose-your-own-ice-cream-donuts-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Elegant Desserts",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream Donuts - 6 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534d"),
  "id": "choose-your-own-ice-cream-5-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133840/choose-your-own-ice-cream-5-pints.6507a1156121c05779e1363a268b8f80.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ice Cream Jubilee",
  "sections": "our-foods",
  "dsc": "Choose Your Own Ice Cream - 5 Pints",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534e"),
  "id": "pannas-choice-ice-cream-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127541/pannas-choice-ice-cream-6-pack.e49718042829aae8705f72dac2c97b5f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "CaffÃ¨ Panna Ice Cream",
  "sections": "our-foods",
  "dsc": "Panna's Choice Ice Cream 6-Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22534f"),
  "id": "gelato-and-sorbetto-minis-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102254/gelato-and-sorbetto-minis-12-pack.9cefc719fccb400e58167847ebd66a80.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nancy Silverton's Nancy's Fancy",
  "sections": "our-foods",
  "dsc": "Gelato & Sorbetto Minis - 12 pack",
  "price": 94,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225350"),
  "id": "mochi-ice-cream-choose-your-own-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122636/mochi-ice-cream-choose-your-own-12-pack.f6eb9b1a2020a9ff88c8bb069a910b22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Mochii",
  "sections": "our-foods",
  "dsc": "Mochi Ice Cream - Choose Your Own 12 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225351"),
  "id": "giant-ice-cream-sandwich-kit-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132386/build-your-own-ice-cream-sandwich-kit-6-pack.c81bd69ed1a452decb5bc599358dc644.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "our-foods",
  "dsc": "Build Your Own Ice Cream Sandwich Kit - 6 Pack",
  "price": 84,
  "rate": NumberInt(4),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225352"),
  "id": "mini-ice-cream-sandwiches-choose-your-own-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134845/mini-ice-cream-sandwiches-choose-your-own-16-pack.4f75836908c8ce41789c4af346bfa9d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream + Sugar",
  "sections": "our-foods",
  "dsc": "Mini Ice Cream Sandwiches - Choose Your Own 16 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225353"),
  "id": "layered-ice-cream-sundae-jar-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129301/layered-ice-cream-sundae-jar-choose-your-own-6-pack.a018cc2bb407befc6d7b618441849c28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Yard Milkshake Bar",
  "sections": "our-foods",
  "dsc": "Layered Ice Cream Sundae Jar - Choose Your Own 6 Pack",
  "price": 125,
  "rate": NumberInt(4),
  "country": "Gulf Shores, AL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225354"),
  "id": "cookie-monster-ice-cream-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131739/cookie-monster-ice-cream-sandwich-8-pack.9ad71ce3dd6f39fcbddc35af60a3b866.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nightingale Ice Cream Sandwiches",
  "sections": "our-foods",
  "dsc": "Cookie Monster Ice Cream Sandwich - 8 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Richmond, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225355"),
  "id": "best-seller-ice-cream-pack-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113988/best-seller-ice-cream-pack-6-pints.0d2fe2cd8b15418dbfff9b07e5387dbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bridgeman's Ice Cream",
  "sections": "our-foods",
  "dsc": "Best Seller Ice Cream Pack - 6 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Woodbury, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225356"),
  "id": "choose-your-own-ice-cream-creamwich-combo-for-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132414/6-creamwich-4-pint-ice-cream-combo.6196f68326686c2decd8847bf730fe0e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream'wich",
  "sections": "our-foods",
  "dsc": "4 Pint Ice Cream + 6 Cream'wich Combo",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Manhattan Beach, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225357"),
  "id": "giant-ice-cream-sandwich-kit-choose-your-own-9-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103337/build-your-own-ice-cream-sandwich-kit-9-pack.e972c9c8819bfc245d671eaf98107247.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Baked Bear",
  "sections": "our-foods",
  "dsc": "Build Your Own Ice Cream Sandwich Kit - 9 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "San Diego, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225358"),
  "id": "artisan-ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131929/artisan-ice-cream-choose-your-own-6-pints.fc029dfaf6c0b6143ed09f3dc6f72745.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cream + Sugar",
  "sections": "our-foods",
  "dsc": "Artisan Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225359"),
  "id": "bonastyle-ice-cream-choose-your-own-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134416/bonastyle-ice-cream-choose-your-own-6-pints.a10293b457234788157c88905a57612a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bona Bona Ice Cream",
  "sections": "our-foods",
  "dsc": "Meringue Topped Ice Cream - Choose Your Own 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Port Chester, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535a"),
  "id": "flavors-of-kentucky-ice-cream-collection-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95847/taste-of-kentucky-ice-cream-collection-6-pints.8e530e9a1dd44524fb25ab59976024da.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crank & Boom Craft Ice Cream",
  "sections": "our-foods",
  "dsc": "Flavors of Kentucky Ice Cream Collection - 6 Pints",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Lexington, KY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535b"),
  "id": "signature-chip-ice-cream-6-pints",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133218/signature-chip-ice-cream-6-pints.32228ca3b762a1f5970a14fea82139ec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Graeter's Ice Cream",
  "sections": "our-foods",
  "dsc": "Signature Chip Ice Cream - 6 Pints",
  "price": 79.95,
  "rate": NumberInt(4),
  "country": "Cincinnati, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535c"),
  "id": "2-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "our-foods",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas",
  "price": 67.99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535d"),
  "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "our-foods",
  "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535e"),
  "id": "choose-your-own-new-haven-style-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "our-foods",
  "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
  "price": 79,
  "rate": NumberInt(5),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22535f"),
  "id": "6-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "our-foods",
  "dsc": "6 Lou Malnati's Deep Dish Pizzas",
  "price": 116.99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225360"),
  "id": "choose-your-own-detroit-style-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132973/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "our-foods",
  "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225361"),
  "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "our-foods",
  "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225362"),
  "id": "wood-fired-pizzas-best-seller-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "our-foods",
  "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225363"),
  "id": "brooklyn-pizza-choose-your-own-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "our-foods",
  "dsc": "Brooklyn Pizza - Choose Your Own 5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225364"),
  "id": "4-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106828/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "our-foods",
  "dsc": "4 Lou Malnati's Deep Dish Pizzas",
  "price": 96.99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225365"),
  "id": "new-haven-style-mozzarella-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132144/new-haven-style-mozzarella-pizza-6-pack.8e8a38db57935f5cb6afa4202b966135.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "our-foods",
  "dsc": "New Haven-Style Mozzarella Pizza - 6 Pack",
  "price": 78,
  "rate": NumberInt(5),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225366"),
  "id": "choose-your-own-chicago-deep-dish-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "My Pi Pizza",
  "sections": "our-foods",
  "dsc": "Chicago Deep Dish Pizza - 4 Pack",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225367"),
  "id": "tonys-custom-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131555/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony's Pizza Napoletana",
  "sections": "our-foods",
  "dsc": "Choose Your Own Pizza - 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225368"),
  "id": "plain-thin-crust-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115101/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Columbia Inn",
  "sections": "our-foods",
  "dsc": "Plain Thin Crust Pizza - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Montville, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225369"),
  "id": "choose-your-own-3-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133289/choose-your-own-3-pizzas.a6de480878c0b3b9f4d240bacbb665e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Heggies Pizza",
  "sections": "our-foods",
  "dsc": "Choose Your Own - 3 Pizzas",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Milaca, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536a"),
  "id": "brooklyn-pizza-choose-your-own-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104883/brooklyn-pizza-choose-your-own-10-pack.7ddeb3b5b599ec9c7b1befcc9c14a1c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "our-foods",
  "dsc": "Brooklyn Pizza - Choose Your Own 10 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536b"),
  "id": "15464-detroit-style-pizza-squares-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112202/detroit-style-pizza-squares-choose-your-own-3-pack.75f7714d9a81fb455f7400086e4195bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Buddy's Pizza",
  "sections": "our-foods",
  "dsc": "Detroit-Style Pizza Squares - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Detroit, MI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536c"),
  "id": "15952-create-your-own-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133262/choose-your-own-pizza-3-pack.7ee3cc9bbc48b97a0f66e073d4071982.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Detroit Style Pizza Co",
  "sections": "our-foods",
  "dsc": "Detroit Pizza - Choose Your Own Pizza 3 Pack",
  "price": 85,
  "rate": NumberInt(4),
  "country": "Detroit, MI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536d"),
  "id": "thin-crust-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118791/thin-crust-pizza-choose-your-own-4-pack.c9d8f813e752cb2a77b93e02752c5daf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bill's Pizza & Pub",
  "sections": "our-foods",
  "dsc": "Thin Crust Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536e"),
  "id": "17408-coal-oven-margherita-pizza-pie-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72343/coal-oven-margherita-pizza-pie-4-pack.c5944293e17b40f2659562179b493a10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Table 87 Pizza",
  "sections": "our-foods",
  "dsc": "Coal Oven Margherita Pizza - 4 Pies",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22536f"),
  "id": "pan-style-deep-dish-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137057/Pequods-CYO-4-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pequod's Pizza",
  "sections": "our-foods",
  "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225370"),
  "id": "ny-style-pizza-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132421/ny-style-pizza-choose-your-own-3-pack.6364a762aa92bd037cc1519037680fef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rubirosa Pizza",
  "sections": "our-foods",
  "dsc": "NY Style Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225371"),
  "id": "buffalo-style-pepperoni-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133315/buffalo-style-pepperoni-pizza-2-pack.38d99af16bc34554992bbed53870e533.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picasso's Pizza",
  "sections": "our-foods",
  "dsc": "Buffalo Style Pepperoni Pizza - 2 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225372"),
  "id": "16940-brick-oven-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71222/wood-fired-pizza-6-pack.1124121a87723161fcd034de9256cd22.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roberta's Pizza",
  "sections": "our-foods",
  "dsc": "Wood Fired Pizza 6 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225373"),
  "id": "neapolitan-pizza-choose-your-own-3-Pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motorino Pizzeria",
  "sections": "our-foods",
  "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225374"),
  "id": "pizza-choose-your-own4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131566/pizza-choose-your-own-4-pack.92a5ef9f5f219eb870cf7e909656545d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Regina Pizzeria",
  "sections": "our-foods",
  "dsc": "Pizza - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225375"),
  "id": "Sausage-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133501/sausage-pizza-6-pack.31fa94213da11ab58951fcc7838f6754.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "our-foods",
  "dsc": "New Haven-Style Sausage Pizza - 6 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225376"),
  "id": "17409-coal-oven-margherita-pizza-slices-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134133/coal-oven-margherita-pizza-8-slices.a6e3c0e43bf45c956014f064e25735cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Table 87 Pizza",
  "sections": "our-foods",
  "dsc": "New York Pizza - 8 Giant Slices",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225377"),
  "id": "2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "our-foods",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
  "price": 104.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225378"),
  "id": "thin-crust-pizza-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116162/thin-crust-pizza-choose-your-own-6-pack.9d724e00f69d761845f7edf0f66698d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Columbia Inn",
  "sections": "our-foods",
  "dsc": "Thin Crust Pizza - Choose Your Own 6 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Montville, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225379"),
  "id": "choose-your-own-chicago-deep-dish-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89920/chicago-deep-dish-pizza-2-pack.258bfa1979e758e45ffc2c93043540e5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "My Pi Pizza",
  "sections": "our-foods",
  "dsc": "Chicago Deep Dish Pizza - 2 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537a"),
  "id": "original-cheese-new-york-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104910/cheese-neapolitan-pizza-2-pack.856b6b14d276981a4654e1bb348cb328.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe & Pats Pizzeria",
  "sections": "our-foods",
  "dsc": "Original Cheese New York Pizza - 2 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Staten Island, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537b"),
  "id": "choose-your-own-bar-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133147/choose-your-own-bar-pizza-4-pack.2576e0f60267c680022bd3466542bb9e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cape Cod Cafe Pizza",
  "sections": "our-foods",
  "dsc": "Bar Pizza - 4 Pack - Choose Your Own",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brockton, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537c"),
  "id": "choose-your-own-6-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82735/choose-your-own-6-pizzas.5e9950eb1a06f3b87543f867506511b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Heggies Pizza",
  "sections": "our-foods",
  "dsc": "Choose Your Own - 6 Pizzas",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Milaca, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537d"),
  "id": "16939-brick-oven-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71231/wood-fired-pizza-4-pack.8818b2e71ad1149790d0c03413d11996.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roberta's Pizza",
  "sections": "our-foods",
  "dsc": "Wood Fired Pizza 4 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537e"),
  "id": "chicago-deep-dish-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101630/chicago-deep-dish-pizza-choose-your-own-3-pack.b795d4f915c116ba9e7f2e7951e79ad0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gino's East",
  "sections": "our-foods",
  "dsc": "Chicago Deep Dish Pizza Box - Choose Your Own 3 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22537f"),
  "id": "pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134259/pizza-choose-your-own-4-pack.bc138c4f695f74bf78f13204865a9c5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Slim & Husky's",
  "sections": "our-foods",
  "dsc": "Pizza - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225380"),
  "id": "wood-fired-pizza-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133839/pizza-choose-your-own-2-pack.0820d0d4642ddb9fbda63e2394b63932.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Avenue Wood Fired Pizza",
  "sections": "our-foods",
  "dsc": "Wood Fired Pizza - Choose Your Own 2 Pack",
  "price": 65,
  "rate": NumberInt(4),
  "country": "Pleasantville, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225381"),
  "id": "neapolitan-pizza-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131875/wood-fired-pizza-choose-your-own-6-pack.fa6cf8ffff1241d50c27d804e566d605.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pasquale Jones",
  "sections": "our-foods",
  "dsc": "Neapolitan Pizza - Choose Your Own 6 Pack",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225382"),
  "id": "signature-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134789/signature-sampler-serves-10.2d7375635d9152e3401a0daacd40f648.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bonci Pizza",
  "sections": "our-foods",
  "dsc": "Signature Pizza Sampler - Serves 10",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225383"),
  "id": "pan-style-deep-dish-pizza-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137018/Pequods-CYO-2-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pequod's Pizza",
  "sections": "our-foods",
  "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 2 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225384"),
  "id": "chicago-style-pizza-buy-3-get-1-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135044/chicago-style-pizza-choose-your-own-3-pack.c97386b561818a977030178b06fa5bda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sam's Coal Fired Pizza",
  "sections": "our-foods",
  "dsc": "Chicago Style Pizza - Buy 3 + Get 1 FREE Cheese Pizza",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Daytona Beach, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225385"),
  "id": "famous-pizza-making-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134230/famous-pizza-making-kit.74d1d16b7fa71a2acbd36f825d84d75b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "our-foods",
  "dsc": "Famous Pizza Making Kit",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225386"),
  "id": "wood-fired-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "our-foods",
  "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
  "price": 135,
  "rate": NumberInt(4),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225387"),
  "id": "neapolitan-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Delfina",
  "sections": "our-foods",
  "dsc": "Neapolitan Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225388"),
  "id": "15318-make-your-own-old-forge-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67763/make-your-own-old-forge-pizza-2-pack.f7cd011e9c2ac3182dbe1e3470985354.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcaro & Genell",
  "sections": "our-foods",
  "dsc": "Make Your Own Old Forge Pizza 2 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Old Forge, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225389"),
  "id": "buffalo-style-pepperoni-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131666/buffalo-style-pepperoni-pizza-4-pack.1c5ea10d8c7176f0ad4eef363a1f3543.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picasso's Pizza",
  "sections": "our-foods",
  "dsc": "Buffalo Style Pepperoni Pizza - 4 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538a"),
  "id": "cheese-pizza-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134099/cheese-pizza-5-pack.e22243aba836daa325ee1b563fc2ca36.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "our-foods",
  "dsc": "Classic Cheese Pizza - 5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538b"),
  "id": "famous-artichoke-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/80601/artichoke-basilles-pizza-2-pack.3e8f5b94405720ed1c0ef2765c5b0669.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Artichoke Basille's Pizza",
  "sections": "our-foods",
  "dsc": "Famous Artichoke Pizza - 2 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538c"),
  "id": "detroit-style-pizza-best-seller-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131672/detroit-style-pizza-best-seller-3-pack.f56562a340b3ada0a8a571fa80020304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "our-foods",
  "dsc": "Detroit-Style Pizza - Best Seller 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538d"),
  "id": "pepperoni-ny-style-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108219/pepperoni-ny-style-pizza-2-pack.77685b4dbd4cea75fa8e8b8ac59ba2b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rubirosa Pizza",
  "sections": "our-foods",
  "dsc": "Pepperoni NY Style Pizza - 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538e"),
  "id": "spicy-spring-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/61943/spicy-spring-2-pies-serves-16.fd9e6f0fce7306a15ec794b7d91f7056.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Prince Street Pizza",
  "sections": "our-foods",
  "dsc": "Spicy Springâ¢ - 2 Pies (Serves 16)",
  "price": 124.95,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22538f"),
  "id": "pepperoni-thin-crust-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132400/pepperoni-thin-crust-pizza-4-pack.b160bfd47b2d191f6579b017bbbf02e8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Columbia Inn",
  "sections": "our-foods",
  "dsc": "Pepperoni Thin Crust Pizza - 4 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Montville, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225390"),
  "id": "1-detroit-style-pizza-squares-best-seller-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128350/detroit-style-pizza-squares-best-seller-3-pack.ac9b269d1d5373fb7d33093a7a760490.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Buddy's Pizza",
  "sections": "our-foods",
  "dsc": "Detroit-Style Pizza Squares Best Seller - 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Detroit, MI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225391"),
  "id": "roast-pork-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "our-foods",
  "dsc": "Roast Pork Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225392"),
  "id": "double-bone-in-heritage-berkshire-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114535/double-bone-in-heritage-berkshire-pork-chops-4-pack.5b6a88ca2c85ece8fd5a6dd6abd4f046.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Double Bone-in Heritage Berkshire Pork Chops - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225393"),
  "id": "smoked-whole-bbq-pork-shoulder-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90419/smoked-whole-bbq-pork-shoulder-serves-10-15.cc662e8f02f2910f67d482bbdd555954.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "our-foods",
  "dsc": "Smoked Whole BBQ Pork Shoulder - Serves 10-15",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225394"),
  "id": "pork-steaks",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/41969/pork-steaks.aaa962e22c9099952fdf15cb0382bd65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Pork Steaks",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225395"),
  "id": "3021-slaughterhouse-five-brisket-pork-sausage-turkey",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133207/slaughterhouse-five-brisket-pork-sausage-turkey.28b91d5b2fdf226445bb9e1496f4b126.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Slaughterhouse Five - Brisket + Pork + Sausage + Turkey",
  "price": 128.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225396"),
  "id": "pork-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "our-foods",
  "dsc": "Pork Buns - 12 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225397"),
  "id": "16561-snake-river-farms-kurobuta-pork-belly",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70375/kurobuta-pork-belly.8a4717de51d5a8d55817afcff1719634.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "our-foods",
  "dsc": "Kurobuta Pork Belly",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225398"),
  "id": "porchetta-siu-yuk-plus-chimichurri-sauce-for-5-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117510/porchetta-siu-yuk-kit-for-5-6.e643963cc5b51dbfb43b50b8e6917a76.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rice Box",
  "sections": "our-foods",
  "dsc": "Porchetta \"Siu Yuk\" + Chimichurri Sauce - 2 lbs.",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225399"),
  "id": "pulled-pork-and-chopped-beef-brisket-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115332/pulled-pork-and-chopped-beef-brisket-combo.402da09e367972eadca0f8f5150bf2d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Pulled Pork & Chopped Beef Brisket Combo",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539a"),
  "id": "23238-pork-tenderloin-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132633/pork-tenderloin-sandwich-4-pack.b6914a19ee345d5284ed1eaf00f5c2ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "our-foods",
  "dsc": "Pork Tenderloin Sandwich - 4 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539b"),
  "id": "roast-pork-sandwich-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115001/roast-pork-sandwich-kit-for-8.cfeb20e4e4b89f9d72680d5e34fc9cc7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "our-foods",
  "dsc": "Roast Pork Sandwich Kit for 8",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539c"),
  "id": "pulled-pork-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131348/pulled-pork-4-lbs.689b1d5fd5204a722aca175419148a3a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peg Leg Porker",
  "sections": "our-foods",
  "dsc": "Pulled Pork - 4 lbs.",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539d"),
  "id": "bo-ssam-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "our-foods",
  "dsc": "Half Bo SsÃ¤m Dinner for 4-6",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539e"),
  "id": "memphis-pulled-pork-shoulder-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86731/memphis-pulled-pork-shoulder-4-lbs.089448f3aebd24fe82f223151314d853.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charlie Vergos' Rendezvous",
  "sections": "our-foods",
  "dsc": "Memphis Pulled Pork Shoulder - 4 lbs.",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22539f"),
  "id": "18650-carolina-pulled-pork-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75464/carolina-pulled-pork-sandwich-pack.8e672a876d720c8471b08ffa47fbbbc1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Carolina Pulled Pork Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a0"),
  "id": "stone-porter-beer-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85711/stone-porter-beer-pork-chops-4-pack.95392dbb0fe0b41bd6d128fa81d63814.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "our-foods",
  "dsc": "Stone Porter Beer Pork Chops - 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a1"),
  "id": "17347-pulled-pork-3-pound-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137383/Central-BBQ-Pulled-Pork-Packs-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Pulled Pork Pack - Serves 6-8",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a2"),
  "id": "pork-ribs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133284/pork-ribs.6b9717d10630be7c5bea4b69987a33c6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Pork Ribs",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a3"),
  "id": "joes-kc-ribs-and-pulled-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81831/joes-kc-ribs-and-pulled-pork.80d62bf64dc6a772572d7f589c8f95af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Joe's KC Ribs & Pulled Pork",
  "price": 94.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a4"),
  "id": "whole-smoked-pork-shoulder",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133153/whole-smoked-pork-shoulder.4523225ac2025f330c450bdec541bb7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Whole Smoked Pork Shoulder",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a5"),
  "id": "whole-pork-belly-5-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131896/whole-pork-belly-5-lbs.68e0553bf92c74601ff7b6c922af2c5a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roegels Barbecue",
  "sections": "our-foods",
  "dsc": "Whole Pork Belly - 5 lbs.",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a6"),
  "id": "1824200000002-pulled-pork-pirogies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132154/pulled-pork-pierogis.860293a62d3ef57afd60b6f78cdb7c64.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Baba & Pops",
  "sections": "our-foods",
  "dsc": "Pulled Pork Pierogis",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Denver, CO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a7"),
  "id": "18041432432-pulled-pork-pack-serves-12-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73798/pappys-pulled-pork-pack-serves-12-15.1960957d09163524732958e85c5441f7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "our-foods",
  "dsc": "Pappy's Pulled Pork Pack - Serves 12-15",
  "price": 139,
  "rate": NumberInt(5),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a8"),
  "id": "mofongo-with-roasted-pork-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132696/mofongo-roasted-pork-kit-for-4.f82d15d0e375b9f14e7771cc14c74262.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Triple Threat Truck",
  "sections": "our-foods",
  "dsc": "âMofonGOâ with Roasted Pork Kit for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253a9"),
  "id": "spicy-pork-wontons-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134605/spicy-pork-wontons-25-pack.638f79adb694c9b0a61bd18542a72285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dumpling Monster",
  "sections": "our-foods",
  "dsc": "Spicy Pork Wontons - 25 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253aa"),
  "id": "guys-bbq-pulled-pork-trash-can-nachos",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115312/guys-bbq-pulled-pork-trash-can-nachos.5783c0f7459bfc0adbbcf063edced3fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "our-foods",
  "dsc": "Guy's BBQ Pulled Pork Trash Can Nachos",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ab"),
  "id": "17352-ribs-and-pulled-pork-medium-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137368/Central-BBQ-Ribs-Pulled-Pork-Party-Pack-1_.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Pulled Pork Dinner for 8",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ac"),
  "id": "stone-porter-beer-pork-chops-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85748/stone-porter-beer-pork-chops-6-pack.dbfc6a8cd00795a869c9f9900a20401f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "our-foods",
  "dsc": "Stone Porter Beer Pork Chops - 6 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ad"),
  "id": "bbq-pulled-pork-feast-5-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131539/bbq-pulled-pork-feast-5-lbs.46e3b2429e7886ea112efe7d8f8705dc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "BBQ Pulled Pork Feast - 5 lbs",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ae"),
  "id": "17352-ribs-and-pulled-pork-small-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137366/Central-BBQ-Ribs-Pulled-Pork-Dinner-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Ribs & Pulled Pork Dinner for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253af"),
  "id": "roast-pork-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134280/roast-pork-sandwich-4-pack.7541242ed3c3c4d5d00ad8a99becea4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fedoroff's Roast Pork",
  "sections": "our-foods",
  "dsc": "Roast Pork Sandwich - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b0"),
  "id": "habbersett-scrapple-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134171/habbersett-scrapple-4-pack.28dbdb2ce009efff658734c7321c82f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Habbersett Scrapple",
  "sections": "our-foods",
  "dsc": "Habbersett Scrapple - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeville, DE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b1"),
  "id": "roast-pork-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101368/roast-pork-sandwich-kit-4-pack.c05d6009a6c4e227c851e326cd2cee49.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John's Roast Pork",
  "sections": "our-foods",
  "dsc": "Roast Pork Sandwich Kit - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b2"),
  "id": "asado-de-puerco-stewed-pork-shoulder-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112572/asado-de-puerco-stewed-pork-shoulder-for-4.1b9176347000861a2a1715937ffa2337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picos Mexican Restaurant",
  "sections": "our-foods",
  "dsc": "\"Asado de Puerco\" - Stewed Pork Shoulder for 4",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b3"),
  "id": "cheesy-char-siu-bbq-pork-bao-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117504/cheesy-char-siu-bbq-pork-bao-12-pack.df8c62bb06b4178747a7c2a6ab0ad47d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rice Box",
  "sections": "our-foods",
  "dsc": "Cheesy \"Char Siu\" BBQ Pork Bao - 12 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b4"),
  "id": "23238-pork-tenderloin-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134486/pork-tenderloin-sandwich-8-pack.aa66fab9ba71b1697d0a74e6f1f40be2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "our-foods",
  "dsc": "Pork Tenderloin Sandwich - 8 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b5"),
  "id": "18041-ribs-and-pulled-pork-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73762/pappys-ribs-and-pulled-pork-dinner-for-8.b1ebab4ba20903bea0fc8ad73df29ddb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "our-foods",
  "dsc": "Pappy's Ribs & Pulled Pork - Dinner for 8",
  "price": 129,
  "rate": NumberInt(4),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b6"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b7"),
  "id": "texas-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102047/texas-pork-chops-4-pack.7dd85d8cdfe3fc773a0b2c5cadf377ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schoepf's BBQ",
  "sections": "our-foods",
  "dsc": "Texas Sized Pork Chops - 4 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Belton, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b8"),
  "id": "pork-ribeye-shabu-shabu-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136692/Shabu-Tatsu-Shabu-Shabu-11.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shabu Tatsu",
  "sections": "our-foods",
  "dsc": "Pork + Ribeye Shabu Shabu Kit for 4",
  "price": 165,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253b9"),
  "id": "kansas-city-pulled-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132300/kansas-city-pulled-pork.67dd666df04e0f095136d712f6a96f10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meat Mitch",
  "sections": "our-foods",
  "dsc": "Kansas City Pulled Pork",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ba"),
  "id": "bbq-chopped-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85746/bbq-chopped-pork.3747d8035f680d0e20b0cf8604454ed9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "White Swan BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Chopped Pork",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Smithfield, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253bb"),
  "id": "smoked-pork-loin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96700/smoked-pork-loin.3c1f29311ebe60c29ac03289b5e6b2f4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "our-foods",
  "dsc": "Smoked Pork Loin",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253bc"),
  "id": "004-pork-boudin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66643/pork-boudin.d0ea122c5c9046a08ee9d8d1bc5c0b09.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Comeaux's",
  "sections": "our-foods",
  "dsc": "Pork Boudin",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Lafayette, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253bd"),
  "id": "homemade-pork-buns-18-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131675/homemade-pork-buns-18-pack.b3a41e86a48c8c484a3f5e87aeedd511.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "RedFarm",
  "sections": "our-foods",
  "dsc": "Homemade Pork Buns - 18 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253be"),
  "id": "habbersett-scrapple-and-taylor-pork-roll-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133435/habbersett-scrapple-and-taylor-pork-roll-combo.a97052fdcec87f49faa5c6caa1e1271b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Habbersett Scrapple",
  "sections": "our-foods",
  "dsc": "Habbersett Scrapple & Taylor Pork Roll Combo",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeville, DE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253bf"),
  "id": "bbq-pulled-pork-pack-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131234/bbq-pulled-pork-pack-for-8.bd81f82597f64ecbd5f99bd056a0a6a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "our-foods",
  "dsc": "BBQ Pulled Pork Pack for 8",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c0"),
  "id": "17347-pulled-pork-6-pound-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137386/Central-BBQ-Pulled-Pork-Packs-2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "our-foods",
  "dsc": "Pulled Pork Pack - Serves 10-12",
  "price": 125,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c1"),
  "id": "3831812-legendary-pulled-pork-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135517/Joe_s-KC-Pork-Z-Man-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Legendary Pulled Pork Z-Man Sandwich Kit - 8 Pack",
  "price": 89.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c2"),
  "id": "pulled-pork-and-baby-back-ribs-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115360/pulled-pork-and-baby-back-ribs-combo.65b3eb24682385c2f3b8579b57229b84.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "our-foods",
  "dsc": "Pulled Pork & Baby Back Ribs Combo",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c3"),
  "id": "duck-lamb-salami-delight-gift-box-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129030/duck-lamb-delight-gift-box-4-pack.a1e4bd2f80720f0b4341387705ff2ddb.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Salty Pork Bits",
  "sections": "our-foods",
  "dsc": "Duck + Lamb Salami Delight Gift Box - 4 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c4"),
  "id": "ms-made-double-smoked-pork-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131807/ms-made-double-smoked-pork-sausage-sampler.47b527fab5f80d9a2eb41f2cefcb427f.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "MS Made Double Smoked Pork Sausage Sampler",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c5"),
  "id": "17th-street-bbq-pulled-pork-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90777/17th-street-bbq-pulled-pork-pack.850b9b9b4d2fe7b2652849b1a1a06f9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "17th Street BBQ",
  "sections": "our-foods",
  "dsc": "17th Street BBQ Pulled Pork Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Murphsboro, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c6"),
  "id": "cardiff-crack-tri-tip-and-pork-chops-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134802/cardiff-crack-tri-tip-and-pork-chops-combo-pack.4e443672759c54837bc8a8cb1511faaa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "our-foods",
  "dsc": "Cardiff Crack Tri Tip & Pork Chops Combo Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c7"),
  "id": "campos-philly-roast-pork-provolone-and-broccoli-rabe-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91431/campos-philly-roast-pork-provolone-and-broccoli-rabe-4-pack.7bc5ce9d547131f50c992fe82c1fd9c3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "our-foods",
  "dsc": "Campo's Philly Roast Pork, Provolone & Broccoli Rabe - 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c8"),
  "id": "pulled-pork-2-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120857/pulled-pork-2-lbs.23a8d91cd47ae9f2b9649a1faf395282.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Germantown Commissary BBQ",
  "sections": "our-foods",
  "dsc": "Pulled Pork - 2 lbs",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Germantown, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253c9"),
  "id": "taiwanese-style-pork-chop-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107818/taiwanese-style-pork-chop-dinner-kit-for-4.af151d422000d25f084e36e5f83cccba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "our-foods",
  "dsc": "Taiwanese Style Pork Chop Dinner Kit for 4",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ca"),
  "id": "chicharron-en-salsa-verde-pork-belly-in-salsa-verde-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112609/chicharron-en-salsa-verde-pork-belly-in-salsa-verde-for-2.18fde7f6fbdc6ab6d905087209e0afa9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picos Mexican Restaurant",
  "sections": "our-foods",
  "dsc": "\"Chicharron en Salsa Verde\" - Pork Belly in Salsa Verde for 2",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253cb"),
  "id": "pork-kalamakia-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107915/pork-kalamakia-dinner-kit-for-4.2e603043e83f55f4807e6c5bc2471100.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Niko Niko's",
  "sections": "our-foods",
  "dsc": "Pork Kalamakia Dinner Kit for 4",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253cc"),
  "id": "pan-fried-pork-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134595/pan-fried-pork-buns-12-pack.8a1b36aca41ba2cb43191336aa71df0b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dumpling Monster",
  "sections": "our-foods",
  "dsc": "Pan Fried Pork Buns - 12 Pack",
  "price": 65,
  "rate": NumberInt(4),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253cd"),
  "id": "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "\"The Gothamist\" Prosciutto + Burrata Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ce"),
  "id": "15504-original-muffuletta-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "our-foods",
  "dsc": "Original Muffuletta Sandwich - 2-Pack (Serves 6-8)",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253cf"),
  "id": "the-bomb-sandwich-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sal, Kris & Charlie's Deli",
  "sections": "our-foods",
  "dsc": "The Bomb Sandwich for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Astoria, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d0"),
  "id": "15428-pittsburgh-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Primanti Bros.",
  "sections": "our-foods",
  "dsc": "Primanti Bros Sandwich Pack - (Choose Your Meat)",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d1"),
  "id": "pastrami-burnt-end-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "our-foods",
  "dsc": "Ugly Buns \"Burnt End\" Sandwich Kit - 6 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d2"),
  "id": "favorite-sloppy-joe-sandwich",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67768/new-jersey-sloppy-joe-sandwich-feeds-3.b866e4c84e09ad65cb8c6b9f4949ec7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "our-foods",
  "dsc": "Favorite Sloppy Joe Sandwich",
  "price": 79,
  "rate": NumberInt(5),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d3"),
  "id": "sandwich-best-sellers-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "Italian Sandwich Kit Best Sellers - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d4"),
  "id": "15504-original-muffuletta-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133232/original-muffuletta-sandwich-3-pack.2b00693e49ef277bc2b69810709d8fe8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "our-foods",
  "dsc": "Original Muffuletta Sandwich - 3 pack (Serves 10-12)",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d5"),
  "id": "roast-pork-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "our-foods",
  "dsc": "Roast Pork Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d6"),
  "id": "meet-the-reubens-sandwich-kit-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131830/plain-cheesecake.de3d6cefd530477dc04769774752448e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "our-foods",
  "dsc": "Meet the Reubens Sandwich Kit for 4-6",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d7"),
  "id": "italian-beef-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82793/italian-beef-sandwich-kit-8-pack.b87a0062ceecd6bb8511bfad8f1af8cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Buona Italian Beef",
  "sections": "our-foods",
  "dsc": "Italian Beef Sandwich Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d8"),
  "id": "campos-philly-cheesesteaks-and-hoagies-combo-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134573/campos-philly-cheesesteaks-and-hoagies-combo-4-pack.075e04e4a7054d3c042b1f380639ace9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "our-foods",
  "dsc": "Campo's Philly Cheesesteaks & Hoagies Combo - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253d9"),
  "id": "the-original-french-dip-sandwich-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85861/the-original-french-dip-6-pack.a52e10de7346a8330f234e2310015a05.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Philippe The Original French Dip",
  "sections": "our-foods",
  "dsc": "The Original French Dip Sandwich - 6 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253da"),
  "id": "23728-beef-on-weck-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89891/beef-on-weck-sandwich-kit-4-pack.2e34382035f62d683dda73b11cfbe4e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "our-foods",
  "dsc": "Beef on Weck Sandwich Kit - 4 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253db"),
  "id": "fried-chicken-biscuit-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sunrise Biscuit Kitchen",
  "sections": "our-foods",
  "dsc": "Fried Chicken Biscuit Sandwich Kit",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Chapel Hill, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253dc"),
  "id": "pinocchio-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133768/pinocchio-sandwich-kit-4-pack.62c1cd24452c76f7354f9fc39652bcda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "\"The Pinocchio\" Prosciutto + Soppressata + Mozzarella Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253dd"),
  "id": "legendary-brisket-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Legendary Brisket Z-Man Sandwich Kit - 8 Pack",
  "price": 99.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253de"),
  "id": "favorite-sloppy-joe-sandwich-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132713/new-jersey-sloppy-joe-3-pack-serves-9.c5ef8ff07dccdd95de92621c72a831cb.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "our-foods",
  "dsc": "Favorite Sloppy Joe Sandwich - 3 Pack",
  "price": 159,
  "rate": NumberInt(5),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253df"),
  "id": "1756745-grilled-specialty-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132771/grilled-specialty-sandwich-4-pack.8129b512606a14070d490a9a5e2a97a9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sam LaGrassa's",
  "sections": "our-foods",
  "dsc": "Grilled Specialty Sandwich 4 Pack",
  "price": 125,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e0"),
  "id": "23699-meatball-sandwich-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89816/meatball-sandwich-kit-6-pack.f4f05520fe4d25f90520ffe80e543f83.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "our-foods",
  "dsc": "Meatball Sandwich Kit - 6 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e1"),
  "id": "18269-monster-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/74442/a-monster-sandwich-kit-for-4.8bf87e4a1240c2d7b31c04ea31348639.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sarge's Deli",
  "sections": "our-foods",
  "dsc": "A Monster Sandwich Kit for 4",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e2"),
  "id": "23728-beef-on-weck-and-frozen-custard-for-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89844/beef-on-weck-and-frozen-custard-for-4-pack.8b76cc5bddf98593330297b55c97835c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "our-foods",
  "dsc": "Beef on Weck & Frozen Custard for 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e3"),
  "id": "18650-carolina-pulled-pork-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75464/carolina-pulled-pork-sandwich-pack.8e672a876d720c8471b08ffa47fbbbc1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "our-foods",
  "dsc": "Carolina Pulled Pork Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e4"),
  "id": "sandwiches-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133186/italian-sandwich-kits-choose-your-own-4-pack.c9d2b1d33a3151dafcc65055667cd265.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "Italian Sandwich Kits - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e5"),
  "id": "matthew-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109101/matthew-sandwich-kit-4-pack.629fd9bbcf23a9f42137ee34a4807b06.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "\"The Matthew\" Prosciutto + Mozzarella Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e6"),
  "id": "famous-cuban-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105841/famous-cuban-sandwich-kit-for-4.6f9e16a68848ca76015bf057b2d8ab8e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Versailles Restaurant",
  "sections": "our-foods",
  "dsc": "Famous Cuban Sandwich Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Miami, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e7"),
  "id": "sub-sandwich-sampler-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132050/sub-sandwich-sampler-10-pack.94ea7d56e4588b1ab4d497de1835524b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "our-foods",
  "dsc": "Sub Sandwich Sampler - 10 Pack",
  "price": 209,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e8"),
  "id": "campos-italian-hoagies-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89876/campos-italian-hoagies-4-pack.d5d8bc0cfde70806e2c3116a1d0075a6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "our-foods",
  "dsc": "Campo's Italian Hoagies - 4 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253e9"),
  "id": "fried-chicken-sandwich-combo-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115433/fried-chicken-sandwich-combo-kit-for-6.649e00580828a749ee120ec205cf9bb8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "our-foods",
  "dsc": "Fried Chicken Sandwich Combo Kit for 6",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ea"),
  "id": "pats-original-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87749/pats-original-philly-cheesesteak-4-pack.fe6d8af186d93848f9a5090118fe8b46.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "our-foods",
  "dsc": "Pat's Original Philly Cheesesteak - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253eb"),
  "id": "23238-pork-tenderloin-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132633/pork-tenderloin-sandwich-4-pack.b6914a19ee345d5284ed1eaf00f5c2ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "our-foods",
  "dsc": "Pork Tenderloin Sandwich - 4 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ec"),
  "id": "chaps-pit-beef-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96174/chaps-signature-pit-beef-sandwich-kit-8-pack.4c8dc2a9b8a1b86d7413cb7eb0b53004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chaps Pit Beef",
  "sections": "our-foods",
  "dsc": "Chap's Signature Pit Beef Sandwich Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ed"),
  "id": "swiss-stack-reuben-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98963/swiss-stack-reuben-sandwich-kit-4-pack.65cd91d0b83eddeec85ea11da556a280.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "our-foods",
  "dsc": "Swiss Stack \"Reuben\" Sandwich Kit - 4 Pack",
  "price": 125,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ee"),
  "id": "choose-your-own-subs-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85485/choose-your-own-subs-for-4.13c18ffab976ab1579f35cddd2afee9c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "White House Subs",
  "sections": "our-foods",
  "dsc": "Choose Your Own Subs for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Atlantic City, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ef"),
  "id": "reuben-sandwich-kit-serves-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85449/reuben-sandwich-kit-serves-2-4.a8b347c9d782fbd483209e94c45630cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Liebman's Kosher Deli",
  "sections": "our-foods",
  "dsc": "Reuben Sandwich Kit (serves 2-4)",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f0"),
  "id": "1550410023131-original-muffuletta-sandwich-4-pack-serves-16-20",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/76639/original-muffuletta-sandwich-4-pack-serves-16-20.9962daf37da5599284ad218cbf6cf049.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "our-foods",
  "dsc": "Original Muffuletta Sandwich - 4 pack (Serves 14-16)",
  "price": 179,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f1"),
  "id": "the-reggie-biscuit-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132111/the-reggie-sandwich-kit-for-4.f53744b8e7ad1c844cb1511b910747f1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pine State Biscuits",
  "sections": "our-foods",
  "dsc": "The Reggie Sandwich Kit for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f2"),
  "id": "sandwich-best-sellers-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134378/italian-sandwich-kit-best-sellers-8-pack.7e6c21313e048070dc76d26a6ef1ef5d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "our-foods",
  "dsc": "Italian Sandwich Kit Best Sellers - 8 Pack",
  "price": 179,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f3"),
  "id": "cheesesteak-and-roast-pork-sandwich-combo-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114249/cheesesteak-and-roast-pork-sandwich-combo-4-pack.97a1ad6b2b653e5b48ba79b759545476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fedoroff's Roast Pork",
  "sections": "our-foods",
  "dsc": "Cheesesteak & Roast Pork Sandwich Combo - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f4"),
  "id": "chopped-brisket-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/76735/chop-beef-sandwich-kit.840cf0a6fea897269b53ab01b2575655.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Louie Mueller Barbecue",
  "sections": "our-foods",
  "dsc": "Chopped Brisket Sandwich Kit for 8",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Taylor, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f5"),
  "id": "boloney-rex-sub-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120497/boloney-rex-sub-sandwich-2-pack.b20da77b5509fd6fb26a350dd0f93778.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "our-foods",
  "dsc": "Boloney Rex Sub Sandwich - 2 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f6"),
  "id": "17577-prime-smoked-beef-brisket-package-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72771/prime-smoked-brisket-sandwich-pack-for-2.5f64f4b580dc184c5f5bed5675e65448.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wagshal's",
  "sections": "our-foods",
  "dsc": "Prime Smoked Brisket Sandwich Pack for 2",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f7"),
  "id": "237282-beef-on-weck-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89888/beef-on-weck-sandwich-kit-8-pack.7c49b1a9932ebd017c1d276276349617.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "our-foods",
  "dsc": "Beef on Weck Sandwich Kit - 8 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f8"),
  "id": "blackstone-reuben-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86691/blackstone-reuben-sandwich-kit-for-4.05b9a82b798890ad54c874c996a78ac9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crescent Moon",
  "sections": "our-foods",
  "dsc": "The Original Blackstone Reuben Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Omaha, NE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253f9"),
  "id": "18040-new-jersey-sloppy-joe-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73824/new-jersey-sloppy-joe-6-pack.8f594005c4a06d35dafc96371608b97d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Millburn Deli",
  "sections": "our-foods",
  "dsc": "New Jersey Sloppy Joe - 6 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Millburn, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253fa"),
  "id": "butcher-muffuletta-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134083/butcher-muffuletta-4-pack.1f020f3eaccbeab19131fd4bf3578cfa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cochon Butcher",
  "sections": "our-foods",
  "dsc": "Cochon's Hot Muffuletta - 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253fb"),
  "id": "walters-hot-dog-kit-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134674/walters-hot-dog-kit-12-pack.f9cb866a4860122a13c7d6730f70fe98.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Walter's Hot Dogs",
  "sections": "our-foods",
  "dsc": "Walter's Hot Dog Kit - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Mamaroneck, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253fc"),
  "id": "picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132380/picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4.c9f4e235ad2a2151df272744ccfba476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "our-foods",
  "dsc": "Picnic Chicken Sandwich with Memphis Mustard Slaw Kit for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253fd"),
  "id": "favorite-sloppy-joe-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67914/new-jersey-sloppy-joe-2-pack-feeds-6.6eb8ebc6b3227ce05d3d553e5a6e7e53.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "our-foods",
  "dsc": "Favorite Sloppy Joe Sandwich - 2 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253fe"),
  "id": "signature-new-york-breakfast-sandwich-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127039/signature-bagel-sandwich-kit-for-6.5b3a5097fcf69964143621f87100c669.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "our-foods",
  "dsc": "Signature New York Breakfast Sandwich Kit for 6",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2253ff"),
  "id": "choose-your-own-campos-philly-sandwiches-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91015/choose-your-own-campos-philly-sandwiches-6-pack.342f4b72f142aebb1ec653528884c5b0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "our-foods",
  "dsc": "Choose Your Own Campo's Philly Sandwiches - 6 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225400"),
  "id": "meatball-parm-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132152/meatball-parm-hero-kit-4-pack.eb93c30fff4e580afac068ab8e1bb717.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bunk Sandwiches",
  "sections": "our-foods",
  "dsc": "Meatball Parm Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225401"),
  "id": "15128-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134788/philly-cheesesteak-4-pack.ee73df8fae1147633dfe6d2bbd966c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jim's Steaks",
  "sections": "our-foods",
  "dsc": "Jim's Philly Cheesesteaks - 4 pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225402"),
  "id": "pastrami-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131233/pastrami-sandwich-kit.1dca046be2c347e50b0c541f16588211.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kenny & Ziggy's Delicatessen",
  "sections": "our-foods",
  "dsc": "Pastrami Sandwich Kit",
  "price": 54.95,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225403"),
  "id": "154287-primanti-bros-combo-pack-pastrami-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72543/primanti-bros-pastrami-sandwich-pack.7f21d2a9340d319eb387d693efec161c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Primanti Bros.",
  "sections": "our-foods",
  "dsc": "Primanti Bros - Pastrami Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225404"),
  "id": "original-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "our-foods",
  "dsc": "Original Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225405"),
  "id": "fresh-ribeye-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105558/fresh-ribeye-sausage-2-lbs.9e0c22fd028026e78c079c5ef64d9579.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hebert's Specialty Meats",
  "sections": "our-foods",
  "dsc": "Fresh Ribeye Sausage",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Maurice, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225406"),
  "id": "001-5-pound-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66440/sausage-sampler-for-10.0ca584a30121a79d612254a9f7c10bb4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Sausage Sampler For 10",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225407"),
  "id": "6-sausage-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79253/sausage-sampler-pack-serves-10-12.e2d63273c29b923ca4ad80cf63669b12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Sausage Sampler Pack - Serves 10-12",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225408"),
  "id": "20154-bacon-wrapped-cheddar-jalapeno-sausage-slammers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131365/bacon-wrapped-cheddar-jalapeno-sausage-slammers.1aad356ed0b86ebefde0c645520fddb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Bacon Wrapped Cheddar JalapeÃ±o Sausage Slammers",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225409"),
  "id": "jalapeno-and-cheddar-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101125/jalapeno-and-cheddar-texas-smoked-sausage.dc663b24836b39e0d57df946f529c90b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "our-foods",
  "dsc": "Jalapeno and Cheddar Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540a"),
  "id": "toulouse-sausage-coil-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117565/toulouse-sausage-coil-3-pack.ebe77727730b4f8fd7e0a888cb6ebe02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "our-foods",
  "dsc": "Toulouse Sausage Coil - 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540b"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540c"),
  "id": "002-five-pound-chicken-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134485/chicken-sausage-sampler-for-10.b4ac88fcbabc55e4ee9ff096060cb5af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Chicken Sausage Sampler for 10",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540d"),
  "id": "boudin-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135476/Heberts-Boudin-Sausage-Sampler-Kit-Prodcut-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hebert's Specialty Meats",
  "sections": "our-foods",
  "dsc": "Boudin + Sausage Sampler",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Maurice, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540e"),
  "id": "brats-choose-your-own-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103017/brats-choose-your-own-10-pack.9b940a07b5cd93223d46276aac268e5c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "our-foods",
  "dsc": "Brats - Choose Your Own 10 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22540f"),
  "id": "choose-your-own-sausages-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131792/choose-your-own-sausages-4-pack.06d9c63b51122e2d81d5ad17941efa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bovine & Swine",
  "sections": "our-foods",
  "dsc": "Choose Your Own Sausages - 16 Pack",
  "price": 74,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225410"),
  "id": "korean-bbq-grilling-sausage-choose-your-own-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131684/choose-your-own-korean-bbq-grilling-sausage-12-pack.cf65a78dff1380f12d408831c8ef51d1.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "our-foods",
  "dsc": "Korean BBQ Grilling Sausage - Choose Your Own 12 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225411"),
  "id": "30027-sausages-and-franks-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105792/sausages-and-franks-choose-your-own-4-pack.c017803b6c99d055cf3872153fb6f8a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Weaver's of Wellsville",
  "sections": "our-foods",
  "dsc": "Sausages & Franks - Choose Your Own 4 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Wellsville, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225412"),
  "id": "bavarian-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/88663/bavarian-box.ab9f4f5966fbe7ef08fb9d7aaa11814a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schaller & Weber",
  "sections": "our-foods",
  "dsc": "Schaller & Weber's Bavarian Box",
  "price": 74,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225413"),
  "id": "bbq-sausage-sampler-15-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131414/bbq-sausage-sampler-15-pack.bbe3d777a6ff165fabaa8eb07667a3cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roegels Barbecue",
  "sections": "our-foods",
  "dsc": "BBQ Sausage Sampler - 15 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225414"),
  "id": "17923-the-super-bowl-sausage-special",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73494/ball-park-tailgate-sampler-for-12.7fc6abf1a1181f15c5822ba182b18e1d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Ball Park Tailgate Sampler for 12",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225415"),
  "id": "3021-slaughterhouse-five-brisket-pork-sausage-turkey",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133207/slaughterhouse-five-brisket-pork-sausage-turkey.28b91d5b2fdf226445bb9e1496f4b126.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "our-foods",
  "dsc": "Slaughterhouse Five - Brisket + Pork + Sausage + Turkey",
  "price": 128.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225416"),
  "id": "wild-game-sausage-best-seller-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133159/wild-game-sausage-best-seller-5-pack.248d69c960a0fd1491b9cd73d1d66f96.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Broken Arrow Ranch",
  "sections": "our-foods",
  "dsc": "Wild Game Sausage Best Seller - 9 Pack",
  "price": 85,
  "rate": NumberInt(4),
  "country": "Ingram, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225417"),
  "id": "sausages-choose-your-own-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114515/sausages-choose-your-own-24-pack.b7c28f8124aa19512881eefec704592e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Sausages - Choose Your Own 24 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225418"),
  "id": "sausage-cheese-jalapeno-kolaches-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134703/sausage-cheese-and-jalapeno-kolaches-12-pack.2a2ed18ea95952c3519f83939c04d148.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pearl Snap Kolaches",
  "sections": "our-foods",
  "dsc": "Sausage, Cheese, and JalapeÃ±o Kolaches - 12 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Fort Worth, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225419"),
  "id": "15812-hot-italian-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68872/hot-italian-sausage.cf60e0475f38aec2bce0c534d8db266d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Hot Italian Sausage For 12",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541a"),
  "id": "16893-choose-your-own-sausage-10lb-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132840/signature-sausage-feast-for-20.2078fbd8a1d6e860dae1bcf1399bde8f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Signature Sausage Feast for 20",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541b"),
  "id": "grandpas-sweet-italian-sausage-3-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124878/usda-prime-black-angus-filet-mignon-barrel-cut.b2f88648ba2d97825f48317187c13e44.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Grandpa's Sweet Italian Sausage - 3 lbs.",
  "price": 33,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541c"),
  "id": "003-pork-boudin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133861/smoked-andouille-sausage.0e2d2add4f33e6cd28a2da57434859a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Comeaux's",
  "sections": "our-foods",
  "dsc": "Smoked Andouille Sausage",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Lafayette, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541d"),
  "id": "smoked-pork-bacon-sausages-10-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126815/smoked-pork-and-bacon-sausage-2-pack.fb3e7ac1491af3fcde3187e0f25a3d13.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Underbelly by Chris Shepherd",
  "sections": "our-foods",
  "dsc": "Smoked Pork & Bacon Sausages - 10 Links",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541e"),
  "id": "korean-bbq-sausage-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132174/korean-bbq-sausage-combo-kit-for-8.8e1946d141ce5cd1e3205c6f0fed21d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "our-foods",
  "dsc": "Korean BBQ Sausage Kit for 8",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22541f"),
  "id": "ms-made-double-smoked-pork-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131807/ms-made-double-smoked-pork-sausage-sampler.47b527fab5f80d9a2eb41f2cefcb427f.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "our-foods",
  "dsc": "MS Made Double Smoked Pork Sausage Sampler",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225420"),
  "id": "bahama-mama-and-knockwurst-sausage-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134151/bahama-mama-and-knockwurst-sausage-combo-pack.f5158a6c13dae98138935bcfd96ee5b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schmidt's Sausage Haus",
  "sections": "our-foods",
  "dsc": "Bahama Mama & Knockwurst Sausage Combo Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Columbus, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225421"),
  "id": "16124-sausage-tomato-fennel",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132371/sausage-tomato-fennel-pie.cc3152ebcd1c39b3a9055939d84ae580.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "our-foods",
  "dsc": "Sausage Tomato Fennel Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225422"),
  "id": "1-original-1882-hot-recipe-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79266/original-1882-hot-beef-sausage.2fd51e38f8e3883e35276a6ae8aaecb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Original \"1882\" Hot Beef Sausage",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225423"),
  "id": "texas-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129517/the-goodes-sausage-sampler.d4a59492f062ab1be62cd3308eaf3bde.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goode Co. Barbeque",
  "sections": "our-foods",
  "dsc": "Texas Sausage Sampler",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225424"),
  "id": "5-jalapeno-cheddar-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132541/jalapeno-cheddar-smoked-sausage.232a80c2738feb2bfcac0ec624e16e4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "JalapeÃ±o Cheddar Smoked Sausage",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225425"),
  "id": "choose-your-own-sausage-jumbo-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132047/choose-your-own-sausage-jumbo-box.aee6aa6705acdefb85fb5e6cc8805cb0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Catskill Food Company",
  "sections": "our-foods",
  "dsc": "Choose Your Own Sausage - Jumbo Box",
  "price": 159,
  "rate": NumberInt(5),
  "country": "Delhi, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225426"),
  "id": "2-original-beef-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79236/original-beef-smoked-sausage.65203942122995211d7e7aed36875cf1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Original Beef Smoked Sausage",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225427"),
  "id": "beef-summer-sausage-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97485/beef-summer-sausage-225-lbs.9ed3e96e274e63599c3e573c35fe497a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alewel's Country Meats",
  "sections": "our-foods",
  "dsc": "Beef Summer Sausage - 3 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "Warrensburg, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225428"),
  "id": "gramercy-tavern-smoked-kielbasa-6-Pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92800/gramercy-tavern-smoked-kielbasa.c2d5882bf3ed785b85b348f1fe5717a7.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "our-foods",
  "dsc": "Gramercy Tavern Smoked Kielbasa - 6 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225429"),
  "id": "choose-your-own-sausages-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132802/choose-your-own-sausages-8-pack.9d02550f44b749006c3c29d8aa7a31a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bovine & Swine",
  "sections": "our-foods",
  "dsc": "Choose Your Own Sausages - 32 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542a"),
  "id": "sausages-and-salami-choose-your-own-15-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136348/Gastros-Sausage-Salami-Sampler-Updated-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Sausages & Salami - Choose Your Own 15 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542b"),
  "id": "lamb-merguez-sausage-coil-3-packs-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133066/lamb-merguez-sausage-coil-3-pack.1b35219d553e100ef985eb269cf15079.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "our-foods",
  "dsc": "Lamb Merguez Sausage Coil - 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542c"),
  "id": "summer-grill-pack-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134647/summer-grill-pack-for-6.505ff0e0bfc724ff637b19cfc09fe9c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schaller & Weber",
  "sections": "our-foods",
  "dsc": "Summer Grill Pack for 6",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542d"),
  "id": "summer-sausage-football",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/13030/summer-sausage-footballs.c4e6e8282f25bb1beadb2a89856cf1bc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Olympia Provisions",
  "sections": "our-foods",
  "dsc": "Summer Sausage Footballs - 2 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542e"),
  "id": "sausage-party-choose-your-own-32-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/70163/sausage-party-choose-your-own-28-pack.cb7f9f0ee72faf3ccd21273e8e2fbff8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Banger's Sausage House",
  "sections": "our-foods",
  "dsc": "Sausage Party - Choose Your Own 32 Pack",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22542f"),
  "id": "bratwurst",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/88538/bratwurst.1adc4ad6e7b0bba7cfd06a02c6e145d9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Bratwurst",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225430"),
  "id": "original-beef-rope-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134192/fresh-original-beef-rope-sausage.d727a35d4f5e96a258a63929bd2ec4b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Fresh Original Beef Rope Sausage",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225431"),
  "id": "19398-breakfast-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77045/breakfast-sausage-sampler.d0d4f6ab81c52b9ec1a5d6fd7f1cb707.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Breakfast Sausage Sampler",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225432"),
  "id": "badger-brats-curds-combo-for-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134014/badger-pack-brats-curds-for-10.a8a2704d6c843e855c35d82b5c20d29c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "our-foods",
  "dsc": "Badger Pack - Brats + Curds for 10",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225433"),
  "id": "ribs-and-sausage-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87850/ribs-and-sausage-pack.b8be6c45bc0403ef8d70d143c8978006.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "our-foods",
  "dsc": "Ribs & Sausage Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225434"),
  "id": "edwards-smoked-sausage-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133087/hickory-smoked-virginia-sausage-links.38838222efd83710941142597e581b17.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Edwards Virginia Smokehouse",
  "sections": "our-foods",
  "dsc": "Hickory Smoked Virginia Sausage Links",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Surry, VA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225435"),
  "id": "docs-hot-links-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134266/docs-hot-links-2-dozen.c1ce9a98869e0b5eae5e6400de740944.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Doc's Hot Links",
  "sections": "our-foods",
  "dsc": "Doc's Famous Hot Links - 24 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Gilmer, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225436"),
  "id": "sausage-cheese-kolaches-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133886/sausage-and-cheese-kolaches-12-pack.0cc1e527ec5a26ff23bd390d6793337f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pearl Snap Kolaches",
  "sections": "our-foods",
  "dsc": "Sausage and  Cheese Kolaches - 12 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Fort Worth, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225437"),
  "id": "les-sausage-series-combo-pack-for-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131380/les-sausage-series-combo-pack-for-10.e38a372231eb38e8878227048cb7451b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schaller & Weber",
  "sections": "our-foods",
  "dsc": "L.E.S. Sausage Series Combo Pack for 10",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225438"),
  "id": "15813-sweet-italian-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68875/sweet-italian-sausage.177aef69f5f45770ed57c0797ee7a284.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "our-foods",
  "dsc": "Sweet Italian Sausage For 12",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225439"),
  "id": "italian-sausage-with-roasted-red-peppers-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114595/italian-sausage-with-roasted-red-peppers-12-pack.c41a6d3d3fd59b8d1bd8141b619053d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Italian Sausage with Roasted Red Peppers - 12 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543a"),
  "id": "chicken-and-rosemary-sausages-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/85624/chicken-and-rosemary-sausages-12-pack.fc43bd778b81eca1c893e4226c35dfec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Chicken and Rosemary Sausages - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543b"),
  "id": "sausage-collection",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81986/sausage-collection.d4a61f19c48414e6f1c41d4550512dfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Smoking Goose Meatery",
  "sections": "our-foods",
  "dsc": "Sausage Collection",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543c"),
  "id": "smoked-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133960/smoked-sausage-sampler.804e077bd0133a194d66a8c62a6f38bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Northern Waters Smokehaus",
  "sections": "our-foods",
  "dsc": "Smoked Sausage Sampler",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Duluth, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543d"),
  "id": "choose-your-own-sausage-medium-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/74588/choose-your-own-sausage-medium-box.ddabd413eb17a34d827cac74243938cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Catskill Food Company",
  "sections": "our-foods",
  "dsc": "Choose Your Own Sausage - Medium Box",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Delhi, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543e"),
  "id": "gastros-sausage-bacon-and-salami-sampler-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136346/Gastros-Sausage-Bacon-Salami-Sampler-Updated-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Gastro's Sausage, Bacon, & Salami Sampler for 4",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22543f"),
  "id": "chorizo-and-havarti-cheese-sausages-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132568/chorizo-and-havarti-cheese-sausages-12-pack.8064e46702d86fbc630d47cbfb43c025.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Chorizo and Havarti Cheese Sausages - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225440"),
  "id": "california-reserve-filet-mignon-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96226/california-reserve-filet-mignon-steaks-gift-box.bf226e317aad85f47897ae7e325f790d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Filet Mignon Steaks Gift Box",
  "price": 129,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225441"),
  "id": "steaks-and-cakes-date-night-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118617/valentines-steaks-and-cakes-dinner-for-2.0c63dab635eed46209455dc33cd25ea8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "our-foods",
  "dsc": "Steaks and Cakes Date Night Dinner for 2",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225442"),
  "id": "california-reserve-ribeye-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132850/california-reserve-ribeye-steaks-gift-box.87b8f6acf5851abe58778d3017105edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Ribeye Steaks Gift Box",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225443"),
  "id": "Prime-holiday-steak-sampler-for-10-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113759/holiday-sampler-9-pack.2de75ca80282ffe9d064eb757ff7a5a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Saltbrick Prime",
  "sections": "our-foods",
  "dsc": "Chef Matt's Steak Sampler for 10-12",
  "price": 179,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225444"),
  "id": "2-peter-luger-steak-pack-b",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131920/peter-luger-steak-pack-b.9feb0300e6be2dfecfa314f2006a2183.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "Peter Luger Porterhouse Steaks",
  "price": 215.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225445"),
  "id": "wagyu-filet-mignon-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107003/wagyu-filet-mignon-2-pack.5da42476f7d1b7e7cfe58b4d054e6861.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu Filet Mignon - 2 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225446"),
  "id": "ribeye-prime-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114307/ribeye-prime-steak-gift-box.e74cb016baabbb2df73861de8150f29c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Churchill's Steakhouse",
  "sections": "our-foods",
  "dsc": "Ribeye Prime Steak Gift Box",
  "price": 229,
  "rate": NumberInt(4),
  "country": "Spokane, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225447"),
  "id": "american-wagyu-gold-grade-top-sirloins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132442/american-wagyu-gold-grade-sirloins.040dbeb8f8e615b91fa7e513e3dc089c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "our-foods",
  "dsc": "American Wagyu Gold Grade Top Sirloins",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225448"),
  "id": "dry-aged-usda-prime-black-angus-porterhouse-steak-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124865/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
  "price": 96.7,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225449"),
  "id": "bone-in-rib-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113844/bone-in-rib-steak.b13d9d4233035767605f0de9acdce1ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "our-foods",
  "dsc": "Bone-in Rib Steak",
  "price": 159,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544a"),
  "id": "california-reserve-ribeye-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133878/california-reserve-ribeye-steak-12-oz.d367c5ae72dd9f89e170662104bef4fc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Ribeye Steak - 12 oz",
  "price": 32,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544b"),
  "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "our-foods",
  "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
  "price": 225,
  "rate": NumberInt(4),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544c"),
  "id": "american-wagyu-strip-steaks-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114536/american-wagyu-strip-steaks-2-pack.71ec339dc69d6fc12a4911b4dfd35f39.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "American Wagyu Strip Steaks - 2 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544d"),
  "id": "steak-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132710/steak-dinner-kit-for-2.3046e9db1f796c3305a71253ad8d86f2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "our-foods",
  "dsc": "Steak Dinner Kit for 2",
  "price": 189,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544e"),
  "id": "choice-strip-steak-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105600/choice-strip-steak-6-pack.822c77cb36216c8bec513f295b94d2f0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meats by Linz",
  "sections": "our-foods",
  "dsc": "Choice Strip Steak - 6 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Calumet City, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22544f"),
  "id": "california-reserve-filet-mignon-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96252/california-reserve-filet-mignon-steak.ff15071964ec8141d30c2ba05fb117e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Filet Mignon Steak",
  "price": 22,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225450"),
  "id": "wagyu-ny-strip-steaks-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131433/wagyu-ny-strip-steaks-2-pack.5b760cb84d5a57582e7dd8d1e25c9972.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu NY Strip Steak - 2 Pack",
  "price": 169,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225451"),
  "id": "california-reserve-new-york-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96208/california-reserve-new-york-steaks-gift-box.2ac1b5dd138c87e7914f96310bf3bcd3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve New York Steaks Gift Box",
  "price": 119,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225452"),
  "id": "choice-center-cut-new-york-strip-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131977/choice-center-cut-new-york-strip-steaks-4-pack.facecef35750e684ca69355c78f6a637.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Niman Ranch",
  "sections": "our-foods",
  "dsc": "Choice Center Cut New York Strip Steaks - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Brea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225453"),
  "id": "mesquite-smoked-peppered-beef-tenderloin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Perini Ranch Steakhouse",
  "sections": "our-foods",
  "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
  "price": 165,
  "rate": NumberInt(4),
  "country": "Buffalo Gap, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225454"),
  "id": "fourth-of-july-steak-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132656/steak-dinner-for-4-6.b438ef565a0f8803d9a3a641e1b8d1b6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "our-foods",
  "dsc": "Fourth Of July Steak Dinner for 4-6",
  "price": 219,
  "rate": NumberInt(5),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225455"),
  "id": "california-reserve-filet-mignon-steaks-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96663/california-reserve-filet-mignon-steaks-6-pack.9d19cd56391a3a62a6f075182d8e5b1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Filet Mignon Steaks - 6 Pack",
  "price": 159,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225456"),
  "id": "wagyu-coulotte-steak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103374/wagyu-coulotte-10-oz.8f1a8f4075160241d9698d3f4b1bf488.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu Coulotte Steak - 4 Pack",
  "price": 155,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225457"),
  "id": "sausage-wagyu-steak-sampler-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134435/sausage-wagyu-steak-sampler-choose-your-own.8a66af51c802dd54a863c20f768ea686.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "our-foods",
  "dsc": "Sausage + Wagyu Steak Sampler - Choose Your Own",
  "price": 165,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225458"),
  "id": "cardiff-crack-tri-tips-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133748/cardiff-crack-tri-tip-2-pack.100775575438423b43aa601f273f0713.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "our-foods",
  "dsc": "Cardiff Crack Tri Tip - 2 Pack",
  "price": 169,
  "rate": NumberInt(4),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225459"),
  "id": "ribeye-steaks-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124074/ribeye-steaks-8-pack.5c110f415c1f47becd92430f6895dd8e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "our-foods",
  "dsc": "Ribeye Steaks - 8 Pack",
  "price": 85,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545a"),
  "id": "13-peter-luger-steak-pack-a",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133140/peter-luger-steak-pack-a.e8f3bb163811e5ffcd60a5831d32874b.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "USDA PRIME Dry-aged Strip Steaks",
  "price": 266.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545b"),
  "id": "goldbelly-steak-burger-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Goldbelly Steak + Burger Sampler",
  "price": 135,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545c"),
  "id": "chateaubriand-steak-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105249/chateaubriand-steak-for-2.2cb9ed7cc3227fd26c455d51ca9745ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Keens Steakhouse",
  "sections": "our-foods",
  "dsc": "Chateaubriand Steak for Two",
  "price": 159,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545d"),
  "id": "ribeye-and-filet-mignon-prime-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114275/ribeye-and-filet-mignon-prime-steak-gift-box.894fbe515c343b8517ad91e956150306.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Churchill's Steakhouse",
  "sections": "our-foods",
  "dsc": "Ribeye & Filet Mignon Prime Steak Gift Box",
  "price": 249,
  "rate": NumberInt(5),
  "country": "Spokane, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545e"),
  "id": "strip-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115321/strip-steak-gift-box.aef2d6be6646bf15bd532ce0d11e092a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Pine Club",
  "sections": "our-foods",
  "dsc": "Strip Steak Gift Box",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22545f"),
  "id": "pats-original-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87749/pats-original-philly-cheesesteak-4-pack.fe6d8af186d93848f9a5090118fe8b46.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "our-foods",
  "dsc": "Pat's Original Philly Cheesesteak - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225460"),
  "id": "prime-galbi-steak-feast-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104674/prime-galbi-steak-feast-for-4.51c78b5ba768078b166fe91325e60edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cote Korean Steakhouse",
  "sections": "our-foods",
  "dsc": "Prime Galbi Steak Feast for 4",
  "price": 249,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225461"),
  "id": "world-famous-shrimp-cocktail",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89041/world-famous-shrimp-cocktail-for-4-6.9e41abca0496dfbd5a9fb2adbffeef88.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "St. Elmo Steak House",
  "sections": "our-foods",
  "dsc": "World Famous Shrimp Cocktail for 4-6",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225462"),
  "id": "choice-bone-in-ribeyes-2-choice-new-york-strip-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115509/2-choice-bone-in-ribeyes-2-choice-new-york-strip-steaks.80e8bf5ec76921c9632b7a5c5736fa7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Niman Ranch",
  "sections": "our-foods",
  "dsc": "2 Choice Bone-In Ribeyes + 2 Choice New York Strip Steaks",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Brea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225463"),
  "id": "15128-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134788/philly-cheesesteak-4-pack.ee73df8fae1147633dfe6d2bbd966c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jim's Steaks",
  "sections": "our-foods",
  "dsc": "Jim's Philly Cheesesteaks - 4 pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225464"),
  "id": "steak-au-poivre-kit-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103486/steak-au-poivre-kit-2-pack.14f9926937c1716b9430316d677873df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "our-foods",
  "dsc": "Steak Au Poivre Kit - 2 Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225465"),
  "id": "16547-american-kobe-sirloins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70367/american-wagyu-sirloins.542b5e411cb7dfa523e43b1255bffd7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "our-foods",
  "dsc": "American Wagyu Sirloins",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225466"),
  "id": "upper-prime-black-angus-tomahawks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109670/upper-prime-black-angus-tomahawks.cfc048cb768788bc7289be5acdbecb6e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holy Grail Steak Co.",
  "sections": "our-foods",
  "dsc": "Upper Prime Black Angus Tomahawks",
  "price": 219,
  "rate": NumberInt(4),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225467"),
  "id": "15996-100-fullblood-wagyu-beef-filet-mignon-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69335/100-fullblood-wagyu-beef-filet-mignon-steaks.7b79838c5fdd56c1295e33d2d6af007e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "our-foods",
  "dsc": "100% Fullblood Wagyu Beef Filet Mignon Steaks",
  "price": 275,
  "rate": NumberInt(5),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225468"),
  "id": "pats-original-philly-cheesesteak-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87773/pats-original-philly-cheesesteak-8-pack.1f350a7bf2852552bf219d6609405c69.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "our-foods",
  "dsc": "Pat's Original Philly Cheesesteak - 8 Pack",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225469"),
  "id": "california-reserve-steaks-sampler-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96648/california-reserve-steaks-sampler-6-pack.6f1a5c1bf941f3fbe11fb2d72faf513b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve Steaks - Sampler 6 Pack",
  "price": 219,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546a"),
  "id": "california-reserve-new-york-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96230/california-reserve-new-york-steak-12-oz.1db7f39f6540bd492e5487578c6bbcb9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "our-foods",
  "dsc": "California Reserve New York Steak - 12 oz",
  "price": 42,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546b"),
  "id": "stk-signature-4-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134362/stk-signature-4-steaks.f5536190adf38e394fbdb3ce8a753304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "STK Steakhouse",
  "sections": "our-foods",
  "dsc": "STK Signature - 2 Strip Steaks + 2 Filets",
  "price": 189,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546c"),
  "id": "16124-steak-mushroom-onion-and-gruyere",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69598/steak-mushroom-onion-and-gruyere-pie.169cb773b3f53ba330ae18fa0edb0b4c.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "our-foods",
  "dsc": "Steak Mushroom Onion and Gruyere Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546d"),
  "id": "halibut-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94659/halibut-steak.0627bcd1466efb84f5456bf14906f499.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pike Place Fish Market",
  "sections": "our-foods",
  "dsc": "Halibut - Steak (bone-in), Alaska, Wild, 2 lbs",
  "price": 59.98,
  "rate": NumberInt(4),
  "country": "Seattle, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546e"),
  "id": "wagyu-skirt-steak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120993/wagyu-skirt-steak-4-pack.3a90a67ff55a78b4dffff7bcea0c8cbe.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "our-foods",
  "dsc": "Wagyu Skirt Steak - 4 Pack",
  "price": 44,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22546f"),
  "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
  "price": 175.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225470"),
  "id": "dry-aged-usda-prime-black-angus-boneless-ny-strip-steaks-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124883/dry-aged-usda-prime-black-angus-boneless-ny-strip-steak-center-cut-aged-30-days.2d6ca1bbb41c4fbb200d5c826974aae6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Dry-Aged USDA Prime Black Angus Boneless NY Strip Steaks - 4 Pack",
  "price": 133.4,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225471"),
  "id": "tomahawk-ribsteak-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131459/tomahawk-ribsteak-dinner-for-2.4bdce97b438cc34f7cd906378f62862f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Quality Meats",
  "sections": "our-foods",
  "dsc": "Tomahawk Ribsteak Dinner for 2",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225472"),
  "id": "17406-waygu-burgers-steaks-grill-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72260/wagyu-burgers-steaks-grill-pack.f4131af7b529593cc4b53b6a2aa76627.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "our-foods",
  "dsc": "Wagyu Burgers + Steaks Grill Pack",
  "price": 199,
  "rate": NumberInt(5),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225473"),
  "id": "17-peter-luger-extra-thick-cut-bacon-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133809/peter-luger-extra-thick-cut-bacon-6-pack.8a7de3e7715b3f13a6b454ebd76adde6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "Peter Luger Extra Thick Cut Bacon - 6 Pack",
  "price": 59.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225474"),
  "id": "st-elmo-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/88901/st-elmo-gift-box.83e4e53934fc6e314b4f3999b9f089af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "St. Elmo Steak House",
  "sections": "our-foods",
  "dsc": "St. Elmo Gift Box",
  "price": 39,
  "rate": NumberInt(5),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225475"),
  "id": "dry-aged-usda-prime-black-angus-boneless-rib-steak-30-days-10-thick-13-15-oz",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97603/usda-prime-black-angus-filet-mignon-barrel-cut.3fc943fdabd641c78d180b2e7939410e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "our-foods",
  "dsc": "Dry-Aged USDA Prime Black Angus Boneless Rib Steaks - 30 days, 1.0\" thick, (13-15 oz.)",
  "price": 183.6,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225476"),
  "id": "3-peter-luger-steak-pack-c",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77910/peter-luger-steak-pack-c.b42674354b79c2f03d3f6544d5b89873.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "our-foods",
  "dsc": "Porterhouse and Strip Steaks",
  "price": 330.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225477"),
  "id": "italian-style-petite-filet-skewers-steak-spiedini-26-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/82030/italian-style-petite-filet-skewers-steak-spiedini-26-pack.f0da603d6dfbcae265444f3dd64df9c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "D'Abruzzo",
  "sections": "our-foods",
  "dsc": "Italian Style Petite Filet Skewers, Steak Spiedini - 26 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225478"),
  "id": "wet-aged-upper-choice-steak-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134316/wet-aged-upper-choice-steak-pack.b31d4d59ceaa20596bb6d175aa97726b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meats by Linz",
  "sections": "our-foods",
  "dsc": "Wet-Aged Upper Choice Steak Sampler - 6 Pack",
  "price": 189,
  "rate": NumberInt(4),
  "country": "Calumet City, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225479"),
  "id": "2-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "pizzas",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas",
  "price": 67.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547a"),
  "id": "23699-choose-your-own-thin-crust-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "pizzas",
  "dsc": "Choose Your Own Thin Crust Pizza - 4 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547b"),
  "id": "choose-your-own-new-haven-style-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "pizzas",
  "dsc": "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
  "price": 79,
  "rate": NumberInt(4),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547c"),
  "id": "6-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "pizzas",
  "dsc": "6 Lou Malnati's Deep Dish Pizzas",
  "price": 116.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547d"),
  "id": "wood-fired-pizzas-best-seller-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "pizzas",
  "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547e"),
  "id": "236991-choose-your-own-deep-dish-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "pizzas",
  "dsc": "Choose Your Own Deep Dish Pizza - 3 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22547f"),
  "id": "choose-your-own-detroit-style-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132973/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "pizzas",
  "dsc": "Detroit-Style Pizza - Choose Your Own 3 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225480"),
  "id": "brooklyn-pizza-choose-your-own-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "pizzas",
  "dsc": "Brooklyn Pizza - Choose Your Own 5 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225481"),
  "id": "choose-your-own-chicago-deep-dish-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "My Pi Pizza",
  "sections": "pizzas",
  "dsc": "Chicago Deep Dish Pizza - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225482"),
  "id": "4-lou-malnatis-deep-dish-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106828/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "pizzas",
  "dsc": "4 Lou Malnati's Deep Dish Pizzas",
  "price": 96.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225483"),
  "id": "tonys-custom-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131555/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony's Pizza Napoletana",
  "sections": "pizzas",
  "dsc": "Choose Your Own Pizza - 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225484"),
  "id": "plain-thin-crust-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115101/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Columbia Inn",
  "sections": "pizzas",
  "dsc": "Plain Thin Crust Pizza - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Montville, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225485"),
  "id": "brooklyn-pizza-choose-your-own-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104883/brooklyn-pizza-choose-your-own-10-pack.7ddeb3b5b599ec9c7b1befcc9c14a1c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "pizzas",
  "dsc": "Brooklyn Pizza - Choose Your Own 10 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225486"),
  "id": "new-haven-style-mozzarella-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132144/new-haven-style-mozzarella-pizza-6-pack.8e8a38db57935f5cb6afa4202b966135.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "pizzas",
  "dsc": "New Haven-Style Mozzarella Pizza - 6 Pack",
  "price": 78,
  "rate": NumberInt(5),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225487"),
  "id": "choose-your-own-3-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133289/choose-your-own-3-pizzas.a6de480878c0b3b9f4d240bacbb665e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Heggies Pizza",
  "sections": "pizzas",
  "dsc": "Choose Your Own - 3 Pizzas",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Milaca, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225488"),
  "id": "17408-coal-oven-margherita-pizza-pie-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72343/coal-oven-margherita-pizza-pie-4-pack.c5944293e17b40f2659562179b493a10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Table 87 Pizza",
  "sections": "pizzas",
  "dsc": "Coal Oven Margherita Pizza - 4 Pies",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225489"),
  "id": "15464-detroit-style-pizza-squares-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112202/detroit-style-pizza-squares-choose-your-own-3-pack.75f7714d9a81fb455f7400086e4195bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Buddy's Pizza",
  "sections": "pizzas",
  "dsc": "Detroit-Style Pizza Squares - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Detroit, MI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548a"),
  "id": "15952-create-your-own-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133262/choose-your-own-pizza-3-pack.7ee3cc9bbc48b97a0f66e073d4071982.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Detroit Style Pizza Co",
  "sections": "pizzas",
  "dsc": "Detroit Pizza - Choose Your Own Pizza 3 Pack",
  "price": 85,
  "rate": NumberInt(4),
  "country": "Detroit, MI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548b"),
  "id": "pan-style-deep-dish-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137057/Pequods-CYO-4-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pequod's Pizza",
  "sections": "pizzas",
  "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548c"),
  "id": "buffalo-style-pepperoni-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133315/buffalo-style-pepperoni-pizza-2-pack.38d99af16bc34554992bbed53870e533.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picasso's Pizza",
  "sections": "pizzas",
  "dsc": "Buffalo Style Pepperoni Pizza - 2 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548d"),
  "id": "neapolitan-pizza-choose-your-own-3-Pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motorino Pizzeria",
  "sections": "pizzas",
  "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548e"),
  "id": "16940-brick-oven-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71222/wood-fired-pizza-6-pack.1124121a87723161fcd034de9256cd22.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roberta's Pizza",
  "sections": "pizzas",
  "dsc": "Wood Fired Pizza 6 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22548f"),
  "id": "thin-crust-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118791/thin-crust-pizza-choose-your-own-4-pack.c9d8f813e752cb2a77b93e02752c5daf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bill's Pizza & Pub",
  "sections": "pizzas",
  "dsc": "Thin Crust Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225490"),
  "id": "ny-style-pizza-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132421/ny-style-pizza-choose-your-own-3-pack.6364a762aa92bd037cc1519037680fef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rubirosa Pizza",
  "sections": "pizzas",
  "dsc": "NY Style Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225491"),
  "id": "choose-your-own-chicago-deep-dish-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89920/chicago-deep-dish-pizza-2-pack.258bfa1979e758e45ffc2c93043540e5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "My Pi Pizza",
  "sections": "pizzas",
  "dsc": "Chicago Deep Dish Pizza - 2 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225492"),
  "id": "pizza-choose-your-own4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131566/pizza-choose-your-own-4-pack.92a5ef9f5f219eb870cf7e909656545d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Regina Pizzeria",
  "sections": "pizzas",
  "dsc": "Pizza - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225493"),
  "id": "17409-coal-oven-margherita-pizza-slices-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134133/coal-oven-margherita-pizza-8-slices.a6e3c0e43bf45c956014f064e25735cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Table 87 Pizza",
  "sections": "pizzas",
  "dsc": "New York Pizza - 8 Giant Slices",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225494"),
  "id": "2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lou Malnati's Pizza",
  "sections": "pizzas",
  "dsc": "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
  "price": 104.99,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225495"),
  "id": "thin-crust-pizza-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116162/thin-crust-pizza-choose-your-own-6-pack.9d724e00f69d761845f7edf0f66698d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Columbia Inn",
  "sections": "pizzas",
  "dsc": "Thin Crust Pizza - Choose Your Own 6 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Montville, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225496"),
  "id": "neapolitan-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Delfina",
  "sections": "pizzas",
  "dsc": "Neapolitan Pizza - Choose Your Own 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225497"),
  "id": "Sausage-pizza-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133501/sausage-pizza-6-pack.31fa94213da11ab58951fcc7838f6754.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Zuppardi's Apizza",
  "sections": "pizzas",
  "dsc": "New Haven-Style Sausage Pizza - 6 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "West Haven, CT"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225498"),
  "id": "original-cheese-new-york-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104910/cheese-neapolitan-pizza-2-pack.856b6b14d276981a4654e1bb348cb328.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe & Pats Pizzeria",
  "sections": "pizzas",
  "dsc": "Original Cheese New York Pizza - 2 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Staten Island, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225499"),
  "id": "chicago-deep-dish-pizza-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101630/chicago-deep-dish-pizza-choose-your-own-3-pack.b795d4f915c116ba9e7f2e7951e79ad0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gino's East",
  "sections": "pizzas",
  "dsc": "Chicago Deep Dish Pizza Box - Choose Your Own 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549a"),
  "id": "choose-your-own-bar-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133147/choose-your-own-bar-pizza-4-pack.2576e0f60267c680022bd3466542bb9e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cape Cod Cafe Pizza",
  "sections": "pizzas",
  "dsc": "Bar Pizza - 4 Pack - Choose Your Own",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brockton, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549b"),
  "id": "16939-brick-oven-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71231/wood-fired-pizza-4-pack.8818b2e71ad1149790d0c03413d11996.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roberta's Pizza",
  "sections": "pizzas",
  "dsc": "Wood Fired Pizza 4 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549c"),
  "id": "signature-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134789/signature-sampler-serves-10.2d7375635d9152e3401a0daacd40f648.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bonci Pizza",
  "sections": "pizzas",
  "dsc": "Signature Pizza Sampler - Serves 10",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549d"),
  "id": "choose-your-own-6-pizzas",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82735/choose-your-own-6-pizzas.5e9950eb1a06f3b87543f867506511b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Heggies Pizza",
  "sections": "pizzas",
  "dsc": "Choose Your Own - 6 Pizzas",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Milaca, MN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549e"),
  "id": "pan-style-deep-dish-pizza-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137018/Pequods-CYO-2-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pequod's Pizza",
  "sections": "pizzas",
  "dsc": "Pan-Style Deep Dish Pizza - Choose Your Own 2 Pack",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22549f"),
  "id": "wood-fired-pizza-choose-your-own-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133839/pizza-choose-your-own-2-pack.0820d0d4642ddb9fbda63e2394b63932.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arthur Avenue Wood Fired Pizza",
  "sections": "pizzas",
  "dsc": "Wood Fired Pizza - Choose Your Own 2 Pack",
  "price": 65,
  "rate": NumberInt(5),
  "country": "Pleasantville, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a0"),
  "id": "chicago-style-pizza-buy-3-get-1-free",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135044/chicago-style-pizza-choose-your-own-3-pack.c97386b561818a977030178b06fa5bda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sam's Coal Fired Pizza",
  "sections": "pizzas",
  "dsc": "Chicago Style Pizza - Buy 3 + Get 1 FREE Cheese Pizza",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Daytona Beach, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a1"),
  "id": "neapolitan-pizza-choose-your-own-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131875/wood-fired-pizza-choose-your-own-6-pack.fa6cf8ffff1241d50c27d804e566d605.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pasquale Jones",
  "sections": "pizzas",
  "dsc": "Neapolitan Pizza - Choose Your Own 6 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a2"),
  "id": "wood-fired-pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Bianco",
  "sections": "pizzas",
  "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
  "price": 135,
  "rate": NumberInt(5),
  "country": "Phoenix, AZ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a3"),
  "id": "buffalo-style-pepperoni-pizza-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131666/buffalo-style-pepperoni-pizza-4-pack.1c5ea10d8c7176f0ad4eef363a1f3543.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picasso's Pizza",
  "sections": "pizzas",
  "dsc": "Buffalo Style Pepperoni Pizza - 4 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a4"),
  "id": "15318-make-your-own-old-forge-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67763/make-your-own-old-forge-pizza-2-pack.f7cd011e9c2ac3182dbe1e3470985354.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Arcaro & Genell",
  "sections": "pizzas",
  "dsc": "Make Your Own Old Forge Pizza 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Old Forge, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a5"),
  "id": "pizza-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134259/pizza-choose-your-own-4-pack.bc138c4f695f74bf78f13204865a9c5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Slim & Husky's",
  "sections": "pizzas",
  "dsc": "Pizza - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a6"),
  "id": "spicy-spring-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/61943/spicy-spring-2-pies-serves-16.fd9e6f0fce7306a15ec794b7d91f7056.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Prince Street Pizza",
  "sections": "pizzas",
  "dsc": "Spicy Springâ¢ - 2 Pies (Serves 16)",
  "price": 124.95,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a7"),
  "id": "cheese-pizza-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134099/cheese-pizza-5-pack.e22243aba836daa325ee1b563fc2ca36.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "pizzas",
  "dsc": "Classic Cheese Pizza - 5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a8"),
  "id": "detroit-style-pizza-best-seller-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131672/detroit-style-pizza-best-seller-3-pack.f56562a340b3ada0a8a571fa80020304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Emmy Squared",
  "sections": "pizzas",
  "dsc": "Detroit-Style Pizza - Best Seller 3 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254a9"),
  "id": "famous-pizza-making-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134230/famous-pizza-making-kit.74d1d16b7fa71a2acbd36f825d84d75b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "pizzas",
  "dsc": "Famous Pizza Making Kit",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254aa"),
  "id": "famous-artichoke-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/80601/artichoke-basilles-pizza-2-pack.3e8f5b94405720ed1c0ef2765c5b0669.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Artichoke Basille's Pizza",
  "sections": "pizzas",
  "dsc": "Famous Artichoke Pizza - 2 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ab"),
  "id": "brooklyn-pizza-best-seller-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131936/brooklyn-pizza-best-seller-5-pack.8434f2ef7ad80ef2c5bef19f1ecb94ba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Paesanâs Pizza",
  "sections": "pizzas",
  "dsc": "Brooklyn Pizza Best Seller - 5 Pack",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Albany, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ac"),
  "id": "neapolitan-pizza-choose-your-own-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114414/neapolitan-pizza-choose-your-own-3-pack.5b29cea22f1eeee4b8d95057b9bc7abd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pizzeria Delfina",
  "sections": "pizzas",
  "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ad"),
  "id": "pepperoni-ny-style-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108219/pepperoni-ny-style-pizza-2-pack.77685b4dbd4cea75fa8e8b8ac59ba2b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rubirosa Pizza",
  "sections": "pizzas",
  "dsc": "Pepperoni NY Style Pizza - 2 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ae"),
  "id": "chicago-deep-dish-pizza-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102327/chicago-deep-dish-pizza-2-pack.e5052999d72a3737ba464a03d51b33dc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Labriola Chicago",
  "sections": "pizzas",
  "dsc": "Chicago Deep Dish Pizza - Choose Your Own 2 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254af"),
  "id": "roast-pork-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "porks",
  "dsc": "Roast Pork Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b0"),
  "id": "smoked-whole-bbq-pork-shoulder-serves-10-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90419/smoked-whole-bbq-pork-shoulder-serves-10-15.cc662e8f02f2910f67d482bbdd555954.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bludso's BBQ",
  "sections": "porks",
  "dsc": "Smoked Whole BBQ Pork Shoulder - Serves 10-15",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b1"),
  "id": "double-bone-in-heritage-berkshire-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114535/double-bone-in-heritage-berkshire-pork-chops-4-pack.5b6a88ca2c85ece8fd5a6dd6abd4f046.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "porks",
  "dsc": "Double Bone-in Heritage Berkshire Pork Chops - 4 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b2"),
  "id": "pork-steaks",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/41969/pork-steaks.aaa962e22c9099952fdf15cb0382bd65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "porks",
  "dsc": "Pork Steaks",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b3"),
  "id": "3021-slaughterhouse-five-brisket-pork-sausage-turkey",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133207/slaughterhouse-five-brisket-pork-sausage-turkey.28b91d5b2fdf226445bb9e1496f4b126.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "porks",
  "dsc": "Slaughterhouse Five - Brisket + Pork + Sausage + Turkey",
  "price": 128.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b4"),
  "id": "pork-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "porks",
  "dsc": "Pork Buns - 12 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b5"),
  "id": "16561-snake-river-farms-kurobuta-pork-belly",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70375/kurobuta-pork-belly.8a4717de51d5a8d55817afcff1719634.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "porks",
  "dsc": "Kurobuta Pork Belly",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b6"),
  "id": "porchetta-siu-yuk-plus-chimichurri-sauce-for-5-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117510/porchetta-siu-yuk-kit-for-5-6.e643963cc5b51dbfb43b50b8e6917a76.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rice Box",
  "sections": "porks",
  "dsc": "Porchetta \"Siu Yuk\" + Chimichurri Sauce - 2 lbs.",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b7"),
  "id": "pulled-pork-and-chopped-beef-brisket-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115332/pulled-pork-and-chopped-beef-brisket-combo.402da09e367972eadca0f8f5150bf2d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "porks",
  "dsc": "Pulled Pork & Chopped Beef Brisket Combo",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b8"),
  "id": "23238-pork-tenderloin-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132633/pork-tenderloin-sandwich-4-pack.b6914a19ee345d5284ed1eaf00f5c2ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "porks",
  "dsc": "Pork Tenderloin Sandwich - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254b9"),
  "id": "roast-pork-sandwich-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115001/roast-pork-sandwich-kit-for-8.cfeb20e4e4b89f9d72680d5e34fc9cc7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "porks",
  "dsc": "Roast Pork Sandwich Kit for 8",
  "price": 159,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ba"),
  "id": "pulled-pork-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131348/pulled-pork-4-lbs.689b1d5fd5204a722aca175419148a3a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peg Leg Porker",
  "sections": "porks",
  "dsc": "Pulled Pork - 4 lbs.",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254bb"),
  "id": "bo-ssam-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Momofuku",
  "sections": "porks",
  "dsc": "Half Bo SsÃ¤m Dinner for 4-6",
  "price": 169,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254bc"),
  "id": "memphis-pulled-pork-shoulder-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86731/memphis-pulled-pork-shoulder-4-lbs.089448f3aebd24fe82f223151314d853.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Charlie Vergos' Rendezvous",
  "sections": "porks",
  "dsc": "Memphis Pulled Pork Shoulder - 4 lbs.",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254bd"),
  "id": "17347-pulled-pork-3-pound-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137383/Central-BBQ-Pulled-Pork-Packs-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "porks",
  "dsc": "Pulled Pork Pack - Serves 6-8",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254be"),
  "id": "18650-carolina-pulled-pork-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75464/carolina-pulled-pork-sandwich-pack.8e672a876d720c8471b08ffa47fbbbc1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "porks",
  "dsc": "Carolina Pulled Pork Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254bf"),
  "id": "stone-porter-beer-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85711/stone-porter-beer-pork-chops-4-pack.95392dbb0fe0b41bd6d128fa81d63814.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "porks",
  "dsc": "Stone Porter Beer Pork Chops - 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c0"),
  "id": "pork-ribs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133284/pork-ribs.6b9717d10630be7c5bea4b69987a33c6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "porks",
  "dsc": "Pork Ribs",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c1"),
  "id": "joes-kc-ribs-and-pulled-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81831/joes-kc-ribs-and-pulled-pork.80d62bf64dc6a772572d7f589c8f95af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "porks",
  "dsc": "Joe's KC Ribs & Pulled Pork",
  "price": 94.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c2"),
  "id": "1824200000002-pulled-pork-pirogies",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132154/pulled-pork-pierogis.860293a62d3ef57afd60b6f78cdb7c64.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Baba & Pops",
  "sections": "porks",
  "dsc": "Pulled Pork Pierogis",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Denver, CO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c3"),
  "id": "whole-smoked-pork-shoulder",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133153/whole-smoked-pork-shoulder.4523225ac2025f330c450bdec541bb7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "porks",
  "dsc": "Whole Smoked Pork Shoulder",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c4"),
  "id": "whole-pork-belly-5-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131896/whole-pork-belly-5-lbs.68e0553bf92c74601ff7b6c922af2c5a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roegels Barbecue",
  "sections": "porks",
  "dsc": "Whole Pork Belly - 5 lbs.",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c5"),
  "id": "17352-ribs-and-pulled-pork-small-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137366/Central-BBQ-Ribs-Pulled-Pork-Dinner-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "porks",
  "dsc": "Ribs & Pulled Pork Dinner for 4",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c6"),
  "id": "spicy-pork-wontons-25-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134605/spicy-pork-wontons-25-pack.638f79adb694c9b0a61bd18542a72285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dumpling Monster",
  "sections": "porks",
  "dsc": "Spicy Pork Wontons - 25 Pack",
  "price": 59,
  "rate": NumberInt(4),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c7"),
  "id": "mofongo-with-roasted-pork-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132696/mofongo-roasted-pork-kit-for-4.f82d15d0e375b9f14e7771cc14c74262.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Triple Threat Truck",
  "sections": "porks",
  "dsc": "âMofonGOâ with Roasted Pork Kit for 4",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c8"),
  "id": "guys-bbq-pulled-pork-trash-can-nachos",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115312/guys-bbq-pulled-pork-trash-can-nachos.5783c0f7459bfc0adbbcf063edced3fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Guy Fieri",
  "sections": "porks",
  "dsc": "Guy's BBQ Pulled Pork Trash Can Nachos",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Flavortown, USA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254c9"),
  "id": "18041-ribs-and-pulled-pork-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73762/pappys-ribs-and-pulled-pork-dinner-for-8.b1ebab4ba20903bea0fc8ad73df29ddb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "porks",
  "dsc": "Pappy's Ribs & Pulled Pork - Dinner for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ca"),
  "id": "18041432432-pulled-pork-pack-serves-12-15",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73798/pappys-pulled-pork-pack-serves-12-15.1960957d09163524732958e85c5441f7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pappy's Smokehouse",
  "sections": "porks",
  "dsc": "Pappy's Pulled Pork Pack - Serves 12-15",
  "price": 139,
  "rate": NumberInt(4),
  "country": "St. Louis, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254cb"),
  "id": "stone-porter-beer-pork-chops-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85748/stone-porter-beer-pork-chops-6-pack.dbfc6a8cd00795a869c9f9900a20401f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "porks",
  "dsc": "Stone Porter Beer Pork Chops - 6 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254cc"),
  "id": "17352-ribs-and-pulled-pork-medium-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137368/Central-BBQ-Ribs-Pulled-Pork-Party-Pack-1_.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "porks",
  "dsc": "Ribs & Pulled Pork Dinner for 8",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254cd"),
  "id": "bbq-pulled-pork-feast-5-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131539/bbq-pulled-pork-feast-5-lbs.46e3b2429e7886ea112efe7d8f8705dc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "porks",
  "dsc": "BBQ Pulled Pork Feast - 5 lbs",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ce"),
  "id": "roast-pork-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101368/roast-pork-sandwich-kit-4-pack.c05d6009a6c4e227c851e326cd2cee49.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "John's Roast Pork",
  "sections": "porks",
  "dsc": "Roast Pork Sandwich Kit - 4 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254cf"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "porks",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d0"),
  "id": "cheesy-char-siu-bbq-pork-bao-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117504/cheesy-char-siu-bbq-pork-bao-12-pack.df8c62bb06b4178747a7c2a6ab0ad47d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rice Box",
  "sections": "porks",
  "dsc": "Cheesy \"Char Siu\" BBQ Pork Bao - 12 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d1"),
  "id": "texas-pork-chops-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102047/texas-pork-chops-4-pack.7dd85d8cdfe3fc773a0b2c5cadf377ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schoepf's BBQ",
  "sections": "porks",
  "dsc": "Texas Sized Pork Chops - 4 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Belton, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d2"),
  "id": "kansas-city-pulled-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132300/kansas-city-pulled-pork.67dd666df04e0f095136d712f6a96f10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meat Mitch",
  "sections": "porks",
  "dsc": "Kansas City Pulled Pork",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d3"),
  "id": "habbersett-scrapple-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134171/habbersett-scrapple-4-pack.28dbdb2ce009efff658734c7321c82f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Habbersett Scrapple",
  "sections": "porks",
  "dsc": "Habbersett Scrapple - 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeville, DE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d4"),
  "id": "23238-pork-tenderloin-sandwich-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134486/pork-tenderloin-sandwich-8-pack.aa66fab9ba71b1697d0a74e6f1f40be2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "porks",
  "dsc": "Pork Tenderloin Sandwich - 8 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d5"),
  "id": "roast-pork-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134280/roast-pork-sandwich-4-pack.7541242ed3c3c4d5d00ad8a99becea4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fedoroff's Roast Pork",
  "sections": "porks",
  "dsc": "Roast Pork Sandwich - 4 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d6"),
  "id": "asado-de-puerco-stewed-pork-shoulder-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112572/asado-de-puerco-stewed-pork-shoulder-for-4.1b9176347000861a2a1715937ffa2337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picos Mexican Restaurant",
  "sections": "porks",
  "dsc": "\"Asado de Puerco\" - Stewed Pork Shoulder for 4",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d7"),
  "id": "004-pork-boudin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66643/pork-boudin.d0ea122c5c9046a08ee9d8d1bc5c0b09.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Comeaux's",
  "sections": "porks",
  "dsc": "Pork Boudin",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Lafayette, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d8"),
  "id": "bbq-chopped-pork",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85746/bbq-chopped-pork.3747d8035f680d0e20b0cf8604454ed9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "White Swan BBQ",
  "sections": "porks",
  "dsc": "BBQ Chopped Pork",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Smithfield, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254d9"),
  "id": "pork-ribeye-shabu-shabu-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136692/Shabu-Tatsu-Shabu-Shabu-11.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shabu Tatsu",
  "sections": "porks",
  "dsc": "Pork + Ribeye Shabu Shabu Kit for 4",
  "price": 165,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254da"),
  "id": "smoked-pork-loin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96700/smoked-pork-loin.3c1f29311ebe60c29ac03289b5e6b2f4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "porks",
  "dsc": "Smoked Pork Loin",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254db"),
  "id": "bbq-pulled-pork-pack-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131234/bbq-pulled-pork-pack-for-8.bd81f82597f64ecbd5f99bd056a0a6a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Melissa Cookston's Memphis BBQ",
  "sections": "porks",
  "dsc": "BBQ Pulled Pork Pack for 8",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Horn Lake, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254dc"),
  "id": "homemade-pork-buns-18-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131675/homemade-pork-buns-18-pack.b3a41e86a48c8c484a3f5e87aeedd511.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "RedFarm",
  "sections": "porks",
  "dsc": "Homemade Pork Buns - 18 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254dd"),
  "id": "3831812-legendary-pulled-pork-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135517/Joe_s-KC-Pork-Z-Man-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "porks",
  "dsc": "Legendary Pulled Pork Z-Man Sandwich Kit - 8 Pack",
  "price": 89.99,
  "rate": NumberInt(4),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254de"),
  "id": "17347-pulled-pork-6-pound-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137386/Central-BBQ-Pulled-Pork-Packs-2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central BBQ",
  "sections": "porks",
  "dsc": "Pulled Pork Pack - Serves 10-12",
  "price": 125,
  "rate": NumberInt(5),
  "country": "Memphis, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254df"),
  "id": "duck-lamb-salami-delight-gift-box-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129030/duck-lamb-delight-gift-box-4-pack.a1e4bd2f80720f0b4341387705ff2ddb.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Salty Pork Bits",
  "sections": "porks",
  "dsc": "Duck + Lamb Salami Delight Gift Box - 4 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e0"),
  "id": "pulled-pork-and-baby-back-ribs-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115360/pulled-pork-and-baby-back-ribs-combo.65b3eb24682385c2f3b8579b57229b84.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Blue Smoke",
  "sections": "porks",
  "dsc": "Pulled Pork & Baby Back Ribs Combo",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e1"),
  "id": "habbersett-scrapple-and-taylor-pork-roll-combo",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133435/habbersett-scrapple-and-taylor-pork-roll-combo.a97052fdcec87f49faa5c6caa1e1271b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Habbersett Scrapple",
  "sections": "porks",
  "dsc": "Habbersett Scrapple & Taylor Pork Roll Combo",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Bridgeville, DE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e2"),
  "id": "cardiff-crack-tri-tip-and-pork-chops-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134802/cardiff-crack-tri-tip-and-pork-chops-combo-pack.4e443672759c54837bc8a8cb1511faaa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "porks",
  "dsc": "Cardiff Crack Tri Tip & Pork Chops Combo Pack",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e3"),
  "id": "ms-made-double-smoked-pork-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131807/ms-made-double-smoked-pork-sausage-sampler.47b527fab5f80d9a2eb41f2cefcb427f.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "porks",
  "dsc": "MS Made Double Smoked Pork Sausage Sampler",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e4"),
  "id": "dry-rub-ribs-and-pulled-pork-dinner-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134350/dry-rub-ribs-and-pulled-pork-dinner-for-8.2126099f0e2ec6b6ecfb5408a3cc0a2e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peg Leg Porker",
  "sections": "porks",
  "dsc": "Dry-Rub Ribs and Pulled Pork Dinner for 8",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Nashville, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e5"),
  "id": "whole-duroc-pulled-pork-shoulder-3-4-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112374/whole-duroc-pulled-pork-shoulder-3-4-lbs.bc8450cb3bebb1cb49232ef2748c5de4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Derek Allan's Texas Barbecue",
  "sections": "porks",
  "dsc": "Whole Duroc Pulled Pork Shoulder - 3-4 lbs.",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Fort Worth, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e6"),
  "id": "taiwanese-style-pork-chop-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107818/taiwanese-style-pork-chop-dinner-kit-for-4.af151d422000d25f084e36e5f83cccba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shirley Chung's Ms. Chi",
  "sections": "porks",
  "dsc": "Taiwanese Style Pork Chop Dinner Kit for 4",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e7"),
  "id": "17th-street-bbq-pulled-pork-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90777/17th-street-bbq-pulled-pork-pack.850b9b9b4d2fe7b2652849b1a1a06f9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "17th Street BBQ",
  "sections": "porks",
  "dsc": "17th Street BBQ Pulled Pork Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Murphsboro, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e8"),
  "id": "pulled-pork-2-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120857/pulled-pork-2-lbs.23a8d91cd47ae9f2b9649a1faf395282.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Germantown Commissary BBQ",
  "sections": "porks",
  "dsc": "Pulled Pork - 2 lbs",
  "price": 75,
  "rate": NumberInt(5),
  "country": "Germantown, TN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254e9"),
  "id": "chicharron-en-salsa-verde-pork-belly-in-salsa-verde-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112609/chicharron-en-salsa-verde-pork-belly-in-salsa-verde-for-2.18fde7f6fbdc6ab6d905087209e0afa9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Picos Mexican Restaurant",
  "sections": "porks",
  "dsc": "\"Chicharron en Salsa Verde\" - Pork Belly in Salsa Verde for 2",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ea"),
  "id": "pan-fried-pork-buns-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134595/pan-fried-pork-buns-12-pack.8a1b36aca41ba2cb43191336aa71df0b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dumpling Monster",
  "sections": "porks",
  "dsc": "Pan Fried Pork Buns - 12 Pack",
  "price": 65,
  "rate": NumberInt(5),
  "country": "West Hollywood, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254eb"),
  "id": "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "\"The Gothamist\" Prosciutto + Burrata Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ec"),
  "id": "15504-original-muffuletta-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "sandwiches",
  "dsc": "Original Muffuletta Sandwich - 2-Pack (Serves 6-8)",
  "price": 109,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ed"),
  "id": "the-bomb-sandwich-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sal, Kris & Charlie's Deli",
  "sections": "sandwiches",
  "dsc": "The Bomb Sandwich for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Astoria, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ee"),
  "id": "15428-pittsburgh-party-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Primanti Bros.",
  "sections": "sandwiches",
  "dsc": "Primanti Bros Sandwich Pack - (Choose Your Meat)",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ef"),
  "id": "pastrami-burnt-end-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "sandwiches",
  "dsc": "Ugly Buns \"Burnt End\" Sandwich Kit - 6 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f0"),
  "id": "favorite-sloppy-joe-sandwich",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67768/new-jersey-sloppy-joe-sandwich-feeds-3.b866e4c84e09ad65cb8c6b9f4949ec7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "sandwiches",
  "dsc": "Favorite Sloppy Joe Sandwich",
  "price": 79,
  "rate": NumberInt(5),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f1"),
  "id": "sandwich-best-sellers-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "Italian Sandwich Kit Best Sellers - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f2"),
  "id": "15504-original-muffuletta-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133232/original-muffuletta-sandwich-3-pack.2b00693e49ef277bc2b69810709d8fe8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "sandwiches",
  "dsc": "Original Muffuletta Sandwich - 3 pack (Serves 10-12)",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f3"),
  "id": "roast-pork-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tommy DiNic's",
  "sections": "sandwiches",
  "dsc": "Roast Pork Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f4"),
  "id": "meet-the-reubens-sandwich-kit-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131830/plain-cheesecake.de3d6cefd530477dc04769774752448e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Junior's Cheesecake",
  "sections": "sandwiches",
  "dsc": "Meet the Reubens Sandwich Kit for 4-6",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f5"),
  "id": "italian-beef-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82793/italian-beef-sandwich-kit-8-pack.b87a0062ceecd6bb8511bfad8f1af8cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Buona Italian Beef",
  "sections": "sandwiches",
  "dsc": "Italian Beef Sandwich Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f6"),
  "id": "campos-philly-cheesesteaks-and-hoagies-combo-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134573/campos-philly-cheesesteaks-and-hoagies-combo-4-pack.075e04e4a7054d3c042b1f380639ace9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "sandwiches",
  "dsc": "Campo's Philly Cheesesteaks & Hoagies Combo - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f7"),
  "id": "the-original-french-dip-sandwich-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85861/the-original-french-dip-6-pack.a52e10de7346a8330f234e2310015a05.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Philippe The Original French Dip",
  "sections": "sandwiches",
  "dsc": "The Original French Dip Sandwich - 6 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f8"),
  "id": "23728-beef-on-weck-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89891/beef-on-weck-sandwich-kit-4-pack.2e34382035f62d683dda73b11cfbe4e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "sandwiches",
  "dsc": "Beef on Weck Sandwich Kit - 4 Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254f9"),
  "id": "fried-chicken-biscuit-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sunrise Biscuit Kitchen",
  "sections": "sandwiches",
  "dsc": "Fried Chicken Biscuit Sandwich Kit",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Chapel Hill, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254fa"),
  "id": "pinocchio-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133768/pinocchio-sandwich-kit-4-pack.62c1cd24452c76f7354f9fc39652bcda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "\"The Pinocchio\" Prosciutto + Soppressata + Mozzarella Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254fb"),
  "id": "18269-monster-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/74442/a-monster-sandwich-kit-for-4.8bf87e4a1240c2d7b31c04ea31348639.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sarge's Deli",
  "sections": "sandwiches",
  "dsc": "A Monster Sandwich Kit for 4",
  "price": 129,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254fc"),
  "id": "favorite-sloppy-joe-sandwich-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132713/new-jersey-sloppy-joe-3-pack-serves-9.c5ef8ff07dccdd95de92621c72a831cb.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "sandwiches",
  "dsc": "Favorite Sloppy Joe Sandwich - 3 Pack",
  "price": 159,
  "rate": NumberInt(5),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254fd"),
  "id": "1756745-grilled-specialty-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132771/grilled-specialty-sandwich-4-pack.8129b512606a14070d490a9a5e2a97a9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Sam LaGrassa's",
  "sections": "sandwiches",
  "dsc": "Grilled Specialty Sandwich 4 Pack",
  "price": 125,
  "rate": NumberInt(4),
  "country": "Boston, MA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254fe"),
  "id": "23728-beef-on-weck-and-frozen-custard-for-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89844/beef-on-weck-and-frozen-custard-for-4-pack.8b76cc5bddf98593330297b55c97835c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "sandwiches",
  "dsc": "Beef on Weck & Frozen Custard for 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e2254ff"),
  "id": "legendary-brisket-z-man-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "sandwiches",
  "dsc": "Legendary Brisket Z-Man Sandwich Kit - 8 Pack",
  "price": 99.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225500"),
  "id": "pats-original-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87749/pats-original-philly-cheesesteak-4-pack.fe6d8af186d93848f9a5090118fe8b46.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "sandwiches",
  "dsc": "Pat's Original Philly Cheesesteak - 4 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225501"),
  "id": "23699-meatball-sandwich-kit-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89816/meatball-sandwich-kit-6-pack.f4f05520fe4d25f90520ffe80e543f83.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bartoliniâs",
  "sections": "sandwiches",
  "dsc": "Meatball Sandwich Kit - 6 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Chicago, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225502"),
  "id": "famous-cuban-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105841/famous-cuban-sandwich-kit-for-4.6f9e16a68848ca76015bf057b2d8ab8e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Versailles Restaurant",
  "sections": "sandwiches",
  "dsc": "Famous Cuban Sandwich Kit for 4",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Miami, FL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225503"),
  "id": "18650-carolina-pulled-pork-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/75464/carolina-pulled-pork-sandwich-pack.8e672a876d720c8471b08ffa47fbbbc1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "sections": "sandwiches",
  "dsc": "Carolina Pulled Pork Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Kinston, NC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225504"),
  "id": "sandwiches-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133186/italian-sandwich-kits-choose-your-own-4-pack.c9d2b1d33a3151dafcc65055667cd265.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "Italian Sandwich Kits - Choose Your Own 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225505"),
  "id": "matthew-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109101/matthew-sandwich-kit-4-pack.629fd9bbcf23a9f42137ee34a4807b06.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "\"The Matthew\" Prosciutto + Mozzarella Sandwich Kit - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225506"),
  "id": "reuben-sandwich-kit-serves-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85449/reuben-sandwich-kit-serves-2-4.a8b347c9d782fbd483209e94c45630cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Liebman's Kosher Deli",
  "sections": "sandwiches",
  "dsc": "Reuben Sandwich Kit (serves 2-4)",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225507"),
  "id": "23238-pork-tenderloin-sandwich-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132633/pork-tenderloin-sandwich-4-pack.b6914a19ee345d5284ed1eaf00f5c2ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Nick's Kitchen",
  "sections": "sandwiches",
  "dsc": "Pork Tenderloin Sandwich - 4 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Huntington, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225508"),
  "id": "fried-chicken-sandwich-combo-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115433/fried-chicken-sandwich-combo-kit-for-6.649e00580828a749ee120ec205cf9bb8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Shaq's Big Chicken",
  "sections": "sandwiches",
  "dsc": "Fried Chicken Sandwich Combo Kit for 6",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Las Vegas, NV"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225509"),
  "id": "chaps-pit-beef-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96174/chaps-signature-pit-beef-sandwich-kit-8-pack.4c8dc2a9b8a1b86d7413cb7eb0b53004.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chaps Pit Beef",
  "sections": "sandwiches",
  "dsc": "Chap's Signature Pit Beef Sandwich Kit - 8 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550a"),
  "id": "campos-italian-hoagies-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89876/campos-italian-hoagies-4-pack.d5d8bc0cfde70806e2c3116a1d0075a6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "sandwiches",
  "dsc": "Campo's Italian Hoagies - 4 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550b"),
  "id": "swiss-stack-reuben-sandwich-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98963/swiss-stack-reuben-sandwich-kit-4-pack.65cd91d0b83eddeec85ea11da556a280.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Ugly Drum",
  "sections": "sandwiches",
  "dsc": "Swiss Stack \"Reuben\" Sandwich Kit - 4 Pack",
  "price": 125,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550c"),
  "id": "sub-sandwich-sampler-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132050/sub-sandwich-sampler-10-pack.94ea7d56e4588b1ab4d497de1835524b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "sandwiches",
  "dsc": "Sub Sandwich Sampler - 10 Pack",
  "price": 209,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550d"),
  "id": "choose-your-own-subs-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85485/choose-your-own-subs-for-4.13c18ffab976ab1579f35cddd2afee9c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "White House Subs",
  "sections": "sandwiches",
  "dsc": "Choose Your Own Subs for 4",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Atlantic City, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550e"),
  "id": "1550410023131-original-muffuletta-sandwich-4-pack-serves-16-20",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/76639/original-muffuletta-sandwich-4-pack-serves-16-20.9962daf37da5599284ad218cbf6cf049.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Central Grocery Muffulettas",
  "sections": "sandwiches",
  "dsc": "Original Muffuletta Sandwich - 4 pack (Serves 14-16)",
  "price": 179,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22550f"),
  "id": "sandwich-best-sellers-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134378/italian-sandwich-kit-best-sellers-8-pack.7e6c21313e048070dc76d26a6ef1ef5d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alidoro",
  "sections": "sandwiches",
  "dsc": "Italian Sandwich Kit Best Sellers - 8 Pack",
  "price": 179,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225510"),
  "id": "17577-prime-smoked-beef-brisket-package-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72771/prime-smoked-brisket-sandwich-pack-for-2.5f64f4b580dc184c5f5bed5675e65448.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Wagshal's",
  "sections": "sandwiches",
  "dsc": "Prime Smoked Brisket Sandwich Pack for 2",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Washington, DC"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225511"),
  "id": "chopped-brisket-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/76735/chop-beef-sandwich-kit.840cf0a6fea897269b53ab01b2575655.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Louie Mueller Barbecue",
  "sections": "sandwiches",
  "dsc": "Chopped Brisket Sandwich Kit for 8",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Taylor, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225512"),
  "id": "the-reggie-biscuit-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132111/the-reggie-sandwich-kit-for-4.f53744b8e7ad1c844cb1511b910747f1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pine State Biscuits",
  "sections": "sandwiches",
  "dsc": "The Reggie Sandwich Kit for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225513"),
  "id": "boloney-rex-sub-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120497/boloney-rex-sub-sandwich-2-pack.b20da77b5509fd6fb26a350dd0f93778.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Tony Boloney's",
  "sections": "sandwiches",
  "dsc": "Boloney Rex Sub Sandwich - 2 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Hoboken, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225514"),
  "id": "cheesesteak-and-roast-pork-sandwich-combo-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114249/cheesesteak-and-roast-pork-sandwich-combo-4-pack.97a1ad6b2b653e5b48ba79b759545476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fedoroff's Roast Pork",
  "sections": "sandwiches",
  "dsc": "Cheesesteak & Roast Pork Sandwich Combo - 4 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225515"),
  "id": "237282-beef-on-weck-sandwich-kit-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89888/beef-on-weck-sandwich-kit-8-pack.7c49b1a9932ebd017c1d276276349617.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Anderson's Frozen Custard",
  "sections": "sandwiches",
  "dsc": "Beef on Weck Sandwich Kit - 8 Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Buffalo, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225516"),
  "id": "blackstone-reuben-sandwich-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/86691/blackstone-reuben-sandwich-kit-for-4.05b9a82b798890ad54c874c996a78ac9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Crescent Moon",
  "sections": "sandwiches",
  "dsc": "The Original Blackstone Reuben Sandwich Kit for 4",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Omaha, NE"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225517"),
  "id": "butcher-muffuletta-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134083/butcher-muffuletta-4-pack.1f020f3eaccbeab19131fd4bf3578cfa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cochon Butcher",
  "sections": "sandwiches",
  "dsc": "Cochon's Hot Muffuletta - 4 Pack",
  "price": 119,
  "rate": NumberInt(5),
  "country": "New Orleans, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225518"),
  "id": "15128-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134788/philly-cheesesteak-4-pack.ee73df8fae1147633dfe6d2bbd966c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jim's Steaks",
  "sections": "sandwiches",
  "dsc": "Jim's Philly Cheesesteaks - 4 pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225519"),
  "id": "walters-hot-dog-kit-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134674/walters-hot-dog-kit-12-pack.f9cb866a4860122a13c7d6730f70fe98.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Walter's Hot Dogs",
  "sections": "sandwiches",
  "dsc": "Walter's Hot Dog Kit - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Mamaroneck, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551a"),
  "id": "pastrami-sandwich-kit",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131233/pastrami-sandwich-kit.1dca046be2c347e50b0c541f16588211.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kenny & Ziggy's Delicatessen",
  "sections": "sandwiches",
  "dsc": "Pastrami Sandwich Kit",
  "price": 54.95,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551b"),
  "id": "favorite-sloppy-joe-sandwich-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67914/new-jersey-sloppy-joe-2-pack-feeds-6.6eb8ebc6b3227ce05d3d553e5a6e7e53.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Town Hall Deli",
  "sections": "sandwiches",
  "dsc": "Favorite Sloppy Joe Sandwich - 2 Pack",
  "price": 109,
  "rate": NumberInt(5),
  "country": "South Orange, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551c"),
  "id": "18040-new-jersey-sloppy-joe-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73824/new-jersey-sloppy-joe-6-pack.8f594005c4a06d35dafc96371608b97d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Millburn Deli",
  "sections": "sandwiches",
  "dsc": "New Jersey Sloppy Joe - 6 Pack",
  "price": 139,
  "rate": NumberInt(5),
  "country": "Millburn, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551d"),
  "id": "choose-your-own-campos-philly-sandwiches-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91015/choose-your-own-campos-philly-sandwiches-6-pack.342f4b72f142aebb1ec653528884c5b0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Campo's Philly Cheesesteaks",
  "sections": "sandwiches",
  "dsc": "Choose Your Own Campo's Philly Sandwiches - 6 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551e"),
  "id": "picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132380/picnic-chicken-sandwich-with-memphis-mustard-slaw-kit-for-4.c9f4e235ad2a2151df272744ccfba476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Motel Fried Chicken",
  "sections": "sandwiches",
  "dsc": "Picnic Chicken Sandwich with Memphis Mustard Slaw Kit for 4",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22551f"),
  "id": "154287-primanti-bros-combo-pack-pastrami-sandwich-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72543/primanti-bros-pastrami-sandwich-pack.7f21d2a9340d319eb387d693efec161c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Primanti Bros.",
  "sections": "sandwiches",
  "dsc": "Primanti Bros - Pastrami Sandwich Pack",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Pittsburgh, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225520"),
  "id": "signature-new-york-breakfast-sandwich-kit-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/127039/signature-bagel-sandwich-kit-for-6.5b3a5097fcf69964143621f87100c669.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Orwashers Bakery",
  "sections": "sandwiches",
  "dsc": "Signature New York Breakfast Sandwich Kit for 6",
  "price": 79,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225521"),
  "id": "pastrami-or-corned-beef-sandwich-kit-serves-2-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85369/pastrami-or-corned-beef-sandwich-kit-serves-2-4.ef6e5ae2bbabb885e2ad5779115ac39d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Liebman's Kosher Deli",
  "sections": "sandwiches",
  "dsc": "Pastrami or Corned Beef Sandwich Kit (serves 2-4)",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Bronx, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225522"),
  "id": "original-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101114/original-texas-smoked-sausage.a298e25643030c5500e225c7996fb153.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "sausages",
  "dsc": "Original Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225523"),
  "id": "fresh-ribeye-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105558/fresh-ribeye-sausage-2-lbs.9e0c22fd028026e78c079c5ef64d9579.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hebert's Specialty Meats",
  "sections": "sausages",
  "dsc": "Fresh Ribeye Sausage",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Maurice, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225524"),
  "id": "001-5-pound-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66440/sausage-sampler-for-10.0ca584a30121a79d612254a9f7c10bb4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Sausage Sampler For 10",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225525"),
  "id": "6-sausage-sampler-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79253/sausage-sampler-pack-serves-10-12.e2d63273c29b923ca4ad80cf63669b12.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Sausage Sampler Pack - Serves 10-12",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225526"),
  "id": "20154-bacon-wrapped-cheddar-jalapeno-sausage-slammers",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131365/bacon-wrapped-cheddar-jalapeno-sausage-slammers.1aad356ed0b86ebefde0c645520fddb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Bacon Wrapped Cheddar JalapeÃ±o Sausage Slammers",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225527"),
  "id": "jalapeno-and-cheddar-texas-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101125/jalapeno-and-cheddar-texas-smoked-sausage.dc663b24836b39e0d57df946f529c90b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Terry Black's Barbecue",
  "sections": "sausages",
  "dsc": "Jalapeno and Cheddar Texas Smoked Sausage",
  "price": 89,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225528"),
  "id": "toulouse-sausage-coil-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117565/toulouse-sausage-coil-3-pack.ebe77727730b4f8fd7e0a888cb6ebe02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "sausages",
  "dsc": "Toulouse Sausage Coil - 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225529"),
  "id": "hog-heaven",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79576/hog-heaven-pulled-pork-sausage-links.5012c36f6f049c131b04345c5326e4d3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "sections": "sausages",
  "dsc": "Hog Heaven - Pulled Pork + Sausage Links",
  "price": 69.99,
  "rate": NumberInt(5),
  "country": "Kansas City, KS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552a"),
  "id": "002-five-pound-chicken-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134485/chicken-sausage-sampler-for-10.b4ac88fcbabc55e4ee9ff096060cb5af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Chicken Sausage Sampler for 10",
  "price": 69,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552b"),
  "id": "boudin-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135476/Heberts-Boudin-Sausage-Sampler-Kit-Prodcut-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Hebert's Specialty Meats",
  "sections": "sausages",
  "dsc": "Boudin + Sausage Sampler",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Maurice, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552c"),
  "id": "brats-choose-your-own-10-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103017/brats-choose-your-own-10-pack.9b940a07b5cd93223d46276aac268e5c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "sausages",
  "dsc": "Brats - Choose Your Own 10 Pack",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552d"),
  "id": "korean-bbq-grilling-sausage-choose-your-own-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131684/choose-your-own-korean-bbq-grilling-sausage-12-pack.cf65a78dff1380f12d408831c8ef51d1.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "sausages",
  "dsc": "Korean BBQ Grilling Sausage - Choose Your Own 12 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552e"),
  "id": "30027-sausages-and-franks-choose-your-own-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105792/sausages-and-franks-choose-your-own-4-pack.c017803b6c99d055cf3872153fb6f8a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Weaver's of Wellsville",
  "sections": "sausages",
  "dsc": "Sausages & Franks - Choose Your Own 4 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Wellsville, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22552f"),
  "id": "bbq-sausage-sampler-15-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131414/bbq-sausage-sampler-15-pack.bbe3d777a6ff165fabaa8eb07667a3cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Roegels Barbecue",
  "sections": "sausages",
  "dsc": "BBQ Sausage Sampler - 15 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225530"),
  "id": "17923-the-super-bowl-sausage-special",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73494/ball-park-tailgate-sampler-for-12.7fc6abf1a1181f15c5822ba182b18e1d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Ball Park Tailgate Sampler for 12",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225531"),
  "id": "wild-game-sausage-best-seller-5-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133159/wild-game-sausage-best-seller-5-pack.248d69c960a0fd1491b9cd73d1d66f96.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Broken Arrow Ranch",
  "sections": "sausages",
  "dsc": "Wild Game Sausage Best Seller - 9 Pack",
  "price": 85,
  "rate": NumberInt(5),
  "country": "Ingram, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225532"),
  "id": "sausages-choose-your-own-24-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114515/sausages-choose-your-own-24-pack.b7c28f8124aa19512881eefec704592e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "sausages",
  "dsc": "Sausages - Choose Your Own 24 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225533"),
  "id": "15812-hot-italian-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68872/hot-italian-sausage.cf60e0475f38aec2bce0c534d8db266d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Hot Italian Sausage For 12",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225534"),
  "id": "16893-choose-your-own-sausage-10lb-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132840/signature-sausage-feast-for-20.2078fbd8a1d6e860dae1bcf1399bde8f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Signature Sausage Feast for 20",
  "price": 129,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225535"),
  "id": "grandpas-sweet-italian-sausage-3-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124878/usda-prime-black-angus-filet-mignon-barrel-cut.b2f88648ba2d97825f48317187c13e44.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "sausages",
  "dsc": "Grandpa's Sweet Italian Sausage - 3 lbs.",
  "price": 33,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225536"),
  "id": "003-pork-boudin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133861/smoked-andouille-sausage.0e2d2add4f33e6cd28a2da57434859a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Comeaux's",
  "sections": "sausages",
  "dsc": "Smoked Andouille Sausage",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Lafayette, LA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225537"),
  "id": "smoked-pork-bacon-sausages-10-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126815/smoked-pork-and-bacon-sausage-2-pack.fb3e7ac1491af3fcde3187e0f25a3d13.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Underbelly by Chris Shepherd",
  "sections": "sausages",
  "dsc": "Smoked Pork & Bacon Sausages - 10 Links",
  "price": 59,
  "rate": NumberInt(5),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225538"),
  "id": "korean-bbq-sausage-kit-for-8",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132174/korean-bbq-sausage-combo-kit-for-8.8e1946d141ce5cd1e3205c6f0fed21d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seoul Sausage",
  "sections": "sausages",
  "dsc": "Korean BBQ Sausage Kit for 8",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225539"),
  "id": "ms-made-double-smoked-pork-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131807/ms-made-double-smoked-pork-sausage-sampler.47b527fab5f80d9a2eb41f2cefcb427f.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Shed BBQ & Blues Joint",
  "sections": "sausages",
  "dsc": "MS Made Double Smoked Pork Sausage Sampler",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Ocean Springs, MS"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553a"),
  "id": "bahama-mama-and-knockwurst-sausage-combo-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134151/bahama-mama-and-knockwurst-sausage-combo-pack.f5158a6c13dae98138935bcfd96ee5b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schmidt's Sausage Haus",
  "sections": "sausages",
  "dsc": "Bahama Mama & Knockwurst Sausage Combo Pack",
  "price": 129,
  "rate": NumberInt(5),
  "country": "Columbus, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553b"),
  "id": "16124-sausage-tomato-fennel",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132371/sausage-tomato-fennel-pie.cc3152ebcd1c39b3a9055939d84ae580.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "sausages",
  "dsc": "Sausage Tomato Fennel Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553c"),
  "id": "1-original-1882-hot-recipe-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79266/original-1882-hot-beef-sausage.2fd51e38f8e3883e35276a6ae8aaecb3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Original \"1882\" Hot Beef Sausage",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553d"),
  "id": "texas-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129517/the-goodes-sausage-sampler.d4a59492f062ab1be62cd3308eaf3bde.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goode Co. Barbeque",
  "sections": "sausages",
  "dsc": "Texas Sausage Sampler",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553e"),
  "id": "5-jalapeno-cheddar-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132541/jalapeno-cheddar-smoked-sausage.232a80c2738feb2bfcac0ec624e16e4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "JalapeÃ±o Cheddar Smoked Sausage",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22553f"),
  "id": "choose-your-own-sausage-jumbo-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132047/choose-your-own-sausage-jumbo-box.aee6aa6705acdefb85fb5e6cc8805cb0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Catskill Food Company",
  "sections": "sausages",
  "dsc": "Choose Your Own Sausage - Jumbo Box",
  "price": 159,
  "rate": NumberInt(5),
  "country": "Delhi, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225540"),
  "id": "2-original-beef-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79236/original-beef-smoked-sausage.65203942122995211d7e7aed36875cf1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Original Beef Smoked Sausage",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225541"),
  "id": "beef-summer-sausage-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97485/beef-summer-sausage-225-lbs.9ed3e96e274e63599c3e573c35fe497a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Alewel's Country Meats",
  "sections": "sausages",
  "dsc": "Beef Summer Sausage - 3 Pack",
  "price": 45,
  "rate": NumberInt(5),
  "country": "Warrensburg, MO"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225542"),
  "id": "gramercy-tavern-smoked-kielbasa-6-Pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92800/gramercy-tavern-smoked-kielbasa.c2d5882bf3ed785b85b348f1fe5717a7.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gramercy Tavern",
  "sections": "sausages",
  "dsc": "Gramercy Tavern Smoked Kielbasa - 6 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225543"),
  "id": "choose-your-own-sausages-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132802/choose-your-own-sausages-8-pack.9d02550f44b749006c3c29d8aa7a31a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Bovine & Swine",
  "sections": "sausages",
  "dsc": "Choose Your Own Sausages - 32 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Jackson, WY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225544"),
  "id": "sausages-and-salami-choose-your-own-15-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136348/Gastros-Sausage-Salami-Sampler-Updated-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "sausages",
  "dsc": "Sausages & Salami - Choose Your Own 15 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225545"),
  "id": "lamb-merguez-sausage-coil-3-packs-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133066/lamb-merguez-sausage-coil-3-pack.1b35219d553e100ef985eb269cf15079.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "sausages",
  "dsc": "Lamb Merguez Sausage Coil - 3 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225546"),
  "id": "summer-grill-pack-for-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134647/summer-grill-pack-for-6.505ff0e0bfc724ff637b19cfc09fe9c7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schaller & Weber",
  "sections": "sausages",
  "dsc": "Summer Grill Pack for 6",
  "price": 79,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225547"),
  "id": "summer-sausage-football",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/13030/summer-sausage-footballs.c4e6e8282f25bb1beadb2a89856cf1bc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Olympia Provisions",
  "sections": "sausages",
  "dsc": "Summer Sausage Footballs - 2 Pack",
  "price": 49,
  "rate": NumberInt(4),
  "country": "Portland, OR"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225548"),
  "id": "sausage-party-choose-your-own-32-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/70163/sausage-party-choose-your-own-28-pack.cb7f9f0ee72faf3ccd21273e8e2fbff8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Banger's Sausage House",
  "sections": "sausages",
  "dsc": "Sausage Party - Choose Your Own 32 Pack",
  "price": 159,
  "rate": NumberInt(4),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225549"),
  "id": "bratwurst",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/88538/bratwurst.1adc4ad6e7b0bba7cfd06a02c6e145d9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Bratwurst",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554a"),
  "id": "19398-breakfast-sausage-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77045/breakfast-sausage-sampler.d0d4f6ab81c52b9ec1a5d6fd7f1cb707.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Esposito Sausage",
  "sections": "sausages",
  "dsc": "Breakfast Sausage Sampler",
  "price": 69,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554b"),
  "id": "ribs-and-sausage-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87850/ribs-and-sausage-pack.b8be6c45bc0403ef8d70d143c8978006.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Ribs & Sausage Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554c"),
  "id": "docs-hot-links-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134266/docs-hot-links-2-dozen.c1ce9a98869e0b5eae5e6400de740944.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Doc's Hot Links",
  "sections": "sausages",
  "dsc": "Doc's Famous Hot Links - 24 Pack",
  "price": 75,
  "rate": NumberInt(4),
  "country": "Gilmer, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554d"),
  "id": "sausage-cheese-kolaches-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133886/sausage-and-cheese-kolaches-12-pack.0cc1e527ec5a26ff23bd390d6793337f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pearl Snap Kolaches",
  "sections": "sausages",
  "dsc": "Sausage and  Cheese Kolaches - 12 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Fort Worth, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554e"),
  "id": "les-sausage-series-combo-pack-for-10",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131380/les-sausage-series-combo-pack-for-10.e38a372231eb38e8878227048cb7451b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Schaller & Weber",
  "sections": "sausages",
  "dsc": "L.E.S. Sausage Series Combo Pack for 10",
  "price": 89,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22554f"),
  "id": "italian-sausage-with-roasted-red-peppers-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114595/italian-sausage-with-roasted-red-peppers-12-pack.c41a6d3d3fd59b8d1bd8141b619053d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "sausages",
  "dsc": "Italian Sausage with Roasted Red Peppers - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225550"),
  "id": "chicken-and-rosemary-sausages-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/85624/chicken-and-rosemary-sausages-12-pack.fc43bd778b81eca1c893e4226c35dfec.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "sausages",
  "dsc": "Chicken and Rosemary Sausages - 12 Pack",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225551"),
  "id": "sausage-collection",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81986/sausage-collection.d4a61f19c48414e6f1c41d4550512dfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Smoking Goose Meatery",
  "sections": "sausages",
  "dsc": "Sausage Collection",
  "price": 69,
  "rate": NumberInt(5),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225552"),
  "id": "choose-your-own-sausage-medium-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/74588/choose-your-own-sausage-medium-box.ddabd413eb17a34d827cac74243938cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Catskill Food Company",
  "sections": "sausages",
  "dsc": "Choose Your Own Sausage - Medium Box",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Delhi, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225553"),
  "id": "gastros-sausage-bacon-and-salami-sampler-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136346/Gastros-Sausage-Bacon-Salami-Sampler-Updated-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "sausages",
  "dsc": "Gastro's Sausage, Bacon, & Salami Sampler for 4",
  "price": 69,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225554"),
  "id": "cracked-black-pepper-sausage-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129316/cracked-black-pepper-sausage-8-pack.859c514ad36fadf5912e46a3ad78eb65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Derek Allan's Texas Barbecue",
  "sections": "sausages",
  "dsc": "Cracked Black Pepper Sausage - 8 Pack",
  "price": 94,
  "rate": NumberInt(5),
  "country": "Fort Worth, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225555"),
  "id": "sausage-best-seller-16-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/70279/sausage-best-seller-16-pack.ff46759f7af2b5d50d89c42d5de45f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Banger's Sausage House",
  "sections": "sausages",
  "dsc": "Sausage Best Seller  - 16 Pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Austin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225556"),
  "id": "specialty-sausage-sampler-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134457/specialty-sausage-sampler-3-pack.e398d3d09f58cd5315ee34f901563c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "sausages",
  "dsc": "Specialty Sausage Sampler - 3 Pack",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225557"),
  "id": "italian-sausage-baozza-12-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/103163/italian-sausage-baozza-24-pack.97113756cd2a9eab32a9ad8a653744e6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Baozza",
  "sections": "sausages",
  "dsc": "Italian Sausage Baozza - 12 Pack",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Pasadena, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225558"),
  "id": "game-sausage-sampler-3-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133490/game-sausage-sampler-3-pack.fe4692864f3fc27be8061c0c9b0787f2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Fabrique DÃ©lices",
  "sections": "sausages",
  "dsc": "Game Sausage Sampler - 3 Pack",
  "price": 89,
  "rate": NumberInt(5),
  "country": "Hayward, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225559"),
  "id": "texas-sized-sausage-feast",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/112301/texas-sized-sausage-sampler-package.11dca9b675f50b30604f19cc305d2aaf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Goode Co. Barbeque",
  "sections": "sausages",
  "dsc": "Texas-Sized Sausage Feast",
  "price": 199,
  "rate": NumberInt(4),
  "country": "Houston, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555a"),
  "id": "grandpas-hot-italian-sausage-3-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131231/usda-prime-black-angus-filet-mignon-barrel-cut.04bcc3143f079afc4b31274b3338be24.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "sausages",
  "dsc": "Grandpa's Hot Italian Sausage - 3 lbs.",
  "price": 33,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555b"),
  "id": "polish-smoked-sausage",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132273/polish-smoked-sausage.8712f5e19f6d26cf3ff079b3fbcce1bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Southside Market & Barbeque",
  "sections": "sausages",
  "dsc": "Polish Smoked Sausage",
  "price": 79,
  "rate": NumberInt(5),
  "country": "Elgin, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555c"),
  "id": "smoked-sausage-2-lbs",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96675/smoked-sausage-2-lbs.58096049afa8b3e448956c83d9690503.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old 300 BBQ",
  "sections": "sausages",
  "dsc": "Smoked Sausage - 2 lbs.",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Blanco, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555d"),
  "id": "green-chili-hot-links",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106379/green-chili-hot-links-12-pack.eaea63f751aac8b82fe2874e47f45c65.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "4505 Burgers & BBQ",
  "sections": "sausages",
  "dsc": "Sausage & Hot Dog - Choose Your Own 3 lbs.",
  "price": 89,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555e"),
  "id": "california-reserve-filet-mignon-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96226/california-reserve-filet-mignon-steaks-gift-box.bf226e317aad85f47897ae7e325f790d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Filet Mignon Steaks Gift Box",
  "price": 129,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22555f"),
  "id": "california-reserve-ribeye-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132850/california-reserve-ribeye-steaks-gift-box.87b8f6acf5851abe58778d3017105edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Ribeye Steaks Gift Box",
  "price": 99,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225560"),
  "id": "steaks-and-cakes-date-night-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118617/valentines-steaks-and-cakes-dinner-for-2.0c63dab635eed46209455dc33cd25ea8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "steaks",
  "dsc": "Steaks and Cakes Date Night Dinner for 2",
  "price": 129,
  "rate": NumberInt(4),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225561"),
  "id": "Prime-holiday-steak-sampler-for-10-12",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113759/holiday-sampler-9-pack.2de75ca80282ffe9d064eb757ff7a5a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Saltbrick Prime",
  "sections": "steaks",
  "dsc": "Chef Matt's Steak Sampler for 10-12",
  "price": 179,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225562"),
  "id": "bone-in-rib-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113844/bone-in-rib-steak.b13d9d4233035767605f0de9acdce1ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "steaks",
  "dsc": "Bone-in Rib Steak",
  "price": 159,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225563"),
  "id": "american-wagyu-gold-grade-top-sirloins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132442/american-wagyu-gold-grade-sirloins.040dbeb8f8e615b91fa7e513e3dc089c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "steaks",
  "dsc": "American Wagyu Gold Grade Top Sirloins",
  "price": 119,
  "rate": NumberInt(5),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225564"),
  "id": "2-peter-luger-steak-pack-b",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131920/peter-luger-steak-pack-b.9feb0300e6be2dfecfa314f2006a2183.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "steaks",
  "dsc": "Peter Luger Porterhouse Steaks",
  "price": 215.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225565"),
  "id": "ribeye-prime-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114307/ribeye-prime-steak-gift-box.e74cb016baabbb2df73861de8150f29c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Churchill's Steakhouse",
  "sections": "steaks",
  "dsc": "Ribeye Prime Steak Gift Box",
  "price": 229,
  "rate": NumberInt(4),
  "country": "Spokane, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225566"),
  "id": "wagyu-filet-mignon-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107003/wagyu-filet-mignon-2-pack.5da42476f7d1b7e7cfe58b4d054e6861.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "steaks",
  "dsc": "Wagyu Filet Mignon - 2 Pack",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225567"),
  "id": "dry-aged-usda-prime-black-angus-porterhouse-steak-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124865/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "steaks",
  "dsc": "Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack",
  "price": 96.7,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225568"),
  "id": "california-reserve-ribeye-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133878/california-reserve-ribeye-steak-12-oz.d367c5ae72dd9f89e170662104bef4fc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Ribeye Steak - 12 oz",
  "price": 32,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225569"),
  "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chef Francis Mallmann",
  "sections": "steaks",
  "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
  "price": 225,
  "rate": NumberInt(4),
  "country": "Patagonia, Argentina"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556a"),
  "id": "california-reserve-filet-mignon-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96252/california-reserve-filet-mignon-steak.ff15071964ec8141d30c2ba05fb117e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Filet Mignon Steak",
  "price": 22,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556b"),
  "id": "mesquite-smoked-peppered-beef-tenderloin",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99462/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Perini Ranch Steakhouse",
  "sections": "steaks",
  "dsc": "Mesquite Smoked Peppered Beef Tenderloin",
  "price": 165,
  "rate": NumberInt(4),
  "country": "Buffalo Gap, TX"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556c"),
  "id": "sausage-wagyu-steak-sampler-choose-your-own",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134435/sausage-wagyu-steak-sampler-choose-your-own.8a66af51c802dd54a863c20f768ea686.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "steaks",
  "dsc": "Sausage + Wagyu Steak Sampler - Choose Your Own",
  "price": 165,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556d"),
  "id": "steak-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132710/steak-dinner-kit-for-2.3046e9db1f796c3305a71253ad8d86f2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Old Homestead Steakhouse",
  "sections": "steaks",
  "dsc": "Steak Dinner Kit for 2",
  "price": 189,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556e"),
  "id": "cardiff-crack-tri-tips-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133748/cardiff-crack-tri-tip-2-pack.100775575438423b43aa601f273f0713.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Seaside Market",
  "sections": "steaks",
  "dsc": "Cardiff Crack Tri Tip - 2 Pack",
  "price": 169,
  "rate": NumberInt(5),
  "country": "Cardiff by the Sea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22556f"),
  "id": "california-reserve-filet-mignon-steaks-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96663/california-reserve-filet-mignon-steaks-6-pack.9d19cd56391a3a62a6f075182d8e5b1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Filet Mignon Steaks - 6 Pack",
  "price": 159,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225570"),
  "id": "wagyu-ny-strip-steaks-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131433/wagyu-ny-strip-steaks-2-pack.5b760cb84d5a57582e7dd8d1e25c9972.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "steaks",
  "dsc": "Wagyu NY Strip Steak - 2 Pack",
  "price": 169,
  "rate": NumberInt(5),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225571"),
  "id": "california-reserve-new-york-steaks-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96208/california-reserve-new-york-steaks-gift-box.2ac1b5dd138c87e7914f96310bf3bcd3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve New York Steaks Gift Box",
  "price": 119,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225572"),
  "id": "choice-strip-steak-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105600/choice-strip-steak-6-pack.822c77cb36216c8bec513f295b94d2f0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Meats by Linz",
  "sections": "steaks",
  "dsc": "Choice Strip Steak - 6 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Calumet City, IL"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225573"),
  "id": "wagyu-coulotte-steak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103374/wagyu-coulotte-10-oz.8f1a8f4075160241d9698d3f4b1bf488.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Westholme Wagyu",
  "sections": "steaks",
  "dsc": "Wagyu Coulotte Steak - 4 Pack",
  "price": 155,
  "rate": NumberInt(4),
  "country": "Queensland, Australia"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225574"),
  "id": "ribeye-and-filet-mignon-prime-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114275/ribeye-and-filet-mignon-prime-steak-gift-box.894fbe515c343b8517ad91e956150306.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Churchill's Steakhouse",
  "sections": "steaks",
  "dsc": "Ribeye & Filet Mignon Prime Steak Gift Box",
  "price": 249,
  "rate": NumberInt(5),
  "country": "Spokane, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225575"),
  "id": "choice-bone-in-ribeyes-2-choice-new-york-strip-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115509/2-choice-bone-in-ribeyes-2-choice-new-york-strip-steaks.80e8bf5ec76921c9632b7a5c5736fa7e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Niman Ranch",
  "sections": "steaks",
  "dsc": "2 Choice Bone-In Ribeyes + 2 Choice New York Strip Steaks",
  "price": 139,
  "rate": NumberInt(4),
  "country": "Brea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225576"),
  "id": "goldbelly-steak-burger-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133612/goldbelly-steak-burger-sampler.30f9703bf7c2355cffa8846e328481d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "steaks",
  "dsc": "Goldbelly Steak + Burger Sampler",
  "price": 135,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225577"),
  "id": "fourth-of-july-steak-dinner-for-4-6",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132656/steak-dinner-for-4-6.b438ef565a0f8803d9a3a641e1b8d1b6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Chesapeake Bay Gourmet",
  "sections": "steaks",
  "dsc": "Fourth Of July Steak Dinner for 4-6",
  "price": 219,
  "rate": NumberInt(4),
  "country": "Jessup, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225578"),
  "id": "american-wagyu-strip-steaks-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114536/american-wagyu-strip-steaks-2-pack.71ec339dc69d6fc12a4911b4dfd35f39.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Gastros Craft Meats",
  "sections": "steaks",
  "dsc": "American Wagyu Strip Steaks - 2 Pack",
  "price": 119,
  "rate": NumberInt(4),
  "country": "Woonsocket, RI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225579"),
  "id": "13-peter-luger-steak-pack-a",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133140/peter-luger-steak-pack-a.e8f3bb163811e5ffcd60a5831d32874b.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "steaks",
  "dsc": "USDA PRIME Dry-aged Strip Steaks",
  "price": 266.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557a"),
  "id": "world-famous-shrimp-cocktail",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89041/world-famous-shrimp-cocktail-for-4-6.9e41abca0496dfbd5a9fb2adbffeef88.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "St. Elmo Steak House",
  "sections": "steaks",
  "dsc": "World Famous Shrimp Cocktail for 4-6",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557b"),
  "id": "chateaubriand-steak-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105249/chateaubriand-steak-for-2.2cb9ed7cc3227fd26c455d51ca9745ab.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Keens Steakhouse",
  "sections": "steaks",
  "dsc": "Chateaubriand Steak for Two",
  "price": 159,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557c"),
  "id": "choice-center-cut-new-york-strip-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131977/choice-center-cut-new-york-strip-steaks-4-pack.facecef35750e684ca69355c78f6a637.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Niman Ranch",
  "sections": "steaks",
  "dsc": "Choice Center Cut New York Strip Steaks - 4 Pack",
  "price": 109,
  "rate": NumberInt(4),
  "country": "Brea, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557d"),
  "id": "strip-steak-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115321/strip-steak-gift-box.aef2d6be6646bf15bd532ce0d11e092a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "The Pine Club",
  "sections": "steaks",
  "dsc": "Strip Steak Gift Box",
  "price": 149,
  "rate": NumberInt(5),
  "country": "Dayton, OH"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557e"),
  "id": "ribeye-steaks-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124074/ribeye-steaks-8-pack.5c110f415c1f47becd92430f6895dd8e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "State Street Brats",
  "sections": "steaks",
  "dsc": "Ribeye Steaks - 8 Pack",
  "price": 85,
  "rate": NumberInt(4),
  "country": "Madison, WI"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22557f"),
  "id": "steak-au-poivre-kit-2-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103486/steak-au-poivre-kit-2-pack.14f9926937c1716b9430316d677873df.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "steaks",
  "dsc": "Steak Au Poivre Kit - 2 Pack",
  "price": 149,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225580"),
  "id": "16124-steak-mushroom-onion-and-gruyere",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69598/steak-mushroom-onion-and-gruyere-pie.169cb773b3f53ba330ae18fa0edb0b4c.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Dangerously Delicious Pies",
  "sections": "steaks",
  "dsc": "Steak Mushroom Onion and Gruyere Pie",
  "price": 79,
  "rate": NumberInt(4),
  "country": "Baltimore, MD"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225581"),
  "id": "15128-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134788/philly-cheesesteak-4-pack.ee73df8fae1147633dfe6d2bbd966c9b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Jim's Steaks",
  "sections": "steaks",
  "dsc": "Jim's Philly Cheesesteaks - 4 pack",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225582"),
  "id": "upper-prime-black-angus-tomahawks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109670/upper-prime-black-angus-tomahawks.cfc048cb768788bc7289be5acdbecb6e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Holy Grail Steak Co.",
  "sections": "steaks",
  "dsc": "Upper Prime Black Angus Tomahawks",
  "price": 219,
  "rate": NumberInt(5),
  "country": "San Francisco, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225583"),
  "id": "15996-100-fullblood-wagyu-beef-filet-mignon-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69335/100-fullblood-wagyu-beef-filet-mignon-steaks.7b79838c5fdd56c1295e33d2d6af007e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "steaks",
  "dsc": "100% Fullblood Wagyu Beef Filet Mignon Steaks",
  "price": 275,
  "rate": NumberInt(4),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225584"),
  "id": "16547-american-kobe-sirloins",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/70367/american-wagyu-sirloins.542b5e411cb7dfa523e43b1255bffd7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Snake River Farms",
  "sections": "steaks",
  "dsc": "American Wagyu Sirloins",
  "price": 99,
  "rate": NumberInt(5),
  "country": "Boise, ID"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225585"),
  "id": "prime-galbi-steak-feast-for-4",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104674/prime-galbi-steak-feast-for-4.51c78b5ba768078b166fe91325e60edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Cote Korean Steakhouse",
  "sections": "steaks",
  "dsc": "Prime Galbi Steak Feast for 4",
  "price": 249,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225586"),
  "id": "california-reserve-steaks-sampler-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96648/california-reserve-steaks-sampler-6-pack.6f1a5c1bf941f3fbe11fb2d72faf513b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve Steaks - Sampler 6 Pack",
  "price": 219,
  "rate": NumberInt(5),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225587"),
  "id": "pats-original-philly-cheesesteak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87749/pats-original-philly-cheesesteak-4-pack.fe6d8af186d93848f9a5090118fe8b46.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "steaks",
  "dsc": "Pat's Original Philly Cheesesteak - 4 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225588"),
  "id": "california-reserve-new-york-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96230/california-reserve-new-york-steak-12-oz.1db7f39f6540bd492e5487578c6bbcb9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Flannery Beef",
  "sections": "steaks",
  "dsc": "California Reserve New York Steak - 12 oz",
  "price": 42,
  "rate": NumberInt(4),
  "country": "San Rafael, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225589"),
  "id": "stk-signature-4-steaks",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134362/stk-signature-4-steaks.f5536190adf38e394fbdb3ce8a753304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "STK Steakhouse",
  "sections": "steaks",
  "dsc": "STK Signature - 2 Strip Steaks + 2 Filets",
  "price": 189,
  "rate": NumberInt(4),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558a"),
  "id": "halibut-steak",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94659/halibut-steak.0627bcd1466efb84f5456bf14906f499.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pike Place Fish Market",
  "sections": "steaks",
  "dsc": "Halibut - Steak (bone-in), Alaska, Wild, 2 lbs",
  "price": 59.98,
  "rate": NumberInt(5),
  "country": "Seattle, WA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558b"),
  "id": "st-elmo-gift-box",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/88901/st-elmo-gift-box.83e4e53934fc6e314b4f3999b9f089af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "St. Elmo Steak House",
  "sections": "steaks",
  "dsc": "St. Elmo Gift Box",
  "price": 39,
  "rate": NumberInt(4),
  "country": "Indianapolis, IN"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558c"),
  "id": "wagyu-skirt-steak-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/120993/wagyu-skirt-steak-4-pack.3a90a67ff55a78b4dffff7bcea0c8cbe.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Rocker Bros. Meat & Provisions",
  "sections": "steaks",
  "dsc": "Wagyu Skirt Steak - 4 Pack",
  "price": 44,
  "rate": NumberInt(4),
  "country": "Los Angeles, CA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558d"),
  "id": "pats-original-philly-cheesesteak-8-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/87773/pats-original-philly-cheesesteak-8-pack.1f350a7bf2852552bf219d6609405c69.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat's King of Steaks",
  "sections": "steaks",
  "dsc": "Pat's Original Philly Cheesesteak - 8 Pack",
  "price": 179,
  "rate": NumberInt(5),
  "country": "Philadelphia, PA"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558e"),
  "id": "17406-waygu-burgers-steaks-grill-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72260/wagyu-burgers-steaks-grill-pack.f4131af7b529593cc4b53b6a2aa76627.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Lone Mountain Wagyu",
  "sections": "steaks",
  "dsc": "Wagyu Burgers + Steaks Grill Pack",
  "price": 199,
  "rate": NumberInt(5),
  "country": "Golden, NM"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e22558f"),
  "id": "tomahawk-ribsteak-dinner-for-2",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131459/tomahawk-ribsteak-dinner-for-2.4bdce97b438cc34f7cd906378f62862f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Quality Meats",
  "sections": "steaks",
  "dsc": "Tomahawk Ribsteak Dinner for 2",
  "price": 149,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225590"),
  "id": "dry-aged-usda-prime-black-angus-boneless-ny-strip-steaks-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124883/dry-aged-usda-prime-black-angus-boneless-ny-strip-steak-center-cut-aged-30-days.2d6ca1bbb41c4fbb200d5c826974aae6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "steaks",
  "dsc": "Dry-Aged USDA Prime Black Angus Boneless NY Strip Steaks - 4 Pack",
  "price": 133.4,
  "rate": NumberInt(5),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225591"),
  "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "steaks",
  "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
  "price": 175.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225592"),
  "id": "17-peter-luger-extra-thick-cut-bacon-6-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133809/peter-luger-extra-thick-cut-bacon-6-pack.8a7de3e7715b3f13a6b454ebd76adde6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "steaks",
  "dsc": "Peter Luger Extra Thick Cut Bacon - 6 Pack",
  "price": 59.95,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225593"),
  "id": "dry-aged-usda-prime-black-angus-boneless-rib-steak-30-days-10-thick-13-15-oz",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97603/usda-prime-black-angus-filet-mignon-barrel-cut.3fc943fdabd641c78d180b2e7939410e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Pat LaFrieda Meats",
  "sections": "steaks",
  "dsc": "Dry-Aged USDA Prime Black Angus Boneless Rib Steaks - 30 days, 1.0\" thick, (13-15 oz.)",
  "price": 183.6,
  "rate": NumberInt(4),
  "country": "North Bergen, NJ"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225594"),
  "id": "italian-style-petite-filet-skewers-steak-spiedini-26-pack",
  "img": "https://goldbelly.imgix.net/uploads/product_image/image/82030/italian-style-petite-filet-skewers-steak-spiedini-26-pack.f0da603d6dfbcae265444f3dd64df9c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "D'Abruzzo",
  "sections": "steaks",
  "dsc": "Italian Style Petite Filet Skewers, Steak Spiedini - 26 Pack",
  "price": 99,
  "rate": NumberInt(4),
  "country": "Brooklyn, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225595"),
  "id": "steak-au-poivre-kit-4-pack",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103485/steak-au-poivre-kit-4-pack.1d14f8f828c35919ffdec82f28b75dad.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Raoul's",
  "sections": "steaks",
  "dsc": "Steak Au Poivre Kit - 4 Pack",
  "price": 279,
  "rate": NumberInt(5),
  "country": "New York, NY"
});
db.getCollection("menu").insert({
  "_id": ObjectId("6120e2b5675476804e225596"),
  "id": "3-peter-luger-steak-pack-c",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77910/peter-luger-steak-pack-c.b42674354b79c2f03d3f6544d5b89873.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Peter Luger Steak House",
  "sections": "steaks",
  "dsc": "Porterhouse and Strip Steaks",
  "price": 330.95,
  "rate": NumberInt(5),
  "country": "Brooklyn, NY"
});
