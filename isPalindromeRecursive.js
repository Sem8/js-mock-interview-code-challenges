/* Determine if an input string is palindrome using recursion. Return true if so, return false if not. 
Example: 

Input: malayalam
Output: true

Input: 'Dog'
Output: false
 */

// My own solution: 
/*Pseudocode:
1. Initialize an empty string called reverseStr. 
2. Make a base case of if str is an empty string then just return an empty string.
3. Otherwise, increment reverseStr to recursive call of isPalindromeRec passing in the input str with the substr method with parameter of 1 (so 
    that the next call of str starts from substring of original string at the next letter's index after the first index letter) plus the first 
    letter of the input string, str at index 0.
4. Make an if statement, check if reverseStr is equal to input str then return true else return false.
 */

const isPalindromeRec = str => {
    let originalStr = str;
    let reverseStr = '';

    if (str === '') {
        return '';
    };
    
    reverseStr = (isPalindromeRec(str.substr(1)) + str[0]);

};


let str1 = 'malayalam';
let str2 = 'Dog'
console.log(isPalindromeRec(str1))  // true
console.log(isPalindromeRec(str2))  // false
