var express = require("express"); // requires express & puts in variable

var app = express(); // calls express and puts into app variable

app.get("/", function(request, response) {
    response.send("Hello, world");
});

app.listen(3000, function() {
    console.log("Express app started on port 3000.")  // starts the express server on port 3000 and logs that it has started
})