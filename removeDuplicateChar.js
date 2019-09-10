// Remove duplicate letters or characters from a string

const removeDuplicateChars = (str) => {
    let noDupicateArr = [];
    let charObj = {};
    let len = str.length;
    let char;
    
    for (let i = 0; i < len; i++) {
        char = str[i];
        if (charObj[char]) {
            charObj[char]++;
        } else {
            charObj[char] = 1;
        }
    }

    for (aLetter in charObj) {
        if (charObj[aLetter] == 1) {
            noDupicateArr.push(aLetter);
        } 
    }

    return noDupicateArr.join('');
};

// Remove duplicate characters from a string but keep the first copy of the characters and remove the subsequent copies only.
// 1) split the string by each characters to get an array of characters, and put into varialble let's call it splitStrArr
// 2) Reset the splitStrArr character array to a new array, where inside make a new Set of the previous splitStrArr and spread it out to return 
// an array of values instead of a set inside an array.
// 3) Return the new split character array with join method to return a string. 
const removeDuplicateChars = str => {
    let splitStrArr = str.split('');
    splitStrArr = [...new Set(splitStrArr)]
    return splitStrArr.join('');
}

console.log(removeDuplicateChars('Semmi'));
console.log(removeDuplicateChars('Learn more javascript dude'));