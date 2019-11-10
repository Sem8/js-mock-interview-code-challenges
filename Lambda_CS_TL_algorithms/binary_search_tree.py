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