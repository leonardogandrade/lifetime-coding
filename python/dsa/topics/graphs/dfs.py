graph = {5: [3, 7], 3: [2, 4], 2: [], 4: [8], 8: [], 7: [8]}


def dfs(graph: dict, node: int) -> list:
    frontier = []
    frontier.append(node)
    visited = []

    while len(frontier):
        vertex = frontier.pop()

        if vertex not in frontier:
            visited.append(vertex)

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                frontier.append(neighbor)

    return visited


result = dfs(graph, 5)
print(result)
