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

''' BFT PSEUDOCODE:
create a queue from Queue class
Enqueue the starting vertex into the queue class 
Create an empty set, call it visited
Make a while loop of while queue is not empty then:
    Dequeue (remove from head) the first element from queue
    Check if that first dequed element is not already in the visited set then put it in the visited set
    Loop through all the neighbor vertices of that dequed vertex (that was dequeud from front of queue) with for in loop
    Add all those neighber vertices into the back of the queue (for them to be put in the visited set and their neighbors to be put in the queue
    later on)
'''

''' DFT PSEUDOCODE:
Create a stack from Stack class
Push the starting vertex into the (back of the) stack
Initialize an empty set, call it visited
Make a while loop of while stack is not empty:
    pop the last vertex from the stack and set it to a variable called get_vertex
    check if get_vertex is not in visted set then print the get_vertex vertex and add it to the visited set
    Loop through the neighbor vertices of the last element popped off from the stack (get_vertex) with for in loop.
    Add all the neighbor vertices to the end of the stack (for the last elements to be traversed first and visited and printed)
'''

'''
Pseudocode:
Graph class:
1. Make a graph class and set self.vertices to an empty dictionary

add_vertex method:
1. Takes in vertex as a parameter that'll make the input parameter vertex and put it in self.vertices dictionary as a key
2. Set the value of vertex key to an empty set

add_directed_edge method:
1. Takes in v1 and v2 as two vertices to be added as key value pairs 
2. In directed edge, v1 will be the key and v2 will be the value inside a set for the v1 key.
3. Make an if statement of both v1 and v2 is in self.vertices dictionary then add v2 as a value of v1 key using the add method for python sets

add_edge method:
1. Takes in v1 and v2 as two vertices to be added as key value pairs.
2. In undirected edge, v1 and v2 will both be each other's keys and values, they're mutually connected, it's not just 1 way connection.
3. Make an if statement, check if v1 and v2 are in self.vertices dictionary. If so, then add v1 as a key to the self.vertices dictionary and add
v2 as it's value using and add method for python sets.
4. Next, add v2 in the self.vertices dictionary and add v1 as it's value using the add method for python sets. 
5. Else (if either v1 or v2 is not in the self.vertices dictionary) raise and error saying that vertex is not present.

bft method: 
Takes in starting_vertex as a parameter. 
1. Initialize a Queue() call it queue.
2. Enqueue the starting_vertex into the queue which will add the starting_vertex into the queue.
3. Initialize an empty set, call it visited
4. Have a while loop of while queue is not empty (size of queue is more than 0)
5. Inside the while loop, dequeue or remove the first element from queue and set it equal to a variable called get_vertex
6. Make an if statement of if get_vertex is not in visited set then print the get_vertex and add it to the visited set.
7. Now traverse throug the rest of the neighber vertices in the get_vertex with a for in loop and add those neighbor vertices at the back of the 
queue. While loop will continue as long as queue has elements in it. First element will keep getting taken off the queue and get added to the 
visited set until all elements are printed and added to the visited set.

dft method:
Takes in starting_vertex as a parameter.
1. Initialize an Stack() call it stack.
2. Push the starting_vertx into the back of the stack
3. Initialize an empty set, call it visited
4. Make a while loop of while stack size is more than 0 (stack is not empty)
5. Inside while loop, pop off the last element from stack and set it to a variable called get_vertex
6. Make an if statement, check if get_vertex is not in visited set then print get_vertex and add it to the visited set.
7. Inside previous if statement, loop through each neighbor vertex of the get_vertex vertex from the self.vertices dictionary which contains the
get_vertex as key with it's neighber vertices as values in a set. This is done with a for in loop and inside the for in loop, add 
each of those neighbor vertices into the back of the stack. This will pop off each neighbor vertex then add it to the visited set if not visited
already and print it and then add it's neighbor vertices into the back of the stack and explore that 3rd neighbor to add to visited and traverse
etc.
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
            raise IndexError('The vertex does not exist')

    def add_edge(self, v1, v2):
        if v1 in self.vertices and v2 in self.vertices:
            self.vertices[v1].add(v2)
            self.vertices[v2].add(v1)
        else:
            raise IndexError('The vertex does not exist')

    def bft(self, starting_vertex):
        que = Queue()
        que.enqueue(starting_vertex)
        visited = set()

        while que.size() > 0:
            get_vertex = que.dequeue()

            if get_vertex not in visited:
                print(get_vertex)
                visited.add(get_vertex)
                for neighbor_vertex in self.vertices[get_vertex]:
                    que.enqueue(neighbor_vertex)

    def dft(self, starting_vertex):
        stack = Stack()
        stack.push(starting_vertex)
        visited = set()

        while stack.size() > 0:
            get_vertex = stack.pop()
            if get_vertex not in visited:
                print(get_vertex)
                visited.add(get_vertex)
                for neighbor_vertex in self.vertices[get_vertex]:
                    stack.push(neighbor_vertex)


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
    graph.dft(1)
    
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
    # graph.dft_recursive(1)
    
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


# path = []
# starting_vert = 2
# path.append(starting_vert)
# path.append(3)
# path = path + [starting_vert]
# path = path + [3]
# print(path)
# print([path])
