/* 	Write a function that takes an array of unsorted numbers and returns that same array where all the even numbers are on the left side of 
the array and all the odd numbers are on the right side of the array, and it has to be done in-place (you can’t return a new array) 
ex. Input: [2, 9, 7, 6, 15, 20, 24, 12, 28, 8]
Output: [2, 6, 20, 24, 12, 28, 8, 9, 7, 15]
 */

// My solution:
/*
1. Have a right pointer called evenLIndex starting at index 0
2. Have a left pointer called oddRIndex starting at last index of array (array length - 1)
3. Make a while loop of while left index evenLIndex is less than right index, oddRIndex
4. Inside while loop make an if statement of if element in array at left index is even AND element from array at right index is odd then just
increment left index and decrement right index
5. Still inside while loop, make another if statement of if element in array at left index is even and element from array at right index is 
even only increment left index by 1
6. Still inside while loop, make another if statement of if element in array at left index is odd and element from array at right index is
odd then decrement right index only
7. Still inside while loop, make another if statement of if element in array at left index is odd and element from array at right index is
even then swap the 2 elements with each other and then increment the left index and decrement the right index.
8. Outside while loop, return the input array
 */

const segregateEvenOdd = arr => {
  let evenLIndex = 0;
  let oddRIndex = arr.length - 1;

  while (evenLIndex < oddRIndex) {
    if (arr[evenLIndex] % 2 === 0 && arr[oddRIndex] % 2 == 1) {
      evenLIndex++;
      oddRIndex--;
    }
    if (
      arr[evenLIndex] % 2 === 0 &&
      arr[oddRIndex] % 2 === 0 &&
      evenLIndex < oddRIndex
    ) {
      evenLIndex++;
    }
    if (
      arr[evenLIndex] % 2 == 1 &&
      arr[oddRIndex] % 2 == 1 &&
      evenLIndex < oddRIndex
    ) {
      oddRIndex--;
    }
    if (
      arr[evenLIndex] % 2 == 1 &&
      arr[oddRIndex] % 2 === 0 &&
      evenLIndex < oddRIndex
    ) {
      let temp = arr[evenLIndex];
      arr[evenLIndex] = arr[oddRIndex];
      arr[oddRIndex] = temp;
      // console.log('evenLIndex: ', evenLIndex);
      // console.log('oddRIndex: ', oddRIndex);
      // console.log('arr[evenLIndex]: ', arr[evenLIndex]);
      // console.log('arr[oddRIndex]: ', arr[oddRIndex]);
      // console.log('arr: ', arr);
      evenLIndex++;
      oddRIndex--;
    }
  }
  return arr;
};

/* Test cases: */
console.log(segregateEvenOdd([12, 34, 45, 9, 8, 90, 3])); // [12, 34, 8, 90, 45, 9, 3]
console.log(segregateEvenOdd([12, 10, 9, 45, 2, 10, 10, 45])); // [12 10 2 10 10 45 9 45]
console.log(segregateEvenOdd([12, 17, 70, 15, 22, 65, 21, 90])); // [12, 90, 70, 22, 15, 65, 21, 17]
console.log(segregateEvenOdd([7, 2, 4, 9, 10, 11, 13, 27])); // [10, 2, 4, 9, 7, 11, 13, 27]
