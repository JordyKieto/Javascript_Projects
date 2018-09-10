// Promise then and catch
// Assume load image returns a promise
// How do you return a promise?
// What is in the return of a promise?
//      refer to example 024.js
var promise = loadImage('the_general_problem.png')

promise.then(function (img) {
    document.body.appendChild(img);
});

promise.catch(function (e) {
    console.log('Error occured while loading image');
    console.log(e)
});

// Load an image, then add it to the document
// The promise that loadImage returns has a then
//     method for registering a callback to use when 
//     the operation succeeds and a catch for handling errors       