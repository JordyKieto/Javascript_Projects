// The jQuery ready functio ncan be synchronous or asynchronous

jQuery(document).ready(function () {
    // jQuery calls this function after the DOM is loaded and ready to use
    console.log('DOM is ready')
});
console.log('I am the last line of the script')

// Console output may appear in either order depending on when
// the DOM is read

// A function can have mixed behavior where it invokes
// a callback synchronously or asychronously depending on some condition

// functions that have these FORKS make your code less predicatable