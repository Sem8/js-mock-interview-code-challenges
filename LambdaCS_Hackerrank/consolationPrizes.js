/* Question: The function is expected to return an INTEGER.
The function accepts following parameters:
1. INTEGER k - The cutoff rank
2. INTEGER_ARRAY marks - array of student marks

Return how many students pass the cutoff mark. If 2 students get the same mark they get the same ranking. 
 */
/*Pseudocode:
1. Sort the list descending (high to low)
2. Initialize a variable called rank and set it to 1.
3. Filter the array to not include marks that are 0 because students with 0 mark don't get a ranking, and call this new filtered marks array
newMarks.
4. Initialize an empty object, call it hashTable (to store array elements with corresponding ranking).
5. Put into the hashTable object, a key of 1 (for 1st ranking) with value of 1st sorted array element.
6. Make a for loop to loop through the 2nd function parameter, the array starting at index 0 and ending at last array index.
7. Make an if statement check if current array element at current index is less than the previous array element at index right before
current index then increment rank by 1.
8. Outsdie the previous if statment but still inside for loop, put into the hashtable, the current array element at current index as the 
value and it's rank as the key.
9. Outside for loop, check if the input k is not in the hashTable object key (if k is bigger than the rankings from the array) and as long 
as k is not 0 then return the length of newMarks array.
10. Else if input k ranking is 0 then just return 0 as an edge case.
11. Otherwise ( if input k is available as a ranking key in the hashTable array) with the array last index of method for the input array, 
pass in as the parameter, the hashTable object with the input k rating as the key of the hashTable (which gets it's value and it's value 
was stored as the array element that it was ranked at) and return this + 1 because indexing starts at 0 but our ranking starts at 1. 
 */

const numofPrizes = (k, marks) => {
  let rank = 1;
  let hashTable = {};

  marks.sort((a, b) => {
    return b - a;
  });

  let newMarks = marks.filter(value => {
    return value !== 0;
  });
  //   console.log("marks sorted", marks);
  //   console.log("newMarks sorted", newMarks);

  hashTable[1] = [newMarks[0]];

  for (let i = 0; i < newMarks.length; i++) {
    if (newMarks[i] < newMarks[i - 1]) {
      rank = rank + 1;
    }
    hashTable[rank] = newMarks[i];
    // console.log('element', newMarks[i]);
    // console.log('rank: ', rank);
  }
  // console.log(hashTable);
  if (!(k in hashTable) && k !== 0) {
    return newMarks.length;
  } else if (k == 0) {
    return 0;
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
console.log(numofPrizes(0, [1, 2, 3, 4, 5])); // 0
console.log(numofPrizes(4, [])); // 0
console.log(numofPrizes(2, [0, 0, 0])); // 0


