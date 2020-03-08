'''
You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent 
characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.
'''

# My solution:
''' Pseudocode:
1. Declare a string call it finalStr and let it initially hold the 1st character of the input string
2. Make a for loop starting at 2nd character of input string (index 1) and ending at end of input string w/ string len method
3. Make an if statment of if current character at current index i is not equal to the previous character at index of i-1 then add that to 
finalStr string
4. Outside for loop, return the length of original input string - length of final string  
'''

def alternatingCharacters(s):
    finalStr = s[0]

    for i in range(1, len(s)):
        if (s[i] != s[i - 1]):
            finalStr += s[i]

    return len(s) - len(finalStr)


print(alternatingCharacters('AABAAB'))  # 2 string output: 'ABAB' 
print(alternatingCharacters('AAAA'))  # 3 string output: 'A'
print(alternatingCharacters('BBBBB'))  # 4 string output: 'B'
print(alternatingCharacters('ABABABAB'))  # 0 string output: 'ABABABAB'
print(alternatingCharacters('BABABA'))  # 0 string output: 'BABABA'
print(alternatingCharacters('AAABBB'))  # 4 string output: 'AB'
