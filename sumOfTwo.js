// From a unsorted array, check whether there are any two numbers that will sum up to a given number?

// Naive solution with O(n^2) time complexity:
const sumOfTwo = (numArr, theNum) => {
    let sumArr = [];
    let len = numArr.length;

    for (let i = 0; i < len -1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (numArr[i] + numArr[j] == theNum) {
                sumArr.push([numArr[i], numArr[j]]);
            }
        }
    }
    return sumArr;
}

// 
console.log(sumOfTwo([6,4,3,2,1,7], 9))
console.log(sumOfTwo([6,4,3,2,1,7], 2))