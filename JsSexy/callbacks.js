function getInput(options, callback) {
    allUserData.push(options);

    //Make sure the callback is a function
    if (typeof callback === "function") {
        //mCall it, since we have confirmed it is callable
        callback(options)
    }
}

// Way of validating my callbacks, and choosing
// When they run

// This pattern lets you