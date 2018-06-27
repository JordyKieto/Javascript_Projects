app.get("/users/:userid", function(req, res)    { // grab a param from a route with a colon in front 
    var userId = parseInt(req.params.userid, 10); // converts property to interger
});