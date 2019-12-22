// Reverse words in a sentence not all the letters. 
// Reverse without using split or reverse built in methods
/*Pseudocode:
1. Initialize an empty array, call it reversedSent
2. Declare a variable called wordLen and initialize it to 0
3. Make a for loop, starting at index i of length of sentence minus 1, ending at i more than or equal to 0, decrement i to make a reverse for loop
4. Inside for loop, make an if statement of if sentence character at current index i is equal to a space or we're at index i of 0 then push the
substring of sentence starting from i and ending at length of wordLen using string substr method.
5. Then re-set wordLen back to 0, still in if statement.
6. Else (if current sentence character at current index i is not a space or i is not 0) then just increment wordLen
7. Outside for loop, return the string version of reversedSent by using join method on it  
 */
const reverseWords = sentence => {
    let reversedSent = [];
    let wordLen = 0;

    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === " " || i === 0) {
            reversedSent.push(sentence.substr(i, wordLen+1));
            wordLen = 0;
            
        } else {
            wordLen++;
        };
    };
    return reversedSent.join(' ');
};



// Simpler method using the array split built in method
// const reverseWords = sentence => {
//     let reversedSent = ' ';
//     let sentenceArr = sentence.split(' ');

//     for (let i = sentenceArr.length - 1; i >= 0; i--) {
//         reversedSent += sentenceArr[i] + ' ';
//     }
//     return reversedSent;
// }

// One liner code using reverse built in method:
// const reverseWords = sentence => {
//     return sentence.split(' ').reverse().join(' ');
// };


// console.log(reverseWords('This is word'));
console.log(reverseWords('wrongdoing is bad'));