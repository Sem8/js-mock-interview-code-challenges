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

// var removeDuplicates = function(nums) {
//     let pointer = 0;

//     while (pointer < nums.length) {
//         if (nums[pointer + 1] === nums[pointer]) {
//             nums.splice(pointer + 1, 1);
//         } else {
//             pointer++;
//         }
//     }
//     console.log('updated nums: ', nums);
//     return nums.length;

// };

// Leetcode solution - using 2 pointers
/* Pseudocode:
- Have 2 pointers a slow pointer and fast pointer, slowPointer variable 
initialized to 0, and fast pointer will be the i variable in for loop
- Have a for loop, starting at index 1 and going till end of array
   - inside for loop, have an if statement of if the next element from current
   index (element at i+1) is not the same as element from current index i, only
   then increment slowPointer by 1 and swap element at slowPointer index with
   element at current index i
- outside for loop return slowPointer + 1 (it'll give number of swaps + 1 which
equals number of unique elements which is the array length we're looking for)
 */

var removeDuplicates = function (nums) {
  let slowPointer = 0;

  if (nums.length <= 0) {
    return 0;
  }

  let i = 1;

  for (i; i < nums.length; i++) {
    if (nums[slowPointer] !== nums[i]) {
      slowPointer++;
      nums[slowPointer] = nums[i];
    }
  }
  return slowPointer + 1;
};

// Another solution from Kevin Naughton - but not that great time complexity
// with only 13.5% faster than others

// var removeDuplicates = function(nums) {
//     let index = 1;
//     for (let i = 0; i < nums.length -1; i++) {
//         if (nums[i] !== nums[i+1]) {
//             nums[index++] = nums[i + 1]
//         }
//     }
//     console.log('updated nums: ', nums);
//     return index;
// };

console.log(removeDuplicates([1, 1, 2])); // arr = [1, 2] ; answer: 2 (length)
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // arr = [0, 1, 2, 3, 4] ; answer: 5 (length)


// 
/*
Given a string containing just the characters '(', ')' ,determine if the input string is valid.

An input string is valid if:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()()()"
Output: true

Example 3:

Input: "(()"
Output: false

Example 4:

Input: "((()))"
Output: true

Example 5:

Input: ")()("
Output: false

Additional characters '{', '}', '[' and ']',
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

*/

/*
- First check, if the length of the string is odd then automatically return false
- Have an object to store key as open and closed parentheses and incrment count 
every time we encounter open parentheses and decreement count for closed parenthesis
- *** Edge case: if it starts with closed parenthesis?

// in the for loop, 

*/

