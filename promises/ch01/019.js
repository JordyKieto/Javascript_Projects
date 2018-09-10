//Http request in Node.js
//Javascript is single threaded, so where do async tasks and callbacks run?

var http = require('http');
http.get('http://www.google.com', function (res){
    console.log('got a response')
});

// The javascript you write all runs a single thread
// but the code that implements async task, ie) "http.get", is not part of Javascript
// and is free to run in a seperate thread

/** Once a callback is completed the results need to be provided
 * to the javascript thread so its added to the queue.
 * Run-to-Completion rule means that code runs without interuption until passing control back to host environment
 * by returning from that function the host initially called
 * 
 * other threadss communicate with your Javascript code by placing items on the queue;
 * they can't manipulate memoery accessible to JS
 * 
 * you don't know when a callback will run after its added to the queue
 * its waiting for the current code to run to completion and other items in the queue
 * 
 * the Event Loop is Javascript continuously in a cycle pulling items off the queue if available
 * **/