# My own solution: Stock prices to find maximum profit but you have to buy first before sell
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


# My own solution for stock prices with O(2n) time complexity:
'''Pseudocode: Solution with 1 for loop O(2n) = ~O(n) time complexity:
1. Set variable called initial_buy to 1st array element
2. set variable called initial_sell to 2nd array element
3. Loop through the array starting from 1 all the way to end.
4. Make if statement, check if current element at current index is more than initial_sell then reset initial_sell to that variable.
5. Make another for loop outside the previous for loop (not nested inner for loop) starting at index 1 all the way to end of array.
6. Make if statement inside the above 2nd for loop to check if current element at current index is less than initial_buy (from 1st array element)
and that the index of this current element at current index is at a lower index than the index of the updated initial_sell value from the array.
If so, reset initial_buy to this current array element at current index that meets this condition.
7. Return the difference between the updated initial_sell minus initial_buy
'''
# def stock_prices(arr):
#     initial_buy = arr[0]
#     initial_sell = arr[1]

#     for i in range(1, len(arr)):
#         if arr[i] > initial_sell:
#             initial_sell = arr[i]

#     for i in range(1, len(arr)):
#         if (arr[i] < initial_buy and arr.index(arr[i]) < arr.index(initial_sell)):
#             initial_buy = arr[i]
#     # print('initial_sell', initial_sell)
#     # print('initial_buy', initial_buy)
#     return initial_sell - initial_buy

# Optimized solution with O(n) time complexity
'''Pseudocode: Just 1 for loop
1. Set variable called min_price to the first array elment
2. Set variable called max_profit to the the 1st array element minus 2nd array element.
3. Make for loop, starting at index 0 all the way to last element.
4. Inside for loop, update max_profit value using max method by comparing initial max_profit value vs. the current price at current element minus
min_price value from initial 1st array element. 
5. Still inside for loop, update the min_price variable using min method comparing initial min_price from 1st array element vs. current array
element at current index.
6. Return max_profit.
'''

def stock_prices(arr):
    min_price = arr[0]
    max_profit = arr[1] - arr[0]

    for i in range(1, len(arr)):
        max_profit = max(arr[i] - min_price, max_profit)
        min_price = min(min_price, arr[i])

    return max_profit


print(stock_prices([10, 7, 5, 8, 11, 9])) # 6
print(stock_prices([100, 90, 80, 50, 20, 10])) # -10
print(stock_prices([1050, 270, 1540, 3800, 2])) # 3530
print(stock_prices([100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79])) # 94


