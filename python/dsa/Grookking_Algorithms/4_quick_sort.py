array = [13, 8, 10, 2, 4, 12, 7, 1, 15, 11, 3, 14, 9, 6, 5]


def parition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            (arr[i], arr[j]) = (arr[j], arr[i])

    (arr[i + 1], arr[high]) = (arr[high], arr[i + 1])

    return i + 1


def quicksort(arr, low, high):
    if low < high:
        pivot = parition(arr, low, high)

        quicksort(arr, low, pivot - 1)
        quicksort(arr, pivot + 1, high)


print(array)
quicksort(array, 0, len(array) - 1)
print(array)


# def quicksort_2(array):
#     if len(array) < 2:
#         return array

#     pivot = array[0]

#     less = [i for i in array[1:] if i < pivot]
#     greater = [i for i in array[1:] if i > pivot]

#     return quicksort_2(less) + [pivot] + quicksort_2(greater)


# print(quicksort_2(array))
