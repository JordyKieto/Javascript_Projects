//Async XHR
// Make an async HTTP Request
var async = true;
var xhr = new XMLHttpRequest()
xhr.open('get', 'data.json', async);
xhr.send();

//Create a three second delay for jokes
while (Date.now < timestamp);

//Now that three seconds have passed
//add a listener to the xhr.load and xhr.error events

function listener () {
    console.log('greetings from listener')
}

xhr.addEventListener('load', listener)
xhr.addEventListener('error', listener)

// listener is always called asyn

// Callbacks can be invoked synchronously or asynchronously (i.e. , before or after the function
// they are passed to returns )