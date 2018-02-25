// Convenience functions for resolve & reject
// For creating a promise that is immmidiately
//    resolved or rejected

new Promise(function (resolve, reject) {
    resolve('the long way')
});
Promise.resolve('the short way')

//Equivalent ways to create a rejected promise
new Promise(function (resolve, reject) {
    reject('long rejection')
});
Promise.reject('short rejection')

