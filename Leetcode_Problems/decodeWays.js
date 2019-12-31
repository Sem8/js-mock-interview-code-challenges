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

// const numDecodings = s => {
//     let msgLen = s.length;
//     if (parseInt(s) === 0) {
//         return 0;
//     };
//     if (msgLen === 0 || msgLen === 1) {
//         return 1;
//     };

//     let count = 0;

//     if (parseInt(s[msgLen - 1]) > 0) {
//         count = numDecodings(s.substring(0, msgLen-1));
//     };

//     if (parseInt(s.substring(msgLen-2)) < 27 && parseInt(s.substring(msgLen-2)) >= 10) {
//         count += numDecodings(s.substring(0, msgLen-2));
//     };

//     return count;
// };

// My solution: Doesn't work for input numbers of more than 3 numbers
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
// const letterMapper = {
//   1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I", 10: "J", 11: "K", 12: "L", 13: "M", 14: "N", 15: "O", 16: "P", 
//   17: "Q", 18: "R", 19: "S", 20: "T", 21: "U", 22: "V", 23: "W", 24: "X", 25: "Y", 26: "Z"
// };
// console.log(letterMapper);

// const numDecodings = s => {
//   let result = {};

//   if (s.length === 0) {
//     return Object.keys(result).length;
//   }

//   if (parseInt(s) <= 10) {
//     if (!result[letterMapper[s]]) {
//       result[letterMapper[s]] = 1;
//     }
//   }
//   if (parseInt(s) >= 11 && s.length == 2) {
//     if (letterMapper[s] && !result[letterMapper[s]]) {
//       result[letterMapper[s]] = 1;
//     }
//     let splitInp = s.split("");
//     let letterCombo = "";
//     for (let eachNum of splitInp) {
//       letterCombo += letterMapper[eachNum];
//     }
//     result[letterCombo] = 1;
//   }
//   if (s.length > 2) {
//     recurse(s, "", 0, result, letterMapper);
//   };

//   console.log('main: ', result);
//   return Object.keys(result).length;
// };

// const recurse = (numStr, prev, index, result, letterMapper) => {
//     if (index > numStr.length) {
//         return result;
//       };
  
//   if (prev.length < 3) {
//     if (letterMapper[prev]) {
//         let combo = '';
//         combo += letterMapper[prev];
//       result[combo] = 1;
//     //   return;
//     }
//   };
// //   console.log('helper: ', result);
//   recurse(numStr, (prev += numStr.substr(index, 1)), index + 1, result, letterMapper);
//   recurse(numStr, (prev += numStr.substr(index, 2)), index + 1, result, letterMapper);
// };

// Suggested Solution 1 (iterative):
/* Pseudocode:
1. Make an if statement of if input s length is 0 (input string number is an empty string) then just return 0
2. Get the length of the input s number string and set it to a variable called len
3. Make a new array of size length of input s plus 1, fill it with 0's and call it dp
4. Set the 0th index in dp array to 1 (if there are 0 numbers in input s there's 1 way to decode that empty number string)
5. Set the 1st index in dp array to 1 (if there is 1 number in the input s there's only 1 way to decode that number) if the first character
in the input s number string is not 0, otherwise, set value of dp array at index 1 to 0.
6. Make a for loop, starting at index i of 2 (because we already took care of number of ways to decode 0 numbers and 1 number so we start 
    with decoding 2 numbers), i less than or equal to length of input s, increment i
6. Inside for loop, get the character from input s 1 index before current index of i (i-1), turn it into an iteger using parseInt method 
because input s is in string format and put it in a variable called first
7. Still inside for loop, get the 2 characters from input s 2 indices before current index of i (i-2 starting) using the substring method then
turn it into an integer using parseInt method and store it in a variable called second
8. Still inside for loop, make an if statement of if first (character right before current index) is more than 0 but less 10 then set the 
value of dp array at current index i plus equal to value of dp array from index right before current index (i-1)
9. Still inside for loop, make an if statement of if second (2 characters together right before current index) is more than 10 but less than
or equal to 26 then set the value of dp array at current index plus equals value from dp array at two indices before current index (i - 2)
10. Outside for loop, return the value from dp array at the index of length of input s
 */
// const numDecodings = s => {
//     if (s.length === 0) {
//         return 0;
//     };

//     let len = s.length;
//     let dp = new Array(len + 1).fill(0);
    
//     dp[0] = 1;
//     dp[1] = s[0] != '0' ? 1 : 0;

//     for (let i = 2; i <= len; i++) {
//         let first = parseInt(s[i-1]);
//         let second = parseInt(s.substring(i-2, i));

//         if (first > 0 && first < 10) {
//             dp[i] += dp[i-1];
//         };
//         if (second >=10 && second <= 26) {
//             dp[i] += dp[i-2];
//         }
//     };
//     return dp[len];
// };

// Suggested solution 2 (recursive):
/* Pseudocode:
1. Make a base case of if integer version of input number string s (using parseInt method) is 0 then just return 0 (there are no or 0 ways 
    to decode the number 0).
2. Get the length of the input number string and set it to a variable called msgLen
3. Make another base case of if input number string length, msgLen is 0 or 1 (1 number long or empty string) return 1
4. outside previous if statement, make a variable called count and initialize it to 0
5. Make an if statement of if the integer version of the last number from input string s (using parseInt at index of msgLen) is more than 0
then set count equal to recursive call of numDecodings function, passing in as parameter the the number string but without the last character
using substring method (characters 0 index to the 2nd to last character)
6. Outside previous if statement, make another if statement of if the last 2 characters of the input number string s (using substring method)
is less than 27 or more than or equal to 10 then set count to plus equal recursive call of numDecodings function, passing in as parameter,
the input number string without the last 2 numbers of that number string (using substring method to exclude the last 2 number characters)
7. Outside the if statement return the count variable
 */

const numDecodings = s => {
    if (s === '0') {
        return 0;
    };

    let msgLen = s.length;
    let count = 0;

    if (msgLen === 0 || msgLen === 1) {
        return 1;
    };
    
    if(parseInt(s[msgLen-1]) > 0) {
        count = numDecodings(s.substring(0, msgLen-1));
    };

    if (parseInt(s.substring(msgLen-2)) < 27 && parseInt(s.substring(msgLen-2)) >= 10) {
        count += numDecodings(s.substring(0, msgLen-2));
    };

    return count;
}


console.log(numDecodings("12"));     // 2
console.log(numDecodings("26"));     // 2
console.log(numDecodings("27"));     // 1
console.log(numDecodings("226"));    // 3
console.log(numDecodings("227"));    // 2
console.log(numDecodings("2266"));   // 3
console.log(numDecodings('01'));    // 0
console.log(numDecodings('10'));    // 1

// console.log(parseInt('01'));
