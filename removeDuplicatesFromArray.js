// Good enough solution
// const removeDuplicate = (arr) => {
//   let hashTable = {};
//   let arrChecker = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(!hashTable[arr[i]]) {
//       arrChecker.push(arr[i]);
//       hashTable[arr[i]] = true;
//     }
//   }
//   return arrChecker;
// }

// For maximal performance:
// const removeDuplicate = (arr) => {
//   let hashTable = {};
//   let arrChecker = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(hashTable[arr[i]] !== 1) {
//       hashTable[arr[i]] = 1;
//       arrChecker[j++] = arr[i]
//     }
//   }
//   return arrChecker;
// }

// Short and concise one liner solution using set
// const removeDuplicate = (arr) => {
//   return [...new Set(arr)];
// }

// Using filter
// const removeDuplicate = (arr) => {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// Using reduce method
const removeDuplicate = (arr) => {
  
}


  console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1])); // [1, 3, 5, 6, 7, 8]