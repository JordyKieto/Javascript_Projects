var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var http = require("http");
var path = require("path")

var app = express();
app.use(express.static('static'))

app.get('/api/businesses/all', function(request, response) {
    db.collection("businesses").find().toArray().then(allBusinesses =>{
        console.log(allBusinesses)
        // regular request code, nothing to report
        response.status(200)
        response.json(allBusinesses)
    });
});

app.get('/api/businesses/:category', function(request, response) {
    console.log(request.params.category)
    db.collection("businesses").find(
        { category: request.params.category }
    ).toArray().then(allBusinesses =>{
        console.log(allBusinesses)
        // regular request code, nothing to report
        response.status(200)
        response.json(allBusinesses)
    });
});

app.post('/api/businesses', function(request, response){
    db.collection("businesses").insertOne({request})
    response.status(200)
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'static/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
let db = 'blank'
MongoClient.connect('mongodb://localhost').then(client =>{
    db = client.db('blackBusinesses');
    console.log(db);
    http.createServer(app).listen(8080, function(){
    console.log('Nubian Maps on 8080')
})
})