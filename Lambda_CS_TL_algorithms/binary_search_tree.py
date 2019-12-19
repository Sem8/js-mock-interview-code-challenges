class Queue():
    def __init__(self):
        self.queue = []
    def enqueue(self, value):
        self.queue.append(value)
    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None
    def size(self):
        return len(self.queue)

class Stack():
    def __init__(self):
        self.stack = []
    def push(self, value):
        self.stack.append(value)
    def pop(self):
        if self.size() > 0:
            return self.stack.pop()
        else:
            return None
    def size(self):
        return len(self.stack)

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

''' for_each_recursive method: 
1. Takes in callback as an input parameter which will be the callback function that will call the current node from binary search tree
2. Use the input callback function and pass in the current node's value (self.value) into that callback function. This will be the base case
3. Make an if statement, check if node left of current node at self.left exists then recursively call the for_each_recursive function method
on the left side of current node at self.left and pass in the callback function into the function parameter
4. Make another if statement outside previous if statement, check if node right of current node at self.right exists then recursively call 
the for_each_recursive method on the node right of current node at self.right and pass in the input callback function into the recursive
function's parameter. 
'''

''' iterative_depth_first_for_each method:
1. Takes in callback as an input parameter which will be a callback function that'll run the input callback function for each node in 
binary search tree in depth-first order. 
2. Initialize an empty list (array), call it stack
3. Apppend the first root node (self) to the back of the stack list using .append() method for list
4. while the stack is not empty (len(stack) is more than 0):
5. Pop the last node from the back of the stack using .pop() list method and set it to a variable get_node
6. Make an if statement, check if a node on left of current get_node exists then append the node on left of current get_node to the stack
7. Make another if statement outside previous if statement, check if a node on right of current get_node exists then append the node on 
right of current get_node to the stack. 
8. Outside both if statements, call the input callback function passing in current value of current node with self.value into the callback
function as the parameter
'''

''' breadth_first_for_each method:
1. Takes in callback as an input parameter which will be a callback function that'll run the input callback function for each node in binary
search tree in breadth-first order.
2. Initialize an empty list call it que
3. Append the first root node (self) into the back of the que list using .append() method.
4. Make a while loop of while que is not empty, so que list length is more than 0
5. Inside while loop, pop off the first node from the front of the que with .pop(0) method and set it to a variable get_node
6. Make an if statement of if node left of first popped off node of get_node is present then append that node on left side into the back of
the que using .append() method.
7. Outside previous if statment, check if node on right side of first popped off node from que (get_node) exists then append that node on
right side of get_node onto the back of que list using .append method
8. Outside both if statements call the callback function on the value of the first popped off node from que (get_node)
'''

''' pre_order_dft method:
1. Will take in a starting_node as an input parameter. Supposed to print all nodes on left side first in depth first manner then right side
2. Make a base case of if there are no more nodes (so node doesn't exist) then just return to end the function.
3. Otherwise (if node does exist) print the value of the starting_node.
4. Then recursively call the pre_order_dft method on the left side of starting_node first then on the right side of starting_node 
'''

''' in_order_dft method:
1. will take in a starting_node as an input parameter. Supposed to print starting node first, then last child node on left side, it's parent
node then sibling node then move up to it's grandparent node then the last child of the grandparent node on the right side and then up one
more level and so on
2. Make a base case of if there are no more starting_node left so starting_node is None then just return to end the function
3. Otherwise, (if starting_node does exist) then recursively call the in_order_dft method on left nodes of the starting node. 
4. Then print the value of starting_node 
5. Then recursively call the in_order_dft method on the right side of the starting_node (pass in right side of the starting node into the 
recursive function)
'''

''' post_order_dft method:
1. Will take in a starting_node as an input parameter. Will print out all the last child nodes first starting from left then go up one and 
if there are additional child nodes from that node that's one level up on the right side it'll print out the very last child node from that
node and so on
2. Make a base case of if starting_node is non-existent which means we've reached the very last node then just return to end the function.
3. Otherwise (if the starting_node exists) then recursively call the post_order dft on the left side of starting_node.
4. Then recursively call the post_order_dft method on the right side of starting_node.
5. Then print the value of starting_node  
'''

''' bft_print method:
1. Will take in starting_node as an input parameter.
2. Instantiate a new que object from Queue class constructor
3. push the starting_node into the que 
4. Make a while loop of while que is not empty (length of que is more than 0):
5. Inside while loop, remove the first node from the queue list using deque() method that was made in the Queue class and call it get_node
6. Print the value of the first node that was dequeed from the que list (get_node.value)  
7. Make an if statement, check if there are nodes on left of the first node that was dequed off the que list and if so enque that left node
into the back of the queue
8. Outside previous if statement, make another if statement, check if nodes on the right of the first node that was dequed off the que list
exists. If so then enque that node from the right onto the back of the queue. 
while loop will continue for as long as there are nodes on both sides.
'''

''' dft_print method:
1. Will take in starting_node as an input parameter
2. Instantiate a new stack object from Stack class
3. Push the starting_node into the back of the stack using push method
4. While stack is not empty (length of stack is more than 0):
5. Pop the last node from the stack using pop method and save it into a variable, call it get_node
6. Print value of the last node popped off from the stack (get_node.value)
7. Make an if statement, check if node left of that last popped off node from stack (get_node.left) exists and if so, then push that left
node to the back of the stack
8. Outside previous if statement, make another if statement, check if node right of that last popped off node from stack (get_node.right)
exists and if so then push that right node to the back of the stack
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
        elif target_value > self.right:
            if not self.right:
                return False
            else:
                return self.right.contains(target_value)

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

    def for_each_recursive(self, callback):
        # base case
        callback(self.value)

        if self.left:
            self.left.for_each_recursive(callback)
        if self.right:
            self.right.for_each_recursive(callback)

    def iterative_depth_first_for_each(self, callback):
        stack = []
        stack.append(self)

        while len(stack) > 0:
            get_node = stack.pop()

            if get_node.left:
                stack.append(get_node.left)
            if get_node.right:
                stack.append(get_node.right)
            callback(get_node.value)

    def breadth_first_for_each(self, callback):
        que = []
        que.append(self)

        while len(que) > 0:
            get_node = que.pop(0)
            if get_node.left:
                que.append(get_node.left)
            if get_node.right:
                que.append(get_node.right)
            callback(get_node.value)

    def pre_order_dft(self, starting_node):
        if starting_node is None:
            return
        print(starting_node.value)
        self.pre_order_dft(starting_node.left)
        self.pre_order_dft(starting_node.right)

    def in_order_dft(self, starting_node):
        if starting_node is None:
            return
        self.in_order_dft(starting_node.left)
        print(starting_node.value)
        self.in_order_dft(starting_node.right)

    def post_order_dft(self, starting_node):
        if starting_node is None:
            return
        self.post_order_dft(starting_node.left)
        self.post_order_dft(starting_node.right)
        print(starting_node.value)

    def bft_print(self, starting_node):
        que = Queue()
        que.enqueue(starting_node)

        while que.size() > 0:
            get_node = que.dequeue()
            print(get_node.value)

            if get_node.left:
                que.enqueue(get_node.left)
            if get_node.right:
                que.enqueue(get_node.right)

    def dft_print(self, starting_node):
        stack = Stack()
        stack.push(starting_node)

        while stack.size() > 0:
            get_node = stack.pop()
            print(get_node.value)

            if get_node.left:
                stack.push(get_node.left)
            if get_node.right:
                stack.push(get_node.right)

    def print_callback(self, inputVal):
        print(inputVal)

bst = BinarySearchTree(1)

bst.insert(8)
bst.insert(5)
bst.insert(7)
bst.insert(6)
bst.insert(3)
bst.insert(4)
bst.insert(2)

# bst = BinarySearchTree(8)

# bst.insert(5)
# bst.insert(14)
# bst.insert(4)
# bst.insert(6)
# bst.insert(7)
# bst.insert(11)
# bst.insert(20)
# bst.insert(9)
# bst.insert(10)
# bst.insert(18)
# bst.insert(23)
# bst.insert(12)



# bst.bft_print(bst)
# bst.dft_print(bst)

bst.iterative_depth_first_for_each(bst.print_callback)

# print("elegant methods")
# print("pre order")
# bst.pre_order_dft(bst)
# print("in order")
# bst.in_order_dft(bst)
# print("post order")
# bst.post_order_dft(bst)