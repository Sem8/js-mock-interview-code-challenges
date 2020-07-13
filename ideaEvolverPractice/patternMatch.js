/* Write a function that matches the pattern of an input string from an array of strings */

/*Pseudocode:
- Declare an empty array called finalArr to hold matching pattern strings
- Declare an empty string call it inpStrSignature
- Get the unique signature of the input string by looping through string w/ for loop, get the first index 
of each character and add it onto the inpStrSignature using indexOf method.
- Get the unique signature of each string from the strArr array of srings by first looping through the
strings array, 
   - In for loop, first check if input string length is different from current string element at current index then
   just continue
   - Otherwise, loop through each character of current string from current index using j as the index now with a 2nd
   inner for loop
      - Declare a variable called currElemSignature and set it equal to empty string
      - Then get the index of first occurence of current string character of current string and add it onto the 
      currElemSignature using plus equals +=
    - Outside inner for loop, check to see if currElemSignature is equal to inpStrSignature then add the current
    string at current index i onto the finalArr array
- Outside all for loops, return the finalArr

 */

let pattern_match = (strArr, inputStr) => {
    let finalArr = [];
    let inpStrSignature = '';
    let currElemSignature = '';

    for (let i = 0; i < inputStr.length; i++) {
        inpStrSignature += inputStr.indexOf(inputStr[i]);
    }

    // console.log('inpStrSignature: ', inpStrSignature);
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length !== inputStr.length) {
            continue;
        }
        for (let j = 0; j < strArr[i].length; j++) {
            currElemSignature += strArr[i].indexOf(strArr[i][j]);
        }
        if (currElemSignature == inpStrSignature) {
            finalArr.push(strArr[i]);
        }
        currElemSignature = ''
        
    }
    return finalArr;
}

console.log(pattern_match(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); // ["mee","aqq"]
console.log(pattern_match(["cdd", "bab", "baa"], "abb")); // ['cdd', 'baa']