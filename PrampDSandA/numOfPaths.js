/* Recursive approach: */
function numOfPathsToSquare(i, j, matrix) {
  if (i < 0 || j < 0) {
    return 0;
  } else if (i < j) {
    matrix[i][j] = 0;
  } else if (matrix[i][j] !== -1) {
    return matrix[i][j];
  } else if (i === 0 && j === 0) {
    matrix[i][j] = 1;
  } else {
    matrix[i][j] =
      numOfPathsToSquare(i, j - 1, matrix) +
      numOfPathsToSquare(i - 1, j, matrix);
  }

  return matrix[i][j];
}

// // path helper function
const numOfPathsToDest = n => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = -1;
    }
  }
  return numOfPathsToSquare(n - 1, n - 1, matrix);
  // console.log(matrix)
};

// /* Iterative approach */

// const numOfPathsToDest = n => {
//   if (n === 1) {
//     return 1;
//   }
//   let lastRow = [];
//   for (let i = 1; i < n; i++) {
//     lastRow[i] = 1;
//   }
//   console.log("initial lastRow: ", lastRow);

//   let currentRow = [];

//   for (let i = 1; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       console.log("i: ", i);
//       console.log("j: ", j);
//       if (i === j) {
//         currentRow[j] = lastRow[j];
//         console.log("lastRow[j]: ", lastRow[j]);
//         console.log("currentRow[j]: ", currentRow[j]);

//         console.log("lastRow if i==j: ", lastRow);
//         console.log("currentRow if i==j: ", currentRow);
//       } else {
//         currentRow[j] = currentRow[j - 1] + lastRow[j];

//         console.log("lastRow else: ", lastRow);
//         console.log("currentRow else: ", currentRow);
//       }
//     }
//     console.log("lastRow out of inner loop b4: ", lastRow);
//     console.log("currentRow out of inner loop b4: ", currentRow);
//     lastRow = currentRow;

//     console.log("lastRow out of inner loop after: ", lastRow);
//     console.log("currentRow out of inner loop after: ", currentRow);
//   }
//   // console.log('currentRow: ', currentRow);
//   // console.log('lastRow: ', lastRow);

//   console.log("currentRow[n-1]: ", currentRow[n - 1]);
//   // return currentRow[n-1];
// };
// numOfPathsToDest(4);

/*Medium Article solution 1: */
function numOfPathsToDest(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [1];
  }
  console.log('initial matrix: ', matrix);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log('i: ', i);
      console.log('j: ', j);

      console.log('matrix in loop: ', matrix);

      let top = matrix[i - 1][j] || 0;
      console.log('top: ', top);
      let left = matrix[i][j - 1] || 0;
      console.log('left: ', left);
      console.log('matrix[i][j] b4: ', matrix[i][j]);
      matrix[i][j] = left + top;
      console.log('matrix[i][j] after: ', matrix[i][j]);
      console.log('matrix after: ', matrix);
    }
  }
  console.log(matrix);
  return matrix[n - 1][n - 1] || 1;
}
// numOfPathsToDest(3);
console.log(numOfPathsToDest(4));

// console.log(numOfPathsToDest(1)); // 1
// console.log(numOfPathsToDest(2)); // 1
// console.log(numOfPathsToDest(3)); // 2
// console.log(numOfPathsToDest(4)); // 5
// console.log(numOfPathsToDest(5)); // 14
// console.log(numOfPathsToDest(6)); // 42
