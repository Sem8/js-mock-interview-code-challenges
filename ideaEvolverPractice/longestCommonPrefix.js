/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 */

/* Pseudocode:
- Declare a variable called lastCommonStr and set it equal to empty string for now. Declare another variable called 
finalCommonStr and set it to nothing for now
- Loop through the array w/ for loop starting at index 1 and ending at last element (b/c we'll compare previous element to current elmeent
that's why we start at index 1)
   - In for loop make another inner for loop starting at index j, ending at current element's length and increment - 
   so we're looping through each character of the current string 
   - In inner for loop, make an if i is equal to 1 then compare each character at same j position it to it's previous element 
   at i-1
      - In if statement check if the character at same j position is not the same between current and previous element then just return
      empty string ''
      - otherwise, (if the current characters are the same) then while current characters are the same between 
      current and previous string add on the current character to lastCommonStr
    - Otherwise if index i is not 1 (we are at any other string besides the 2nd string at index 1) then compare the current 
    character at j position from current array element at i position to the current j position character from lastCommonStr and if they
    are the same then add each character onto the finalCommonStr
    - At end of while loop, set lastCommonStr equal to finalCommonStr and set finalCommonStr equal to empty string for next iteration
    in outer i index.  
 */

// var longestCommonPrefix = function (strs) {
//   if (strs.length <= 0) {
//     return "";
//   }
//   if (strs.length == 1) {
//     return strs[0];
//   }

//   let lastCommonStr = "";
//   let finalCommonStr = "";

//   let firstPointer = 0;
//   let secondPointer = 0;

//   while (strs[0][firstPointer] === strs[1][secondPointer]) {
//     if (strs[0] === "" || strs[1] === "") {
//       return "";
//     }
//     lastCommonStr += strs[0][firstPointer];
//     firstPointer++;
//     secondPointer++;
//     if (
//       firstPointer >= strs[0].length ||
//       secondPointer >= strs[1].length ||
//       strs[0][firstPointer] !== strs[1][secondPointer]
//     ) {
//       break;
//     }
//   }

//   for (let i = 2; i < strs.length; i++) {
//     let len =
//       lastCommonStr.length > strs[i].length
//         ? strs[i].length
//         : lastCommonStr.length;
//     for (let j = 0; j < len; j++) {
//       if (strs[i][j] !== lastCommonStr[j]) {
//         break;
//       } else if (strs[i][j] === lastCommonStr[j]) {
//         finalCommonStr += lastCommonStr[j];
//       }
//     }
//     lastCommonStr = finalCommonStr;
//     finalCommonStr = "";
//   }

//   return lastCommonStr;
// };

/* Leetcode solution 1 */
/* Pseudocode:
- Declare a variable called prefix and set it to the first element from input array.
- Take care of an edge case where if the array of strings is empty return empty string ''
- Loop through the array of strings starting from index 1 @ 2nd string since 1st string has already been taken up by prefix
   - In for loop, have a while loop of while index of prefix at second string is not 0 then keep chopping off 1 character
   from the end of prefix string using the substring method. This will keep chopping off characters from end till substring 
   prefix matches current string  
- Outside for loop, return prefix string
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

// /* Leetcode solution 2: - Not better time complexity than solution 1 */
// var longestCommonPrefix = function (strs) {
//     if (strs == null || strs.length == 0) return "";
//     for (let i = 0; i < strs[0].length; i++){
//         console.log('i: ', i);
//         let c = strs[0].charAt(i);
//         for (let j = 1; j < strs.length; j++) {
//             if (i == strs[j].length || strs[j].charAt(i) != c) {

//                 return strs[0].substring(0, i);
//             }
//         }
//     }
//     return strs[0];
//   };

/* GoodTecher solution */
/* Pseudocode:
- Have an edge case conditional of if strs is null or length is less than or equal to 0 then return empty string ''
- Declare a variable called lcp and set it equal to first string element from strs array
- Loop through the strs array starting at index 1 (2nd string element from strs array) because the 1st string is already
taken up by lcp variable, 
   - Set a variable called currentString to current string element at current index of array just to make things more
   clear and easier for us
   - Declare a variable called j and set it equal to 0 for now.
   - Have a while loop of while j is less than length of lcp && j is less than length of currentString (to only go through
    shortest string) && character at current j index is same between lcp and currentString then increment j by 1
    - Outside while loop, re-set lcp to substring of lcp from index 0 ending at j index 
    - And if j is still equal to 0 (No common prefix substring) then just return empty string ''
- Outside for loop, return lcp

 */

var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length <= 0) {
    return "";
  }

  let lcp = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let currentString = strs[i];
    let j = 0;

    while ( j < currentString.length && j < lcp.length && currentString[j] === lcp[j] ) {
      j++;
    }
    if (j === 0) {
      return "";
    }
    lcp = lcp.substring(0, j);
  }

  return lcp;
};

// console.log("1: ", longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
// console.log("2: ", longestCommonPrefix(["flight", "flow", "flower"])); // 'fl'
// console.log("3: ", longestCommonPrefix(["dog", "racecar", "car"])); // ''
// console.log("4: ", longestCommonPrefix(["flow", "flower", "flight"])); // 'fl'
// console.log("5: ", longestCommonPrefix(["flower", "flowering", "flight"])); // 'fl'
// console.log("6: ", longestCommonPrefix(["flower", "flow", "flight", "flaunt", "flavor"])); // 'fl'
// console.log("7: ", longestCommonPrefix(["flower", "flow", "flight", "flaunt", "flavor", "trinity"])); // ''
// console.log("8: ", longestCommonPrefix(["flower", "flight"])); // 'fl'
// console.log("9: ", longestCommonPrefix(["flower", "flow", "fl"])); // 'fl'
// console.log("10: ", longestCommonPrefix([""])); // ''
// console.log("11: ", longestCommonPrefix(["c", "c"])); // 'c'
// console.log("12: ", longestCommonPrefix(["", ""])); // ''
// console.log("13: ", longestCommonPrefix(["flow", "flow", "flight"])); // 'fl'
