function reverseString(s) {
    try {
     
      s = s.split('').reverse().join('');
     
    } catch (error) {
      
      console.log(error.message);
    } finally {
      
      console.log(s);
    }
  }
  
  // Example usage:
  const s = "Number(1234)";
  reverseString(s);
  
  const s1 = "s.split is not a function";
  reverseString(s1);
  