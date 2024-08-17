// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List

// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display
// all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) return null;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Activity 2: Stack

//• Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}


// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = "";
    while (stack.items.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

console.log(reverseString("hello")); // Output: "olleh"

// Activity 3: Queue

// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view
// the first element).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) return "Queue is empty";
        return this.items[0];
    }
}

// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed
// in order.

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Added job: ${job}`);
    }

    processJob() {
        if (this.queue.items.length === 0) {
            console.log("No jobs to process");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print Document 1");
printerQueue.addJob("Print Document 2");
printerQueue.processJob(); // Output: Processing job: Print Document 1
printerQueue.processJob(); // Output: Processing job: Print Document 2

// Activity 4: Binary Tree

// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display
// nodes.


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    display() {
        this.inOrderTraversal(this.root);
    }
}

// Activity 5: Graph (Optional)

// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two
// nodes.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfsShortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set();

        visited.add(start);

        while (queue.length) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === end) {
                return path;
            }

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            });
        }

        return null; // If no path is found
    }
}

// Example usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

const shortestPath = g.bfsShortestPath("A", "F");
console.log(`Shortest path from A to F: ${shortestPath.join(" -> ")}`);
// Output: Shortest path from A to F: A -> B -> D -> F


// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).