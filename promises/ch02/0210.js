// whatever value is returned from that callback resolves the new promise
// passing values in a sequence of steps

Promise.resolve('ta-da').then(
    function step2(result) {
        console.log('Setp 2 recieved ' + result);
        return 'Greetings from step 2';             // Explicit return value
    }
).then(
    function step3(result) {
        console.log('Setp 3 recieved ' + result);   // No explicit return value
    }
).then(
    function step4(result) {
        console.log('Step 4 recieved ' + result);
        return Promise.resolve('fufilled value');   // Return a promise
    }
).then(
    function step5(result) {
        console.log('Step 5 recieved ' + result)
    }
);

// Console output:
// Step 2 received ta-da!
// Step 3 received Greetings from step 2
// Step 4 received undefined
// Step 5 received fulfilled value