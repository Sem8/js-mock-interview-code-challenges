/* Question: The function is expected to return an INTEGER.
The function accepts following parameters:
1. INTEGER k - The cutoff rank
2. INTEGER_ARRAY marks - array of student marks
 */
/*Pseudocode:
1. Sort the list descending (high to low)
2. Initialize a variable called rank and set it to 1.
4. Initialize an empty object, call it hashTable (to store array elements with corresponding ranking).
5. Make a for loop to loop through the 2nd function parameter, the array starting at index 0 and ending at last array index.
6. Make an if statement check if current array element at current index is less than the previous array element at index right before
current index then increment rank by 1.
7. Put into the hashtable, the current array element at current index as the value and it's rank as the key.
8. Outside for loop, with the array last index of method for the input array, pass in as the parameter, the hashTable object with the input
k rating as the key of the hashTable (which gets it's value and it's value was stored as the array element that it was ranked at) and return
this + 1 because indexing starts at 0 but our ranking starts at 1. 
 */

const numofPrizes = (k, marks) => {
  let rank = 1;
  let hashTable = {};

  marks.sort((a, b) => {
    return b - a;
  });

  let newMarks = marks.filter(value => {
    return value != 0;
  });
  //   console.log("marks sorted", marks);
  //   console.log("newMarks sorted", newMarks);

  hashTable[1] = [newMarks[0]];

  for (let i = 0; i < newMarks.length; i++) {
    if (newMarks[i] < newMarks[i - 1] && newMarks[i] > 0) {
      rank = rank + 1;
    }
    hashTable[rank] = newMarks[i];
    // console.log('element', newMarks[i]);
    // console.log('rank: ', rank);
  }
  // console.log(hashTable);
  if (!(k in hashTable)) {
    return newMarks.length;
  } else {
    return newMarks.lastIndexOf(hashTable[k]) + 1;
  }
};

// numofPrizes(4, [20, 40, 60, 80, 100]);
// numofPrizes(4, [2, 2, 3, 4, 5]);
// numofPrizes(4, [1, 2, 2, 3, 4, 5]);
console.log(numofPrizes(4, [20, 40, 60, 80, 100])); // 4
console.log(numofPrizes(4, [2, 2, 3, 4, 5])); // 5
console.log(numofPrizes(4, [2, 2, 2, 4, 5])); // 5
console.log(numofPrizes(4, [2, 2, 2, 4, 5, 0, 0])); // 5


