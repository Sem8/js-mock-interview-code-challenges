/* BFS Path pseudocode:
1. Declare a Queue class instantiation, call it queue
2. Enqueue the starting_vertex as an array into the queue
3. Declare an empty visited set
4. While queue is not empty (size of queue is more than 0)
5. Inside while loop, dequeue the first array from the queue (initially it's just starting vertex) and call it path
6. still inside while loop, get the last element/node from the path and call it get_vertex
7. still inside while loop, if get_vertex not in visited set then, if get_vertex is equal to target_value then return path, otherwise
add node element to the visited set 
8. Loop through to get the neighbors of get_vertex from the vertices dictionary
9. Inside the for in loop, make a new copy of the path array
10. Still inside for in loop, add the neighbor vertices of get_vertex to the copied path array, 1 new path array for each new neighbor
vertex of get_vertex
11. Add the new path array(s) to the back of the queue
 */

/* DFS Path pseudocode:
1. Declare a Stack class instantiatin, call it stack
2. Declare an empty set, call it visited
3. Push the starting_vertex as an array into the back of stack
4. While stack is not empty (stack size is more than 0)
5. Inside while loop, pop the last array from back of stack, name it path & get the last value from path, name it get_vertex
6. Still inside while loop, check if get_vertex is not in visited set then put it in visited set in the if statement.
7. Still inside the previous if statement of if get_vertex is not in visited then check if get_vertex is equal to target_value then 
return path. Otherwise...
8. Still inside the previous if statement of if get_vertex is not in visited, get the neighbors set of get_vertex vertex from the 
self.vertices dictionary and call it neighbor_vertices
9. Make a helper function called pathAdder where it takes in value as an argument, and inside function, we make a new copy of the path
with path.slice() method, call it new_path, push the input values into the back of the new_path then push the new_path to the back of
the stack
10. Call the pathAdder function on each vertex of the neighbor_vertices set using the forEach sets method.
 */

/* Breadth-first traversal pseudocode:
1. Declare an instantiation of the Queue class, call it queue
2. Declare an empty set, call it visited
3. Push the input starting_vertex into the back of Queue using the enqueue method
4. While queue is not empty (queue size is more than 0)
5. In the while loop, take out the vertex from the front of the queue using dequeue method and call the vertex get_vertex
6. Still inside while loop, if get_vertex vertex is not in visited set, add it to the visited set.
7. Still inside if statement of if get_vertex is not in visited set, get the set of neighbors of the get_vertex and call it neighbor_vertices
8. Make a helper function called neighborTraversal which takes in value as an input parameter. Inside neighborTraveral function enqueue the
input value onto the back of the queue so that we can then get this neighbor's neighbors and print it out
9. Outside, the neighborTraversal function, call the forEach method of the neigbor_vertices set (neighbors set of get_vertex) and pass in the
neighborTraversal helper function as a callback to that forEach method.   
 */

/* Depth first traversal recursive
1. Takes in starting_vertex and visited set to null as input parameters
2. Inside function, check if visited is None then set visited equal to an empty set
3. Add the input starting_vertex to visited set
4. Print out the starting_vertex with console log
5. Get the neighbors of starting_vertex from the self.vertices dictionary call it neighbors
6. Make a helper function called neighborAdder which will be the callback, it takes in value as an argument. Inside the neighborAdder function
check if value is not in visited then recursively call the dft_recursive outer function, passing in value as the 1st parameter (in place of 
  starting_vertex and visited set)
6. Call the neighborAdder helper function with the forEach method on the neighbor set from the starting_vertex neighbors. 
 */
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.size() > 0) {
      return this.queue.shift();
    } else {
      return null;
    }
  }

  size() {
    return this.queue.length;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.size() > 0) {
      return this.stack.pop();
    } else {
      return null;
    }
  }

  size() {
    return this.stack.length;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }
  add_vertex(vertex_id) {
    this.vertices[vertex_id] = new Set();
  }

  add_edge(v1, v2) {
    if (v1 in this.vertices && v2 in this.vertices) {
      this.vertices[v1].add(v2);
      // this.vertices[v2].add(v1);
    } else {
      console.log("The vertex does not exist!");
    }
  }

  add_directed_edge(v1, v2) {
    if (v1 in this.vertices && v2 in this.vertices) {
      this.vertices[v1].add(v2);
    }
  }

  bfs_path(starting_vertex_id, target_value) {
    let queue = new Queue();
    queue.enqueue([starting_vertex_id]);
    let visited = new Set();

    while (queue.size() > 0) {
      let path = queue.dequeue();
      //   console.log("path: ", path);
      let get_vertex = path[path.length - 1];
      //   console.log("get_vertex: ", get_vertex);

      if (visited.has(get_vertex) == false) {
        visited.add(get_vertex);
        // console.log("visited: ", visited);

        if (get_vertex == target_value) {
          //   console.log(path);
          return path;
        }
        // console.log('self.vertices[get_vertex]: ', this.vertices[get_vertex]);
        let neighbor_vertices = this.vertices[get_vertex];
        let pathAdder = values => {
          let new_path = path.slice();
          new_path.push(values);
          queue.enqueue(new_path);
        };
        neighbor_vertices.forEach(pathAdder);
      }
    }

    return null;
  }

  dfs_path(starting_vertex_id, target_value) {
    let stack = new Stack();
    let visited = new Set();
    stack.push([starting_vertex_id]);

    while (stack.size() > 0) {
      let path = stack.pop();
      let get_vertex = path[path.length - 1];

      if (visited.has(get_vertex) == false) {
        visited.add(get_vertex);

        if (get_vertex == target_value) {
          return path;
        }

        let neighbor_vertices = this.vertices[get_vertex];

        let pathAdder = values => {
          let new_path = path.slice();
          new_path.push(values);
          stack.push(new_path);
        };

        neighbor_vertices.forEach(pathAdder);
      }
    }

    return null;
  }

  bft(starting_vertex_id) {
    let queue = new Queue();
    let visited = new Set();
    queue.enqueue(starting_vertex_id);

    while (queue.size() > 0) {
      let get_vertex = queue.dequeue();

      if (visited.has(get_vertex) == false) {
        console.log(get_vertex);
        visited.add(get_vertex);

        let neighbor_vertices = this.vertices[get_vertex];

        let neighborTraversal = value => {
          queue.enqueue(value);
        };

        neighbor_vertices.forEach(neighborTraversal);
      }
    }
    return;
  }

  dft(starting_vertex_id) {
    let stack = new Stack();
    let visited = new Set();

    stack.push(starting_vertex_id);

    while (stack.size() > 0) {
      let get_vertex = stack.pop();

      if (visited.has(get_vertex) == false) {
        visited.add(get_vertex);
        console.log(get_vertex);

        let neigbor_vertices = this.vertices[get_vertex];

        let neighborTraversal = value => {
          stack.push(value);
        };

        neigbor_vertices.forEach(neighborTraversal);
      }
    }
  };

  dft_recursive(starting_vertex, visited=null) {
    if (visited == null) {
      visited = new Set();
    };

    visited.add(starting_vertex);
    console.log(starting_vertex);

    let neighbors = this.vertices[starting_vertex];

    let neighborAdder = value => {
      if (visited.has(value) == false) {
        this.dft_recursive(value, visited)
      }
    };

    neighbors.forEach(neighborAdder);
  }
}

let graph = new Graph();
graph.add_vertex(1);
graph.add_vertex(2);
graph.add_vertex(3);
graph.add_vertex(4);
graph.add_vertex(5);
graph.add_vertex(6);
graph.add_vertex(7);
graph.add_edge(5, 3);
graph.add_edge(6, 3);
graph.add_edge(7, 1);
graph.add_edge(4, 7);
graph.add_edge(1, 2);
graph.add_edge(7, 6);
graph.add_edge(2, 4);
graph.add_edge(3, 5);
graph.add_edge(2, 3);
graph.add_edge(4, 6);

// console.log("graph.vertices: ", graph.vertices);

/*
Valid BFS path:
    [1, 2, 4, 6]
*/
// console.log(graph.bfs_path(1, 6));

/*
Valid DFS paths:
    [1, 2, 4, 6]
    [1, 2, 4, 7, 6]
*/
// console.log(graph.dfs_path(1, 6));

/*
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
 */
// console.log(graph.bft(1));

/*
Valid DFT paths:
    1, 2, 3, 5, 4, 6, 7
    1, 2, 3, 5, 4, 7, 6
    1, 2, 4, 7, 6, 3, 5
    1, 2, 4, 6, 3, 5, 7
 */
// console.log(graph.dft(1));

/*
Valid DFT recursive paths:
    1, 2, 3, 5, 4, 6, 7
    1, 2, 3, 5, 4, 7, 6
    1, 2, 4, 7, 6, 3, 5
    1, 2, 4, 6, 3, 5, 7
 */
console.log(graph.dft_recursive(1));