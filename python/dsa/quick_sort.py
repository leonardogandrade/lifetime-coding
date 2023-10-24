array = [8, 2, 4, 7, 1, 3, 9, 6, 5]


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
