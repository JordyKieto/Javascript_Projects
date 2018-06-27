var express = require("express");
var app = express();

app.get("/olivia", function(request, response) { // when you recievea GET request to URI you run the specified request handler
    response.send("Welcome to Olivia's homepage!");
});

app.use(function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000);  // listens for requests that match the specified routs