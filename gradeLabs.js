function gradeLabs(studentLabs){
   for(let lab of studentLabs){
    let result;
      try{
         result = lab.runLab(10);
         const expectedResult = 100;
         if(result !== expectedResult){
            console.log(`Student ${lab.student} failed their lab. Expected ${expectedResult} but got ${result}.`);
         }
      }catch(error){
        console.log(`Error grading lab for student ${lab.student}: ${error.message}`);
        result = 'Error thrown';
      }
      console.log(`Result for student ${lab.student}: ${result}`);
   }
}



let studentLabs2 = [
    {
    student: "Blake",
    myCode: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
    },
    ];
    gradeLabs(studentLabs2);