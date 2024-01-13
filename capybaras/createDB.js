var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("capybaras");
        database.dropDatabase()
        database = client.db("capybaras");
        const tree_capybaras = database.collection("capybaras");
        const result = await tree_capybaras.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally { 
await client.close();
}
}
run()