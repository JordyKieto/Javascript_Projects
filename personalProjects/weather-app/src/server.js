var express = require("express");
var bodyParser = require("body-parser")
var http = require("http")
var DarkSkyApi = require('dark-sky-api')
var keys = require("../keys")
var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({ type: 'json' }))

DarkSkyApi.apiKey = keys.darkSky
DarkSkyApi.proxy = true;

app.post('/api/check', function(request, response) {
    console.log(request.body);
    if (request.body) {
        console.log('gotta body')
        var jsonCords = JSON.parse(request.body)
        console.log('checking coordinates...' + jsonCords["latitude"])
        DarkSkyApi.loadCurrent({
        latitude: jsonCords["latitude"],
        longitude: jsonCords["longitude"]
    }).then((data) => {
        response.json(data.temperature)
    }
    )}
else {
    console.log('no body'); 
    response.end()}
})

http.createServer(app).listen(5000, function(){
    console.log("Weather App started on 5000...")
})