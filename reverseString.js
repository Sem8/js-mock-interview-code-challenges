// Reverse string:
const reverseStr = str => {
    let reversedString = '';

    for (let i = str.length -1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// Reverse string when string concatenation is not supported by a browser:
// const reverseStr = str => {
//     let revStrArr = [];
//     for (let i = str.length -1; i >=0; i--) {
//         revStrArr.push(str[i]);
//     }
//     return revStrArr.join('');
// }

// Reverse string with time efficiency by halving the length for O(n/2) time complexity:
// const reverseStr = str => {
//     str = str.split('');
//     let reversedString;
//     let len = str.length
//     let halfIndex = Math.floor(len / 2) - 1;

//     for (let i = 0; i <= halfIndex; i++) {
//         reversedString = str[len - i - 1];
//         str[len - i - 1] = str[i];
//         str[i] = reversedString;
//     }
//     return str.join('');
// };

// Reverse using built in methods:
// const reverseStr = str => {
//     if (!str || str.length < 2) return str;

//     return str.split('').reverse().join('');
// }


// Make an extension of the string prototype for the reverse method:
// String.prototype.reverseStr = function() {
//     if (!this || this.length < 2) {
//         return this;
//     }
//     return this.split('').reverse().join('');
// }

// Reverse string recursively
// const reverseStr = (str) => {
//     if (str === '') {
//         return '';
//     }
//     return reverseStr(str.substr(1)) + str.charAt(0);    
// }


// console.log(reverseStr('string'));
console.log('string'.reverseStr());