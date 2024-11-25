class DeepFirstSearch:
    def __init__(self, vertice: int) -> None:
        self.vertice = vertice
        self.adj_matrix = [
            [0 for i in range(self.vertice)] for j in range(self.vertice)
        ]

    def add_edge(self, start: int, end: int) -> None:
        self.adj_matrix[start][end] = 1
        self.adj_matrix[end][start] = 1

    def dfs(self, node: int, visited: list) -> None:
        print(node)
        visited[node] = 1

        for i in range(self.vertice):
            if self.adj_matrix[node][i] == 1 and visited[i] == 0:
                self.dfs(i, visited)


adj_matrix = DeepFirstSearch(vertice=4)

adj_matrix.add_edge(0, 1)
adj_matrix.add_edge(0, 2)
adj_matrix.add_edge(1, 3)

visited = [0] * adj_matrix.vertice

adj_matrix.dfs(node=0, visited=visited)
