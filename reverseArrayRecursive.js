/* Reverse array recursively:
Example: 
Input: ['a', 'b', 'c']
Output: ['c', 'b', 'a']
 */

// My solution:
/*Pseudocode:
1. Declare an empty array call it reverseArr 
2. Push the last element from the input array arr into the reverseArr array
3. Make a base case of if length of input array arr is less than 1 (empty) then just return the input array arr
4. Else (if input array length is not empty) then pop out the last element from the input array using pop method.
5. Declare a variable called newVal and set it equal to recursive call of the reverseArrRecursive function and pass in the input array arr
as an input parameter
6. push the newVal into the reverseArr using push method
7. Return the reverseArr array as a flattened version using array flat method (otherwise it'll return array within array because we keep 
pushing array element from input array that was already an array version in reverseArr array from previous function call)
 */

const reverseArrRecursive = arr => {
  let reverseArr = [];
  reverseArr.push(arr[arr.length - 1]);

  if (arr.length < 1) {
    return arr;
  } else {
    arr.pop();
    // console.log('arr', arr);
    // console.log('reverseArr', reverseArr);
    let newVal = reverseArrRecursive(arr);
    reverseArr.push(newVal);
    return reverseArr.flat();
  }
};

console.log(reverseArrRecursive(["a", "b", "c"])); // ['c', 'b', 'a']
// reverseArrRecursive(['a', 'b', 'c'])
