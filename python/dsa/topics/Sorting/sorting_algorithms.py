import math


class Sorting:
    def __init__(self):
        pass

    def quicksort(self, array: list) -> list:
        if len(array) <= 1:
            return array

        pivot = array[0]

        less = [i for i in array if i < pivot]
        greater = [j for j in array if j > pivot]

        return self.quicksort(less) + [pivot] + self.quicksort(greater)

    def binary_search(self, array: list, target: int) -> str:
        if len(array) == 1 and target == array[0]:
            return "FOUND"

        if len(array) == 1 and target != array[0]:
            return "NOT FOUND"

        high = len(array)
        pivot = math.ceil(high / 2)

        if target > array[pivot]:
            return self.binary_search(array[pivot:high], target)

        if target < array[pivot]:
            return self.binary_search(array[: pivot + 1], target)

        if target == array[pivot]:
            return "FOUND"


sorting = Sorting()

arr = [8, 1, 7, 2, 6, 3, 5, 4]

ordered_list = sorting.quicksort(arr)

binary = sorting.binary_search(ordered_list, 7)
print(binary)
