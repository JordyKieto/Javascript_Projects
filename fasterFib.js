var fibFaster = function(n) {
    var sequence = [0,1];
    var fibs
    for(var i=2; i<=n; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence;
}

console.log(fibFaster(10));