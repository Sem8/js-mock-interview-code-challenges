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
// const letterCombinations = digits => {
//   const letterMapper = {
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
//   };
//   if (digits.length === 1) {
//     return letterMapper[digits];
//   };

//   let set1 = letterCombinations(digits.substr(0, 1));
//   let set2 = letterCombinations(digits.substr(1));

//   for (let i = 0; i < set1.length; i++) {
//     for (let j = 0; j < set2.length; j++) {
//       result.push(set1[i] + set2[j]);
//     };
//   };

//   return result;
// };

// Suggested solution 3 (recursive):
/* Pseudocode:
1. Declare an object called letter mapper, give it keys of the different numbers and set the value of each key number to a string of all the 
letters corresponding to that number
2. Make a base case of if input digits length is 0 and input current is an empty string then return input result which is an empty array.
3. Make another base case of if input digits length is less than 1 only then push the current into the result array then just return to end 
the function.
4. Otherwise (if input digits length is more than 1) then get the string combination from the letterMapper object with key of first number 
character from input digits number combination and set it equal to a variable called firstNumLetters
5. Make a for loop, starting at index i of 0, ending at i less than firstNumLetters length, increment i.
6. Inside for loop, recursively call the letterCombinations function, passing in the digits from 2nd character on for 1st parameter using 
slice method, for 2nd parameter pass in current letter at current index i from firstNumLetters concatted to current, dor 3rd parameter just
pass in the result array called result.
7. Outside for loop, return the result array which contains all combinations of letters from the function call   
 */

// const letterCombinations = (digits, current='', result=[]) => {
//   let letterMapper = {
//     2: 'abc',
//     3: 'def',
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz"
//   };
//   if (digits.length === 0 && current === '') {
//     return result;
//   };
//   if (digits.length < 1) {
//     result.push(current);
//     return;
//   };

//   let firstNumLetters = letterMapper[digits[0]];
//   for (let i = 0; i < firstNumLetters.length; i++) {
//     let currentLetter = firstNumLetters[i];
//     letterCombinations(digits.slice(1), current.concat(currentLetter), result);
//   }

//   return result;
// };

// Suggested solution 4 (iterative):
/* Pseudocode:
Uses 2 functions: 1) Main function called letterCombinations which takes in just 1 parameter called digits which is a number combination in
string form
2) Helper function called backtracking which takes in 2 parameters, 1st parameter is called final which will be the array that holds the 
added up combinations of letter and the 2nd parameter is called letterCombo which will be the certain letter combination for a certain number

letterCombinations (main function):
1. Declare an array called letterMapper and put in strings of letter combinations at index number corresponding to that letter combination's
number (for 0th index just put 0 as string and for index of 1, just put 1 as string since no letters map to those 2 numbers).
2. Make an if statement of if digits length is 0 then just return an empty string.
3. Otherwise (if digits length is 1 or more) then declare an empty array called finalArr.
4. Make a for loop, starting at index i of 0, ending at i less than digits length, increment i
5. Inside for loop, get the letter combination string of the number at current index i from input digits number combo from the letterMapper
array and set it to a variable called currentLetters 
6. Still inside for loop, set finalArr array equal to function call of backtracking helper function, passing in as 1st parameter the finalArr
array and 2nd parameter as currentLetter letter combo into the backtracking helper function.
7. Outside for loop, return the finalArr array

backtracking function (helper):
1. Initialize an empty array called tempArr
2. Make an if statement of if input finalArr is an empty array with length 0 then inside if statement, make a for loop, starting at index i of
0, ending at i less than input letters length, incrment i
3. Inside for loop, push each letter at current index i from letters string into the tempArr array.
4. Otherwise, outside previous if statement (if input array finalArr is not empty) then make a for loop, starting at index j of 0, ending at
j less than finalArr length, incrment j.
5. Inside previous for loop, make another nested for loop, starting at index k of 0, ending at k less than input letters string combo length,
incrment k.
6. Inside nested for loop, push into the tempArr array, the current letter string combo at current index of j from the finalArr array plus 
the current letter at current index of k from the letters string.
7. Outside for loop, return the tempArr array
 */
// const letterCombinations = digits => {
//   let letterMapper = ['0', '1', 'abc', 'def', 'ghi', 'jkl', "mno", "pqrs", "tuv", "wxyz"];
//   if (digits.length === 0) {
//     return '';
//   };

//   let finalArr = [];

//   for (let i = 0; i < digits.length; i++) {
//     let currentLetters = letterMapper[digits[i]];
//     finalArr = backtracking(finalArr, currentLetters);
//   };

//   return finalArr
// };

// let backtracking = (finalArr, letters) => {
//   let tempArr = [];
//   if (finalArr.length === 0) {
//     for (let i = 0; i < letters.length; i++) {
//       tempArr.push(letters[i]);
//     };
//   };
//   for (let j = 0; j < finalArr.length; j++) {
//     for (let k = 0; k < letters.length; k++) {
//       tempArr.push(finalArr[j] + letters[k]);
//     };
//   };
//   return tempArr;
// };

// Suggested solution 5 (recursive):
/* Pseudocode:
Takes in 1 parameter of input digits combination called digits
1. Declare an object called letterMapper which holds the digit numbers as keys and values will be an array of corresponding letters to that
number key
2. Declare an empty array call it result
3. Make a base case of if input digits length is 0 (no digits) then return result array.
4. Make another base case of if digits length is 1 then return the array of letter combinations from the letterMapper Object at that input 
digits as the key
5. Otherwise, (if input digits is more than 1 number) then get the first number from input digits and set it equal to a variable called 
firstNum
6. Then, get the rest of the numbers from the input digits starting from 2nd number in the input digits using substr method and set it equal
to a variable called rest
7. Recursively call the letterCombinations function passing in as it's parameter the rest variable (rest of the digit's array of letters) and
set it equal to a variable called combos
8. Get the array of letters from the first digit from the letterMapper object and run the array forEach method on it to run through each 
letter for that first number, and call each letter firstLetters
9. Inside previous forEach function for first number's letter, run another array forEach method for combos (rest of the number's array of 
letters), calling each letter of the combos arrays combo.
8. Inside previous inner forEach method, push into the result array, firstLetters (letters from first number) plus combo (letters from rest
    of the numbers).
9. Outside both forEach methods, return the result array
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
  }
  if (digits.length === 1) {
    return letterMapper[digits];
  }

  let firstNum = digits[0];
  let rest = digits.substr(1);
  let combos = [...letterCombinations(rest)];

  letterMapper[firstNum].forEach(firstLetters =>
    combos.forEach(combo => result.push(firstLetters + combo))
  );
  return result;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
console.log(letterCombinations("234"));
// console.log(letterCombinations('2'));    // ['a', 'b', 'c']
