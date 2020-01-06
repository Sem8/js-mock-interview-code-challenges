/* Pseudocode:
1. Sort the the array with sort method, return a-b with a and b as callback functions in the sort method
2. Initialize an empty array call it result. 
3. Make a for loop, starting at index, leftIndex of 0, ending at input arr length - 3 (because middleIndex is right after it and it'll 
end at arr.length - 2 and right index starts us off at arr length -1 so we don't need to go beyond arr.length - 3), increment leftIndex
4. Inside for loop, make a variable called middleIndex and set it equal to leftIndex + 1 (middleIndex comes right after leftIndex)
5. Still inside for loop, make a variable called rightIndex set it equal to the last array element index (arr.length - 1)
6. Make an if statement of if array element at leftIndex is more than target or if element at leftIndex is the same as element right 
before leftIndex then just continue to skip that element (to prevent duplicate values from being considered b/c it's waste of time
and space)
7. Otherwise (if no duplicates for leftIndex), then make a variable called sum and set it equal to the sum of all 3 elements from 
leftIndex, middleIndex and rightIndex.
8. (still inside for loop), make an if statement of if sum is less than target then, increment middleIndex to increase the sum
9. Still inside for loop, make another if statement of if sum is more than input target then, decrement rightIndex to decrease the sum
10. else (if sum is equal to input target) then push the elements from leftIndex, middleIndex and rightIndex each in an array into the
result array
11. And then to take care of edge case of if there are duplicate values at middleIndex, then while element at middleIndex is the same as 
element at 1 after middleIndex then just increment middleIndex to skip duplicate value
12. still inside for loop, take care of another edge case of if there are duplicate values at right index then while element at rightIndex
is the same as the element at 1 before the rightIndex then just decrement rightIndex
13. And then increment middleIndex (still inside for loop)
14. Decement rightIndex (still inside for loop)
15. Outside for loop, return result array 

 */

const threeNumberSum = (arr, target) => {
  arr.sort((a, b) => {
    return a - b;
  });

  let result = [];

  for (let leftIndex = 0; leftIndex < arr.length - 3; leftIndex++) {
    let middleIndex = leftIndex + 1;
    let rightIndex = arr.length - 1;

    if (arr[leftIndex] > target || arr[leftIndex] === arr[leftIndex - 1])
      continue;    

    while (middleIndex < rightIndex) {
      let sum = arr[leftIndex] + arr[middleIndex] + arr[rightIndex];

      if (sum < target) {
        middleIndex++;
      } else if (sum > target) {
        rightIndex--;
      } else {
        result.push([arr[leftIndex], arr[middleIndex], arr[rightIndex]]);
        while (arr[middleIndex] === arr[middleIndex + 1]) middleIndex++;
        while (arr[rightIndex] === arr[rightIndex - 1]) rightIndex--;
        middleIndex++;
        rightIndex--;
      };
    };
  };

  return result;
};

// threeNumberSum([-4, -1, -1, 0, 1, 2], 0);
console.log(threeNumberSum([-1, 0, 1, 2, -1, -4], 0)); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30)); // [[6, 9, 15], [7, 8, 15]]
