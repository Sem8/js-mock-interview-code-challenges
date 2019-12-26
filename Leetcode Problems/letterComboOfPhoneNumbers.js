/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */

// Suggested solution:
/* Pseudocode:
There will be 2 functions, 1) main function called letterCombinations takes in the numbers as string input called digits
2) Helper recursive function called recurse, takes in 1st parameter called result (array that will hold final combinations), 2nd parameter
is digits (from main function's input), 3rd parameter is called prev (will be the string that concatenates to next letter combination), 
4th parameter is called index (index of digits string from parent function's input string), 5th parameter is the letterMapper object that
maps each number to it's letter combination

recurse (helper recursive function):
1. Make a base case of if index is equal to length of digits (digits input from main function) then push the prev (final string combination
    for adding up the letters from each digit) into the result array and then just return to end the function
2. Otherwise (if index is at less than digits length) then get the array of letters corresponding to a digit by getting the array value from 
letterMapper object at the key which is from input digits string at the index called index and call this array of letters, lettersArr
3. Make a for loop, starting at index i of 0, ending at i less than lettersArr, increment i.
4. Inside for loop, recursively call the recurse function, passing in result for 1st parameter, digits for 2nd parameter, prev plus 
lettersArr[i] for 3rd parameter, index plus 1 for 4th parameter (we go to next number before going to next letter of the number), just the 
letterMapper object for 5th parameter 

letterCombinations (main function):
1. Declare an object called letter mapper and put the numbers 2-9 as keys and each number's corresponding letters as values into an array.
2. Declare an empty array call it result (it'll hold final combinations of the letters from input numbers)
3. Make an if statement of if length of input string, digits is 0 then just return result array (empty array)
4. Outside previous if statement, make anohter if statement of if input digits string is 1 then just return the array value of digits key
from letterMapper object.
5. Otherwise (length of input digits is more than 1), then call the recurse helper function passing in result array as 1st parameter, input
digits as 2nd parameter, empty string (prev) for 3rd parameter, 0 (index) for 4th parameter and just the letterMapper object for 5th 
parameter.
6. Return the result array.
 */
// const letterCombinations = digits => {
//   let letterMapper = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"]
//   };

//   let result = [];
//   if (digits.length === 0) {
//     return result;
//   }
//   if (digits.length === 1) {
//     return letterMapper[digits];
//   }
//   recurse(result, digits, "", 0, letterMapper);
//   return result;
// };

// const recurse = (result, digits, prev, index, letterMapper) => {
//   if (index === digits.length) {
//     result.push(prev);
//     return;
//   }
//   let lettersArr = letterMapper[digits[index]];
//   for (let i = 0; i < lettersArr.length; i++) {
//     recurse(result, digits, prev + lettersArr[i], index + 1, letterMapper);
//   }
// };

// Suggested solution with minor syntax difference for letterMapper:

// const letterCombinations = digits => {
//     let letterMapper = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//     let result = [];
//     if (digits.length === 0) {
//         return result;
//     };
//     recurse(result, digits, '', 0, letterMapper);
//     return result;
// };
// const recurse = (result, digits, current, index, letterMapper) => {
//     if (index === digits.length) {
//         result.push(current);
//         return;
//     };
//         let letters = letterMapper[digits[index]];
//         for (let i = 0; i < letters.length; i++) {
//             recurse(result, digits, current + letters[i], index + 1, letterMapper);
//         }
// };

// Suggested solution 2 (recursive):
/* Pseudocode:
Takes in 1 parameter called digits which are the numbers in string form
1. Declare an object, call it letterMapper and set it's keys to different numbers and set the values to an array of each of the letters 
corresponding to that number key.
2. Initialize an empty array, call it result
3. Make a base case of if input digits length is 0 then just return result
4. Make anther base case of if input digits length is 1 then return the array value from letterMapper object at that digits number
5. Otherwise (if input digits string length is more than 1) then declare a variable called set1 and set it equal to the value of recursive
call of the letterCombinations function with parameter of the first number character of the digits number string using the substr method.
6. Declare another variable called set2 and set it equal to the value of recursive call of the letterCombinations function with parameter of
the input digits number string but starting from 2nd character all the way to rest of the characters using string substr method.
7. Make a for loop, starting at index i of 0, ending at i less than set1 length and increment i
8. Inside previous for loop, make another nested for loop, starting at index j of 0, ending at j less than set2 length, increment j.
9. Inside the second nested for loop, push into the result array, the current letter from set1 at current index of i plus the current letter
from set2 at current index of j
10. Outside for loop, return the result array.
 */
const letterCombinations = digits => {
  const letterMapper = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  let result = [];
  if (digits.length === 0) {
    return result;
  };
  if (digits.length === 1) {
    return letterMapper[digits]; 
  };
  
  let set1 = letterCombinations(digits.substr(0, 1));
  let set2 = letterCombinations(digits.substr(1));

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      result.push(set1[i] + set2[j]);
    };
  };
  
  return result;
}

// Suggested solution 3 (recursive):
// const letterCombinations = (digits, current = "", res = []) => {
//     const numbers = {
//         2: "abc",
//         3: "def",
//         4: "ghi",
//         5: "jkl",
//         6: "mno",
//         7: "pqrs",
//         8: "tuv",
//         9: "wxyz"
//     }

//     if (digits.length === 0 && current === "") {
//         return res;
//     }

//     if (digits.length < 1) {
//         return(res.push(current));
//     }

//     let currentNumber = numbers[digits[0]];

//     for (let i = 0; i < currentNumber.length; i++) {
//       let currentLetter = currentNumber[i];
//       letterCombinations(digits.slice(1), current.concat(currentLetter), res);
//     }

//     return res;
// };

// Suggested solution 4:
// var letterCombinations = function(digits) {
//   const combo = (arr1, arr2) =>
//     arr1.reduce((arr, s1) => arr.concat(arr2.map(s2 => s1 + s2)), []);
//   return digits
//     ? digits
//         .split("")
//         .map(n =>
//           ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"][
//             n - 2
//           ].split("")
//         )
//         .reduce((res, arr) => combo(res, arr))
//     : [];
// };

// Suggested solution 5 (iterative):
// var letterCombinations = function(digits) {
//     var array = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//     var final = [];
//     for(var i = 0; i < digits.length; i++){
//         var curr = parseInt(digits.charAt(i));
//         var letters = array[curr - 2];
//         final = backtracking(final, letters);
//     }
//     return final;
// };

// var backtracking = function(final, curr){
//     var tempfinal = [];
//     if(final.length === 0){
//        for(var q = 0; q < curr.length; q++){
//            tempfinal.push(curr.charAt(q)); 
//         } 
//     }
//     for(var j = 0; j < final.length; j++){
//         for(var p = 0; p < curr.length; p++){
//            tempfinal.push(final[j] + curr.charAt(p)); 
//         }
//     }
//     return tempfinal;
// };

// Suggested solution 6 (recursive):
// const map = {
//     1: [],
//     2: ['a', 'b', 'c'],
//     3: ['d', 'e', 'f'],
//     4: ['g', 'h', 'i'],
//     5: ['j', 'k', 'l'],
//     6: ['m', 'n', 'o'],
//     7: ['p', 'q', 'r', 's'],
//     8: ['t', 'u', 'v'],
//     9: ['w', 'x', 'y', 'z']
// };

// var letterCombinations = function (digits) {
//     if (digits.length == 0 || digits == "1") return [];
//     if (digits.length == 1) return map[digits];

//     const first = digits.substr(0, 1);
//     const rest = digits.substr(1);
//     const combos = [...letterCombinations(rest)];

//     const result = [];
//     map[first].forEach(char =>
//         combos.forEach(combo =>
//             result.push(char + combo)));
//     return result;
// };

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
console.log(letterCombinations('234'));
// console.log(letterCombinations('2'));    // ['a', 'b', 'c']
