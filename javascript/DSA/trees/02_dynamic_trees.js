class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }

    addNode(frontier, newNode) {
        if (frontier.value > newNode.value) {
            if (frontier.left === null) {
                frontier.left = newNode
            } else {
                this.addNode(frontier.left, newNode)
            }
        } else {
            if (frontier.right === null) {
                frontier.right = newNode
            } else {
                this.addNode(frontier.right, newNode)
            }
        }
    }

    show() {
        console.log(this.root)
    }

    bfs() {
        if (!this.root) {
            return [];
        }
        console.log(this.root.value)
        const frontier = [this.root];
        const path = [];

        while (frontier.length) {
            let vertex = frontier.shift();
            path.push(vertex.value);

            if (vertex.left) frontier.push(vertex.left);
            if (vertex.right) frontier.push(vertex.right);
        }
        return path;
    }
}

const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(4);
tree.add(6);
tree.add(7);
tree.add(3);
tree.add(12);
tree.add(11);
tree.add(13);
// tree.show();
const visited = tree.bfs();
console.log(visited);
