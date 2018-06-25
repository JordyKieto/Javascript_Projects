var express = require("express");
var morgan = require("morgan");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(morgan("short"));

//app.use(function(req, res, next) { // you don't setup views. just serve different files based on req.url
//    var filePath = path.join(__dirname, "static", req.url); // path.join to find where the file should be

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath)); // built in middleware
/*
fs.stat(filePath, function(err, fileInfo)   {   // fs.stat() gets info about a file
 if (err) {
            next();     // if fails continue next
            return;
        }
        if (fileInfo.isFile()) {
            res.sendFile(filePath)
        }
    })
})
*/

app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000")
});