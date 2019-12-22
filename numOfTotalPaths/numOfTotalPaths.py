''' Given an n x n matrix, calculate the number of ways you can go from the top left corner of the matrix to the bottom right corner of the
matrix. You can only go down or right. 
Input: 1 (1 x 1 matrix)
Output: 1 (1 total ways or paths)

Input: 2 (2 X 2 matrix)
Output: 2 (2 total ways or pathss)

Input: 3 (3 X 3 matrix)
Output: 6 (6 total ways or paths)
'''

# Suggested Solution: Iterative approach
''' Pseudocode:
1. Declare a variable called count, set it equal to a list and use list comprehension to make a matrix of n x n size out of it and putting values
of 0 in each cell of the matrix by declaring in an inner list, 0 for x in range(n), then outside the inner list, make anther list comprehension of 
for y in range(n).
2. Make a for loop of range n, starting from 0 and ending at n-1, calling each index i.
3. Inside previous for loop, set the count matrix at first index of i and 2nd index at 0 equal to 1 (this will set each row and just the first 
column to 1) 
4. Still inside for loop, set count matrix at first index to 0 and 2nd index to i and set it equal to 1 (this will set each column at just the 
first row equal to 1). So first row and first column, there is only 1 way to get to each cell if you come from top or left.
5. Outside previous for loop, make another for loop, starting at index i of 1 and ending at n-1.
6. Inside previous for loop, make another nested for loop, starting at index j of 1 and ending at n-1 
7. Inside, inner nested for loop, set count matrix at 1st index of i and 2nd index of j equal to the value of count matrix at 1st index of i-1 and
2nd index of j (top of cell right above current cell) plus, the value of count matrix from 1st index if i and 2nd index of j-1 (left or cell right
at the left of current cell). This will add up the number of paths to get to current cell from cell right above plus from cell right at the left.
8. Outside all for loops, return the value of current matrix at 1st index if n-1 and 2nd index of n-1 (last cell or bottom right cell which has
all paths added up).
'''
# def numberOfTotalPaths(n):
#     count = [[0 for x in range(n)] for y in range(n)]
#     # print (count)

#     for i in range(n):
#         count[0][i] = 1 # setting each column in 1st row to 1
#         count[i][0] = 1 # setting each row in 1st column to 1
#     # print(count)

#     for i in range(1, n):
#         for j in range(1, n):
#             count[i][j] = count[i-1][j] + count[i][j-1]

#     return count[n-1][n-1]

# Suggested Solution: Recursive approach
''' Pseudocode:
1. Make a base case of if input i (rows) is equal to 1 or input j (columns) is equal to 1 (there is only 1 cell and matrix is length 1) then just 
return 1
2. Otherwise (if input i or j is more than 1 so matrix is at least length of 2) then return the recursive call of the numberofTotalPaths function, 
passing in the parameter of i-1, j (top cell) plus recursive call of the numberofTotalPaths function passing in the parameter of i, j-1 
(left cell)
'''
def numberOfTotalPaths(i , j):
    if i == 1 or j == 1:
        return 1
    return numberOfTotalPaths(i-1, j) + numberOfTotalPaths(i, j-1)


print(numberOfTotalPaths(1, 1)) # 1
print(numberOfTotalPaths(2, 2)) # 2
print(numberOfTotalPaths(3, 3)) # 6