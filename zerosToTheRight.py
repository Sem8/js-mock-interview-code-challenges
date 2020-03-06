'''
Write a function that takes an array of integers and moves each non-zero integer to the left side of the array, then returns the number of 
non-zero integers. The order of the non-zero integers does not matter.

EXAMPLES:
Sample input: [0, 3, 1, 0, -2]
Expected output: 3
Expected output array state: [3, 1, -2, 0, 0]

Sample input: [4, 2, 1, 5]
Expected output: 4
Expected output array state: [4, 2, 1, 5]
'''

# My solution pseudocode: 
# In place swap
'''
1. Have 2 pointers, 1 starting at beginning of list and other starting at end of list. Declare a variable called leftPointer initialized to 0,
another variable called rightPointer initialized to input arr length - 1.
2. Declare another variable called counter and initialize it to 0.
3. Make a while loop of while leftPointer is valid and rightPointer is valid and leftPointer is less than or equal to rightPointer:
4. Inside while loop, make an if statement of if list element at leftPointer is equal to 0 and list element at rightPointer index is not equal to 
0 then swap the two values at the 2 indices with each other then increment leftPointer by 1, decrement rightPointer by 1, increment counter by 1
5. Still inside while loop but outside inner while loop, make an if statement of if list element at leftPointer is not equal to 0 then
just increment leftPointer and increment count by 1
6. Still inside while loop make another if statement, check if list element at rightPointer index is equal to 0 then just decrement rightPointer
by 1
7. Outside while loop, print the inplace swapped input arr and return counter
'''

def zeroesToTheRight(arr):
    leftPointer = 0
    rightPointer = len(arr) - 1
    counter = 0

    while(leftPointer is not None and rightPointer is not None and leftPointer <= rightPointer):
        if arr[leftPointer] == 0 and arr[rightPointer] != 0:
            arr[leftPointer], arr[rightPointer] = arr[rightPointer], arr[leftPointer]
            leftPointer += 1
            rightPointer -= 1            
            counter += 1

        if arr[leftPointer] != 0:
            leftPointer += 1
            counter += 1

        if arr[rightPointer] == 0:
            rightPointer -= 1 

    print('swapped arr: ', arr)
    return counter

print(zeroesToTheRight([0, 3, 1, 0, -2]))  # 3  output array: [3, 1, -2, 0, 0]
print(zeroesToTheRight([4, 2, 1, 5]))  # 4  output array: [4, 2, 1, 5]
print(zeroesToTheRight([0, 0, 0, 0, 0]))  # 0  output array: [0, 0, 0, 0, 0]
print(zeroesToTheRight([1, 2, 3, 0, 4, 0, 0]))  # 4  output array: [1, 2, 3, 4, 0, 0, 0]
print(zeroesToTheRight([0, 0, 0, 0, 3, 2, 1]))  # 3 output array: [3, 2, 1, 0, 0, 0, 0]