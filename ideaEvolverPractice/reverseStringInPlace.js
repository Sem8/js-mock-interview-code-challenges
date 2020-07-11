/* Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */

/* Pseudocode:
- Get the length of half the array, if array lengt is odd then lower half of the array.
- Loop through input array till the lower half of the length and at every current index switch the element at current index with 
the element at the other end from the current index (arr.length - 1 - i)
- Outside for loop, return the input array
  */

var reverseString = function (s) {
  let len = Math.floor(s.length / 2);

  for (let i = 0; i < len; i++) {
    let currentElem = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = currentElem;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
console.log(reverseString(["h", "e", "l", "l"])); // ['l', 'l', 'e', 'h']
