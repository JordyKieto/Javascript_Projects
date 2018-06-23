var express = require("express");
var http = require("http");
var path = require("path")

var app = express(); 
// grabbing data from routes

app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
    // has security issues
});
// using express rather than defining a route for every single possible username
// can even use regulat expressions for complex matching.
http.createServer(app).listen(3000)

// 3.12 redirect
// response.redirect("/hello/world");
// response.redirect("http://expressjs.com")

// 3.14 send method not inv vanilla Node
// response.sendFile("/path/to/cool_song.mp3");