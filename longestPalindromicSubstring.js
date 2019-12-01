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

const longestPalindromeSubstr = str => {
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  if ( str.split("").reverse().join("") === str ) {
    return str;
  } else {
    return longestPalindromeSubstr(str.substring(1, str.length - 1));
  }
};

let str1 = "bananas";
let str2 = "forgeeksskeegfor";

console.log(longestPalindromeSubstr(str1)); // 'anana'
console.log(longestPalindromeSubstr(str2)); // 'geeksskeeg'
console.log(longestPalindromeSubstr("rater")); // 't'
console.log(longestPalindromeSubstr("ratner")); // ''
