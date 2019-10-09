# Selection sort: Start at the first item in the array and take it as the current minimum. Go through the entire array and update the 
# current minimum if we see an element less than the minimum that is currently set (for first iteration at the beginning the current
# minimum will be the first element in the array). Once we go through the entire array and find the lowest element swap it with the element
# at the current index. Then move on to the element at the next index, again go through the entire array after the current element at the 
# current index which is now set at current minimum and find the lowest element after this element and update it as the current minimum.
# Again, swap the updated current minimum with the current element at the current index. Keep repeating this process till we've traversed
# the whole array and all elements will be sorted.

''' Pseudocode:
1. Have a for loop to go through the input array, starting from the 1st element and ending at 1 element before the last element.
2. Inside for loop, set a variable equal to the current index i of this for loop, call this variable curr_index
3. set another variable, call it smallest_index and set it equal to the curr_index variable. 
4. Make another inner for loop inside the previous outer for loop, starting from index curr_index which is index from the outer for loop and
ending at the last element of the array, and call the indexing of this inner for loop, j
5. Make an if statment of if array element at this inner for loop index of j is less than the array element from the previous outer for loop
index at smallest_index, update smallest index and set it equal to j. (This way all elements after the index from outer first for loop will
traverse through entire array to find the smallest element and the smallest element's index will get updated as the samllest_index).
6. Once inner for loop has gone through all elements, the lowest element's index will be updated as smallest_index. So outside the inner
for loop, swap the array element at the smallest_index with the current array element at the current index at curr_index from outer for 
loop. 
7. The outer for loop will move on to the next array element and repeat this process till the second to last element has been visited by
the outer for loop. Outside all for loops, return the newly sorted input array. 
''' 

def selection_sort(arr):
    for i in range(0, len(arr) - 1):
        curr_index = i
        smallest_index = curr_index

        for j in range(curr_index, len(arr)):
            if arr[j] < arr[smallest_index]:
                smallest_index = j
        arr[smallest_index], arr[curr_index] = arr[curr_index], arr[smallest_index]
    return arr



print(selection_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))