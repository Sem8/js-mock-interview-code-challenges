/* Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
 */

/*Pseudocode:
- First lets turn the input str string (to compare pattern to) into an array by using the split method so that we can index each word
- Also, to take care of the edge case that in case they do match however the length of the 2 inputs, pattern vs. str is different
then automatically return false
- Otherwise, declare a variable call patternNum and set it to empty string for now, and declare a variable called strNum and set it 
to an empty string for now.
- Loop through the input pattern string and get index of first occurence of each character and add it onto the patternNum string 
  */

var wordPattern = function(pattern, str) {
    let patternNum = '';
    let strNum = '';

    let strArr = str.split(' ');
    // console.log('strArr: ', strArr);

    if (pattern.length !== strArr.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        patternNum += pattern.indexOf(pattern[i]);
    }
    // console.log('patternNum: ', patternNum);
    for (let i = 0; i < strArr.length; i++) {
        strNum += strArr.indexOf(strArr[i]);
    };

    // console.log('strNum: ', strNum);
    return patternNum === strNum
    
};

console.log('1: ', wordPattern("abba", "dog cat cat dog")); // true
console.log('2: ', wordPattern("abba", "dog cat cat fish")); // false
console.log('3: ', wordPattern("aaaa", "dog cat cat dog")); // false
console.log('4: ', wordPattern("abba", "dog dog dog dog")); // false
console.log('5: ', wordPattern("abba", "dog cat cat dog cat")); // false