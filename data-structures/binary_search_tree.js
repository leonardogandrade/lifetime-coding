const { argv } = require('process');

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
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

    append(data) {
        const new_node = new Node(data);

        if (this.root === null) {
            this.root = new_node;
        } else {
            let current = this.root;
            while (true) {
                let parent = current;
                if (data < parent.data) {
                    current = parent.left;
                    if (current === null) {
                        parent.left = new_node;
                        break;
                    }
                } else {
                    current = parent.right;
                    if (current == null) {
                        parent.right = new_node;
                        break;
                    }
                }
            }
        }
    }

    _find_max_value(data) {
        let current = this.root;
        let max_value;

        while (true) {
            if (data < current.data) {
                current = current.left;
                if (current.left == null) {
                    max_value = current.data;
                    break;
                }
            } else {
                current = current.right;
                if (current.right == null) {
                    max_value = current.data;
                    break;
                }
            }
        }

        return max_value;
    }

    _find_min_value(data) {
        let current = this.root;
        let min_value;

        while (true) {
            if (data > current.data) {
                current = current.right;
                if (current.right == null) {
                    min_value = current.data;
                    break;
                }
            } else {
                current = current.left;
                if (current.left == null) {
                    min_value = current.data;
                    break;
                }
            }
        }

        return min_value;
    }

    find_max_value() {
        let current = this.root;

        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    find_min_value() {
        let current = this.root;

        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    getSmallest(node) {
        let current = node;

        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    find_data(data) {
        let current = this.root;

        while (true) {
            if (current != null && data != current.data) {
                if (data > current?.data) {
                    current = current.right;
                } else if (current != null) {
                    current = current.left;
                }
            } else {
                break;
            }
        }
        if (current === null)
            return null

        return current.data

    }

    remove(data) {
        this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.right;
            }
            // node has no right child
            if (node.right == null) {
                return node.left;
            }
            // node has two children
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data); return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data); return node;
        }
    }

    in_order(node) {
        if (node != null) {
            this.in_order(node.left);
            process.stdout.write(node.data + " ");
            this.in_order(node.right);
        }
    }

    pre_order(node) {
        if (node != null) {
            process.stdout.write(node.data + " ");
            this.in_order(node.left);
            this.in_order(node.right);
        }
    }

    post_order(node) {
        if (node != null) {
            this.in_order(node.left);
            this.in_order(node.right);
            process.stdout.write(node.data + " ");
        }
    }

}

let tree = new BinarySearchTree();
tree.append(23);
tree.append(45);
tree.append(16);
tree.append(345)
tree.append(37);
tree.append(-37);
tree.append(3);
tree.append(99);
tree.append(22);

const value = argv[2];

tree.post_order(tree.root);
console.log('\nMIN value in tree:', tree.find_min_value());
console.log('\nMAX value in tree:', tree.find_max_value());
console.log('\nFIND value in tree:', tree.find_data(value));
tree.remove(-37);
tree.remove(99);
tree.post_order(tree.root);