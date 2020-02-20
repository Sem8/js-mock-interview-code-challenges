// My own solution:
/*Pseudocode:
1. Initialize an empty array call it testArr. Initialize another empty array call it finalArr. Initialize an empty object call it hashTable
2. Loop through the input string with for loop.
3. Get 10 digits of the string starting from each letter at each current index in the for loop with the substr method, and push each 10
digit substring into the testArr.
4. Outside previous for loop, loop through the testArr with i as the index starting and ending at the first and last element, respectively.
5. Inside testArr for loop, make an if statement check if current testArr substring element at current index exists as a key in the hashTable
with a truthy value, if so then increment by 1, the value with key as the testArr substring element at the current index in hashTable object.
6. Else (if current testArr substring element at current index does not exist as a key in hashTable object), then set this current testArr
element at current index as a key in hashTable object with value of 1.
7. Outside the testArr for loop, Make a for in loop to loop through the key and values of hashTable and make if statement check if value
of substring current key in hashtable is more than 1 then push that key into the finalArr array.
8. return the finalArr array. 
 */
// const findRepeatedDnaSequences = function(s) {
//     let testArr = [];
//     let finalArr = [];
//     let hashTable = {};

//     for (let i = 0; i < s.length - 9; i++) {
//         testArr.push(s.substr(i, 10));

//     };
//     // console.log(testArr);
//     for (let i = 0; i < testArr.length; i++) {
//         if (testArr[i] in hashTable) {
//             hashTable[testArr[i]]++;
//         } else {
//             hashTable[testArr[i]] = 1;
//         }

//     };
//     // console.log(hashTable);
//     // console.log('hashtable length: ', Object.keys(hashTable).length);
//     // console.log('testArr length: ', testArr.length);

//     for (substrings in hashTable) {
//         if (hashTable[substrings] > 1) {
//             finalArr.push(substrings);
//         };
//     };
//     return finalArr;
// };

// My own optimized solution: Time complexity O(2n) --> ~O(n), space complexity O(n)
const findRepeatedDnaSequences = function(s) {
    let finalArr = [];
    let hashTable = {};
    let sLength = s.length - 9;
    let sequences;

    for (let i = 0; i < sLength; i++) {
        sequences = s.substr(i, 10);
        if (sequences in hashTable) {
        hashTable[sequences]++;
        } else {
        hashTable[sequences] = 1;
        }
    }
    for (substrings in hashTable) {
        if (hashTable[substrings] > 1) {
        finalArr.push(substrings);
        }
    }
    return finalArr;
};

s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
// findRepeatedDnaSequences(s);
console.log(findRepeatedDnaSequences(s)); // ["AAAAACCCCC", "CCCCCAAAAA"]
