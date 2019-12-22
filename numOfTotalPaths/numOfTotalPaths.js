/* Given an n x n matrix, calculate the number of ways you can go from the top left corner of the matrix to the bottom right corner of the
matrix. You can only go down or right. 
Input: 1 (1 x 1 matrix)
Output: 1 (1 total ways or paths)

Input: 2 (2 X 2 matrix)
Output: 2 (2 total ways or pathss)

Input: 3 (3 X 3 matrix)
Output: 6 (6 total ways or paths)
 */

// Suggested solution: Iterative approach
/*Pseudocode: Takes in number of rows and number of columns as an input
1. Declare a variable called count and set it equal to an empty list
2. Make a for loop, starting at index i of 0, ending at index i of less than row, increment i.
3. Inside previous for loop, push an array of 1 to the count array (make rows of array with 1 as the first column) 
4. Still inside for loop, set the 1st index of count matrix to 0 (1st row) and set 2nd index of count matrix to i (number of columns) and 
set the value at this position to 1 (setting each column at the 1st row to be 1)
5. Outside for loop, make another for loop, starting at index i of 1, ending at less than row, increment i.
6. Inside previous for loop, make anohter nested for loop, starting at index j of 1, ending at less than column, increment j.
7. Inside the inner for loop, set value of count matrix at 1st index of i and 2nd index of j equal to the value of count matrix at 1st 
index of i-1 & 2nd index of j (top cell) plus value of count matrix from 1st index at i and 2nd index at j-1 (left cell)
8. Outside for loop, return the value from count matrix at 1st index of row-1 and 2nd index at column-1 (last cell that has all the added
    up paths)
 */

const numOfTotalPaths = (row, column) => {
    let count = [];

    for (let i = 0; i < row; i++) {
        count.push([1]);
        count[0][i] = 1;
    };
    // console.log(count);
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            count[i][j] = count[i-1][j] + count[i][j-1];
        }
    };
    return count[row-1][column-1];
};

console.log(numOfTotalPaths(1, 1));  // 1
console.log(numOfTotalPaths(2, 2));  // 2
console.log(numOfTotalPaths(3, 3));  // 6