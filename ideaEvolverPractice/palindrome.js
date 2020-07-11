/* Determine if a string is palindrome or not */

// let palindrome = (str) => {
//   let finalRes = false;

//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] === str[str.length - 1 - i]) {
//       finalRes = true;
//     } else {
//       finalRes = false;
//       return finalRes;
//     }
//   }
//   return finalRes;
// };

// let palindrome = (str) => {
//     str = str.toLocaleLowerCase();
//     console.log('str: ', str);

//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

let palindrome = (str) => {
  str = str.toLocaleLowerCase();

  // base case
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return palindrome(str.slice(1, str.length - 1));
  }
  return false;
};

console.log(palindrome("Racecar")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("1122332211")); // true
