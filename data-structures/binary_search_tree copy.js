class Node {
    constructor(data) {
        this.left = null;
        this.rigth = null;
        this.data = data;
    }

    show() {
        return this.data;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var n = new Node(data);

        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node) {
        if (!(node == null)) {
            this.inOrder(node.left);
            process.stdout.write(node.show() + " ");
            this.inOrder(node.right);
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);

tree.inOrder(tree.root)
