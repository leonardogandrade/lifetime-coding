const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const travel = [];

    while (queue.length) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            travel.push(vertex);

            for (const neighboor of graph[vertex]) {
                queue.push(neighboor);
            }
        }
    }

    return travel;
}

console.log("BFS: ", bfs(graph, 'A'));

function dfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const travel = [];

    while (queue.length) {
        const vertex = queue.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            travel.push(vertex);

            for (const neighboor of graph[vertex]) {
                queue.push(neighboor);
            }
        }
    }

    return travel;
}

console.log("DFS: ", dfs(graph, 'A'));