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
            return None
        }
    };

    size() {
        return this.queue.length;
    }
};

class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value)
    }
    pop() {
        if (this.size() > 0) {
            return this.stack.pop();
        } else {
            return None
        }
    };

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
            console.log('The vertex does not exist!');
        }
    }

    add_directed_edge(v1, v2) {
        if (v1 in this.vertices && v2 in this.vertices) {
            this.vertices[v1].add(v2);
        }
    };

    bfs_path(starting_vertex_id, target_value) {

    }
}

let graph = new Graph();
graph.add_vertex(1)
graph.add_vertex(2)
graph.add_vertex(3)
graph.add_vertex(4)
graph.add_vertex(5)
graph.add_vertex(6)
graph.add_vertex(7)
graph.add_edge(5, 3)
graph.add_edge(6, 3)
graph.add_edge(7, 1)
graph.add_edge(4, 7)
graph.add_edge(1, 2)
graph.add_edge(7, 6)
graph.add_edge(2, 4)
graph.add_edge(3, 5)
graph.add_edge(2, 3)
graph.add_edge(4, 6)

console.log('self.vertices: ', graph.vertices)