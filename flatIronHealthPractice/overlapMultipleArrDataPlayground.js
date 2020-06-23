// solution 4:
var arrays = [
  ["apple", "orange", "banana", "pear", "fish", "pancake", "taco", "pizza"],
  ["taco", "fish", "apple", "pizza"],
  ["banana", "pizza", "fish", "apple"],
];

/* Pseudocode:
- Take all arrays and remove first array by shift method
- Chain a filter method to that shifted method so the filter will only run on the removed array,
   - filter takes in a callback, 1st argument in callback is every element in that removed array, call it eachFirstArrElem
      - inside filter method, run every method on original array of arrays of arguments which also takes in a callback, this parameter
      represents each non-removed array from array of arrays call it eachAdditionalArray
         - Inside every method, check that the eachFirstArrElem exists in eachAdditionalArray using indexOf method where 
         eachAdditionalArray is the array with indexOf method chained passing in parameter of eachFirstArrElem
         
- Save the result to a variable called result which will return an array b/c these higher order methods returns an array
 */

// Written by me:
let result = arrays.shift().filter((eachFirstArrElem) => {
  return arrays.every((eachAdditionalArray) => {
    return eachAdditionalArray.indexOf(eachFirstArrElem) !== -1;
  });
});

// console.log('result: ', result); // ['apple', 'fish', 'pizza']

// Solution 2:
// var array1 = ["Lorem", "ipsum", "dolor"],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem"],
//     array4 = [1337, 420, 666, "Lorem"],
//     data = [array1, array2, array3, array4]

/* Pseudocode:
- Use reduce method on the data of array of arrays, pass in parameters called firstArr and secondArr (which includes the first array
    element in the array of arrays and 2nd array element in the array of arrays)
    - Inside the reduce method, use the filter method on firstArr element, pass in a callback where the filter method argument is 
    called eachFirstArrElem,
       -Inside teh filter method callback function check that the eachFirstArrElem exists in the secondArr using includes method where
       includes method is chained to secondArr passing in parameter of eachFirstArrElem
Save all the results of that reduce method to a variable called commons 
 */

// My written solution:
// let commons = data.reduce((firstArr, secondArr) => {
//     return firstArr.filter(eachFirstArrElem => {
//         return secondArr.includes(eachFirstArrElem);
//     })
// });

// console.log('commons: ', commons);  // ['Lorem']

// Solution 1:
var array1 = ["Lorem", "ipsum", "dolor"];
var array2 = ["Lorem", "ipsum", "quick", "brown", "foo"];
var array3 = ["Jumps", "Over", "Lazy", "Lorem"];
var array4 = [1337, 420, 666, "Lorem"];

let array5 = [
    "apple",
    "orange",
    "banana",
    "pear",
    "fish",
    "pancake",
    "taco",
    "pizza",
  ],
  array6 = ["taco", "fish", "apple", "pizza"],
  array7 = ["banana", "pizza", "fish", "apple"];

/* Pseudocode: - Doesn't work for arrow functions because arguments belongs to global object in arrow function not local function
- Get all the input array arguments in an array using the arguments keyword, save it in a variable called argumentsList (it'll be
an array of arrays)
- Initialize an empty array, call it commonArr
- loop through the arguments array, argumentsList and save the current array element in a variable called currentArr
   - Make another for loop inside previous for loop, this time looping through each element in the currentArr array and put it in a
   variable called currentArrElem
      - Inside 2nd inner for loop, cehck if currentArrElem doesn't already exist in commonArr (using indexOf method) then 
      make another for loop inside if statement to go through each array element from the argumentsList array of arrays
         - Make another variable called existsInAllArr and initialize it to true
         - inside the 3rd inner for loop, check if currentArrElem is not in the current array element of the current index in this 
         for loop and if that's the case (currentArrElem is not in current array) then set existsInAllArrays to false and break out of the 
         loop
         - Outside the 3rd inner for loop, if existsInAllArr is true then push the currentArrElem to the commonArr array
- Outside all for loops, return the commonArr array
 */

// My own written code:
let intersection = function () {
  let argumentsList = arguments;
  let commonArr = [];

  for (let i = 0; i < argumentsList.length; i++) {
    let currentArr = argumentsList[i];

    for (let j = 0; j < currentArr.length; j++) {
      let currentArrElem = currentArr[j];

      if (commonArr.indexOf(currentArrElem) === -1) {
        let existsInAllArrays = true;

        for (let k = 0; k < argumentsList.length; k++) {
          if (argumentsList[k].indexOf(currentArrElem) === -1) {
            existsInAllArrays = false;
            break;
          }
        }
        if (existsInAllArrays) {
          commonArr.push(currentArrElem);
        }
      }
    }
  }

  return commonArr;
};

// console.log(intersection(array1, array2, array3, array4)); // ['Lorem']
console.log(intersection(array5, array6, array7));
