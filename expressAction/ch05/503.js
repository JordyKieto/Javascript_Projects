// regular expressions for numeric routes
app.get(/^\/users\(\d+)$/, function(req, res)   {  // userID must be an interger, captures digits
    var userId = parseInt(req.params[0], 10);
})