/* Evaluate arithmetic expressions given in prefix notation
Input is given as a string with numbers and arithmetic expressions
 */

/* Pseudocode:
- Declare an empty array call it finalStack
- Loop through input string backwards w/ for loop
   - Inside the loop check that the current character is a number or not using the isNaN function and if it is then push it 
   into the finalStack array
   - If the current character at current index is not a number then pop out the last two number characters from the finalStack and save 
   each into 2 variables called num1 and num2, respectively.
   - then make several if statement of if the current character expression is a plus sign then carry out addition of num1 and num2 if it's
   a minus sign then carry out subtraction etc and push that result onto the finalStack.
- Outside for loop, return the remaining last number from the finalStack by getting the number from either the first or last index   
 */
let evaluatePolish = (exp) => {
  let finalStack = [];

  for (let i = exp.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(exp[i]))) {
      finalStack.push(parseInt(exp[i]));
    } else {
      let num1 = finalStack.pop();
      let num2 = finalStack.pop();
      if (exp[i] === "+") {
        finalStack.push(num1 + num2);
      } 
      else if (exp[i] === '-') {
          finalStack.push(num1 - num2);
      } else if (exp[i] === '*') {
          finalStack.push(num1 * num2);
      } else if (exp[i] === '/') {
          finalStack.push(num1 / num2);
      }
    }
  };

  return finalStack[0];
};

console.log(evaluatePolish("*+324")); // (3+2) * 4  = 20
console.log(evaluatePolish("/3-82")); // (3 / (8 - 2)) = 0.5
console.log(evaluatePolish("+9*26")); // (2 * 6) + 9 = 21
