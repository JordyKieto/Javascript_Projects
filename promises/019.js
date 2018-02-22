//Http request in Node.js
//Javascript is single threaded, so where do async tasks and callbacks run?

var http = require('http');
http.get('http://www.google.com', function (res){
    console.log('got a response')
});

// The javascript you write all runs a single thread
// but the code that implements async task, ie) "http.get", is not part of Javascript
// and is free to run in a seperate thread