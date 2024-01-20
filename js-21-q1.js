// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

function calculate(numOne,numTwo,operation,logger) {
   let result;
   if (operation === "add"){
      result = numOne+numTwo;
   } else if (operation === "multiply"){
      result = numOne*numTwo;
   } else {
      console.log("You can only use this function for addition or multiplication.");
      return;
   }
   logger(result)
}

function handleCalculationResult(result){
   console.log(`The answer is ${result} for chosen numbers and operation.`);
}

calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
