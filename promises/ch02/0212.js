// errors propgate through promise chains
// when one promise is rejected, all subsequent promise chains are rejected until onRejected handler is found
// a single catch for a chain of promises

Promise.reject(Error('bad news')).then(
    function step2(){
        console.log('This is never run');
    }
).then( 
    function step3(){
    console.log('This is also never run')
}).catch(
    function(error){
        console.log('Something failed along the way. Inspect error for more info. ');
        console.log(error); // Error object with message: 'bad news'
    }
);

// Something failed along the way. Inspect error for more info.
// [Error object] { message: 'bad news' ... }