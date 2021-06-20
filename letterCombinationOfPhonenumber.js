/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 */

// const letterCombinations = (digits) => {
//   let mappings = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   let finalStr = "";
//   let finalArr = [];

//   for (let i = 0; i < digits.length; i++) {
//     let currentDigit = digits[i];
//     let currentLetterCombo = mappings[currentDigit];

//     for (let j = 0; j < currentLetterCombo.length; j++) {
//       if (i < digits.length - 1) {
//         let currentLetterOfNextDigit = mappings[digits[i + 1]];
//         finalStr += currentLetterCombo[j] += currentLetterOfNextDigit[j];
//         finalArr.push(finalStr);
//         finalStr = "";
//       }
//     }
//   }
//   return finalArr;
// };

/* Pseudocode - Recursive
- Declare an empty array to push the final digit letter combinations to, call it comboHolder
- Make a case of if digits is empty just return empty array?
- Declare an object, call it mapper and map the corresponding digit as key to the corresponding letter combinations as value
- At the end we will call and return an inner function we made, passing in the parameters of digits from parent function, current letter
combination from current digit string which will initially be empty string, current index of current digit which will initially be 0, 
an array that will hold all the letter combinations which will initially be our comoboHoler empty array 
- Declare an inner function call it comboRecursion passing in parameter of digits from parent function input (currentDigits), 
currentLetterCombo which will be current letter from this function + current letter from previous recursive call function, 
currentIndex which will be current index + 1, holderArray which will contain the letter combination
- In the function, make a base case of if currentIndex (current index of digits) is more than or equal to digits length then push the 
currentLetterCombo into the holderArray array and return the holderArray array
- Else, (if the currentIndex is less than the digits length so we are not on the last digit right now), get the string combination of the current digit from the mapper object and loop through each letter of the string w/ a for loop
- Inside for loop, recursively call the comboRecursion function passing in the same currentDigits, currentLetterCombo will be current letter from the currentStr string from the current digit we are on, currentIndex will be currentIndex + 1 (each recursive call will go to next digit from the parent function input digit), same holderArray
- Put the results from the recursive call of the comboRecursion function into the holderArray so we get results of nested function calls accumulated in the holderArray
- Return the holderArray after the for loop ends
- Outside comboRecursion function, call and return the comboRecursion function passing in the digits from parent function input for currentDigits,
pass in empty string for currentLetterCombo, pass in 0 for currentIndex and pass in the comboHolder empty array we declared in the parent function as the holderArray parameter   
 */
const letterCombinations = (digits) => {
  let comboHolder = [];
  let mapper = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "pqrs",
    7: "tuv",
    8: "wxyz",
  };

  if (digits.length === 0) return comboHolder;

  let comboRecursion = (
    currentDigits,
    currentLetterCombo,
    currentIndex,
    holderArray
  ) => {
    if (currentIndex >= currentDigits.length) {
      holderArray.push(currentLetterCombo);
      return holderArray;
    } else {
      let currentDigit = currentDigits[currentIndex];
      let currentStr = mapper[currentDigit];
      for (let i = 0; i < currentStr.length; i++) {
        holderArray = comboRecursion(
          currentDigits,
          currentLetterCombo + currentStr[i],
          currentIndex + 1,
          holderArray
        );
      }
      return holderArray;
    }
  };

  return comboRecursion(digits, "", 0, comboHolder);
};

console.log("2", letterCombinations("2"));
console.log("23", letterCombinations("23"));
// console.log("234", letterCombinations("234"));
