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

console.log(tree);
