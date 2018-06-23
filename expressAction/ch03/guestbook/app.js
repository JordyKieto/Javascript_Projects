var express = require("express");
var http = require("http");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entires = [];               // creates a global array to store entries
app.locals.entries = entries;   // makes entries array available in all views

app.use(logger("dev")); // uses Morgan to log every request

app.use(bodyParser.urlencoded({ extended: false })); // populates a variabled called req.body is user is submitting a form

app.get("/", function(request, response) {
    response.render("index");       // renders @ view/index.ejs
});

app.get("/new-entry", function(request, response) {
    response.render("new-entry"); 
});

app.post("/new-entry", function(request, response) {
    if (!request.body.title || !request.body.body) { // if form has no title or content
        response.status(400).send("Entries must have a title and body");
        return;
    }
    entries.push({
        title: request.body.title,
        content:request.body.body,
        published: new Date()
    });
    response.redirect("/");
});

app.use(function(request, response) {
    response.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
    console.log("Guestbook app started on port 3000.")
})