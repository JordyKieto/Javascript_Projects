var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var http = require("http");

var app = express();
app.use(express.static('static'))

app.get('/api/all', function(request, response) {
    db.collection("businesses").find().toArray().then(allBusinesses =>{
        console.log(allBusinesses)
        response.json(allBusinesses)
    });
});
let db = 'blank'
MongoClient.connect('mongodb://localhost').then(client =>{
    db = client.db('blackBusinesses');
    console.log(db);
    http.createServer(app).listen(8080, function(){
    console.log('Black Biz on 8080')
})
})