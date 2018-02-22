// Naive asynchronous code. This will not work
var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFile('date.txt', timestamp);

fs.readFile('date.txt', function (err, data){
    if (err) throw err;                              //3
    contents =  data;
});

console.log('Comparing the contents');               //1
console.assert(timestamp == contents);            //2

// You should understand how a function handles callback Asynchronously or Synchronously
// Documentation is CRUCIAL for each function.
// Implementation, Documentation, and Behavior