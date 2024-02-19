function insertNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = insertNode(1,
    insertNode(2,
        insertNode(4),
        insertNode(5)
    ),
    insertNode(3,
        insertNode(6),
        insertNode(7)
    )
);

function bfs(node) {
    if (!node) {
        return [];
    }

    const queue = [node];
    const traveled = [];

    while (queue.length) {
        const current = queue.shift();
        traveled.push(current.value);

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
    return traveled;
}

console.log(bfs(tree));
