graph = {5: [3, 7], 3: [2, 4], 2: [], 4: [8], 8: [], 7: [8]}


def dfs(graph: dict, node: int) -> list:
    frontier = []
    visited = []
    frontier.append(node)

    while len(frontier):
        vertex = frontier[0]
        del frontier[0]

        if vertex not in visited:
            visited.append(vertex)

        for neighboor in graph[vertex]:
            if neighboor not in visited:
                frontier.append(neighboor)

    print(visited)


dfs(graph, 5)
