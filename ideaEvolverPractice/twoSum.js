/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/* Pseudocode:
- Declare an empty object, call it complement
- Loop through nums array, check if current array element doesn't already exist in complement object then store sum complement of 
the current array element as key, and index as value
- otherwise push the index value of the current element's complement from the complement object as well as the index of the current 
element   
 */

// var twoSum = function (nums, target) {
//   let complement = {};
//   let resultArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     let currentElem = nums[i];
//     let currentElemComplement = target - nums[i];
//     if (complement[currentElem] == undefined) {
//       complement[currentElemComplement] = i;
//       //   console.log('complement Obj: ', complement);
//     } else {
//       resultArr.push(complement[currentElem]);
//       resultArr.push(i);
//     }
//   }
//   return resultArr;
// };

// Another version
var twoSum = function (nums, target) {
  let complement = {};

  for (let i = 0; i < nums.length; i++) {
    let sumComplement = target - nums[i];
    if (sumComplement in complement) {
      return [complement[sumComplement], i];
    }
    complement[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
