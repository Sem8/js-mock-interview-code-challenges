'''
Given 2 strings, merge them in an alternate way, i.e. the final string’s first character is the first character of the first 
string, the second character of the final string is the first character of the second string and so on. And if once you reach 
end of one string while if another string is still remaining then append the remaining of that string to final string

Examples:

Input : string 1 :"geeks"
        string 2 :"forgeeks"
Output: "gfeoerkgseeks"
Explanation : The answer contains characters from alternate strings, and once 
the first string ends the remaining of the second string is added to the final string

Input :string 1 :"hello"
        string 2 :"geeks"
Output : hgeelelkos
'''

# My solution: 
''' Pseudocode: 
1. Set a pointer to each character of the string, call it strPointer and initialize it to 0
2. Initialize an empty string call it finalStr.
3. Make an if statment of if length of str1 is larger than length of str2 then make a while loop of while strPointer is less than length of
str2
4. Inside previous while loop, set finalStr to += character from input str1 at strPointer, then finalStr to += character from input str2 
at strPointer and then increment strPointer.
5. Outside previous while loop but still inside if statment, get the character from str1 starting from index of length of str2 all the way 
to end of that input str1 with len(str1) string length method and slice it and save it to a variable called restOfStr and add restOfStr to 
end of finalStr with +=
6. Repeat the above 3 steps but for the logic of if length of str2 is larger than length of str1 this time. So, make an elif statment of if 
length of str2 is larger than length of str1 then make a while loop of while strPointer is less than length of str1
7. Inside previous while loop, set finalStr to += character from input str1 at strPointer, then finalStr to += character from input str2 
at strPointer and then increment strPointer.
8. Outside previous while loop but still inside elif statment, get the character from str2 starting from index of length of str1 all the way 
to end of that input str2 with len(str2) string length method and slice it and save it to a variable called restOfStr and add restOfStr to 
end of finalStr with +=
9. Make an else statement (if both string lengths are equal) then while strPointer is less than length of str1 then set finalStr to += 
character from input str1 at strPointer, then finalStr to += character from input str2 at strPointer and then increment strPointer.
10. return finalStr
'''

def alternativelyMergeStr(str1, str2):
    strPointer = 0
    finalStr = ''

    if (len(str1) > len(str2)):
        while strPointer < len(str2):
            finalStr += str1[strPointer]
            finalStr += str2[strPointer]
            strPointer += 1

        restOfStr = str1[len(str2): len(str1)]
        finalStr += restOfStr

    elif (len(str2) > len(str1)):
        while strPointer < len(str1):
            finalStr += str1[strPointer]
            finalStr += str2[strPointer]
            strPointer += 1

        restOfStr = str2[len(str1): len(str2)]
        finalStr += restOfStr
    else:
        while strPointer < len(str1):
            finalStr += str1[strPointer]
            finalStr += str2[strPointer]
            strPointer += 1

    return finalStr


# 2nd solution: Recursive
''' Pseudocode: 
1. Make an if statement of if str1 is not valid then return str2
2. Make another if statement of if str2 is not valid then return str1
3. Otherwise, return 1st character of str1 + 1st character of str2 + recursive call of function passing in as parameters the str1 starting 
from the next character after 1st character, and 2nd parameter will be str2 starting from next character after 1st character
'''
def alternativelyMergeStr(str1, str2):
    if not str1:
        return str2
    if not str2:
        return str1
    return str1[0] + str2[0] + alternativelyMergeStr(str1[1:], str2[1:])


# 3rd solution: Geeks for geeks
'''
1. Declare an empty string call it finalStr to hold the final string to return
2. Make a for loop of looping through the length of str1 character by character calling i as the current index, then make an or statment 
where we also loop through the length of str2 character by character also calling i as the current index
3. Inside for loop, add character at current index i from str1 onto the finalStr with +=
4. Still inside for loop, add character at current index i from str2 onto the finalStr with +=
5. Outside for loop return finalStr
'''
def alternativelyMergeStr(str1, str2):
    finalStr = ''
    for i in range(len(str1)) or i in range(len(str2)):
        finalStr += str1[i]
        finalStr += str2[i]
    return finalStr

print(alternativelyMergeStr("geeks", "forgeeks"))  # 'gfeoerkgseeks'
print(alternativelyMergeStr("hello", "geeks"))  # 'hgeelelkos'