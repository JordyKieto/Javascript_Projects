// promises are also rejected if an Error is thrown in resolver function
//      or in callback passed to then

rejectWith('bad news').then(
    function step2() {
        console.log('This is never run');
    }
).catch(
    function (error) {
        console.log('Failed again!');
        console.log(error); // Error object with message: 'bad news'
    }
);

function rejectWith(val) {
    return new Promise(function (resolve, reject) {
        throw Error(val);
        resolve('Not used'); // this line is never run
    });
}

// Console output:
// Foiled again!
// [Error object] { message: 'bad news' ... }

// any value can reject promise
//  BUT passing an error object can capture the call stack