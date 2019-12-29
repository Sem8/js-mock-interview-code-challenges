/* A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). */

// My solution
// Make an object with numbers as keys and letters as values
// Declare an empty object, call it result, return length of it at end of function with Object.keys(result).length
// Make an if statement, if number version of input string of numbers, s is less than or equal to 10 then get the letter corresponding
// to that number from letterMapper and just add that number to the result object as a key with value of 1
// Make an if statement of if number version of s is more than 10 and length of s is 2 then get the letter corresponding to
// that number from letterMapper if that number exists in the letterMapper object as a key, put it into the result object as a key
// with value of 1.
// Then split that s number string, get the letter of each number from the array of split up numbers with for of loop and push those
// letters into the result array
// Otherwise, if length of s is more than 2, put the original s number
/*Pseudocode:
 */

const letterMapper = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z"
};
// console.log(letterMapper);

const numDecodings = s => {
  let result = {};

  if (s.length === 0) {
    return Object.keys(result).length;
  }

  if (parseInt(s) <= 10) {
    if (!result[letterMapper[s]]) {
      result[letterMapper[s]] = 1;
    }
  }
  if (parseInt(s) >= 11 && s.length == 2) {
    if (letterMapper[s] && !result[letterMapper[s]]) {
      result[letterMapper[s]] = 1;
    }
    let splitInp = s.split("");
    let letterCombo = "";
    for (let eachNum of splitInp) {
      letterCombo += letterMapper[eachNum];
    }
    result[letterCombo] = 1;
  }
  if (s.length > 2) {
    recurse(s, "", 0, result, letterMapper);
  };

  console.log('main: ', result);
  return Object.keys(result).length;
};

const recurse = (numStr, prev, index, result, letterMapper) => {
    if (numStr.length === 0) {
        return result;
      }
    
      if (parseInt(numStr) <= 10) {
        if (!result[letterMapper[numStr]]) {
          result[letterMapper[numStr]] = 1;
        }
      }
      if (parseInt(numStr) >= 11 && numStr.length == 2) {
        if (letterMapper[numStr] && !result[letterMapper[numStr]]) {
          result[letterMapper[numStr]] = 1;
        }
        let splitInp = numStr.split("");
        let letterCombo = "";
        for (let eachNum of splitInp) {
          letterCombo += letterMapper[eachNum];
        }
        result[letterCombo] = 1;
      };
  if (index > numStr.length) {
    // return Object.keys(result).length;
    return result;    
  };
  
  if (prev.length < 3) {
    if (letterMapper[prev]) {
        let combo = '';
        combo += letterMapper[prev];
      result[combo] = 1;
    //   return;
    }
  };
  console.log('helper: ', result);
  recurse(numStr, (prev += numStr.substr(index, 1)), index + 1, result, letterMapper);
  recurse(numStr, (prev += numStr.substr(index, 2)), index + 1, result, letterMapper);
};

// Suggested 

// console.log(numDecodings("12")); // 2
// console.log(numDecodings("26")); // 2
// console.log(numDecodings("27")); // 1
console.log(numDecodings("226")); // 3
// console.log(numDecodings("227")); // 2
