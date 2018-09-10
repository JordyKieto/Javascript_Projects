// Finally, an implementation of loadImage that returns a promise
// Creating and resolving a promise

// A global constructor function called Promise exposes all the
// functionality for promises.

// loadImage creates a new promise, and returns 

// When promise is used a constructor, it needs a callback known as a resolver functio
//      resolver takes resolve and reject arguments; 
//      these are functions
//      these update the promise
//      any error from the resolver is implicitly used to reject the promise
// All the logic originally from loadImage is now done inside the 

// How does the promsise actually call onload or onerror? 

function loadImage(url) {
    var promise = new Promise(
        function resolver(resolve, reject) {
            var img = new Image();
            img.src = url;

            img.onload = function () {
                resolve(img);
            };

            img.onerror = function (e) {
                reject(e)
            };
        }
    );
    return promise;
}

// When an operation represented by a promise completes,
// the result is stored and provided to any callbacks the promise invokes

//The result is passed to the promise as a parameter 
//     of the resolve or reject functions

// In the case of loadImage, the image is passed to resolve,
//     so any callbacks regstered with promise.then()
//     will recieve the image