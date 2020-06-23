/*Compute sum of an array of integers using recursion */

let sumOfArrRecursion = arr => {
    if (arr.length === 0 ) {
        // console.log('arr in base case: ', arr);
        return 0;
    }
    else {
        // console.log('arr in recursion: ', arr);
        // console.log('arr[0]: ', arr[0]);
        return arr[0] += sumOfArrRecursion(arr.slice(1))
    }

}

// Another solution:
var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  


let arr1 = [1, 2, 3, 4, 5, 6]

console.log(sumOfArrRecursion(arr1)); // 21