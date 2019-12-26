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
const letterCombinations = digits => {
    let letterMapper = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];
    if (digits.length === 0) {
        return result;
    };
    if (digits.length === 1) {
        return letterMapper[digits];
    };
    recurse(result, digits, '', 0, letterMapper);
    return result;
};

const recurse = (result, digits, prev, index, letterMapper) => {
    if (index === digits.length) {
        result.push(prev);
        return;
    }
    let lettersArr = letterMapper[digits[index]];
    for (let i = 0; i < lettersArr.length; i++) {
        recurse(result, digits, prev + lettersArr[i], index + 1, letterMapper);
    }
};

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

console.log(letterCombinations('23'));  // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
// console.log(letterCombinations('234'));
// console.log(letterCombinations('2'));    // ['a', 'b', 'c']


