var async = true;
var xhr = require('XMLHttpRequest')
xhr.open('get', 'data.json', async)
xhr.send()

setTimeout(function delayed(){ // creates race condition
    function listener() {
        console.log('greetings from listener')
    }
    xhr.addEventListener('load', listener)
    xhr.addEventListener('error', listener)
}, 3000)
// Now the only way the listener function will be called
// is if the delayed function is pulled off the queue and run
// before the HTTP request completes and the load or error event is triggered

// different values invoke listener sometimes but not always