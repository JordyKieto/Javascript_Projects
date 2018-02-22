// A callback being invoked asynchronously
function repositionElement() {
    console.log('repositioning!');
    //..
}

window.requestAnimationFrame(repositionElement);
console.log('I am the last line of the script');

// Console output;
// I am the last line of the script
// repositioning!

// Async code is invoked after the method that calls it