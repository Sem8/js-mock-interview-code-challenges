/* Given an array, increment any duplicate values until every element is unique. Return the minimum sum of elements for the 
unique array

https://stackoverflow.com/questions/38384537/minimum-unique-array-sum
input1[] = { 2, 3, 4, 5 } => return 19 = 2+3+4+5 (all elements are unique, so just add them up)
input2[] = { 1, 2, 2 } => return 6 = 1+2+3 (index 2 is duplicate, so increment it)
input3[] = { 2, 2, 4, 5 } => return 14 = 2+3+4+5 (index 1 is duplicate, so increment it)


https://www.geeksforgeeks.org/minimum-increment-operations-to-make-array-unique/
Input: A[] = [3, 2, 1, 2, 1, 7]
Output: 6
Explanation:  After 6 moves, the array could be 
[3, 4, 1, 2, 5, 7].
It can be shown that it is impossible for the array 
to have all unique values with 5 or less moves.

Input: A[] = [1, 2, 2]
Output: 1
Explanation: After 1 move [2 -> 3], the array could be [1, 2, 3].

*/

/* Pseudocode: My solution
- Declare an empty object, counter to hold counts of each element in input array
- Declare an empty array to hold new non-duplicate elements call it uniqueArr
- loop through input array w/ for loop
   - Make a pointer to current array element call that variable name placeHolder
   - Make if statement in for loop, if current input array element, placeHolder doesn't exist as a key then put it in counter object
   w/ value of 1 and also push that element to uniqueArr array
   - Else, make a while loop of while current array element exists as key, increment placeHolder by 1
   - Outside while loop, put placeHolder as a key to the counter object with value of 1 and push it into the uniqueArr array
- Outside previous for loop, can use reduce method to return the sum of all unique elements from uniqueArr
*/

let minUniqueArrSum = (arr) => {
  let counter = {};
  let uniqueArr = [];
  let moves = 0;

  for (let i = 0; i < arr.length; i++) {
    let placeHolder = arr[i];

    while (counter[placeHolder]) {
      placeHolder++;
      moves++;
    }
    counter[placeHolder] = 1;
    uniqueArr.push(placeHolder);
  }

//   console.log('uniqueArr: ', uniqueArr);
//   return uniqueArr.reduce(
//     (firstParam, secondParam) => firstParam + secondParam
//   );

return moves;
};

let arr1 = [2, 3, 4, 5];
let arr2 = [1, 2, 2];
let arr3 = [2, 2, 4, 5];
let arr4 = [3, 2, 1, 2, 1, 7]; // [3, 2, 1, 4, 5, 7]

console.log(minUniqueArrSum(arr1)); // 14 ; // 0
console.log(minUniqueArrSum(arr2)); // 6 ; // 1
console.log(minUniqueArrSum(arr3)); // 14 ; // 1
console.log(minUniqueArrSum(arr4)); // 22 ; // 6


var minIncrementForUnique = function(A) {
    let counter = {};
    let uniqueArr = [];
    let moves = 0;
  
    for (let i = 0; i < A.length; i++) {
      let placeHolder = A[i];
  
      while (counter[placeHolder]) {
        placeHolder++;
        moves++;
      }
      counter[placeHolder] = 1;
      uniqueArr.push(placeHolder);
    }  
  return moves;
    
};

// Solution 2 from leetcode slightly faster run time than mine:
/* Pseudocode:
- Sort the array
- Have a variable called counter initialized to 0
- Loop through the sorted array, starting at index 1
   - in for loop, have a while loop of while element at previous index
   is less than or equal to element at current index then increment 
   element at current index by 1
      - increment counter by 1 in the while loop as well 
- return counter outside for loop 
*/ 
var minIncrementForUnique = function(A) {
  let counter = 0;
  A.sort((a, b) => {
    return a-b;
  });

  for (let i = 1; i < A.length; i++) {
    while (A[i] <= A[i-1]) {
      A[i]++;
      counter++; 
    }
  };

  return counter;
}


// Solution 3: 76 ms, faster than 99.30% of JavaScript solutions 
// and < 100% space
var minIncrementForUnique = function(A) {
  let nums;
  // below is faster than new Array(n)
  (nums = []).length = 40001;
  nums.fill(0);
  
  // Let's save each number's count in it's own (index + 1) as it's zero based
  for (let i = 0; i < A.length; i += 1) {
    nums[A[i]] += 1;
  }
  
  let lastNumberMoves = -1;
  
  let minimumMoves = 0;
  
  // Iterate over each above number and work on those > 1 occurence
  for (let i = 0; i < 40000; i += 1) {
    if (nums[i] == 0) {
      continue;
    }
    if (nums[i] > 1) {
      // let's retrieve the number's occurence to eliminate duplicates
      // to do this we have subract 1 from the count
      let movesToMakeItUnique = nums[i] - 1;
      
      // let's carryforward this movesToMakeItUnique to next number's occurence
      nums[i + 1] += movesToMakeItUnique;
      
      // increase move by movesToMakeItUnique
      minimumMoves += movesToMakeItUnique;
      
      lastNumberMoves = nums[i + 1];
    }
  }
  
  let finalMoves = lastNumberMoves - 1;
  
  for (let i = 1; i <= finalMoves; i += 1) {
    minimumMoves += i;
  }
  
  return minimumMoves;
  
};