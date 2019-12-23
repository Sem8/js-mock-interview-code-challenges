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

const numOfPathsToDest = n => {
    let countMatrix = [];
    
    for (let i = 0; i < n; i++) {
        countMatrix.push([]);
        for (let j = 0; j <= i; j++) {
            countMatrix[i][0] = 1;

            if (i >=1 && j >=1) {
                let top = countMatrix[i-1][j] || 0;
                let left = countMatrix[i][j-1] || 0;
                countMatrix[i][j] = top + left;
            }
        };
    };
    // console.log(countMatrix);
    return countMatrix[n-1][n-1];

};

console.log(numOfPathsToDest(1)); // 1
console.log(numOfPathsToDest(2)); // 1
console.log(numOfPathsToDest(3)); // 2
console.log(numOfPathsToDest(4)); // 5
console.log(numOfPathsToDest(5)); // 14
console.log(numOfPathsToDest(6)); // 42



