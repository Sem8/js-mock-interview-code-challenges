/* Instructions:
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:

Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be 
any divide by zero operation.
Example 1:

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */

/* Pseudocode:
- Declare an empty array, call it finalStack
- Loop through the input array (forward for loop)
   - Inside loop, check if the current character at current index is a number or not using isNaN method and if it's a number then
   push it into the finalStack array
   - And if the current character at current index is not a number but rather an arithmetic expression then pop the first two numbers from
   the end of finalStack and save them in variables called num1 and num2
   - Make if statements to see if the current arithmetic character is a plus sign then add num2 with num1, if it's a minus sign then subtract
   num2 and num1 aka subtract num1 from num2 etc and then push the result of the arithmetic operation to back of the finalStack
   array - VERY IMPORTANT num2 should go first then num1

 */

let evalRPN = (tokens) => {
  let finalStack = [];

  for (let i = 0; i < tokens.length; i++) {
    // if current character is a number push into finalStack
    if (!isNaN(parseInt(tokens[i]))) {
      finalStack.push(parseInt(tokens[i]));
    } else {
      let num1 = finalStack.pop();
      let num2 = finalStack.pop();
      if (tokens[i] === "+") {
        finalStack.push(num2 + num1);
      } else if (tokens[i] === "-") {
        finalStack.push(num2 - num1);
      } else if (tokens[i] === "*") {
        finalStack.push(num2 * num1);
      } else if (tokens[i] === "/") {
        finalStack.push(Math.trunc(num2 / num1));
      }
    }
  }

  return finalStack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22
