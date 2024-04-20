const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

function bfs(graph, start) {
    const frontier = [start];
    const visited = new Set();
    const traveled = [];

    while (frontier.length) {
        const vertex = frontier.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            traveled.push(vertex)

            for (const neighboor of graph[vertex]) {
                frontier.push(neighboor);
            }
        }
    }

    return traveled;
}

console.log(bfs(graph, 'A'));