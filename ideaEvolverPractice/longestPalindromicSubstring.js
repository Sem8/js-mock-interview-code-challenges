/* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

/* Pseudocode:
- Have an helper function to determine if an input string is a palindrome call it ifPalindrome
    - ifPalindrome helper function takes in a string as an input
    - To determine if input string is a palindrome or not get the half of the length of input string 
    and floor it (for odd lengths) and save it to a variable called len
    - Loop through the string w/ for loop, starting at index i of 0 ending at len variable, increment i 
       - In for loop check if current character at current index i is NOT same as character from input string at length of 
       input string - 1 - i (last character) then return false
    - Outside for loop, return true;

Main function:
- Declare a variable called start and set it equal to 0
- Declare a variable called end and set it equal to length of input s string - 1
- Have a while loop of while end is more than start
   - In while loop make an if statment of if character from input string s at start index is same as end index then 
   run the isPalindrome helper function on the character between start and end index 
      - Inside if statment of if isPalindrome returns true then return the substring between start and end index from
      input s string
      - Otherwise (if isPalindrom doesn't return true for the substring) then decrement end index 
   - If character in start and end index is not the same then just continue and increment start and decrement end
  */

let isPalindrome = (str) => {
  let len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome('geeksskeeg')); // true
// console.log(isPalindrome('babad')); // false

var longestPalindrome = function (s) {
  s = s.toLocaleLowerCase();
  let finalArr = [];
  finalArr.push(s[0]);

  if (!s) {
    return "";
  }
  if (s.length === 1 || (s.length === 2 && s[0] !== s[1])) {
    // return s[0];
    return finalArr[0];
  }

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    // while (s[start] !== s[end] && start + 1 < end) {
    //   end--;
    // }

    // if (s[start] !== s[end]) {
    //   start++;
    //   end = s.length - 1;
    // } else {
    //   if (isPalindrome(s.substring(start, end + 1))) {
    //     finalArr.push(s.substring(start, end + 1));
    //     // return s.substring(start, end + 1);
    //     start++;
    //   } else {
    //       end--;
    //   }
    // };

    while (s[start] !== s[end]) {
      end--;
    }

    if (isPalindrome(s.substring(start, end + 1))) {
      finalArr.push(s.substring(start, end + 1));
    } else {
      while (!isPalindrome(s.substring(start, end + 1))) {
        end--;
      }
      finalArr.push(s.substring(start, end + 1));
    }

    start++;
    end = s.length - 1;
  }

  let longestLen = -Infinity;
  let longestStr;

  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i].length > longestLen) {
      longestLen = finalArr[i].length;
      longestStr = finalArr[i];
    }
  }

  // console.log('longestStr: ', longestStr);
  return longestStr;
};

console.log("1: ", longestPalindrome("babad")); // 'bab' or 'aba'
console.log("2: ", longestPalindrome("cbbd")); // 'bb'
console.log("3: ", longestPalindrome("forgeeksskeegfor")); // "geeksskeeg"
console.log("4: ", longestPalindrome("Geeks")); // "ee"
console.log("5: ", longestPalindrome("a")); // "a"
console.log("6: ", longestPalindrome("")); // ""
console.log("7: ", longestPalindrome("ac")); // "a"
console.log("8: ", longestPalindrome("bb")); // "bb"
console.log("9: ", longestPalindrome("abacab")); // "bacab"
console.log("10: ", longestPalindrome("aaabaaaa")); // "aaabaaa"
