# Count number of times an element occurs in an array using recursion
''' Pseudocode:
1. Define base case as, if length of list is less than 1 (list is empty) return 0
2. else if, the first element in the list contains the element we want return 1 plus, recursively call the function with the array input 
starting from the index of the second element (index of 1) to the end of the array. 
3. Else, (if first element in the array is not the element we want) return 0 plus, recursively call the function with the array input starting
from the index of the second element (which is index 1) to the end of the array
'''
# def count_arr_elems(arr):
#     if len(arr) < 1:
#         return 0
#     if arr[0] == 2:
#         return 1 + count_arr_elems(arr[1:])
#     else:
#         return 0 + count_arr_elems(arr[1:])

# arr1 = [2, 34, 54, 2, 3]
# arr2 = [12, 2, 2, 2]
# arr3 = [12, 34, 54, 21, 3]
# arr4 = []

# print(count_arr_elems(arr1)) # 2
# print(count_arr_elems(arr2)) # 3
# print(count_arr_elems(arr3)) # 0
# print(count_arr_elems(arr4)) # 0

# arr5 = ['rec', 'ras', 'pluto']
# arr6 = ['foo', 'rec', 'rec', 'rec']
# arr7 = ['foo', 'bar', 'baz']
# arr8 = []

# print(count_arr_elems(arr5)) # 1
# print(count_arr_elems(arr6)) # 3
# print(count_arr_elems(arr7)) # 0
# print(count_arr_elems(arr8)) # 0


# word1 = ''
# word2 = "abcthxyz"
# word3 = "abcthefthghith"
# word4 = "thhtthht"
# word5 = "THtHThth"

# print(count_th(word1)) # 0
# print(count_th(word2)) # 1
# print(count_th(word3)) # 3
# print(count_th(word4)) # 2
# print(count_th(word5)) # 1

# print(len([]))

# Get sum of elements in an array using recursion
'''Pseudocode:
1. Set up the base case as, if lenth of array is 0 then return 0
2. Else, (if length of array is more than 0) then return first element in array plus recursive call of function with array passed in as parameter
but starting from 2nd element at 2nd index (index 1) of the array.
'''
# def get_sum_recursive(arr):
#     if len(arr) == 0:
#         return 0
#     else:
#         return arr[0] + get_sum_recursive(arr[1:])

# print(get_sum_recursive([1, 3, 4, 2, 5])) # 15

# def count_th(word):
#     if len(word) < 3:
#         return 0
#     else:
#         if word[0:3] == "REC":
#             return 1 + count_th(word[3:])
#         else:
#             return 0 + count_th(word[1:])

# word1 = ''              # 0
# word2 = "abcthRECxyz"   # 1
# word3 = "abcRECefRECghiREC"    # 3
# word4 = "REChtRECht" # 2
# word5 = "THtHrecThth" # 0
# print(count_th(word1))
# print(count_th(word2))
# print(count_th(word3))
# print(count_th(word4))
# print(count_th(word5))

# Michelle's code
def count_th(word):
    # BASE CASE
    # If it is an empty string or the string has only 1 character of maybe 't'
    if word == '' or word == 't':
        # return 0 for false
        return 0
    # else, return 1 for true
    if word[0] == 't' and word[0+1] == 'h':
        return 1 + count_th(word[2:])
    else:
        return 0+ count_th(word[1:])

word1 = ''              # 0
word2 = "abcthxyz"   # 1
word3 = "abcthefthghith"    # 3
word4 = "thhtthht" # 2
word5 = "THtHThth" # 1
print(count_th(word1))
print(count_th(word2))
print(count_th(word3))
print(count_th(word4))
print(count_th(word5))