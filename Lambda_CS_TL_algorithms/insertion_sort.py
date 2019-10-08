# Initialize the first element as sorted then compare each next element to the right of it see if previous element is bigger than next element
# or not. If previous element is bigger then swap and keep swapping till previous element is no longer bigger than next element. 
''' Insertion sort Pseudocode:
1. Loop through the array, starting at index 1 (not 0 because index 0 is considered as sorted and having a point of comparison), ending at
2nd to last element. 
2. set a variable to current element at current index, call it current element.
3. set a variable called j which will be an index and set it equal to the i index from the for loop.
4. Make a while loop of while j is more than 0 and element at index 1 less than j (or element right before j) is more than current element at
current index of i then enter the while loop.
5. Inside the while loop, set the element at current index of j equal to the bigger element that is right before it (element from index j-1)
6. Decrement j by 1 to move to the previous index. 
7. while loop will continue as long as we haven't reached index 0 with j and as long as previous element, 1 before index j is more than 
current element at current index of i. (So as long as current element from current index of i in for loop is less than previous element from
pointer j, j will keep decrementing and comparing to current element at i and swapping previous element from j with current element at j as 
long as previous element is bigger than current element).
8. If j has reached index of 1 or current element at current index of i from for loop is no longer less than the previous element from index j,
while loop exits. 
9. Where j stopped, we will place the current element from current index i from the for loop in that stalled j position to correctly place the
current element. 
10. return the final array.    
'''
def insertion_sort(arr):
    for i in range(1, len(arr)):
        cur_element = arr[i]
        j = i

        while (j > 0 and arr[j - 1] > cur_element):
            arr[j] = arr[j - 1]
            j -= 1
        arr[j] = cur_element
    return arr


import random

arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7]
arr2 = []
arr3 = [0, 1, 2, 3, 4, 5]
arr4 = random.sample(range(200), 50)

print(insertion_sort(arr1))
print(insertion_sort(arr2))
print(insertion_sort(arr3))
print(insertion_sort(arr4))


