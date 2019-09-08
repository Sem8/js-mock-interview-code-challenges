// Reverse string:
// const reverseStr = str => {
//     let reversedString = '';

//     for (let i = str.length -1; i >= 0; i--) {
//         reversedString += str[i];
//     }
//     return reversedString;
// }

// Reverse string when string concatenation is not supported by a browser:
const reverseStr = str => {
    let revStrArr = [];
    for (let i = str.length -1; i >=0; i--) {
        revStrArr.push(str[i]);
    }
    return revStrArr.join('');
}



// Reverse string recursively
// const reverseStr = (str) => {
//     if (str === '') {
//         return '';
//     }
//     return reverseStr(str.substr(1)) + str.charAt(0);    
// }


console.log(reverseStr('string'));