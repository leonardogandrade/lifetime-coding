graph = {5: [3, 7], 3: [2, 4], 2: [], 4: [8], 8: [], 7: [8]}


def dfs(graph: dict, node: int, path: list = [], visited: set = set()) -> set:
    if node not in visited:
        print(node)
        visited.add(node)
        for neighboor in graph[node]:
            dfs(graph, neighboor, visited)


# print("DFS - Depth-first-search")
# dfs(graph, 5)


def dfs_2(graph: dict, node: int) -> None:
    frontier = []
    frontier.append(node)
    visited = []

    while len(frontier):
        vertex = frontier.pop()

        if vertex not in visited:
            visited.append(vertex)

        for neighboor in graph[vertex]:
            if neighboor not in visited:
                frontier.append(neighboor)

    print(visited)


dfs_2(graph, 5)
