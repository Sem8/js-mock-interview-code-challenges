def count_arr_elems(arr):
    if len(arr) < 1:
        return 0
    if arr[0] == 'rec':
        return 1 + count_arr_elems(arr[1:])
    else:
        return 0 + count_arr_elems(arr[1:])

# arr1 = [2, 34, 54, 2, 3]
# arr2 = [12, 2, 2, 2]
# arr3 = [12, 34, 54, 21, 3]
# arr4 = []

# print(count_arr_elems(arr1)) # 2
# print(count_arr_elems(arr2)) # 3
# print(count_arr_elems(arr3)) # 0
# print(count_arr_elems(arr4)) # 0

arr5 = ['rec', 'ras', 'pluto']
arr6 = ['foo', 'rec', 'rec', 'rec']
arr7 = ['foo', 'bar', 'baz']
arr8 = []

print(count_arr_elems(arr5)) # 1
print(count_arr_elems(arr6)) # 3
print(count_arr_elems(arr7)) # 0
print(count_arr_elems(arr8)) # 0


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
