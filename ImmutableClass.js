// Implement an Immutable class that creates objects with immutable properties. Any attempt to
// modify a property should result in an error.
function Immutable(props){
   
    const obj = {};
    Object.freeze(obj);
  
    function get(key) {
      return obj[key];
    } 
    
    function set(key, value) {
      throw new Error(`Property '${key}' is immutable.`);
    }
  
   
     return { obj, get, set };
   }
  const immutableObj = new Immutable({
      name: 'John Doe',
      age: 30,
    });
    