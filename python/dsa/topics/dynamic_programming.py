"""
1 - Dynamic Progamming classes

    - Combinatory analyses
        - Permutation
        - Arrangement
        - Combination
    - Maximization | Minimization

2 - Objective function

Write down the objective function is the first step. This means to identify the base case.

"""

# PERMUTATION

from copy import copy, deepcopy


# How many ways to arrange a certain number of cois
def coins(n: int) -> int:
    """
    How many ways to arrange a certain number of cois
    This is a PERMUTATION problem definied by:
    P(k,n) =        n!
              ---------------
              k1! * k2! * ...
    """

    if n <= 1:
        return 1

    return coins(n - 1) * n / coins(n - 1)


# print(coins(4))

"""
    How many ways to sum a list of numbers and achieve a certain result.
    arr = [1,2,3] sum =4
    """


def coins_sum(arr: list, n: int, sum: int) -> int:
    """
    How many ways to sum a list of numbers and achieve a certain result.
    arr = [1,2,3] sum =4
    """
    if n <= 0:
        return 0

    if sum == 0:
        return 1

    if sum < 0:
        return 0

    return coins_sum(arr, n - 1, sum) + coins_sum(arr, n, sum - arr[n - 1])


# arr = [1, 2, 3]
# print(coins_sum(arr=arr, n=len(arr), sum=4))
