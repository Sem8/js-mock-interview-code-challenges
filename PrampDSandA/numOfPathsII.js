// Suggested solution: Iterative
/*Pseudocode: Takes in size of matrix grid as a parameter.
1. Initialize an empty array, call it countMatrix
2. Construct a matrix that's only half available diagonally, at the bottom diagonal. To do this, make a for loop starting at index i of 0,
ending at less than n, increment i
3. Inside previous for loop, push an empty array into the countMatrix array (this will create a matrix or an array within an array input
    n number of times, so it's creating rows of an empty array in the 1st column n or i number of rows)
4. Inside this for loop, make another nested for loop, starting at index j of 0, ending at j less than or equal to i and increment j.
5. Inside the nested inner for loop, set the value of countMatrix at 1st index i and 2nd index of 0 to 1 (putting in value of 1 to each
    row at the first column)
6. Still inside inner nested for loop, make an if statement of if i is more than or equal to 1 and j is more than or equal to 1 then 
initialize a variable called top and set it equal to value from countMatrix at 1st index of i-1 (row above) and 2nd index of j 
(same column) or value of 0 (if it wasn't initialized to 1 because it's on the forbidden top half of the diagonal in the matrix)
7. Still inside previous if statement, make another variable called left and set it equal to value from countMarix at 1st index at i (same
    row) and 2nd index at j-1 (left cell) or left can equal 0 (if value at left wasn't initialized to 1 first)  
8. Still inside if statement, set current value of countMatrix at current 1st index of i (row) and current 2nd index of j (column) equal 
to value of top plus value of left.
9. Outside for loop, return the value from countMatrix at the very last bottom right cell, at 1st index of n-1 and 2nd index of n-1
 */

// const numOfPathsToDest = n => {
//     let countMatrix = [];
    
//     for (let i = 0; i < n; i++) {
//         countMatrix.push([]);
//         for (let j = 0; j <= i; j++) {
//             countMatrix[i][0] = 1;

//             if (i >=1 && j >=1) {
//                 let top = countMatrix[i-1][j] || 0;
//                 let left = countMatrix[i][j-1] || 0;
//                 countMatrix[i][j] = top + left;
//             }
//         };
//     };
//     // console.log(countMatrix);
//     return countMatrix[n-1][n-1];
// };

// Suggested solution: Recursive
/*Pseudocode:
Need to make 2 functions, 1 to construct the half matrix, we'll call it numofPathsToDest and one for recursive call of values from top 
and lef side of matrix to add up the number of paths, we'll call it numOfPathsRecurse

numOfPathsRecurse function:
Takes in 3 parameters - i (row number), j (column number), matrix (2D arry we're traversing)
1. Have to make several base cases. First base case, make an if statement of if i (row number) is equal to 0 and j (column number) is equal 
to 0 then set the value in matrix at 1st index of i and 2nd index of j equal to 1 (This is the starting position and there's only 1 way to
get to this position).
2. Make another base case of else if, i (row number) is less than 0 or j (column number) is less than 0 (we are out of bounds of before the
    start row or before start column) then just return 0 to end that block of code. We are only considering less than 0 for out of bounds
    and not more than max length of matrix because we'll only get values from previous row and previous column not next row or column
3. Make another base case of else if, j is more than i (we are at the forbidden portion of the other half of the matrix which is the top
    of the diagonal) then set the value at that position in the matrix at 1st index i and at 2nd index of j to 0 (we ignore the count on 
    forbidden half of the matrix)
4. Make another base case of if current value in matrix at current value of i at 1st index and current value of j at 2nd index does not 
equal -1 then return that value from input matrix at 1st and 2nd index of i and j, respectively
5. Make an else statement (None of the previous base cases hold true and we are at an empty valid cell without any values) then set the 
current value in input matrix at 1st index of i (row number) and 2nd index of j (column number) equal to recursive call of 
numOfPathsRecurse function with 1st parameter of i-1, 2nd parameter of j and 3rd parameter of input matrix (recursive call of top cell) plus
recursive call of numOfPathsRecurse function with 1st parameter of i, 2nd parameter of j-1 and 3rd parameter of input matrix (recursive 
    call of left cell).
6. Outside call cases, return the value from matrix at 1st index of i (row number) and 2nd index of j (column number).

numOfPathsToDest function:
Takes in 1 parameter called n which is the length of the matrix
1. Intialize an empty array, called it countMatrix
2. Make a for loop starting at index i of 0, ending at index i of less than input n and increment i
3. Inside for loop, push an empty array into the countMatrix array (this will make a matrix with n number of rows)
4. Inside previous for loop, make another nested for loop, starting at index j of 0, ending at j less than or equal to i, increment j (this
    will make only bottom half of matrix from diagonal and add in the columns for valid half of matrix)
5. Inside nested for loop, set the value of currentMatrix at current 1st index i and current 2nd index of j equal to -1 (We are 
    intializing all values in the valid cells to -1).
6. Outside for loop, return the call of the numOfPathsRecurse function, passing in value of n-1 for 1st parameter, value of n-1 for 2nd 
parameter and countMatrix for 3rd parameter (we're calculating and getting the value in the last cell of the matrix at bottom right corner)
 */

const numOfPathsRecurse = (i, j, matrix) => {
    if (i === 0 && j === 0) {
        matrix[i][j] = 1;
    } else if (i < 0 || j < 0) {
        return 0;
    // forbidden section of matrix, we can't go to so there are 0 ways to get to those cells 
    } else if (j > i) {
        matrix[i][j] = 0;
    } else if (matrix[i][j] !== -1) {
        return matrix[i][j];
    } else {
        matrix[i][j] = numOfPathsRecurse(i-1, j, matrix) + numOfPathsRecurse(i, j-1, matrix);
    };

    return matrix[i][j];
};

const numOfPathsToDest = n => {
    let countMatrix = [];
    for (let i = 0; i < n; i++) {
        countMatrix.push([]);

        for (let j = 0; j <= i; j++) {
            countMatrix[i][j] = -1; 
        };
    };
    return numOfPathsRecurse(n-1, n-1, countMatrix);
};


console.log(numOfPathsToDest(1)); // 1
console.log(numOfPathsToDest(2)); // 1
console.log(numOfPathsToDest(3)); // 2
console.log(numOfPathsToDest(4)); // 5
console.log(numOfPathsToDest(5)); // 14
console.log(numOfPathsToDest(6)); // 42



