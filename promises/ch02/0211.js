// a common problem is async callbacks are expected to act synchrnously

// the resolve function passed to a new Promise() consstructor is executed synchrounously 

// callbacks passed to then and catch are executed asynchronously

var promise = new Promise(function (resolve, reject) {
    console.log('Inside the resolve function');         //1
    resolve();
});

promise.then(function() {
    console.log('Inside the onFulfilled handler');      //3
});

console.log('This is the last line of the script');     //2

// Console output:
// Inside the resolver function
// This is the last line of the script
// Inside the onFulfilled handler