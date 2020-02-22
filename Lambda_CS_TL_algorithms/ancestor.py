'''
     10
     /
    1   2   4  11
     \ /   / \ /
      3   5   8
       \ / \   \
        6   7   9
'''

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


class Graph:
    """Represent a graph as a dictionary of vertices mapping labels to edges."""
    def __init__(self):
        self.vertices = {}
    def add_vertex(self, vertex_id):
        if vertex_id not in self.vertices:
            self.vertices[vertex_id] = set()
    def add_edge(self, v1, v2):
        if v1 in self.vertices and v2 in self.vertices:
            self.vertices[v1].add(v2)
        else:
            raise IndexError("That vertex does not exist!")


def earliest_ancestor(ancestors, starting_node):
    # Build the graph
    graph = Graph()
    for pair in ancestors:
        graph.add_vertex(pair[0])
        graph.add_vertex(pair[1])
        # Build edges in reverse
        graph.add_edge(pair[1], pair[0])
    # Do a BFS (storing the path)
    # q = Queue()
    stack = Stack()
    stack.push([starting_node])
    max_path_len = 1
    earliest_ancestor = -1
    while stack.size() > 0:
        path = stack.pop()
        v = path[-1]
        # If the path is longer or equal and the value is smaller, or if the path is longer)

        if (len(path) > max_path_len):
            max_path_len = len(path)
            earliest_ancestor = v

        if (len(path) == max_path_len and v < earliest_ancestor):
            max_path_len = len(path)
            earliest_ancestor = v

        for neighbor in graph.vertices[v]:
            path_copy = list(path)
            path_copy.append(neighbor)
            stack.push(path_copy)

    return earliest_ancestor


test_ancestors = [(1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5), (4, 8), (8, 9), (11, 8), (10, 1)]
print(earliest_ancestor(test_ancestors, 3)) # 10
print(earliest_ancestor(test_ancestors, 1)) # 10
print(earliest_ancestor(test_ancestors, 2)) # -1
print(earliest_ancestor(test_ancestors, 3)) # 10
print(earliest_ancestor(test_ancestors, 4)) # -1
print(earliest_ancestor(test_ancestors, 5)) # 4
print(earliest_ancestor(test_ancestors, 6)) # 10
print(earliest_ancestor(test_ancestors, 7)) # 4
print(earliest_ancestor(test_ancestors, 8)) # 4
print(earliest_ancestor(test_ancestors, 9)) # 4
print(earliest_ancestor(test_ancestors, 10)) # -1
print(earliest_ancestor(test_ancestors, 11)) # -1


