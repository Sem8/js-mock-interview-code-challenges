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

// const reverseArrRecursive = arr => {
//   let reverseArr = [];
//   reverseArr.push(arr[arr.length - 1]);

//   if (arr.length < 1) {
//     return arr;
//   } else {
//     arr.pop();
//     // console.log('arr', arr);
//     // console.log('reverseArr', reverseArr);
//     let newVal = reverseArrRecursive(arr);
//     reverseArr.push(newVal);
//     return reverseArr.flat();
//   }
// };


// Suggested Solution 1: Takes just an array as an argument
/*Pseudocode:
1. Declare an empty array, call it finalArr
2. Make an inner function, call it reverseArrInnerRecurse which takes in an input array arr2 as a parameter.
3. Inside inner recursive function reverseArrInnerRecurse, make an if statement of if input array parameter of this inner function, arr2 length is
not 0 then pop the last element from this inner array arr2, and push it into the reverseArr array.
4. Then recursively call the inner function reverseArrInnerRecurse, passing in it's input parameter arr2 as a parameter.
5. Outside inner function, reverseArrInnerRecurse, invoke this inner function reverseArrInnerRecurse and passing in the input parameter arr from
the parent function's parameter as an argument. 
6. Return the finalArr 
 */
// const reverseArray = arr => {
//   let finalArr = [];
  
//   function reverseArrInnerRecurse(arr2) {
//     if (arr2.length !== 0) {
//       finalArr.push(arr2.pop());
//       reverseArrInnerRecurse(arr2);
//     }
//   };
//   reverseArrInnerRecurse(arr);
//   return finalArr;
// };

// console.log(reverseArray(['a', 'b', 'c']));

// Suggested Solution 2: Takes in an array as input
/*Pseudocode:
1. make a base case of if input array length of arr is 0 then just return array.
2. Otherwise (if input array length is not 0) then return the recursive call of the function passing in the input array but sliced from index 1
(array starts from 2nd element) and the result of that recursive call of that sliced array concatenated to the 1st array element from the input 
array (using the concat array method).
 */

// const reverse = arr => {
//   // base case 
//   if (arr.length === 0) {
//     return arr;
//   }
//   return reverse(arr.slice(1)).concat(arr[0]);
// };
// console.log(reverse(['a', 'b', 'c']));

// let a = ['a', 'b', 'c'];
// let a2 = a.slice(1).concat(a[0]);
// let a3 = a2.slice(1).concat(a2[0])
// let a4 = a3.slice(1).concat(a3[0])
// console.log(a3);
// console.log(a.slice(1).concat(a[0]));
// console.log(['b', 'c'].concat('a'));  // ['b', 'c', 'a']
// console.log(['b', 'c'].concat(['a']));  // ['b', 'c', 'a']



// Suggested solution 3: Takes in the array to be reversed as parameter
/* Pseudocode:
1. Make an if statement of if input array length of arr is less than 2 then just return the input arr (This is the base case)
2. Otherwise (if input array, arr length is more than 2) then put the last element from input arr into an array using pop method and concat this
last element array to the recursive call of the reverseArrRecursive function, passing in the input arr as an argument and return this.
 */
// const reverseArrRecursive = arr => {
//     if (arr.length < 2) {
//         return arr;
//     }
//     return [arr.pop()].concat(reverseArrRecursive(arr));
// };
// console.log(reverseArrRecursive(["a", "b", "c"])); // ['c', 'b', 'a']



// console.log(reverseArrRecursive(["a", "b", "c"])); // ['c', 'b', 'a']
// // reverseArrRecursive(['a', 'b', 'c'])


// Suggested solutin 4: Takes in array to be reversed called arr and length of input array called len as arguments
/*Pseudocode:
1. Make a base case of if input len (input array arr length) is 0 then return an empty array.
2. Otherwise put the last element from the input array arr using the len-1 indexing into an array and using concat method, add it to the recursive
function call of the reverseArray, with input of array arr and the 2nd parameter input of passed in as decrementing len with --len and return this
 */

const reverseArray = (arr, len) => {
    if (len == 0) {
        return [];
    }
    return [arr[len-1]].concat(reverseArray(arr, --len));
};

let arr1 = [1, 2, 3, 4, 5]

console.log(reverseArray(arr1, arr1.length));


