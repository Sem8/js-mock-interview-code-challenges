// Solution using a hashtable approach:
// const findNonRepeatedCharacter = string => {
//   let charObj = {};
//   let len = string.length;

//   for (let i = 0; i < len; i++) {
//     let char = string[i];
//     if (charObj[char]) {
//       charObj[char]++;
//     } else {
//       charObj[char] = 1;
//     }
//   }

//   for (aLetter in charObj) {
//     if (charObj[aLetter] == 1) {
//       return aLetter;
//     }
//   }
//   return null;
// }

// Solution using indexOf to find a letter
// 1) Loop through string and set variable char to each letter in string
// 2) if statement checks if a letter in the string is equal to the index and if the letter in the string at the next index does not exist
// then return that letter

// const findNonRepeatedCharacter = string => {
//   for (let i = 0; i < string.length; i++) {
//     if (string.indexOf(string[i]) == i && string.indexOf(string[i], i + 1) == -1) {
//       return string[i];
//     }
//   }
//   return null;
// }

// Solution using first and lastCharacter index logic
// 1) Loop through the string to get each letter of the string
// 2) If the firs index of a character with indexOf method equals the last index of a character with lastIndexOf method then it is a non-repeating 
// letter so return that letter

const findNonRepeatedCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
      return string[i];
    }
  }
  return null
}

console.log(findNonRepeatedCharacter('the quick brown fox jumps then quickly blow air'))