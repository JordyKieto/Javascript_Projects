var list = [23,4,42,15,16,8,3];

var mergeSort = function(list) {
    var left=[], right=[];
    //if there's only one item in the list
    //return
    if(list.length <= 1) return list;

    //cut the list in half
    var middle = list.length / 2;
    var left = list.slice(0, middle);
    var right = list.slice(middle, list.length);

    //recursively run through the splits
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    var result = [];
    //if either the left or right lists have elements
    //run a comparison
    while(left.length || right.length) {
        //if there are items on both sides...

        if(left.length && right.length) {
            //if the first on left is
            //less than right...
            if(left[0] < right[0]) {
            //take the first item of the left
            result.push(left.shift());
            }else{
            //otherwise take the first item
            //on the right
            result.push(right.shift());
            }
        }else if(left.length){
            //just take left
            result.push(left.shift());
        }else{
            //just take right
            result.push(right.shift());
        }
    }
    return result;
    };

    console.log(mergeSort(list));