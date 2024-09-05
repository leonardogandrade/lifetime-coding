type Graph = Record<string, Array<string>>;
type Traversal = "dfs" | "bfs" | string;

function bfs(graph: Graph, start: string, traversal: Traversal) {
  const frontier: string[] = [start];
  const visited: Set<string> = new Set();
  const path: Array<string> = [];

  while (frontier.length) {
    let vertex: string = "";

    traversal === "bfs"
      ? (vertex = frontier.shift() as string)
      : (vertex = frontier.pop() as string);

    if (!visited.has(vertex)) {
      visited.add(vertex);
      path.push(vertex);

      for (let neighboor of graph[vertex]) {
        frontier.push(neighboor);
      }
    }
  }

  return path;
}

const graph: Graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

const traversalType: string = process.argv[2];
console.log(bfs(graph, "A", traversalType));
