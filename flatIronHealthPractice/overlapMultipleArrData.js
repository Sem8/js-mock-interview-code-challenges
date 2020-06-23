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

var array1 = ["Lorem", "ipsum", "dolor"];
var array2 = ["Lorem", "ipsum", "quick", "brown", "foo"];
var array3 = ["Jumps", "Over", "Lazy", "Lorem"];
var array4 = [1337, 420, 666, "Lorem"];

function intersection() {
  var result = [];
  var lists;

  if (arguments.length === 1) {
    lists = arguments[0];
  } else {
    lists = arguments;
  }

  for (var i = 0; i < lists.length; i++) {
    var currentList = lists[i];
    for (var y = 0; y < currentList.length; y++) {
      var currentValue = currentList[y];
      if (result.indexOf(currentValue) === -1) {
        var existsInAll = true;
        for (var x = 0; x < lists.length; x++) {
          if (lists[x].indexOf(currentValue) === -1) {
            existsInAll = false;
            break;
          }
        }
        if (existsInAll) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
}

console.log(JSON.stringify(intersection([array1, array2, array3, array4])));

// // Solution 2:
var array1 = ["Lorem", "ipsum", "dolor"],
    array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
    array3 = ["Jumps", "Over", "Lazy", "Lorem"],
    array4 = [1337, 420, 666, "Lorem"],
    data = [array1, array2, array3, array4],
    result = data.reduce((a, b) => a.filter(c => b.includes(c)));

console.log(result);

// solution 4: 
var arrays = [
    ['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],
    ['taco', 'fish', 'apple', 'pizza'],
    ['banana', 'pizza', 'fish', 'apple']
    ];


var result = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

// Solution 3: for only 2 arrays comparison
function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}


