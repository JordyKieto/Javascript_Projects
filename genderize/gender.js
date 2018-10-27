#!/usr/bin/env node

var https = require('https');

var getGenders = function(names){
    var promise = new Promise(async (resolve, reject)=>{
    var namesQuery = "name=peter";
    response = await https.get("https://api.genderize.io/?" + namesQuery);
    resolve(response.body)
     /**
    var probability;
   
    for ( name in names) {
        let counter = 0;
        namesQuery.push(`name=[${counter}]=${name}&`);
        counter++
    }
   // namesQuery = namesQuery.slice(0, -1);
   
    /** 
    for ( person in response) {
        //sorting response
        let i = 0;
        if(person[i].probability > person[i+1].probability) {
            var original = person[i]
            person[i] = person[1+1]
            i++;
        }
        }
        */
    })
    //return probability
    return promise;
}
getGenders().then((response)=>{console.log(response)})
