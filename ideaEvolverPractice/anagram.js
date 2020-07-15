/* Pseudocode:
- Loop through s and find all the characters and store the number of characters in string s in an object, sHash
- Loop through t and find all the characters and store the number of characters in string t in an object, tHash
* True case:
- Check for the keys sHash vs. tHash to make sure they are the same
- Check for the values in sHash vs. tHash to make sure they're the same
* Otherwise false
 */

// var isAnagram = function (s, t) {
//   // s = s.toLocaleLowerCase();
//   // t = t.toLocaleLowerCase();

//   if (s.length !== t.length) {
//     return false;
//   }

//   let sHash = {};
//   let tHash = {};

//   // Find characters and number of characters in input s string
//   for (let i = 0; i < s.length; i++) {
//     if (!sHash[s[i]]) {
//       sHash[s[i]] = 1;
//     } else {
//       sHash[s[i]]++;
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (!tHash[t[i]]) {
//       tHash[t[i]] = 1;
//     } else {
//       tHash[t[i]]++;
//     }
//   }

//   //  Check for the keys sHash vs. tHash to make sure they are the same
//   for (let eachKey in sHash) {
//     if (!tHash[eachKey] || tHash[eachKey] !== sHash[eachKey]) {
//       return false;
//     }
//   }

//   return true;
// };


/* Solution 2: O(2n)
Pseudocode:
- if input string s and t are not same length immediately return false
- Loop through first input string s, and put each character as a key in an object, sHash with the 
values being the count of each character that appears in string
- Now Loop through each character in 2nd string, t and check if that character in sHash object does not
exist then return false
- Otherwise, if character in t is in sHash Object then decrement the value by 1 
 */

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sHash = {};

//   // Loop through first input string s, and put each character as a key in an object, sHash with the
//   // values being the count of each character that appears in string
//   for (let letter of s) {
//     if (!sHash[letter]) {
//       sHash[letter] = 1;
//     } else {
//       sHash[letter]++;
//     }
//   }

//   for (let letter of t) {
//     if (!sHash[letter]) {
//       return false;
//     } else {
//       sHash[letter]--;
//     }
//   }

//   return true;
// };


// console.log("1: ", isAnagram("anagram", "nagaram")); // true
// console.log("2: ", isAnagram("rat", "car")); // false
// console.log("3: ", isAnagram("anagram", "nagarmm")); // false
// console.log("4: ", isAnagram("1nagr$m", "n$gar1m")); // true
// console.log("5: ", isAnagram("anagram", "nagarams")); // false
// console.log("6: ", isAnagram("anagram", "nagarmm")); // false
// console.log("7: ", isAnagram("anagrmm", "nagaram")); // false


/* Solution 3 - Ignores spaces and non-letter characters
 */

var isAnagram = function (s, t) {
  s = s.replace(/\W/g, '').toLocaleLowerCase();
  t = t.replace(/\W/g, '').toLocaleLowerCase();

  if (s.length !== t.length) {
    return false;
  }

  let sHash = {};
  let tHash = {};

  for (let i = 0; i < s.length; i++) {
    if (!sHash[s[i]]) {
      sHash[s[i]] = 1
    } else {
      sHash[s[i]]++;
    }
  };

  for (let i = 0; i < t.length; i++) {
    if (!tHash[t[i]]) {
      tHash[t[i]] = 1
    } else {
      tHash[t[i]]++;
    }
  };

  for (let letter in sHash) {
    if (!tHash[letter] || sHash[letter] !== tHash[letter]) {
      return false;
    } 
  }
  return true;

};

console.log("1: ", isAnagram("anagram", "nagaram")); // true
console.log("2: ", isAnagram("rat", "car")); // false
console.log("3: ", isAnagram("anagram", "nagarmm")); // false

console.log("4: ", isAnagram("listen", "silent")); // true
console.log("5: ", isAnagram("rail safety", "fairy tales")); // true
console.log("6: ", isAnagram("dormitory", "dormitory")); // true
console.log("7: ", isAnagram("dormitory", "dirty room")); // true
console.log("8: ", isAnagram("the eyes", "they see")); // true

console.log("9: ", isAnagram("anagram", "nagarams")); // false
console.log("10: ", isAnagram("anagram", "nagarams")); // false
