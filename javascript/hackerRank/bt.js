let tree = {}

function insertNode(tree, value) {
    if (tree.value) {
        if (value > tree.value)
            insertNode(tree.right, value);
        else
            insertNode(tree.left, value);
    } else {
        tree.value = value;
        tree.right = {}
        tree.left = {}
    }
}

insertNode(tree, 10);
insertNode(tree, 12);
insertNode(tree, 5);
insertNode(tree, 7);

console.log(tree);
