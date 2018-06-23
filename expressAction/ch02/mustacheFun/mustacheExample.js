var Mustache = require("mustache"); // lets your turn template strings into real strings
var result = Mustache.render("Hello, {{first}} {{last}}!", {
    first: "Barack",
    last: "Obama"
});

console.log(result)