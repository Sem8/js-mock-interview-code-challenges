/* Write a function that takes a 2D binary array and # returns the number of 1 islands. 
An island consists of 1s that are connected to the north, south, east or west. */

/* Pseudocode:

// island_counter function - takes in matrix as an input which will be the island matrix we are counting islands from:
1. Declare an array call it visited. 
2. With a nested for loop, make a matrix out of the visited array of same length as the input matrix but with values of false inserted into
each slot instead of 0's and 1's 
3. Initialize a variable called islandCount and initialize it to 0, this will hold the count of number of islands
4. With for loop, loop through each row of visited matrix and call it row, then in an inner for loop loop through each column of the visited matrix
by using the length of the first inner array within the matrix, call it column. 
5. Within the inner for loop, check if the value at the current row and current column of the visited matrix is false, if so, then make an inner
if statement, check if the value of input matrix at current row and current column coordinate is 1 then set the value of visited matrix at current
row and column coordinate to true (from false). Then call the helper dfs function, passing in as it's parameters current row, current column, the 
input matrix and visited mock matrix, this helper function sets the values of all north, south, east and west values 
from current row/column coordinate position set to true as well and set the result of this function to variable called visitedNeighbors. 
And then increment the islandCount by 1 so with all the north, south, east and west neighbors we'll have one island.
6. And if the inner if statement is false and the value in the input matrix at current row and column coordinate is 0 instead of 1 then just set
the value of current row and column coordinate in the visited matrix to true without checking any neighbors from the dfs helper function and no
incrementing islandCount because the value here is 0.
7. At the end, outside of the for loops and if statements, return the final island count. 

// getNeighbors helper function - takes in as input parameters: row, column and matrix (row and column are coordinates, matrix is island matrix)
1. Declare an empty array call it neighbors 
2. Make an if statement, check if from input island matrix the value at coordinate of input row - 1, column (north of current coordinate) is 1 
then push the row - 1, column coordinates as an array into the neighbors array
3. Outside previous if statement, make another if statement, check if from the input island matrix the value at coordinate of input row + 1, column
(south of current coordinate) is 1 then push the row + 1, column coordinates as an array into the neighbors array.
4. Outside previous if statement, make another if statement, check if from the input island matrix the value at coordinate of row, column - 1 
(West of current coordinate) is 1 then push the row, column - 1 coordinate as an array into the neighbors array
5. Outside previous if statement, make another if statement, check if from the input island matrix the value at coordinate of row, column + 1 
(East of current row, column coordinate) is equal to 1 then push that coordinate row, column + 1 as an array into the neighbors array
6. Finally return the neighbors matrix

// dfs helper function - takes in as parameters: row position, column position, matrix, visited
1. Instantiate an Stack class call it stack
2. Push into the back of stack, the input row and input column coordinates as an array
3. Make a while loop, which stack is not empty (stack.size is more than 0)
4. In while loop, pop off the back of stack the last array item of row, column coordinates, put it in variable called currentPosition
5. Inside while loop, with if statement, check if value at current row and column coordinate from currentPosition in the visited matrix is false 
then set it to true
6. Still inside while loop, with for loop, loop through the the north, south, east and west neighbors that have values of 1 from the island matrix 
using the getNeighbors helper function and push each of those neighbors into the back of the stack
7. Return the visited matrix in the end outside of the while loop.
 */
const islands = [
  [0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0]
];
const big_islands = [
  [1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0]
];


console.log(island_counter(islands)); // 4

console.log(island_counter(big_islands)); // 13