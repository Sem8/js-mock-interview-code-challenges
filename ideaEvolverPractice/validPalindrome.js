/* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

/* Pseudocode:
- Take out any non-alphabet characters from the input string using regex and lowercase it
- Get the length of half the string (Math.floor the odd length), call it len
- Loop through that half length, len and check if character at current index is equal to character at modified
string length minus 1 minus current index i and if not, immediately return false
- Outside for loop, return true 
 */

var isPalindrome = function(s) {
    s = s.replace(/[\W_]/g, '').toLowerCase();

    let len = Math.floor(s.length / 2)

    for (let i = 0; i < len; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log('1: ', isPalindrome("A man, a plan, a canal: Panama")); // true
console.log('2: ', isPalindrome('race a car')); // false
console.log('3: ', isPalindrome('race car')); // true
console.log('4: ', isPalindrome('A man, a plan, a canal. Panama')); // true
console.log('5: ', isPalindrome('almostomla')); // false
console.log('6: ', isPalindrome('ab_a')); // true