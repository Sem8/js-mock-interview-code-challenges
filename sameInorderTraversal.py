''' Given 2 binary trees, determine whether they have the same In-Order traversal
    Tree 1:                 
         5
       /   \
      3     7  
     /     /
    1     6

    Tree 2:
        3
      /   \
     1     6
         /   \
        5     7
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
        if value >= self.value:
            if not self.right:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)
                
# Unoptimized solution:
    def in_order_traversal(self, starting_node, arr):
        if starting_node is None:
            return
        self.in_order_traversal(starting_node.left, arr)
        arr.append(starting_node.value)   
        # print(starting_node.value)
        self.in_order_traversal(starting_node.right, arr)
        return arr

# Tree 1
bst1 = BinarySearchTree(5)
bst1.insert(3)
bst1.insert(7)
bst1.insert(1)
bst1.insert(6)

# Tree 2
bst2 = BinarySearchTree(3)
bst2.insert(1)
bst2.insert(6)
bst2.insert(5)
bst2.insert(7)

# bst2.insert(9)

# print('Tree 1:')
# bst1.in_order_traversal(bst1)
# print(bst1.in_order_traversal(bst1, []))

# print('Tree 2:')
# bst2.in_order_traversal(bst2)
# print(bst2.in_order_traversal(bst2, []))

def sameInorderTraversal(tree1, tree2):
    return tree1.in_order_traversal(tree1, []) == tree2.in_order_traversal(tree2, [])

print(sameInorderTraversal(bst1, bst2))

