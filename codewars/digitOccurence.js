function List(){

    this.countSpecDigits=function(integersList, digitsList){
      //your code here
      var tupleArray = [];
      var count = 0;
      var tuple = '';
      var numCheck = (integer, digit)=>{
        // check all chars in integer
        var strInterger = integer.toString();
        for (var i = 0; i < strInterger.length; i++) {
            if (strInterger.charAt(i) == digit) {
            count++;
            }
        }

    };
      //for each in digitList arr
      digitsList.forEach((digit)=>{
            integersList.forEach((integer)=>{
            count = 0;
            numCheck(integer, digit);
            tuple = `[${digit}, ${count}]`;
            })
          tupleArray.push(tuple);
      });
      return tupleArray;
        //count occurence of digit in intergersList fn
        //return tuple of count and digit fn
        //add tuple to tupleArr fn
    }
  }

  console.log(List())