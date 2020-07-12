/* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

Constraints:

-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
 */

/* Pseudocode:
- Have variables called num1Pointer and num2Pointer initialized to 0 which will represent pointers to 
num1 and num2 array, respectively
- Have a while loop, while num2Pointer is less than input n, 
   - in while loop have an if statement if element in nums1 at nums1Pointer is less than element in nums2 at nums2Pointer 
   && element in nums1 at nums1Pointer + 1 is same as or more than element in nums2 at nums2Pointer then pop off last element from
   nums1 (which will be 0) and splice in element from nums2 at nums2Pointer into nums1 at index nums1Pointer + 2
 */

var merge = function (nums1, m, nums2, n) {
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  let updatedNums1Len = m;

  if (!nums1) {
    return [];
  }
  if (nums2.length === 0) {
    return nums1;
  }

  if (nums1.length === 1) {
    nums1.splice(0, 1, nums2[0]);
    return nums1;
  }

  while (nums2Pointer < nums2.length) {
    if (nums1[nums1Pointer] < nums2[nums2Pointer] ) {
      // nums1[nums1Pointer] != 0
      while (nums1[nums1Pointer] <= nums2[nums2Pointer] && nums1Pointer < updatedNums1Len) {
        nums1Pointer++;
      }
      nums1.pop();
      nums1.splice(nums1Pointer, 0, nums2[nums2Pointer]);
      updatedNums1Len++;
      nums1Pointer += 1;
      nums2Pointer++;

      // nums1[nums1Pointer] == 0
      if (nums1Pointer > updatedNums1Len) {
        nums1.pop();
        nums1.splice(nums1Pointer, 0, nums2[nums2Pointer]);
        updatedNums1Len++;
        nums1Pointer++;
        nums2Pointer++
    }
    }
     else if (nums1[nums1Pointer] >= nums2[nums2Pointer]) {
      nums1.pop();
      nums1.splice(nums1Pointer, 0, nums2[nums2Pointer]);
      updatedNums1Len++;
      nums1Pointer++;
      nums2Pointer++;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1, 2, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,2,3,5,6]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [3, 5, 6], 3)); // [1,2,3,3,5,6]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3)); // [1, 2, 3, 4, 5, 6]
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)); // [-1,0,0,1,2,2,3,3,3]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([2, 0], 1, [1], 1)); // [1, 2]


