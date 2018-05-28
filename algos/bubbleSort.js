// the list we need to sort
var list = [23,4,42,15,16,8];

var bubbleSort = function(list){
    // a flag to tell us if we need this list again
    var doItAgain = false;
    // loop variables
    var limit = list.length;
    var defaultNextVal = Number.POSITIVE_INFINITY;

    //loop over the list entries...
    for(var i = 0; i < limit; i++){

        var thisValue = list[i];
        // nextValue compares the 'index' [i] of the list against list.length
        var nextValue = i + 1 < limit ? list[i + 1] : defaultNextVal;
        //is the next number lower than the current? or less than infinity?
        if(nextValue < thisValue) {
            //if the latter is greater than, switch the values
            list[i] = nextValue;
            list[i + 1] = thisValue;
            //since we made a switch we'll set a flag
            //as we'll need to execute the loop again
            doItAgain = true;

        }
    }
    //recurse over the loop if the flag is set
    if(doItAgain) bubbleSort(list)
};

bubbleSort(list)
console.log(list);