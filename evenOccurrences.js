// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return 
// the first one. Return null if there are no even-occurrence items. For example, if given the input of [1, 2, 2, 3, 4, 4, 4, 4], 
// the output should be 2

// Pseudocode: 1) Initialize an empty object, let's call it hashTable
// 2) loop through the array. Make if statement, if arry item at current index in hashTable, Increment the value of the array item
// at current index as key in the hashtable.
// 3) else (if array Item not in hashTable) set the key in hashTable as the current array item at current index and value to 1
// 4) Loop through hashTable with for/in loop and if value of a key value pair is divisible by 2 (hashTable[item] % 2 == 0) return 
// that key item

// My first pass approach solution
// const evenOccurrence = arr => {
//     let hashTable = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]]) {
//             hashTable[arr[i]]++;
//         } else {
//             hashTable[arr[i]] = 1;
//         }
//     }
//     // console.log(hashTable);
//     for (eachItem in hashTable) {
//         if (hashTable[eachItem] % 2 === 0) {
//             return eachItem;
//         }
//     }
//     return null;
// }

// Someone else's solution using forEach to loop through array.
const evenOccurrence = arr => {
    let storage = {};

    arr.forEach((value, index) => {
        storage[value] = storage[value] + 1 || 1;
    });

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (storage[current] % 2 === 0) {
            return current;
        }
    }
    return null;
};


// console.log(evenOccurrence([1, 2, 2, 3, 4, 4, 4, 4]));
console.log(evenOccurrence([1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4]))







// function evenOccurrence (array) {
//     // Store counts
//     var storage = {};
  
//     // Store each value within the storage object to keep count
//     array.forEach(function(value, index) {
//       storage[value] = storage[value] + 1 || 1;
//     });
  
//     // loop through array to find first occurence of an even count
//     for (var i = 0; i < array.length; i++) {
//       var current = array[i];
  
//       if (storage[current] % 2 === 0) {
//         return current;
//       }
//     }
  
//     // If no even occurrence found, return null
//     return null;
//   }