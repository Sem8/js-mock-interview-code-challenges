// Find the longest palindrome in a given string.

// My own solution: Recursive approach
/* Pseudocode:
1. Make a base case of if input string, str length is 0 or 1 then just return the input string
2. Make another base case by making an if statement, check if input string str after splitting with split method to turn into an array of each 
character then reversing with array reverse method then joining the reverse array of characters with join method to turn back into string is the 
same as the original input string then return the input string, str.
3. Else (if the reverse of input string is not the same as original string) then recursively call the longestPalindromeSubstr function passing in 
the input parameter string starting at next letter of string at index 1 and ending at 2nd to last letter of input string using the substring 
method (chopping off the 1st and last letter to look at the new shortened string and re-running the self function on it) and return this 
recusive function   

 */

// const longestPalindromeSubstr = str => {
//   if (str.length === 0 || str.length === 1) {
//     return str;
//   }
//   if ( str.split("").reverse().join("") === str ) {
//     return str;
//   } else {
//     return longestPalindromeSubstr(str.substring(1, str.length - 1));
//   }
// };

// Suggested solution: Iterative approach
/*Pseudocode:

isPalindrome helper function:
1. Make a helper function called isPalindrome which which will take in a string input parameter, str
2. Initialize a variable called reverseStr and set it equal to the input string str, splitting the str using string split method to turn it into 
an array of each string character, then reverse the array using array reverse method then join the reversed array using join method to turn the
array back into a string.
3. At the end return reverseStr triple equals input str so it'll return true if the input str is a palindrome otherwise, false.

longestPalindromeSubstr function (main function):
1. Initialize a variable called longestPalindSubstrLength and itialize it to 0.
2. Initialize a variable called longestPalindSubstr, initialize it to empty string.
3. Make a for loop, starting at index i of 0, ending at less than input string, str length and increment i
4. Initialize a variable called subs and set it equal to input string, str substring starting at index i and ending at length of input string 
(chopping off 1 letter at a time left to right)
5. Make a 2nd nested for loop, inside previous for loop, starting at index j of length of substring subs from outer for loop, ending at index j
more than 0 and decrementing j (we're chopping off one letter at a time from the previous substring this time right to left)
6. Inside nested for loop, set a variable called subsSubstr and set it equal to substring of 1st substring from outer for loop starting at index 0
and ending at index j using substring method.
7. Inside the nested for loop, make an if statement of if subsSubstr is less than or equal to 1 then just continue (to skip this substring within
  substring).
8. Inside nested for loop but outside previous if statement, make another if statement, check if subsSubstr is a palindrome by passing it into the
isPalindrome helper function and if so, if statement will be true.
8. Inside previous if statement, make another if statement check if length of subsSubstr is more than longestPalindSubstrLength then set 
longestPalindSubstrLength to length of subsSubstr and set longestPalindSubstr to the subsSubstr
9. Outside all for loops, return the subsStr.
 */

const isPalindrome = str => {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
};

const longestPalindromeSubstr = str => {
  let longestPalindSubstrLength = 0;
  let longestPalindromeSubstr = '';

  for (let i = 0; i < str.length; i++) {
    let subs = str.substring(i, str.length);

    for (let j = subs.length; j > 0; j--) {
      let subsSubstr = subs.substring(0, j);

      if (subsSubstr.length <= 1) {
        continue
      };
      if (isPalindrome(subsSubstr)) {
        if (subsSubstr.length > longestPalindSubstrLength) {
          longestPalindSubstrLength = subsSubstr.length;
          longestPalindromeSubstr = subsSubstr;
        }
      }
    };
  };
  return longestPalindromeSubstr;
};

// Another iterative approach:
// function reverse(s) {
//   var o = [];
//   for (var i = 0, len = s.length; i <= len; i++)
//    o.push(s.charAt(len - i));
//    return o.join('');
// }

// function isPalindrome(word, words) {
//   return word === reverse(word) && !words.includes(word)
// }

// function longestPalindromeSubstr(s) {
//   let subStrings = [];
//   for (let i = 0; i < s.length; i++) {
//     for(let j = 0; j < s.length - i; j++) {
//       // console.log('i: ', i);
//       // console.log('s[i]: ', s[i]);
//       // console.log('j: ', j);
//       // console.log('s[j]: ', s[j]);
//       let subString = s.substring(j, j + i + 1);
//       // console.log('substring: ', subString);
//       if(isPalindrome(subString, subStrings)) {
//         subStrings.push(subString);
//       }
//   }
// };
// // console.log(subStrings);
// return subStrings[subStrings.length - 1];
// };
  
// longestPalindromeSubstr('tat');

let str1 = "bananas";
let str2 = "forgeeksskeegfor";

// longestPalindromeSubstr('tat');

console.log(longestPalindromeSubstr(str1)); // 'anana'
console.log(longestPalindromeSubstr(str2)); // 'geeksskeeg'
console.log(longestPalindromeSubstr("rater")); // ''
console.log(longestPalindromeSubstr("ratner")); // ''
console.log(longestPalindromeSubstr("abcxyzyxabcdaaa"));  // 'xyzyx'



