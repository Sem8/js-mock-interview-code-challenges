/* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 */

/* Pseudocode
- Have a pointer variable initialized to 0
- Have a while loop of while pointer is less than input nums array length
   - in while loop check if element at index of pointer + 1 is same as element at index of pointer then splice 1 element 
   from nums array at index of pointer + 1
   - else, if the element at pointer + 1 index is not same as element at pointer index then increment pointer by 1

 */

var removeDuplicates = function(nums) {
    let pointer = 0;

    while (pointer < nums.length) {
        if (nums[pointer + 1] === nums[pointer]) {
            nums.splice(pointer + 1, 1);
        } else {
            pointer++;
        }
    }
    console.log('updated nums: ', nums);
    return nums.length;
    
};

console.log(removeDuplicates([1,1,2])); // arr = [1, 2] ; answer: 2 (length)
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // arr = [0, 1, 2, 3, 4] ; answer: 5 (length)