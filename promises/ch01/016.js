// Using aysnchronous code to write and read a file in Node.js
// Note that both functions take a callback as their last parameter.

var fs = require('fs')
var timestamp = new Date().toString();

fs.writeFile('date.txt', timestamp, function (err) {
    if (err) throw err;

    fs.readFile('date.txt', timestamp, function (err, contents){
        if (err) throw err;
        console.log('Checking the contents');               //2
        console.assert(contents == timestamp);               //3
    });
});

console.log("I am the last line of the script")             //1
