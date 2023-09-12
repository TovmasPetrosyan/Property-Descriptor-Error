function validateObject(obj, schema) {
    for (const prop in schema) {
        const propertySchema = schema[prop];
        const value = obj[prop];
        
        if (propertySchema.required && value === undefined) {
            throw new Error(`The property "${prop}" is required.`);
          }
          if (propertySchema.validate) {
            if (!propertySchema.validate(value)) {
              throw new Error(`The property "${prop}" must be of type "${typeof propertySchema.value}".`);
            }
          }
          Object.defineProperty(obj, prop, {
            value: value,
            writable: propertySchema.writable,
            configurable: true,
          });
}
return "Object is valid"

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

    const obj = {
        "name": "Tovmas",
        "age": 60
      };
      const validationResult = validateObject(obj, schema);
    //  console.log(validationResult);
     