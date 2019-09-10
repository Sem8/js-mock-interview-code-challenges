// Check if a string is palindrome or not manually;
// const palindromeChecker = str => {
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// Check if a string is palindrome or not with one liner built-in methods:
const palindromeChecker = str => {
    return str == str.split('').reverse().join('');

}

console.log(palindromeChecker('madam'));
console.log(palindromeChecker('toyota'));
