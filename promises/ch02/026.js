// The state of a promise never changes after it is fulfilled or rejected

var promise = new Promise(function (resolve, reject) {
    resolve(Math.PI);
    reject(0);              // Does nothing
    resolve(Math.sqrt(-1)); // Does nothing
});

promise.then(function (number) {
    console.log('The number is ' + number);
});

//Console output;
// The number is 3.13159....

// Call to reject