const tree = {};

function insert(tree, value) {
    if (tree.value) {
        if (value < tree.value) {
            insert(tree.left, value);
        } else {
            insert(tree.right, value)
        }
    } else {
        tree.value = value;
        tree.right = {};
        tree.left = {};
    }
};

insert(tree, 10);
insert(tree, 5);
insert(tree, 8);
insert(tree, 15);
insert(tree, 6);
insert(tree, 4);
insert(tree, 17);
insert(tree, 14);
console.log(JSON.stringify(tree));