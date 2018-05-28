var list = [1,2,3,4,5,6];

function binarySearch(list, lookFor) {
    var min = 0, max = list.length -1;
    var middle;

    while (min <= max) {
        //find the middle INDEX of the list
        middle = Math.floor((min + max) / 2);

        //if we just hapen to land on it

        if (list[middle] === lookFor) {
            return middle;
        }
        else {
            //the list is sorted, so reset the list acccording to
            //position
        list[middle] < lookFor ? min = middle : max = middle;
        }
    }
    return -1;
}
//search for a value and return its index
console.log(binarySearch(list, 2));