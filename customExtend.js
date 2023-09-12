function extend(obj,properties){
    
    for(let key in properties){
        if(properties.hasOwnProperty(key)){
            const descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if(descriptor){
                Object.defineProperty(obj, key, descriptor)
            } else{
                const value = properties[key];
                      obj[key] = value; 
            }
        }
      
    }
    return obj
}
const myObj = { prop1: "value1" };
const kuku = extend(myObj, {
prop2: { value: "value2", writable: false },
prop3: {
get() {
return "computed";
},
},
});

