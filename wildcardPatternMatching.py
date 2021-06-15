'''
Given a text and a wildcard pattern, implement wildcard pattern matching algorithm that finds if wildcard 
pattern is matched with text. The matching should cover the entire text (not partial text).

The wildcard pattern can include the characters ‘?’ and ‘*’
‘?’ – matches any single character
‘*’ – Matches any sequence of characters (including the empty sequence)

For example,

Text = "baaabab",
Pattern = “*****ba*****ab", output : true
Pattern = "baaa?ab", output : true
Pattern = "ba*a?", output : true
Pattern = "a*ab", output : false

Each occurrence of ‘?’ character in wildcard pattern can be replaced with any other character and each occurrence 
of ‘*’ with a sequence of characters such that the wildcard pattern becomes identical to the input string after replacement.
'''

def strrmatch(strr, pattern, n, m):
    if (m == 0): 
        return (n == 0) 
          
    # lookup table for storing results of 
    # subproblems 
    lookup = [[False for i in range(m + 1)] for j in range(n + 1)]
    print('lookup: ', lookup)


print(strrmatch("baaabab", "*****ba*****ab", 2, 3))

# print(strrmatch("baaabab", "*****ba*****ab", len('baaabab'), len('*****ba*****ab')))
# print(strrmatch("baaabab", "baaa?ab", 2, 3))
# print(strrmatch("baaabab", "ba*a?", 2, 3))
# print(strrmatch("baaabab", "a*ab", 2, 3))

# Lambda solution from Sean
class Solution:
    def isMatch(self, s: str, p: str)-> bool:
        # use a dynamic programming approach 
        # think of DP as recursion that is augmented with caching 
        cache = {}
        
        def recurse(s, p):
            # first just think of this with plain old recursion
            # what are our base cases? 
            # base case 1: if the string s is empty 
            if not s:
                # s = "", p = ""
                # if the pattern is empty, "*", True
                # s = "", p = " "
                # if the pattern is not empty, "?" False 
                # s = "", p = "*"
                return (p == '') or (p[0] == '*' and recurse(s, p[1:]))
            # base case 2: if the pattern is empty
            if not p:
                # p = "", then s = "", True
                # else, False 
                return (s == '')
            
            # also check the cache 
            if (s, p) not in cache:
                # handling asterisks in pattern 
                # what happens when p[0] == '*'? 
                if p[0] == '*':
                    # match any number of chars
                    # or match the empty sequence 
                    # recurse twice, one way that increments the string 
                    # the other way incrementing the pattern 
                    # if any recursive come back True, return True 
                    cache[(s, p)] = recurse(s, p[1:]) or recurse(s[1:], p)
                # otherwise, p[0] != "*"
                else:
                    # compare the first chars of s and p
                    # if they don't match or p[0] != '?'
                    # return False
                    if s[0] != p[0] and p[0] != '?':
                        cache[(s, p)] = False
                    # if we've recursed all the way through both strings
                    # with no mismatches between string and pattern, return True
                    else:
                        cache[(s, p)] = recurse(s[1:], p[1:])
            
            return cache[(s, p)]
        
        return recurse(s, p)

        # without dynamic programming
        def recurse(s, p):
            # first just think of this with plain old recursion
            # what are our base cases? 
            # base case 1: if the string s is empty 
            if not s:
                # s = "", p = ""
                # if the pattern is empty, "*", True
                # s = "", p = " "
                # if the pattern is not empty, "?" False 
                # s = "", p = "*"
                return p == '' or p[0] == '*' and recurse(s, p[1:])
            # base case 2: if the pattern is empty
            if not p:
                # p = "", then s = "", True
                # else, False 
                return s == ''
            
            # also check the cache 
            # handling asterisks in pattern 
            # what happens when p[0] == '*'? 
            if p[0] == '*':
                # match any number of chars
                # or match the empty sequence 
                # recurse twice, one way that increments the string 
                # the other way incrementing the pattern 
                # if any recursive come back True, return True 
                return recurse(s, p[1:]) or recurse(s[1:], p)
            # otherwise, p[0] != "*"
            else:
                # compare the first chars of s and p
                # if they don't match or p[0] != '?'
                # return False
                if s[0] != p[0] and p[0] != '?':
                    return False
                # if we've recursed all the way through both strings
                # with no mismatches between string and pattern, return True
                return recurse(s[1:], p[1:])
    
        return recurse(s, p)


# Lambda solution from KJ
'''
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        
        i, j = 0, 0                        # pointers for indices of s and p
        wildcards = {'*', '?'}             # dict to store wildcard characters
        star_index_in_p = -1               # pointer for the last index of '*' in p
        
        while i < len(s):
            
            # if we're beyond pattern's limit, or pattern is an unmatched character and not a wildcard
            if j >= len(p) or (p[j] != s[i] and p[j] not in wildcards):
                if star_index_in_p == -1:  # if we haven't seen a '*' in p yet, we have no flexibility
                    return False
                j = star_index_in_p + 1    # reset p index pointer to character after star_index_in_p
                star_index_in_s += 1       # reset s index pointer to character after star_index_in_s
                i = star_index_in_s        # i.e. use '*' to match one character from s
                
            elif p[j] == '*':              # record index of '*' in p and next index to be matched in s
                star_index_in_p = j
                star_index_in_s = i
                j += 1
                
            else:                          # else, if characters match or p[j]=='?', increment both pointers
                i += 1
                j += 1
                
        while j < len(p):                  # now that we're outside the limits of s,
            if p[j] != '*':                # any remaining characters in p can only be '*'
                return False
            j += 1
            
        return True                        # if we made it this far, s and p match
    
        # Time complexity: O(n*m) -> O(n)
        # Space complexity: O(1)
'''