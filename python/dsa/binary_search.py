import math


def binary_search_sequential(data):
    found = False
    target = 9
    low = 0
    high = len(data) - 1
    steps = 1

    while not found:
        pivot = round((low + high) / 2)

        if target > data[pivot]:
            low = pivot
        else:
            high = pivot

        if target == data[pivot]:
            found = True

        steps += 1

    print("Element found in [{}] steps.".format(steps - 1))


def binary_search_recurrency(data, target, steps=1):
    if len(data) > 1:
        low = 0
        high = len(data) - 1
        pivot = math.ceil((low + high) / 2)

        if target > data[pivot]:
            binary_search_recurrency(data[pivot:], target, steps + 1)
        else:
            binary_search_recurrency(data[:pivot], target, steps + 1)

        if target == data[pivot]:
            print("Element found in [{}] steps.".format(steps))


data = [9, 8, 7, 6, 5, 4, 3, 2, 1]
data.sort()

# binary_search_recurrency(data, 9)
# binary_search_sequential(data)
