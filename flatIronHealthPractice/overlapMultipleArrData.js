/* 
var array1 = ["Lorem", "ipsum", "dolor"];
var array2 = ["Lorem", "ipsum", "quick", "brown", "foo"];
var array3 = ["Jumps", "Over", "Lazy", "Lorem"];
var array4 = [1337, 420, 666, "Lorem"];
//Result should be ["Lorem"];

intersection([1,2,3], [2,3,4,5])
and get:
[2, 3]
 */

// https://stackoverflow.com/questions/37320296/how-to-calculate-intersection-of-multiple-arrays-in-javascript-and-what-does-e
// https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/
// https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript/1885660

// Solution 1:

// var array1 = ["Lorem", "ipsum", "dolor"];
// var array2 = ["Lorem", "ipsum", "quick", "brown", "foo"];
// var array3 = ["Jumps", "Over", "Lazy", "Lorem"];
// var array4 = [1337, 420, 666, "Lorem"];

// function intersection() {
// 	var result = [];
//   var lists;
  
//   if(arguments.length === 1) {
//   	lists = arguments[0];
//   } else {
//   	lists = arguments;
//   }
  
//   for(var i = 0; i < lists.length; i++) {
//   	var currentList = lists[i];
//   	for(var y = 0; y < currentList.length; y++) {
//     	var currentValue = currentList[y];
//       if(result.indexOf(currentValue) === -1) {
//         var existsInAll = true;
//         for(var x = 0; x < lists.length; x++) {
//           if(lists[x].indexOf(currentValue) === -1) {
//             existsInAll = false;
//             break;
//           }
//         }
//         if(existsInAll) {
//           result.push(currentValue);
//         }
//       }
//     }
//   }
//   return result;
// }

// console.log(JSON.stringify(intersection([array1, array2, array3, array4])));


// // Solution 2:
// var array1 = ["Lorem", "ipsum", "dolor"],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem"],
//     array4 = [1337, 420, 666, "Lorem"],
//     data = [array1, array2, array3, array4],
//     result = data.reduce((a, b) => a.filter(c => b.includes(c)));

// console.log(result);