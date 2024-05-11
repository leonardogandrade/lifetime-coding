//      a
//     / \
//    b   c
//   / \    \
//  d   e    f

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function dfs(root) {
    if (!root) {
        return [];
    }

    const frontier = [root];
    const path = [];

    while (frontier.length) {
        let vertex = frontier.pop();
        path.push(vertex.value);

        if (vertex.left) frontier.push(vertex.left);
        if (vertex.right) frontier.push(vertex.right);
    }
    return path;
}

function dfsRecursive(root) {
    if (!root) {
        return [];
    }

    const left = dfsRecursive(root.left);
    const right = dfsRecursive(root.right);

    return [root.value, ...left, ...right]
}

// const result = dfs(a);
// console.log(result);

const result = dfsRecursive(a);
console.log(result);
