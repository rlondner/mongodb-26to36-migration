'use strict'
var MongoClient = require('mongodb').MongoClient;
const uri = require('./config.js').mongoDBUrl;

//The 3.6 driver introduces breaking changes, most notably in the connect() function which now returns a client, not a database (cf. http://mongodb.github.io/node-mongodb-native/3.0/tutorials/connect/)
MongoClient.connect(uri, (err, client) => {
    if (err) {
        console.log(`the error is ${err}.`, err)
        process.exit(1)
    }
    else {
        const db = client.db("store");
        db.collection('orders').insertOne(
        { "_id" : 15, "ord_no" : 2001, "qty" : 200, "unit" : "doz" }
        ).then(
            db.collection('orders').find().toArray().then(docs => { console.log(JSON.stringify(docs)) })
        )
        //.then(process.exit())
    }
});