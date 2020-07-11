/* Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

/* Pseudocode:
 - sort input array of numbers
 - Loop through sorted array, if next number element is more than 1 + current number element then return the current number element 
 plus 1
  */

var missingNumber = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
    if (nums[0] > 0) {
      return 0;
    }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i] + 1) {
      return nums[i] + 1;
    } 
  }
  return nums[nums.length - 1] + 1;
};

// Solution 2 from leetcode - 86.5% runtime beat
/* Pseudocode:
- Have two variables called sum and total and initialize both to 0. Sum will be the sum of all the array elements 
from input nums array and total will be the sum of the index plus 1 -- So total will always be 1 number ahead of 
the array element for each element. 
ex. sorted array = [0, 1, 2] -- sum = [0, 1, 3] -- total = [1, 3, 6]
- Loop through the array with for loop and let current sum plus equal current array element and let current total plus equal
current index + 1
- Outside for loop, return total - sum where total will always be 1 above sum 
 */
var missingNumber = function (nums) {
    let sum = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        total += i + 1;
    }
    return total - sum;
  };

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 0
console.log(missingNumber([0, 1])); // 2
