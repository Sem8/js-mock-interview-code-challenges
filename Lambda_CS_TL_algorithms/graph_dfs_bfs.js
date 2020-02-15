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
      this.vertices[v2].add(v1);
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

      //   let visited_values = visited.values();

      if (visited.has(get_vertex) == false) {
        visited.add(get_vertex);
        // console.log("visited: ", visited);

        if (get_vertex == target_value) {
        //   console.log(path);
          return path;
        }
        // console.log('self.vertices[get_vertex]: ', this.vertices[get_vertex]);
        let neighbor_vertices = this.vertices[get_vertex];
        let pathAdder = (values) => {
            let new_path = path.slice();
            new_path.push(values);
            queue.enqueue(new_path);
        }
        neighbor_vertices.forEach(pathAdder);

      }
    }

    return null;
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

// console.log("self.vertices: ", graph.vertices);

/*
Valid BFS path:
    [1, 2, 4, 6]
*/
console.log(graph.bfs_path(1, 6));
