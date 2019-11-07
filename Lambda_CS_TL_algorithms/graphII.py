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

''' BFT pseudocode:
Import Queue and instantiate a q Object from Queue class
Create an empty set called visited. 
Enque or add to end of a queue the starting node
While queue is not empty (length or size of q is more than 0):
    Dequeue or remove from front of queue the first element
    Check if that dequeued element is not in visited set then print that dequeued element and add it to visited set
    Loop through the neighbor nodes of that dequeued element with for in loop
    In the for in loop, enque the neighbor nodes into the back of the queue to be explored with the first one inserted in first
'''

'''DFT pseudocode:
Import Stack and instantiate a stack object from Stack class
Create an empty set called visited
Push the starting vertex into the back of the stack
While stack is not empty (length or size of Stack is more than 0):
    pop the last element from the stack
    if that popped off last element from stack is not in visited set then add it to the visited set and print it
    Loop through all the neighbor vertices of that popped off last element vertex with for in loop
        Inside the for in loop, push all the neighbor vertices into the back of the stack
'''

'''DFT recursive pseudocode: 
Will take starting_vertex and visited set to None as the two function parameters
Import Stack class and instantiate a stack object from Stack class
Create an empty set called visited
Push the starting vertex into the back of the stack
'''

class Graph:
    def __init__(self):
        self.vertices = {}

    def add_vertex(self, vertex):
        self.vertices[vertex] = set()

    def add_directed_edge(self, v1, v2):
        if v1 in self.vertices and v2 in self.vertices:
            self.vertices[v1].add(v2)
        else:
            print('vertex does not exist')

    def add_edge(self, v1, v2):
        if v1 in self.vertices and v2 in self.vertices:
            self.vertices[v1].add(v2)
            self.vertices[v2].add(v1)
        else:
            print('vertex does not exist')

    def bft(self, starting_vertex):
        visited = set()
        q = Queue()
        q.enqueue(starting_vertex)

        while q.size() > 0:
            get_vertex = q.dequeue()

            if get_vertex not in visited:
                print(get_vertex)
                visited.add(get_vertex)

                for neighbor_vertex in self.vertices[get_vertex]:
                    q.enqueue(neighbor_vertex)

    def dft(self, starting_vertex):
        visited = set()
        stack = Stack()
        stack.push(starting_vertex)

        while stack.size() > 0:
            get_vertex = stack.pop()

            if get_vertex not in visited:
                print(get_vertex)
                visited.add(get_vertex)

                for neighbor_vertex in self.vertices[get_vertex]:
                    stack.push(neighbor_vertex)
    def dft_recursive(self, starting_vertex, visited=None):
        if visited is None:
            visited = set()
        stack = Stack()
        stack.push(starting_vertex)

        while stack.size() > 0:
            get_vertex = stack.pop()

            if get_vertex not in visited:
                print(get_vertex)
                visited.add(get_vertex)

                for neighbor_vertex in self.vertices[get_vertex]:
                    self.dft_recursive(neighbor_vertex, visited)


if __name__ == '__main__':
    graph = Graph()  # Instantiate your graph
    # https://github.com/LambdaSchool/Graphs/blob/master/objectives/breadth-first-search/img/bfs-visit-order.png
    graph.add_vertex(1)
    graph.add_vertex(2)
    graph.add_vertex(3)
    graph.add_vertex(4)
    graph.add_vertex(5)
    graph.add_vertex(6)
    graph.add_vertex(7)
    graph.add_directed_edge(5, 3)
    graph.add_directed_edge(6, 3)
    graph.add_directed_edge(7, 1)
    graph.add_directed_edge(4, 7)
    graph.add_directed_edge(1, 2)
    graph.add_directed_edge(7, 6)
    graph.add_directed_edge(2, 4)
    graph.add_directed_edge(3, 5)
    graph.add_directed_edge(2, 3)
    graph.add_directed_edge(4, 6)
    
    '''
    Should print:
        {1: {2}, 2: {3, 4}, 3: {5}, 4: {6, 7}, 5: {3}, 6: {3}, 7: {1, 6}}
    '''
    print(graph.vertices)
    
    '''
    Valid DFT paths:
        1, 2, 3, 5, 4, 6, 7
        1, 2, 3, 5, 4, 7, 6
        1, 2, 4, 7, 6, 3, 5
        1, 2, 4, 6, 3, 5, 7
    '''
    # graph.dft(1)
    
    '''
    Valid BFT paths:
        1, 2, 3, 4, 5, 6, 7
        1, 2, 3, 4, 5, 7, 6
        1, 2, 3, 4, 6, 7, 5
        1, 2, 3, 4, 6, 5, 7
        1, 2, 3, 4, 7, 6, 5
        1, 2, 3, 4, 7, 5, 6
        1, 2, 4, 3, 5, 6, 7
        1, 2, 4, 3, 5, 7, 6
        1, 2, 4, 3, 6, 7, 5
        1, 2, 4, 3, 6, 5, 7
        1, 2, 4, 3, 7, 6, 5
        1, 2, 4, 3, 7, 5, 6
    '''
    # print(graph.bft(1))
    
    '''
    Valid DFT recursive paths:
        1, 2, 3, 5, 4, 6, 7
        1, 2, 3, 5, 4, 7, 6
        1, 2, 4, 7, 6, 3, 5
        1, 2, 4, 6, 3, 5, 7
    '''
    graph.dft_recursive(1)
    
    '''
    Valid BFS path:
        [1, 2, 4, 6]
    '''
    # print(graph.bfs(1, 6))
    
    '''
    Valid DFS paths:
        [1, 2, 4, 6]
        [1, 2, 4, 7, 6]
    '''
    # print(graph.dfs(1, 6))