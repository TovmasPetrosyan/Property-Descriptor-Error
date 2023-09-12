function validateObject(obj, schema) {
for (let prop of ob ){
    if(prop in schema){

    }
}


}



const schema = {
    name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
    },
    age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
    },
    };