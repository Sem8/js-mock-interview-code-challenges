/*Reverse a string recursively, Example
Input: 'cat'
Output: 'tac'
 */

// Suggested solution:
/*Pseudocode:
1. Takes in an input string to reverse as a parameter
2. Make a base case of if input str is equal to empty string or equal to null then just return an empty string to end function
3. Return the recursive call of the reverseStrRecursive function passing in parameter of input string str but starting from the next letter index
after the 1st letter index of the str using substr method and passing in 1 as the starting index in the substr method (it'll go right by one 
letter to the next for each recursive call) plus first letter of current str at index 0.
 */

const reverseStrRecursive = (str) => {
  if (str === "" || str === null) {
    return "";
  }
  return reverseStrRecursive(str.substr(1)) + str[0];
};

// const reverseStrRecursive = (str) => {
//   if (str === "") {
//     return str;
//   } else {
//     return reverseStrRecursive(str.slice(1)) + str[0];
//   }
// };

console.log(reverseStrRecursive("cat")); // 'tac'
