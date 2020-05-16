/* Write a program to exclude out certain characters from a string containing A's and B's so that the string has correct order of characters
and A's will always come before B's in the new String, and return the lowest number of characters that had to be removed to get the correct
order of characters from the string. 
 */

// Have an empty string called finalStr that will add on the appropriate characters at approriate order and then subtract the lengt of 
// finalStr from original input string to get the number of characters that were removed to get the appropriately ordered string
// To get the appropriately ordered string in finalStr, first place the lowest character as the first character in finalStr by checking the 
// 1st vs. 2nd character from input string
// Loop through the rest of the characters from the input string starting at 2nd index, check if current character is more than or equal to 
// the previous character (B is more than A) or if current character is more than or equal to the first character from finalStr then add on 
// the current character from the for loop into the finalStr string, otherwise skip onto the next character
// return the length of the finalStr string minu the length of original input string S to see how many characters had to be left out.

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let finalStr = '';

    if (S[0] > S[1]) {
        finalStr += S[1]
    }
    else {
        finalStr += S[0];
    }

    for (let i = 1; i < S.length; i++) {
        if (S[i-1] <= S[i] && finalStr[0] <= S[i]) {
            finalStr += S[i];
        }
        else {
            continue;
        }
    }
    return S.length - finalStr.length;
}

console.log(solution('BAAABAB')); // 2 => AAABB
console.log(solution('BBABAA'));  // 3 => BBB or AAA
console.log(solution('AABBBB')); // 0