/* Determine if an input string is palindrome using recursion. Return true if so, return false if not. 
Example: 

Input: malayalam
Output: true

Input: 'Dog'
Output: false
 */

// Suggested solution: 
/*Pseudocode:
1. Make a base case of if input string, str length is 0 (empty string) or 1 then return true.
2. Make another base case of if input string, str first letter at first index of 0 is not the same as the last letter at last index then return
false
3. Recursively call the isPalindromeRec function, passing in as input parameter the input string str but using substring method to chop off the 
first and last letters by passing in 1 and str.length - 1 as the beginning and end numbers in the substring method and return this recursive 
function call.
 */

const isPalindromeRec = str => {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    } 
    return isPalindromeRec(str.substring(1, str.length - 1));
    
};


let str1 = 'malayalam';
let str2 = 'Dog';
let str3 = 'rater';
let str4 = 'AAGCTT';
console.log(isPalindromeRec(str1))  // true
console.log(isPalindromeRec(str2))  // false
console.log(isPalindromeRec(str3))  // false
console.log(isPalindromeRec(str4))  // true
