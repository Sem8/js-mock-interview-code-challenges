// My solution: (Original solution kind of didn't work because of slight mismatch in logic but it works now)
/*Pseudocode:
1. Initialize an empty array call it flatArr.
2. Make a helper function called helper which takes in an array as input.
3. Inside helper function make a for loop to loop through the input array, arr, starting at index i of 0 and ending at index i of less than
array length, increment i. 
4. Inside for loop, make a base case of if current array element at current index is an array so (Array.isArray(arr[i])) then recursively 
call the helper function, passing in arr[i] as the input parameter into the recursive function. 
4. Else (if current array element at current index is not an array) then push current array element at current index (arr[i]) into the 
flatArr array.
6. Outside helper function, call the helper function passing in input nestedArr array from parent function as a parameter into the helper 
function.
5. Return flatArr array outside for loop
 */

// 1st way:
const flattenArray = nestedArr => {
    let flatArr = [];
    const helper = arr => {
        for (let i = 0; i< arr.length; i++) {
            if (Array.isArray(arr[i])) {
                helper(arr[i]);
            } else {
                flatArr.push(arr[i]);
            }
        }
    };
    helper(nestedArr);
    return flatArr;
}


// 2nd way:
// const flattenArray = nestedArr => {
//   let newArr = [];
//   nestedArr.forEach(function iterate(el) {
//     if (el instanceof Array) {
//       el.forEach(iterate);
//     } else {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// };


// 3rd way:

// const flattenArray = nestedArr => {
//     return nestedArr.join().split(',').map(i => parseInt(i));
// };

/*Console log tests */
console.log(flattenArray([1, [2, [[3, 4], 5], 6]])); // [1, 2, 3, 4, 5, 6]
