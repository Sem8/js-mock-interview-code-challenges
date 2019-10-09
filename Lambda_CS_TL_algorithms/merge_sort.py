# Merge sort: Divide up the array in halves and keep dividing till each element in the array is a single element. Then merge each 
# element in a sorted fashion. 
'''Pseudocode:
1. Make a merge helper function which takes in 2 arrays (leftArr and rightArr) as inputs.
2. Have pointer indexes for each of the two arrays initialized to zero, call them leftArrIndex and rightArrIndex respectively.
3. Get the merged version of both input arrays by adding both arrays and call the variable elements.
4. Get an empty array version of the two merged arrays filled with 0's by multiplying [0] * elements, call it merged_arr 
5. Loop through the elements array starting at index 0 all the way to the end of length of the product of the two merged arrays
6. Inside for loop, make an if statement of if leftArrIndex is more than length of left array so we've reached the end of left array then
at that index in the merged array, insert elements of the second (right) array and increment the second array's index (rightArrIndex).
7. else if, rightArrIndex is more than the length of the right array (we've reached the end of right array) then at that index in the 
merged array, insert elements of the first (left) array and increment the index of the left array (leftArrIndex).
8. else if element of the right array at the rightArrIndex is smaller than element in the left array at the leftArrIndex then at the 
current for loop index i in the merged_arr final array insert the smaller element from the right array from the current rightArrIndex. And
increment the rightArrIndex (increment current index of the right array) by 1.
9. else (if element of the left array at the leftArrIndex is smaller than element in the right array at the current rightArrIndex) then
at the current for loop index i in the merged_arr final array, insert the smaller element from the left array at the current leftArrIndex
(current index for left array) and increment the leftArrIndex by 1.  
10. At the end return the final merged_arr array outside for loop.

Actual merge sort function.
11. Make an if statement of if length of input array is more than 1, so base case is if length of array is 1 then function stops and 
returns everything
12. Inside if statement, break up the input array into two halves left and right and call each leftArr and rightArr, respectively 
13. Sort the left and right halves of the array using recursive call of the function and set each sorted halves to a variabled called
sorted_left and sorted_right.
14. set the input array equal to calling the merge helper function on the sorted left and right array halves.
'''

# Merge helper function:
def merge(leftArr, rightArr):
    elements = len(leftArr) + len(rightArr)
    merged_arr = [0] * elements

    leftArrIndex = 0
    rightArrIndex = 0

    for i in range(0, elements):
        if leftArrIndex >= len(leftArr):
            merged_arr[i] = rightArr[rightArrIndex]
            rightArrIndex += 1
        elif rightArrIndex >= len(rightArr):
            merged_arr[i] = leftArr[leftArrIndex]
            leftArrIndex += 1
        elif leftArr[leftArrIndex] < rightArr[rightArrIndex]:
            merged_arr[i] = leftArr[leftArrIndex]
            leftArrIndex += 1
        elif rightArr[rightArrIndex] < leftArr[leftArrIndex]:
            merged_arr[i] = rightArr[rightArrIndex]
            rightArrIndex += 1
    return merged_arr

# Actual merge sort function
def merge_sort(arr):
    if len(arr) > 1:
        leftArr = arr[0: len(arr) // 2]
        rightArr = arr[len(arr) // 2: ]
        
        leftArr_sorted = merge_sort(leftArr)
        rightArr_sorted = merge_sort(rightArr)
        arr = merge(leftArr_sorted, rightArr_sorted)
    return arr

print(merge_sort([0,1,2,3,4,5,6,7,8,9]))
print(merge_sort([0,1,2,3,4,5]))
print(merge_sort([2]))
print(merge_sort([]))