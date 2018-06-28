// query strings are ways to dunamically pass information in URLS
// searching for 'javascript-themed burrito' on Google url would be " https://www.google.com/search?q=javascript-themed%20burrito"

// in express might handled...

app.get("/search", function(req, res)   {
    // req.query.q == "javascript-themed burrito"
})