'use strict'
var MongoClient = require('mongodb').MongoClient;
const uri = require('./config.js').mongoDBUrl;

MongoClient.connect(uri, (err, db) => {
    if (err) {
        console.log(`the error is ${err}.`, err)
        process.exit(1)
    }
    else {
        db.collection('orders').insertOne(
        { "_id" : 15, "ord_no" : 2001, "qty" : 200, "unit" : "doz" }
        ).then(
            db.collection('orders').find().toArray().then(docs => { console.log(JSON.stringify(docs)) })
        )
        //.then(process.exit())
    }
});