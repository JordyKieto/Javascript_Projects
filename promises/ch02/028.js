// calls to then always return a new promise

var p1, p2;

p1 = Promise.resolve();
p2 = p1.then(()=>{
    // ...
});

console.log('p1 and p2 are different objects: ' + (p2 !== p2));

// Console outputt:
// p1 and p2 are different objects: true