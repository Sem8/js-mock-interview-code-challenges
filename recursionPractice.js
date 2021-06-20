/* 1. Return sum of the digits of an input number
ex. sumAllDigits(456) -> 4 + 5 + 6 = 15

pseudocode: recursive
- Turn input number to a string by concatenating to empty string and save it to a variable called numStr
- Make a base case of if numStr length is 1 then just return the number version of that using parseInt method
- Else (if numStr length is more than 1) return the number version of the first character from numStr string, plus the recursive call of the sumAllDigits function, passing in parameter argument of number version of numStr starting from next digit after first digit with the string .slice(1) method

 */

// let sumAllDigits = (num) => {
//   let numStr = "" + num;
//   if (numStr.length === 1) {
//     return parseInt(numStr);
//   } else {
//     return parseInt(numStr[0]) + sumAllDigits(parseInt(numStr.slice(1)));
//   }
// };

let sumAllDigits = (num) => {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumAllDigits(Math.floor(num / 10));
  }
};

console.log(sumAllDigits(456)); // 15
