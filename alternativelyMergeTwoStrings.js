/* Given 2 strings, merge them in an alternate way, i.e. the final string’s first character is the first character of the first 
string, the second character of the final string is the first character of the second string and so on. And if once you reach 
end of one string while if another string is still remaining then append the remaining of that string to final string

Examples:

Input : string 1 :"geeks"
        string 2 :"forgeeks"
Output: "gfeoerkgseeks"
Explanation : The answer contains characters from alternate strings, and once 
the first string ends the remaining of the second string is added to the final string

Input :string 1 :"hello"
        string 2 :"geeks"
Output : hgeelelkos
 */

// My solution: 
/*
1. Have 2 pointers, called pointer1 and pointer2 starting at 0
2. Declare an empty string called finalStr
3. Have a while loop of while first and second input strings (str1 and str2) is not null, have finalStr += str1 at pointer1 index then 
increment pointer1. And then have finalStr plus equal str2 at pointer2 index then increment pointer2
4. Outside while loop, have an if statement of if str1 at pointer1 index is null then just have finalStr += str2 starting at pointer2 
index and ending at last character of str2 (str2.length) using the built in substring method.
5. Outside the while loop have another if statement of if str2 at pointer2 index is null then just have finalStr += str1 starting at 
pointer1 index and ending at last character of str1 (str1.length) using the built in substring method.
6. Outside while loop, return finalStr
 */

let alternativelyMergeStr = (str1, str2) => {
    let pointer1 = 0;
    let pointer2 = 0;

    let finalStr = '';

    while (str1[pointer1] != null && str2[pointer2] != null) {
        finalStr += str1[pointer1];
        pointer1++;
        finalStr += str2[pointer2];        
        pointer2++;        
    };

    if (str1[pointer1] == null) {
        finalStr += str2.substring(pointer2, str2.length);
    };

    if (str2[pointer2] == null) {
        finalStr += str1.substring(pointer1, str1.length);
    }
    return finalStr;
}


console.log(alternativelyMergeStr("geeks", "forgeeks"))  // 'gfeoerkgseeks'
console.log(alternativelyMergeStr("hello", "geeks"))  // 'hgeelelkos'
console.log(alternativelyMergeStr("sem", "pleasehelp"))  // 'spelmeasehelp'