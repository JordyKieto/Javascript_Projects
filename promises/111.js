// Make an async HTTP request
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async)
xhr.send();

// Create a three second delay
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

function listener() {
    console.log('greetings from listener')
}

xhr.addEventListener('load', listener)
xhr.addEventListener('error', listener)

// the listeners are registered after invoking the send function
// but this is safe to do until the event loop turn
// becauser the runtime cannot trigger the load or error events before then