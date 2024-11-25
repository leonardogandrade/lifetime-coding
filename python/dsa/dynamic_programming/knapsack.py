"""
    Knapsack 0 | 1
    Here we have a 20kg knapsack capacity
    We can choose or not an item to put it into the knapsack
    Each item has a weight associated and its respective value
    weight: [6, 13, 5, 10, 3]
    value:  [20, 30, 15, 25, 10]

    The main goal is to select the items which can maximize the profit
"""

def knapsack_0_1(weight: list[int], value: list[int], k: int, i: int = 0):
    if i == len(weight):
        return 0

    if k <= 0:
        return float("-inf")

    return max(
        knapsack_0_1(weight, value, k, i + 1),
        value[i] + knapsack_0_1(weight, value, k - weight[i], i + 1),
    )


w = [6, 13, 5, 10, 3]
v = [20, 30, 15, 25, 10]
k = 20

result = knapsack_0_1(w, v, k)
print(result)