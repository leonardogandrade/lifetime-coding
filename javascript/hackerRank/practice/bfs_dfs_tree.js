function createNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = createNode(1,
    createNode(2,
        createNode(4),
        createNode(5)
    ),
    createNode(3,
        createNode(6),
        createNode(7)
    )
);

function bfs(node) {
    if (!node) {
        return [];
    }

    const queue = [node];
    const travel = [];

    while (queue.length) {
        const current = queue.shift();
        travel.push(current.value);

        if (current.left) {
            queue.push(current.left)
        }

        if (current.right) {
            queue.push(current.right)
        }
    }

    return travel;
}

function dfs(node) {
    if (!node) {
        return [];
    }

    const queue = [node];
    const travel = [];

    while (queue.length) {
        const current = queue.pop();
        travel.push(current.value);

        if (current.left) {
            queue.push(current.left)
        }

        if (current.right) {
            queue.push(current.right)
        }
    }

    return travel;
}

console.log("BFS: ", bfs(tree));
console.log("DFS: ", dfs(tree));
