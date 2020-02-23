/* 
     10
     /
    1   2   4  11
     \ /   / \ /
      3   5   8
       \ / \   \
        6   7   9
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
    if (!this.vertices[vertex_id]) {
      this.vertices[vertex_id] = new Set();
    }
  }

  add_edge(v1, v2) {
    if (v1 in this.vertices && v2 in this.vertices) {
      //   console.log(v1 in this.vertices); // will return true
      this.vertices[v1].add(v2);
      // this.vertices[v2].add(v1);
    } else {
      console.log("The vertex does not exist!");
    }
  }
}

/* Pseudocode:
earliestAncestor function takes in ancestors matrix which contains a list of parent and child connection
 */

let earliestAncestor = (ancestors, startingNode) => {
  let graph = new Graph();

  for (let eachNode of ancestors) {
    graph.add_vertex(eachNode[0]);
    graph.add_vertex(eachNode[1]);

    // add connection where child is connected to parent only
    graph.add_edge(eachNode[1], eachNode[0]);
  }

  // console.log('graph: ', graph);

  let stack = new Stack();
  stack.push([startingNode]);

  let maxPathLength = 1;
  let oldestAncestor = -1;

  while (stack.size() > 0) {
    // console.log('graph.vertices: ', graph.vertices);
    // console.log('stack: ', stack);
    let path = stack.pop();
    let vertex = path[path.length - 1];

    if (path.length > maxPathLength) {
      maxPathLength = path.length;
      oldestAncestor = vertex;
    }

    if (path.length == maxPathLength) {
      if (vertex < oldestAncestor) {
        maxPathLength = path.length;
        oldestAncestor = vertex;
      }
    }

    let neighborSet = graph.vertices[vertex];

    let pathAdder = value => {
      let pathCopy = path.slice();
      pathCopy.push(value);
      stack.push(pathCopy);
    };

    neighborSet.forEach(pathAdder);
  }

  return oldestAncestor;
};

test_ancestors = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [8, 9],
  [11, 8],
  [10, 1]
];
console.log(earliestAncestor(test_ancestors, 3)); // 10
console.log(earliestAncestor(test_ancestors, 1)); // 10
console.log(earliestAncestor(test_ancestors, 2)); // -1
console.log(earliestAncestor(test_ancestors, 3)); // 10
console.log(earliestAncestor(test_ancestors, 4)); // -1
console.log(earliestAncestor(test_ancestors, 5)); // 4
console.log(earliestAncestor(test_ancestors, 6)); // 10
console.log(earliestAncestor(test_ancestors, 7)); // 4
console.log(earliestAncestor(test_ancestors, 8)); // 4
console.log(earliestAncestor(test_ancestors, 9)); // 4
console.log(earliestAncestor(test_ancestors, 10)); // -1
console.log(earliestAncestor(test_ancestors, 11)); // -1
