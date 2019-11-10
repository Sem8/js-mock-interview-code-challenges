''' Binary search tree pseudocode
1. Make a binary search tree class and have value as a parameter in the init function
2. Declare self.value and set it to value
3. Declare a self.left variable and set it to None
4. Declare a self.right variable and set it to None
'''

''' insert method pseudocode: recursive approach
1. Takes in value as a parameter
2. Make an if statement, check if value is less than self.value then make another if statement, check if there's no self.left then set 
self.left to a node with value made from the BinarySearchTree class, passing value into the value slot.
3. Otherwise, (if self.left exists) then recursively call the insert method, passing in value into the insert method. It'll keep recursively
calling the function till there is no left node and when that base case hits we'll make a new node with the value using BinaraySearchTree
class and that'll be set to the left side of current last node.
4. Outside outer if statement from step 2, make an elif statement of if value is more than or equal to self.value then make another if
statement inside, check if self.right does not exist then set self.right to a new node using BinarySearchTree class passing in value as the
parameter to make that node.
5. Else, (if self.right exists) then recursively call the insert method, passing in value into the parameter. This will keep going through
the right side of the tree till it hits the base case of if there are no more nodes on the right side at the last node then it'll make a 
new node using the BinarySearchTree class with the value passed in and be set as the new right node after the last right node.   
'''

''' contains method pseudocode: recursive approach
1. Takes in target value as a parameter to see if binary search tree contains that input target value
2. Make if statement check if current node value is equal to input target_value then return True.
3. Otherwise, if input target_value is less than current node value of self.value then make another inner if statement, check if self.left
does not exist from the current node then return False. 
4. Else (if a left node from current node does exist) then recursively call the contains method on the next left node passing in the input
target value as the parameter into the recursive function. This will go to the next left node and if input target_value is equal to this 
next left node value it'll hit base case and return otherwise if we hit the last left node and still don't find the input target value then
it'll return False.
5. Make an elif statement outside of if statement from step 2 to check if input target value is greater than current node at self.value then
make another inner if statement, check if next node at the right (self.right) does not exist then return False.
6. Else, for inner else statment (if node right of current node does exist) then recursively call the contains method on the right node of
tree passing in input target value into the recursive function. This will check the next node on right side of current node to see if that
node's value matches input target value. If last right side node is reached and still doesn't match input target value and there are no more
nodes on right side then it'll return False.  
'''

''' get_max_recursive method: 
1. Doesn't take in any parameters. Get maximum value in binary search tree by recursive approach 
2. Make a base case of if binary search tree itself as self does not exist then just return
3. Otherwise if self (binary search tree) does exist, make another if statement which'll be another base case of if there are no more nodes 
on the right after the current node then return the value of the current node with self.value
4. Else (if there are nodes on the right from the current node, so if self.right exists) then recursively call the get_max_recursive 
function on the right side of binary search tree (self.right)
'''

''' get_max_iterative method:
1. Initialize a variable called max_value and set it equal to current node's value of self.value
2. Set the current node to a variable called current
3. Make a while loop of while current (node of binary tree) exists.
4. Inside while loop, make an if statement, check if current node's value is more than the current max_value then re-set the current 
max_value to current.value
5. Outside if statement, go to next highest node by setting current to current.right. The if statement will run again and again for the 
right side nodes until there are no more nodes on right side.
6. Outside while loop, return the latest re-set max_value
'''

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if not self:
            return 
        if value < self.value:
            if not self.left:
                self.left = BinarySearchTree(value)
            else:
                self.left.insert(value)
        elif value >= self.value:
            if not self.right:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)

    def contains(self, target_value):
        if not self:
            return
        if self.value == target_value:
            return True
        if target_value < self.left:
            if not self.left:
                return False
            else:
                return self.left.contains(target_value)
        elif target_value > target_value:
            if not self.right:
                return False
            else:
                self.right.contains(target_value)

    def get_max_recursive(self):
        if not self:
            return

        if not self.right:
            return self.value
        else:
            return self.right.get_max_recursive()

    def get_max_iterative(self):
        max_value = self.value
        current = self

        while current:
            if current.value > max_value:
                max_value = current.value
            current = current.right

        return max_value

                
bst = BinarySearchTree(1)

bst.insert(8)
bst.insert(5)
bst.insert(7)
bst.insert(6)
bst.insert(3)
bst.insert(4)
bst.insert(2)



bst.bft_print(bst)
bst.dft_print(bst)

print("elegant methods")
print("pre order")
bst.pre_order_dft(bst)
print("in order")
bst.in_order_dft(bst)
print("post order")
bst.post_order_dft(bst)