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
        if (newNode.value < frontier.value) {
            if (frontier.left === null) {
                frontier.left = newNode;
            } else {
                this.addNode(frontier.left, newNode);
            }
        } else {
            if (frontier.right === null) {
                frontier.right = newNode;
            } else {
                this.addNode(frontier.right, newNode);
            }
        }
    }

    show() {
        console.log(this.root);
    }
}

const tree = new Tree();
tree.add(5);
tree.add(4);
tree.add(6);
tree.add(8);
tree.show();