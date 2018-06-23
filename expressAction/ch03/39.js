var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

var publicPath = path.resolve(__dirname, "public"); // using Nodes's path module
app.use(express.static(publicPath)); // static() to serve files in said directy

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plan" } );
    response.end("Looks like you didn't find a static file");
});

http.createServer(app).listen(3000)