

function* yieldBro(){
    yield "Y";
    yield "E";
    yield "S";

}

var doIt = yieldBro();
var doingIt =()=> doIt.next();

console.log(doingIt());
console.log(doingIt());
console.log(doingIt());

// use this pattern to allow 1 event listener to zoom in on double click




