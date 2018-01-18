var fibCount=0;
var calculateFibAt = function(n) {
    fibCount = fibCount+1;
    var calc;
    if(n < 2) {
        return n;
    }else{
        return calculateFibAt(n-2) + calculateFibAt(n-1);
    }
}

//this loop performs our Fib function numbers 0 to 10
for (var i = 0; i<=10; i++) {
    var fib = calculateFibAt(i);
    console.log("The Fibonacci number at position " + i + "is " + fib + "; It took " + fibCount + "calls to fib to get here");
}