// Get sum of array elements using recursion
// Example:
// sumArr = [1, 2, 3];  // 6

let recursiveSumArr = (arr) => {
  if (arr.length === 0) return [];
  else if (arr.length === 1) return arr[0];
  else
    return arr[arr.length - 1] + recursiveSumArr(arr.splice(arr.length - 1, 1));
};

// const recursiveSumArr = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr[0] + recursiveSumArr(arr.slice(1));
//   }
// };

console.log(recursiveSumArr([1, 2, 3]));
