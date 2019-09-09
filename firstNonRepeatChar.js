const findNonRepeatedCharacter = string => {
  let charObj = {};
  let len = string.length;

  for (let i = 0; i < len; i++) {
    let char = string[i];
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }

  for (aLetter in charObj) {
    if (charObj[aLetter] == 1) {
      return aLetter;
    }
  }
  return null;
}

// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//       var c = string.charAt(i);
//       if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//         return c;
//       }
//     }
//     return null;
//   }

console.log(findNonRepeatedCharacter('the quick brown fox jumps then quickly blow air'))