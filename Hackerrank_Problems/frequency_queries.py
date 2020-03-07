'''
You are given  queries. Each query is of the form two integers described below:
- 1 x: Insert x in your data structure.
- 2 y: Delete one occurence of y from your data structure, if present.
- 3 z: Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] 
contains the data element. 
For example, you are given array queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]. The results of each operation are:
Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)  
'''

# My solution pseudocode: -- some test cases on hackerrank times out so needs to be optimized for time
'''
1. Declare an empty list call it final_arr, declare another empty list call it freqQueryArr
2. Loop through the outer array of matrix w/ for loop to get each inner array
3. Inside for loop, check if first element in each inner list is equal to 1, if so then append the 2nd list element from the current inner
list into the final_arr
4. Inside for loop, check if first element in each inner list is equal to 2, if so then remove the value equal to the 2nd item from this 
current inner list element from the final_arr using python remove method which removes a value by specifying that value into the method
5. inside for loop, check if first element in each inner list is equal to 3, if so then use the frequencyCounter helper function, passing in 
final_arr array as the first input parameter to the helper function and 2nd integer element from the current inner list as the 2nd input 
parameter to the helper function and set the result of this helper function to a variable called freqCountResult.
6. Still inside previous if statement of if current 1st item in inner array is 3 append the freqCountResult value into the freqQueryArr
7. Outside for loop, return the freqQueryArr

frequencyCounter helper method: 
1. Takes in a list as 1st parameter (called arr), value integer for 2nd parameter (called count). It should return 1 if any element from the 
first input parameter list appears the count (2nd function parameter) number of times otherwise, return 0.
2. Declare an empty dictionary call it hashTable
3. Loop through the input arr list with for loop
4. Inside for loop, check if current element does not exist as a key in the hashTable dictionary then insert the current element as a key into
the hashTable with a value of 1
5. Still inside for loop, else if current list item at current index of for loop does exist as a key with a value in hashTable then increment
the value of that key by 1
6. Outside, previous for loop, make a for in loop to loop through the hashTable dictionary, calling each key currKey.
7. Inside hashTable for in loop, if value of current key (currKey) from hashTable is equal to the input count value, return 1
8. Outside previous for in loop, return value of 0 
'''

# frequency counter helper function:
# def frequencyCounter(arr, count):
#     hashTable = {}

#     for i in range(len(arr)):
#         if arr[i] not in hashTable:
#             hashTable[arr[i]] = 1
#         else:
#             hashTable[arr[i]] += 1

#     for currKey in hashTable:
#         if hashTable[currKey] == count:
#             return 1
        
#     return 0

# def freqQuery(queries):
#     final_arr = []
#     freqQueryArr = []

#     for i in range(len(queries)):
#         if queries[i][0] == 1:
#             final_arr.append(queries[i][1])
#         elif queries[i][0] == 2:
#             if queries[i][1] in final_arr:
#                 final_arr.remove(queries[i][1])
#         elif queries[i][0] == 3:
#             freqCountResult = frequencyCounter(final_arr, queries[i][1])
#             freqQueryArr.append(freqCountResult)

#     return freqQueryArr



# Sean chen's solution:

'''
Python implementation:
```python
# defaultdict is the same as normal dictionaries, except a defaultdict
# sets a default value if a key has not been set yet; this is mostly
# for convenience 
from collections import defaultdict
​
def freqQuery(queries):
  val_counts = defaultdict(int)
  freq_counts = defaultdict(int)
  answers = []
​
  for i, j in queries:
    if i == 1:
      # O(1)
      if j in val_counts:
        # decrement the value's old count 
        if freq_counts[val_counts[j]] > 0:
            freq_counts[val_counts[j]] -= 1
        val_counts[j] += 1
        # increment the frequency in freq_counts 
        freq_counts[val_counts[j]] += 1
      else:
        val_counts[j] = 1
        if freq_counts[val_counts[j]]:
          freq_counts[val_counts[j]] += 1
        else:
          freq_counts[val_counts[j]] = 1
    if i == 2:
        # O(1)
        # check that the value exists in val_counts
        if val_counts[j]:
          # decrement the old frequency count 
          freq_counts[val_counts[j]] -= 1
          val_counts[j] -= 1
          # increment the new frequency count 
          freq_counts[val_counts[j]] += 1
    if i == 3:
      # O(n) linear in the number of key, value pairs 
      # aim for a O(1) runtime 
      # somehow check j in an object 
      # instead of having the j values be checked against 
      # the values in an object, it would be much faster 
      # to check the j values against the keys of an object
      if j in freq_counts and freq_counts[j] > 0:
        answers.append(1)
      else:
        answers.append(0)
      
  return answers
```
​
JS implementation:
```js
function frequencyQueries(queries) {
    const answers = [];
    // keeps track of the number of occurrences of eacy query value 
    const occurrences = {};
    // keeps track of how many values have shown up a certain number of times
    // keys are integers representing frequency and values are the number 
    // of values that showcase that frequency 
    // for example, if a query specifies a new value, then that value has 
    // only shown up once, so we'll increment the value associated with 
    // the key of 1 to indicate that there is an additional value that 
    // has shown up once 
    const frequencies = {};
​
    for (const [op, val] of queries) {
        if (op === 1) {
            // subtract an occurrence of the value's prior frequency 
            frequencies[occurrences[val]]--;
            // add the value to our occurrences map 
            occurrences[val] = (occurrences[val] || 0) + 1;
            // increment an occurrence of the value's new frequency 
            frequencies[occurrences[val]] = (frequencies[occurrences[val]] || 0) + 1;
        } else if (op === 2 && occurrences[val]) {
            // subtract an occurrence of the value's prior frequency 
            frequencies[occurrences[val]]--; 
            // remove the value from our occurrences map 
            occurrences[val]--;
            // increment an occurrence of the value's new frequency 
            frequencies[occurrences[val]]++;
        } else if (op === 3) {
            // all we have to do for operation 3 is check if the value 
            // associated with the frequency > 0 
            answers.push(frequencies[val] > 0 ? 1 : 0);
        }
    }
​
    return answers;
}
'''

from collections import defaultdict

def freqQuery(queries):
  val_counts = defaultdict(int)
  freq_counts = defaultdict(int)
  answers = []
   
  for i, j in queries:
    if i == 1:
      # O(1)
      if j in val_counts:
        # decrement the value's old count 
        if freq_counts[val_counts[j]] > 0:
            freq_counts[val_counts[j]] -= 1
        val_counts[j] += 1
        # increment the frequency in freq_counts 
        freq_counts[val_counts[j]] += 1
      else:
        val_counts[j] = 1
        if freq_counts[val_counts[j]]:
          freq_counts[val_counts[j]] += 1
        else:
          freq_counts[val_counts[j]] = 1
    if i == 2:
        # O(1)
        # check that the value exists in val_counts
        if val_counts[j]:
          # decrement the old frequency count 
          freq_counts[val_counts[j]] -= 1
          val_counts[j] -= 1
          # increment the new frequency count 
          freq_counts[val_counts[j]] += 1
    if i == 3:
      # O(n) linear in the number of key, value pairs 
      # aim for a O(1) runtime 
      # somehow check j in an object 
      # instead of having the j values be checked against 
      # the values in an object, it would be much faster 
      # to check the j values against the keys of an object
      if j in freq_counts and freq_counts[j] > 0:
        answers.append(1)
      else:
        answers.append(0)
      
  return answers


print(freqQuery([(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]))  # [0, 1] final arr: [1, 1]
print(freqQuery([(1, 5), (1, 6), (3, 2), (1, 10), (1, 10), (1, 6), (2, 5), (3, 2)]))  # [0, 1] final arr: [6, 10, 10, 6]
print(freqQuery([(3, 4), (2, 1003), (1, 16), (3, 1)]))  # [0, 1] final arr: [16]
print(freqQuery([(1, 3), (2, 3), (3, 2), (1, 4), (1, 5), (1, 5), (1, 4), (3, 2), (2, 4), (3, 2)]))  # [0, 1, 1] final arr: [4, 5, 5]
