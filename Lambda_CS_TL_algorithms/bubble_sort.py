# Bubble sort: compare the first item in array to the adjacent item to see which one's bigger. If the one before (on the left is bigger)
# then swap then increment index. Otherwise, don't swap and just increment index. 

'''Pseudocode: Bubble sort
1. Initialize a variable called is_swapped and set it to True
2. Make a while loop for while is_swapped (while True)
3. Inside while loop, set is_swapped to False
4. Make a for loop inside the while loop starting from 0 and ending all the way at the last element in the array.
5. Make an if statement inside the for loop of if element at current index i is more than element at next index (index of i + 1)
then swap current element at current index with next element at next adjacent index.
6. set is_swapped to True so that the while loop will continue, until everything in the array is sorted completely. Otherwise the sorting
will stop after 1 run through the entire array, but won't keep swapping and sorting till all elements are sorted completely.
While loop will only stop once no swapping has occurred. 
7. After for loop goes to the last index, while loop will start running but since is_swapped is set to false immediately and the for loop 
is done running, while loop will exit. 
'''
def bubble_sort(arr):
    is_swapped = True
    while is_swapped:
        is_swapped = False
        
        for i in range(0, len(arr) - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_swapped = True
    return arr

print(bubble_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))