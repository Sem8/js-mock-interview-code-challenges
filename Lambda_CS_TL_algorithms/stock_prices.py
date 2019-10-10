# '''Pseudocode: O(n^2) solution with nested for loop
# 1. Initialize a variable called max profit and set it equal to the difference between 1st and 2nd element prices in the array.
# 2. Loop through the array with index i starting at 0 and ending at 2nd to last element.
# 3. Make an inner loop inside outer loop and start at index after the outer loop's index of i and ending at the last element.
# 4. Make an if statement of if element at inner loops index minus element at outer loop's index is greater than the initial 
# max_profit that was set then re-assign max profit to the current difference of element at current inner loop index minus element at outer
# loop index.
# 5. return final max profit.
# '''

# def stock_prices(arr):
#     max_profit = arr[1] - arr[0]

#     for i in range(0, len(arr) - 1):
#         for j in range(i+1, len(arr)):
#             if arr[j] - arr[i] > max_profit:
#                 max_profit = arr[j] - arr[i]
#     return max_profit

'''Pseudocode: Solution with 1 for loop O(n) time complexity:
1. 
'''



print(stock_prices([10, 7, 5, 8, 11, 9])) # 6
print(stock_prices([100, 90, 80, 50, 20, 10])) # -10
print(stock_prices([1050, 270, 1540, 3800, 2])) # 3530
print(stock_prices([100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79])) # 94


