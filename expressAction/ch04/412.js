var express = require("epxress");
var path = require("path");

var app = express();

var filePath = path.join(__dirname, "celine.jpg");
app.use(function(req, res)  {
    res.sendFile(filePath, function(err)    {
/*
        if (err) {
            console.error("File failed to send.");
        } else {
            console.log("File sent!");
        }
*/
if (err) {
    next(new Error("Error sending file!"));
}
})
});


app.use(function(err, req, res, next) {     // middleware that logs all errors, 4 arguments
    console.error(err);
    next(err)
    });

app.use(function(err, req, res, next) {    //responding to the error
    res.status(500);
    res.send("Internal server error.");
});

app.listen(3000, function() {
    console.log("App started on port 3000")
})