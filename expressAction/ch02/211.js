var fs = require("fs");

var options = { encoding: "utf-8" };
fs.readFile("myfile.txt", options, function(err, data) {
    if (err) {
        console.error("Error reading file");
        return;
    }
})

console.log("Hello world") // because this fs operation is asynchronous, we see Hello World first