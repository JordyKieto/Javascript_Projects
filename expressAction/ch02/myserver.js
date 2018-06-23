var http = require("http");

function requestHandler(request, response) {
    if (req.url === "/") {
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about") {
        res.end("Welcome to the about page!");
    } else {
        res.end("error! File not found.")
    }
    console.log("In comes a request to: " + request.url);
}

var server = http.createServer(requestHandler); // takes a callback called everytime request comes into server

server.listen(3000)