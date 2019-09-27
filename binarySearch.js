// Iterative approach: O(log n) time complexity
/*Pseudocode:
1. Set a variable called startIndex and set it to 0 which will be the start index of the array at the beginning
2. Intialize a variable called endIndex and set it to the last index of the array which will currently at the very beginning, be the index
of the very last element in the array.
3. Make a while loop of while startIndex is less than or equal to endIndex
4. Inside while loop, find the current midpoint index of the array with Math.floor method where you take the start index and end index and
sum them up and then divide by 2 to get the middle index and set it to a variable called midIndex
5. Make an if statement, check if element at middle index is equal to the target input element. If so, return the mid Index to show the 
index at which the target input element is at, in the array.
6. Make another if statement outside previous if statement (not an inner if statement) to check if element at middle index (midIndex) in the
array is less than target input element. If so, set the start index (startIndex) to the current middle index (midIndex) plus 1 to now 
look in the latter half of the array and start one element after the middle index since we already checked everything up to the middle index
and including the middle index element.
7. Else, (if elment in array at current middle index is greater than target input element) set the end index (endIndex) to current middle 
index (midIndex) minus 1 to now only check the first half of the array. While loop will continue until an element is found and that index
is returned. 
8. Outside while loop, if element is not in array return 'element is not in array'
 */

// const binarySearch = (arr, target) => {
//     let startIndex = 0;
//     let endIndex = arr.length - 1;

//     while (startIndex <= endIndex) {
//         let midIndex = Math.floor((startIndex + endIndex) / 2);

//         if (arr[midIndex] === target) {
//             return `Number is at index ${midIndex}`
//         }
//         else if (arr[midIndex] < target) {
//             startIndex = midIndex + 1;
//         } else {
//             endIndex = midIndex - 1;
//         }
//     }
//     return `Target is not found`;
// };

// console.log(binarySearch([1, 3, 5, 7, 8, 9], 5)); // 2
// console.log(binarySearch([1, 3, 5, 7, 8, 9], 8)); // 4
// console.log(binarySearch([1, 3, 5, 7, 8, 9], 3)); // 1
// console.log(binarySearch([1, 3, 5, 7, 8, 9], 6)); // Target is not found

// Recursive solution:
/*Pseudocode:
1. Set a base case with if statement of if start index is more than end index return 'Target not found'
2. Intialize a variable called midIndex and set it equal to the halfway point index number in the array using Math.floor method, where the
start index and end index are summed and then divided by 2.
3. Make if statement, check if element at middle index (midIndex) of array is greater than target input element, if so, return the recursive
function where end input index will be the current middle index (midIndex) minus 1.
4. Else (if array element at middle index or midIndex is less than the target input element), return the recursive function calling itself
where the start input in the function will be set to the middle index (midIndex) plus 1. 
 */

const recursiveBinarySearch = (arr, target, start, end) => {
  // base case
  if (start > end) {
    return `Target not found`;
  }

  let midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === target) {
    return `Target element is at index ${midIndex}`;
  } else if (arr[midIndex] > target) {
    return recursiveBinarySearch(arr, target, start, midIndex - 1);
  } else {
    return recursiveBinarySearch(arr, target, midIndex + 1, end);
  }
};

console.log(recursiveBinarySearch([1, 3, 5, 7, 8, 9], 5, 0, 5)); // 2
console.log(recursiveBinarySearch([1, 3, 5, 7, 8, 9], 8, 0, 5)); // 4
console.log(recursiveBinarySearch([1, 3, 5, 7, 8, 9], 3, 0, 5)); // 1
console.log(recursiveBinarySearch([1, 3, 5, 7, 8, 9], 6, 0, 5)); // Target is not found
