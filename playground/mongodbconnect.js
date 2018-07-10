const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var user = {name: 'anil', completed: true};
var {name} = user;
console.log(name);
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log("Connected to MongoDB");
    // const db = client.db(dbName);

    // db.collection('users').insertOne({
    //     name: 'Anil kumar',
    //     completed: true
    // }, (err, result) => {
    //     assert.equal(null, err);
    //     assert(1, result.insertedCount);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    client.close();
});