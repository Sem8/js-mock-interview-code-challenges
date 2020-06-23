// Flatten a nested array

/* Pseudocode:
- Declare an empty array called flatArr to hold the flattened naked values and return in a 1-d array
- loop through each value of the input nestedArr using for loop or forEach method, 
   - Inside for loop, make if statement of if current element from current index of loop is an array using isArray method then
   let flatArr equal to concatenation of flatArr to the recursive call of flattenArr passing in parameter of current element in the
   loop 
   - Else (if current element is not an array) then just push the current element to the flatArr array
   (So the recursion runs till we get an individual element that's not an array and then pushes in to flatArr array and recursion 
   bubbles up the stack)
- Return flatArr at the end after all loops 
 */

let flattenArr = (nestedArr) => {
    let flatArr = [];

    nestedArr.forEach(eachArrElem => {
        if (Array.isArray(eachArrElem)) {
            flatArr = flatArr.concat(flattenArr(eachArrElem));
        }
        else {
            flatArr.push(eachArrElem);
        }
    });
    return flatArr;
}

let example = [[1, 2], 3, [4, 5, [6, 7, 8, [9, [10]]]]];
// console.log(flattenArr(example)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let shallowNesting = example.reduce((acc, val) => {
    return acc.concat(val);
}, []);

console.log(shallowNesting); // [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 9, [Array] ] ] ]