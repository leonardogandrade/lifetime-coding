def find_target_sum(arr: list, target: int) -> set:
    """
    Find the pair of numbers which the sum is equal to the target value and return them.

    Example:
    [1, 5, 14, 17, 21], target=19 => the expected result is (5, 14)
    """

    p1 = 0
    p2 = len(arr) - 1
    sum = 0

    while p1 != p2 or sum != target:
        sum = arr[p1] + arr[p2]

        if sum > target:
            p2 -= 1

        if sum < target:
            p1 += 1

        if sum == target:
            break

    return (arr[p1], arr[p2])


payload = [1, 5, 14, 17, 21]
result = find_target_sum(arr=payload, target=19)
print(result)
