// Get all permutations of a string where you output all letter combinations in the string

const getAllPermutations = str => {
  let results = [];

// set the base case to if length of string is 1, then just push it into results array and return that array
  if (str.length === 1) {
    results.push(str);
    return results
  }

  // otherwise, loop through string and recurse through rest of the letters besides the letter at current index then push into results array
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    let lettersLeft = str.substring(0, i) + str.substring(i + 1);

    let innerPermutations = getAllPermutations(lettersLeft);

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(currentLetter + innerPermutations[j])
    }
  }
  return results;
}

// function getAllPermutations(string) {
//   var results = [];

//   if (string.length === 1) {
//     results.push(string);
//     return results;
//   }

//   for (var i = 0; i < string.length; i++) {     
//     var firstChar = string[i];
//     var charsLeft = string.substring(0, i) + string.substring(i + 1);
    
//       results.push(firstChar + charsLeft);
//     }
  
//   return results;
// }

console.log(getAllPermutations('sem'));