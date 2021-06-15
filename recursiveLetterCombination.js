/* Write recursive function to get all permutations of letters in a string

ex. 'abc' -> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
*/

/* Pseudocode:
- Split the string to create an array, save it to a variable called arr
- Declare an empty array called results (to push all combinations of strings to) 
- Get the length of the array and call it len
- Create a base case, if length of string array, arr is 0 or string is empty then just return the input string in an array
- Loop throug the string array, arr and in the for loop,
- Make a copy of the original string array arr using slice method and save it to a variable, restOfString.
- Pick out the character at the current index iteration from the string array using splice method and save to variable, picked
- Make a recursive call of the permutations function passing in the restOfString array as an argument (in the form of string using join
    array method). 
    restOfString will contain all letters except the one at current index of the iteration. 
    Save the return of the recursive function call to a variable, lettersFromRecursion
-  Make an inner for loop inside the previous for loop after the recursive call, this time looping through the return string from the
recursive call, lettersFromRecursion.
- Concatenate the letter that was first picked out from before the recursion in the outer for loop, picked, with the current character
at current index iteration from the string returned from the recursive call, lettersFromRecursion and save the result to a variable 
called letterComboArr
- Turn the concatenated letter combination array, letterComboArr to string using join method and push it to the results array
- Outside all for loops return the letterComboString
 */

const permutations = (str) => {
  let arr = str.split("");
  let len = arr.length;
  let result = [];
  let restOfString, picked, lettersFromRecursion, letterComboArr;

  if (len == 0) {
    return [str];
  }

  for (let i = 0; i < len; i++) {
    restOfString = arr.slice();
    picked = restOfString.splice(i, 1);

    lettersFromRecursion = permutations(restOfString.join(""));

    for (let j = 0; j < lettersFromRecursion.length; j++) {
      letterComboArr = picked.concat(lettersFromRecursion[j]);
      result.push(letterComboArr.join(""));
    }
  }
  return result;
};

console.log(permutations("abc"));
