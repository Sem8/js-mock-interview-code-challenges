'''
Given a string containing lowercase characters. The task is to print the maximum occurring character in the input string. If 2 or more 
characters appear the same number of times, print the lexicographically (alphabetically) lowest (first) character.

Examples:

Input: 'test sample'
Output: 'e'
‘t’, ‘e’ and ‘s’ appears 2 times, but ‘e’ is the lexicographically smallest character.
'''

# My solution:
''' Pseudocode:
1. Declare an empty dictionary call it hashTable
2. Declare a variable called maxCount and initialize it to 0
3. Declare a string call it lowestChar and set it equal to 'z'
4. Make a for loop to loop through each character of input string aStr calling each index i
5. Inside for loop, make an if statement of current character at current index i from input string aStr does not exist as a key in the 
hashTable dictionary then insert it as a key with a value of 0
6. Else, (if current character from aStr input string does exist as a key in hashTable) then incrment the value of that character key in 
hashTable by 1
7. Outside previous for loop, make a for in loop to loop through the hashTable dictionary, call each key char
8. Inside previous for in loop, check to see if value of current char key in hashTable is more than maxCount then set maxCount to that 
value
9. Outside for in loop, make another for in loop to loop thorugh the hashTable dictionary again, again calling each key char.
10. Inside previous for in loop make an if statement check if value of current char key in hashTable is equal to maxCount and if so then
make another if statment inside previous if statement, check if current char key is lower than lowestChar, if so then update lowestChar to 
current char key
11. Outside for loop, return lowestChar
'''

def getMaxOccurringChar(aStr):
    hashTable = {}
    maxCount = 0
    lowestChar = 'z'

    for i in range(len(aStr)):
        if aStr[i] not in hashTable:
            hashTable[aStr[i]] = 1
        else:
            hashTable[aStr[i]] += 1

    for char in hashTable:
        if hashTable[char] > maxCount:
            maxCount = hashTable[char]
    for char in hashTable:
        if hashTable[char] == maxCount:
            if char < lowestChar:
                lowestChar = char
    return lowestChar

print(getMaxOccurringChar('test sample'))  # 'e'
print(getMaxOccurringChar('test'))  # 't'

