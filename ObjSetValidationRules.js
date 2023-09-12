//Create a function that takes an object and a set of validation rules as property descriptors. Validate
//each property according to the rules and return a new object with validated properties.

function validObj(obj,validationRules){
    const resultObj = {};
    for (let key in obj){
     Object.defineProperty(resultObj,key,{
                    ...validationRules[key],
                    value: obj[key]
                  
             });
      
    }
    return resultObj;
}


