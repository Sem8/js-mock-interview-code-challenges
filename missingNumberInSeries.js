// From an unsorted array of subsequent numbers 1 to 100 excluding one number, 
// how will you find that missing number?

// Will only take care of one number and only if it starts with 1
// const missingNumber = numArr => {
//     let n = numArr.length + 1;
//     let expectedSum = n*(n+1)/2
//     let sum = 0;
//     let len = numArr.length

//     for (let i = 0; i < len; i++) {
//         sum += numArr[i];
//     }
//     return expectedSum - sum;
// }

// Will take care of numbers not starting with 1:
// 1) Sort the numbers array
// 2) Initialize an empty array let's call it missingNumArr
// 3) Loop through the array with for loop
// 4) In if statement check if number at current index + 1 minus number at current index is more than 1, if so:
// 4) Push the number(s) at current index plus a 1 to that number into the missingNumArr array.
// 5) return that missing number array or return with a join for list of numbers (it'll return in form of strings).
const missingNumber = numArr => {
    numArr.sort();
    let missingNumArr = [];
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i + 1] - numArr[i] > 1) {
            missingNumArr.push(numArr[i] + 1);            
        }
    }
    return missingNumArr.join(', ');
    
}

numA = [5, 2, 6, 1, 3]; // 4
numB = [0,1,3,4,5,7,8]; // 2, 6
numC = [9,1,5,8,7,4,3,0,10,13,15,19,12,16,18]; // Missing 2,6,11,14,17
numD = [189459, 189460, 189461, 189463, 189465]; // 189462,189464
numE = [189459, 189460, 189461, 189463, 189463, 189465]; // 189462

console.log(missingNumber(numA));
console.log(missingNumber(numB));
console.log(missingNumber(numC));
console.log(missingNumber(numD));

