/* A very hungry rabbit is placed in the center of a garden  represented by a rectangular N x M 2D matrix. The values of the matrix will 
represent numbers of carrots available to the rabbit in each square of the garden. if the garden does not have an exact center, the rabbit 
should start in the square closest to the center with the highest carrot count. On a given turn, the rabbit will eat the carrots . 
available on the square that it is on, then move up, down, left or right, choosing the square . that has the most carrots. If there are 
no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose 
between two squares with the same number of carrots. Write a function which takes a garden matrix and returns the number of carrots the 
rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers.
 */

/* Psueudocode: My solution
1. Initialize a variable, call it maxCarrots (it'll hold the info about number of carrots in a certan slot)
2. Initialize an empty array call it coordinate (it'll hold the info. about the current coordinates in the matrix, 1st value in the array will
be x-coordinate which is row number or inner array number and 2nd value in the array will be y-coordinate or column number).
3. Initialize a variable called totalCarrotsEaten and set it equal to 0.
4. Initialize an empty array, call it colStartPoint, and initialize another empty array call it rowStartPoint.
5. Make an if statement, check if column length is even (by getting length of 1st array in matrix and modulo by 2) then, divide the column 
lenght by 2 then push that result to colStartPoint array, and then push that result plus 1 to the colStartPoint again
5. Else, if column length is odd then divide the column length by 2 then get the upper rounded number of that result using Math.ceil method
and push it into the colStartPoint array
6. Outside previous if statement, make another if statement, check if row length is odd (by getting length of input matrix modulo by 2) then 
push the result onto the rowStartPoint array and then push that result + 1 onto the rowStartPoint array again
7. Else, if row length is odd then divide the row length by 2 then get the upper rounded version of that result using Math.ceil method and
push it into the rowStartPoint array
8. To get starting point, get the value from input matrix at position of 1st value of rowStartPoint and 1st value of colStartPoint and set 
that value to maxCarrots value. 
9. Make a for loop, starting at index of row = 0 and ending at row less than rowStartPoint length - 1, inside this for loop make another for
loop, starting at index col = 0 and ending at col less than colStartPoint length - 1, 
10. Inside previous inner for loop, make an if statement, check if value from input matrix at current index row position for 1st coordinate &
at current index col position for 2nd coordinate is larger than maxCarrots then update maxCarrots with that larger value, and set first 
position (0th index) of coordinate with value of row and set 2nd position (index 1) of coordinate with value of col.
 */

// set current value from input matrixGarden to plus equal to totalCarrotsEaten then maxCarrots equal back to 0
// While coordinate 1st value (row) is more than or equl to 0 and less than or equal to matrix length and coordinate 2nd value (column)
// is more than or equal to 0 and less than or equal to length of 1st array from input matrixGarden
// check the value from up, down, left or right position from input matrixGarden to see which one is largest value then set that maximum
// value to maxCarrotsEaten
// Set the coordinate to the position from input matrixGarden where the current maxCarrotsEaten value is
// then set the totalCarrotsEaten to plus equal the current maxCarrotsEaten value and then set maxCarrotsEaten value to 0 and repeat

let gardenChecker = (matrixGarden, row, col) => {
  let maxNeighborCarrots = matrixGarden[row][col];
  let maxCoordinates = [row, col];

  if (row - 1 >= 0) {
    // console.log("row: ", row);
    // console.log("col: ", col);

    if (maxNeighborCarrots <= matrixGarden[row - 1][col]) {
      maxNeighborCarrots = matrixGarden[row - 1][col];
      maxCoordinates = [row - 1, col];
    }
  }

  if (row + 1 < matrixGarden.length) {
    if (maxNeighborCarrots <= matrixGarden[row + 1][col]) {
      maxNeighborCarrots = matrixGarden[row + 1][col];
      maxCoordinates = [row + 1, col];
    }

  }

  if (col - 1 >= 0 ) {
    if (maxNeighborCarrots <= matrixGarden[row][col - 1]) {
      maxNeighborCarrots = matrixGarden[row][col - 1];
      maxCoordinates = [row, col - 1];
    }
  } 

  if (col + 1 < matrixGarden[0].length) {
    if (maxNeighborCarrots <= matrixGarden[row][col + 1]) {
      maxNeighborCarrots = matrixGarden[row][col + 1];
      maxCoordinates = [row, col + 1];
    }

  }

  // if (row - 1 >= 0 && row + 1 < matrixGarden.length) {
  //   // console.log("row: ", row);
  //   // console.log("col: ", col);

  //   if (maxNeighborCarrots <= matrixGarden[row - 1][col]) {
  //     maxNeighborCarrots = matrixGarden[row - 1][col];
  //     maxCoordinates = [row - 1, col];
  //   }

  //   if (maxNeighborCarrots <= matrixGarden[row + 1][col]) {
  //     maxNeighborCarrots = matrixGarden[row + 1][col];
  //     maxCoordinates = [row + 1, col];
  //   }
  // }




  // else if (
  //   row === 0 ||
  //   row === matrixGarden.length - 1 ||
  //   col === 0 ||
  //   col === matrixGarden[0].length - 1
  // ) {
    // if (matrixGarden[row - 1][col]) {
    //   if (maxNeighborCarrots < matrixGarden[row - 1][col]) {
    //     maxNeighborCarrots = matrixGarden[row - 1][col];
    //     maxCoordinates = [row - 1, col];
    //   }
    // } else if (matrixGarden[row + 1][col] !== undefined) {
    //   if (maxNeighborCarrots < matrixGarden[row + 1][col]) {
    //     maxNeighborCarrots = matrixGarden[row + 1][col];
    //     maxCoordinates = [row + 1, col];
    //   }
    // } else if (matrixGarden[row][col - 1] !== undefined) {
    //   if (maxNeighborCarrots < matrixGarden[row][col - 1]) {
    //     maxNeighborCarrots = matrixGarden[row][col - 1];
    //     maxCoordinates = [row, col - 1];
    //   }
    // } else if (matrixGarden[row][col + 1] !== undefined) {
    //   if (maxNeighborCarrots < matrixGarden[row][col + 1]) {
    //     maxNeighborCarrots = matrixGarden[row][col + 1];
    //     maxCoordinates = [row, col + 1];
    //   }
    // }
  // }

  return [maxNeighborCarrots, maxCoordinates];
};

let notSleeping = (matrixGarden, row, col) => {

  // if (
  //   row - 1 >= 0 &&
  //   col - 1 >= 0 &&
  //   row + 1 < matrixGarden.length &&
  //   col + 1 < matrixGarden[0].length
  // ) {
  //   if (
  //     matrixGarden[row - 1][col] === 0 &&
  //     matrixGarden[row + 1][col] === 0 &&
  //     matrixGarden[row][col - 1] === 0 &&
  //     matrixGarden[row][col + 1] === 0
  //   ) {
  //     return false;
  //   } 
  //   else {

      // if (
      //   (matrixGarden[row - 1][col] == undefined || matrixGarden[row - 1][col] == 0)
      //   && (!matrixGarden[row + 1][col] || matrixGarden[row + 1][col] == 0)
      //   && (matrixGarden[row][col - 1] == undefined || matrixGarden[row][col - 1] == 0)
      //   && (matrixGarden[row][col + 1] == undefined || matrixGarden[row][col + 1] == 0)
      // ) {
      //   return false;
      // }

  //   }
  // }

  if (row === 0) {
    if (
      // (matrixGarden[row - 1][col] === undefined) &&        
      (matrixGarden[row + 1][col] === undefined || matrixGarden[row + 1][col] == 0)
      && (matrixGarden[row][col - 1] == undefined || matrixGarden[row][col - 1] == 0)
      && (matrixGarden[row][col + 1] == undefined || matrixGarden[row][col + 1] == 0)
      
    ) {      
      return false;
    }
  }

  if (row === matrixGarden.length - 1) {
    if (
      // (matrixGarden[row + 1][col] === undefined) &&
      (matrixGarden[row - 1][col] == undefined || matrixGarden[row - 1][col] == 0)      
      && (matrixGarden[row][col - 1] == undefined || matrixGarden[row][col - 1] == 0)
      && (matrixGarden[row][col + 1] == undefined || matrixGarden[row][col + 1] == 0)
      
    ) {      
      return false;
    }
  }

  if (col === matrixGarden[0].length - 1) {
    if (
      // (matrixGarden[row][col+1] === undefined) &&
        (matrixGarden[row - 1][col] == undefined || matrixGarden[row - 1][col] == 0)
        && (!matrixGarden[row + 1][col] || matrixGarden[row + 1][col] == 0)
        && (matrixGarden[row][col - 1] == undefined || matrixGarden[row][col - 1] == 0)      
    ) {      
      return false;
    }
  }

  if (col === 0) {
    if (
      // (matrixGarden[row][col-1] === undefined) &&
        (matrixGarden[row - 1][col] == undefined || matrixGarden[row - 1][col] == 0)
        && (!matrixGarden[row + 1][col] || matrixGarden[row + 1][col] == 0)
        && (matrixGarden[row][col + 1] == undefined || matrixGarden[row][col + 1] == 0)     
    ) {      
      return false;
    }
  }
  
  // if (row === 0 && row <= matrixGarden.length - 1 && col >= 0 && col <= matrixGarden[0].length-1) {
  //     if (        
  //       (matrixGarden[row - 1][col] == undefined || matrixGarden[row - 1][col] == 0)
  //       && (!matrixGarden[row + 1][col] || matrixGarden[row + 1][col] == 0)
  //       && (matrixGarden[row][col - 1] == undefined || matrixGarden[row][col - 1] == 0)
  //       && (matrixGarden[row][col + 1] == undefined || matrixGarden[row][col + 1] == 0)
        
  //     ) {
        
  //       return false;
  //     }
  //   }

  // }

  return true;
};

let hungryRabbit = matrixGarden => {
  let maxCarrots = 0;
  let coordinate = [];
  let totalCarrotsEaten = 0;
  let colStartPoint = [];
  let rowStartPoint = [];

  let colNum;
  let rowNum;

  if (matrixGarden[0].length % 2 == 0) {
    colNum = matrixGarden[0].length / 2;
    colStartPoint.push(colNum - 1);
    colStartPoint.push(colNum);
  }
  if (matrixGarden[0].length % 2 == 1) {
    colNum = Math.floor(matrixGarden[0].length / 2);
    colStartPoint.push(colNum);
  }
  if (matrixGarden.length % 2 == 0) {
    rowNum = matrixGarden.length / 2;
    rowStartPoint.push(rowNum - 1);
    rowStartPoint.push(rowNum);
  }
  if (matrixGarden.length % 2 == 1) {
    rowNum = Math.floor(matrixGarden.length / 2);
    rowStartPoint.push(rowNum);
  }

  // console.log('rowStartPoint: ', rowStartPoint);
  // console.log('colStartPoint: ', colStartPoint);

  maxCarrots = matrixGarden[rowStartPoint[0]][colStartPoint[0]];
  //   console.log("initial max carrots: ", maxCarrots);

  for (let row = 0; row < rowStartPoint.length; row++) {
    for (let col = 0; col < colStartPoint.length; col++) {
      if (maxCarrots <= matrixGarden[rowStartPoint[row]][colStartPoint[col]]) {
        maxCarrots = matrixGarden[rowStartPoint[row]][colStartPoint[col]];
        coordinate[0] = rowStartPoint[row];
        coordinate[1] = colStartPoint[col];
      }
    }
  }

  totalCarrotsEaten += maxCarrots;
  matrixGarden[coordinate[0]][coordinate[1]] = 0;
  maxCarrots = 0;
  console.log("coordinate: ", coordinate);
  //   console.log("matrixGarden: ", matrixGarden);

  //   while (
  //     (coordinate[0] - 1 >= 0 &&
  //     coordinate[0] + 1 < matrixGarden.length) &&
  //     coordinate[1] - 1 >= 0 &&
  //     coordinate[1] + 1 <= matrixGarden[0].length
  //   )

  while (notSleeping(matrixGarden, coordinate[0], coordinate[1])) {
    let gardenCheckerInfo = gardenChecker(
      matrixGarden,
      coordinate[0],
      coordinate[1]
    );
    maxCarrots = gardenCheckerInfo[0];
    coordinate[0] = gardenCheckerInfo[1][0];
    coordinate[1] = gardenCheckerInfo[1][1];
    totalCarrotsEaten += maxCarrots;
    matrixGarden[coordinate[0]][coordinate[1]] = 0;
    maxCarrots = 0;
    console.log("matrixGarden: ", matrixGarden);
  }

  //   console.log("max start val: ", maxCarrots);
  console.log("totalCarrotsEaten: ", totalCarrotsEaten);
};

[
  [0, 0, 0, 0],
  [0, 3, 0, 1],
  [0, 0, 0, 2],
  [5, 0, 0, 1]
];

// hungryRabbit([
// 	[1, 2, 4, 2],
// 	[6, 3, 8, 1],
// 	[3, 5, 6, 2],
// 	[5, 7, 8, 1]
// ]); // 51

let gardenI = [
  [1, 2, 4, 2],
  [6, 3, 8, 1],
  [3, 5, 6, 2],
  [5, 7, 8, 1]
];

let gardenII = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
]; // 27

hungryRabbit(gardenI);

hungryRabbit(gardenII);
