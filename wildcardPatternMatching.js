/* Given a text and a wildcard pattern, implement wildcard pattern matching algorithm that finds if wildcard 
pattern is matched with text. The matching should cover the entire text (not partial text).

The wildcard pattern can include the characters ‘?’ and ‘*’
‘?’ – matches any single character
‘*’ – Matches any sequence of characters (including the empty sequence)

For example,

Text = "baaabab",
Pattern = “*****ba*****ab", output : true
Pattern = "baaa?ab", output : true
Pattern = "ba*a?", output : true
Pattern = "a*ab", output : false 

Each occurrence of ‘?’ character in wildcard pattern can be replaced with any other character and each occurrence 
of ‘*’ with a sequence of characters such that the wildcard pattern becomes identical to the input string after 
replacement.
 */

/* Pseudocode:
- Have a helper function called getSubstrTillNextStar:
   - This helper function will take in an input string call it inpStr and pattern string call it patternStr,
      -It'll start at index 0 and get the substring till next star, store it in a variable call subString
      - To do this start at index 0 of the patternStr, and in while loop see that the character in patternStr at patternIndex 
      is not equal to '*' then store the character in patternStr at patternIndex in subString and then increment patternIndex
      - Next outside while loop, find the subString in the inpStr input string by using indexOf method and store that index
      in a variable called nextIndex

- Have a pointer to input string and a pointer to pattern string call them strPointer & patternPointer, respectively
- Have a while loop of while strPointer is less than length of input string str and patternPointer is less than input pattern string,
pattern
   - Have another while loop of while character in pattern at patternPointer is equal to * (pattern[patternPointer] === '*') 
   increment patternPointer
   - After patternPointer has been incremented if there was a * at that index in pattern and reached a non * character then check if
   the character in pattern at patternPointer index is equal to ? (pattern[patternPointer] === '?') then increment patternPointer
   by 1 and increment strPointer by 1
   
 */

let strrmatch = (str, pattern) => {
   let strPointer = 0;
   let patternPointer = 0;
   let finalRes = false;

   while (strPointer < str.length && patternPointer < pattern.length) {
      while (pattern[patternPointer] === '*') {
         patternPointer++;
      };

      while (pattern[patternPointer] === '?') {
         patternPointer++;
         strPointer++;
      }

      if (str[strPointer] === pattern[patternPointer]) {
         // finalRes = true;
         // strPointer++;
         // patternPointer++;
         return true;
      } 
      else {         
         return false;
      }      
   }

} 

console.log(strrmatch("baaabab", "*****ba*****ab")); // true
console.log(strrmatch("baaabab", "baaa?ab")); // true
console.log(strrmatch("baaabab", "ba*a?")); // true
console.log(strrmatch("baaabab", "a*ab")); // false
