// From a unsorted array, check whether there are any two numbers that will sum up to a given number?

// Naive solution with O(n^2) time complexity:
// const sumOfTwo = (numArr, theNum) => {
//     let sumArr = [];
//     let len = numArr.length;

//     for (let i = 0; i < len -1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (numArr[i] + numArr[j] == theNum) {
//                 sumArr.push([numArr[i], numArr[j]]);
//             }
//         }
//     }
//     return sumArr;
// }

// Improved solution making use of hashtable in O(n) time complexity:
const sumOfTwo = (numArr, theNum) => {
    let hashTable = {};
    let difference;
    let sumArr = [];
    for (let i = 0; i < numArr.length; i++) {
        difference = theNum - numArr[i];
        if (hashTable[difference]) {
            sumArr.push(numArr[i], difference)
        } else {
            hashTable[numArr[i]] = difference;
        }
    }
    // console.log(hashTable);
    return sumArr;
}

console.log(sumOfTwo([6,4,3,2,1,7], 9))
console.log(sumOfTwo([6,4,3,2,1,7], 2));
console.log(sumOfTwo([3, 5, 2, -4, 8, 11], 7));


