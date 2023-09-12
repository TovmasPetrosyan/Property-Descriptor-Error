function deepCloneObj(obj){
  const cloneObj = {};
  for(const [key, value] of Object.entries(obj)){
    let descriptor = Object.getOwnPropertyDescriptor(obj,key);
    cloneObj[key] = value;
    if(descriptor){
        Object.defineProperty(cloneObj,key,descriptor);
    }
  }
  return cloneObj;
}
