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

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 0
console.log(missingNumber([0, 1])); // 2
