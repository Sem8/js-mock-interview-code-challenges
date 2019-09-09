// Reverse words in a sentence not all the letters. 
// Reverse without using split or reverse built in methods
// const reverseWords = (sentence) => {
//     let reversedSent = [];
//     let wordLen = 0;

//     for (let i = sentence.length - 1; i >= 0; i--) {
//         if (sentence[i] == ' ' || i == 0) {
//             reversedSent.push(sentence.substr(i, wordLen + 1));
//             wordLen = 0;
//         } else {
//             wordLen++;
//         }
//     }
//     return reversedSent.join(' ');
// }

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
const reverseWords = sentence => {
    return sentence.split(' ').reverse().join(' ');
}


console.log(reverseWords('This is word'));