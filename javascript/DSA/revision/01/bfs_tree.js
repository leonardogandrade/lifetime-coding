const { create } = require("lodash")

function createNode(value, left, right) {
    return { value, left, right }
}

function bfsTree(node) {
    if (!node) {
        return []
    }

    const frontier = [node];
    const visited = []

    while (frontier.length) {
        const vertex = frontier.shift();
        visited.push(vertex.value);

        if (vertex.left) {
            frontier.push(vertex.left)
        }

        if (vertex.right) {
            frontier.push(vertex.value)
        }
    }
    return visited;
}

const tree = createNode(1, createNode(2, createNode(4), createNode(5)), createNode(3, createNode(6), createNode(7)))
const result = bfsTree(tree);
console.log(result);