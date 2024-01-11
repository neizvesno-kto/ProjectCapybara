var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("capybaras");
database.dropDatabase()
database = client.db("capybaras");
const tree_capybaras = database.collection("tree_capybaras");
const result = await tree_capybaras.insertOne({name:"Капибара_Зевс"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()