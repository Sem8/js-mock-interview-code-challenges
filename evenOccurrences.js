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