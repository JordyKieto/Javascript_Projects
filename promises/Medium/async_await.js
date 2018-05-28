// How do I access the data in a promise? I use '.then()'

function getFirstUser() {
    return getUsers.then(function(users) {
        return users[0].name;
    })
}

// How do I catch errors from a promise chain? I use '.catch()'
function getFirstUser() {
    return getUsers.then(function(users) {
    }).catch(function(err) {
        return {
            name: 'default user'
        };
    });
}

// Even though promises are for future data,
// Wether you the dta is will be there in the future
// or if its been retrived, call '.then'

// PROMISES FORCE CONSISTENT ASYNCHROCITY
// "this is going to be an async function"
// "wether or not the return valuable is available"
// "now or later"

// SAME AS ABOVE CODE
// await literally means to await
// it is like calling '.then()' on a promise
// but without requring any callback function

async function getFirstUser() {
    let users = await getUsers();
    return users[0].name
}

// You can await any promise. It pauses the
// execution of the method unti the value from
// a promise is available

// Catch errors like so.
// Since we're writing synchronous style code
// we can go back to using try/catch

async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'deafult'
        }
    }
}

// why do I beed to care about promises again?

// Pitfall #1 : not awaiting

// Best way to call getFirstUser(); is like this

let user = await getFirstUser();

// But if you absentmindedly call the function without await
// problems arise

let user = getFirstUser();

// Even though my code dosen't await, it's not going to automatically
// error out!

// Under no obligation to await anything.
// User will refer to a promise bject rather than the resolved value

// strict typing would let you know , ie Typescript

// Pitfall #2: awaiting multiple values
// under normal usage you can only await one 
// thing at a time

// even though you should be able to get both at the
// same time, this code will get foo and bar sequentially

let foo = await getFoo();
let bar = await getBar()

// This is why our testcafe selector clicking works

// You SHOULD be able to await both values at the same time
// The way to do this is

let [foor, bar] = await Promise.all([getFoo(), getBar()])

// async await and promises are the same thing under the hood

// Promise.all will take an array of promises
// and compose them into a single promise
// that resolves only when every child in the array has resolved itself

// Then we await that super promise

// Promise.ll does not 'dispatch' or 'create' the promises
// you pass into it. 

// By the time you've created the array 

[getFoo(), getBar()]

// - these operations are now already in progress
// Promise.all means "Wait for these things" not "Do these things"
// Not equivalent to async.

// Here is another way to things in parallel
// with async/await

let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

// First we dispatch getFoo() & getBar() and save their values
// These actions are now in progress, we can't stop them
// We await each promise in turn

// Dosen't awaiting mean the two async actions
// are run in serial? Not so!
// we've dispatched both, so when we await we can't
// delay either of them

 //Pitfall # 3:Your whole stack needs to be async

// If you use await it affects entire stack
// to call an async function, the caller should
// be an async function

// this makes it difficult to incrementally convert from callbacks
// to async/await

// Not true if your are using promises.
// ---because async functions return promises
// ---await awaits promises. so very compatible already

// if you understand how promises work, you can
// get around this by treating the result of an async function as a promise

function getFirstUser(callback) {
    return getUsers().then(function(users) {
        return callback(null, users[0].name);
    }).catch(function(err) {
        return callback(err)
    })
}

// THe above converted the async function getUsers()
// into a callback response without much boilerplate




