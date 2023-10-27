array = [9, 8, 7, 6, 5, 4, 3, 2, 1]


def selection_sort(array: list) -> list:
    sorted = []

    while len(array) > 0:
        temp = array[0]
        for i in range(len(array)):
            if array[i] < temp:
                temp = array[i]
        sorted.append(temp)
        array.pop(array.index(temp))

    return sorted


print("Disordered:\t", array)
print("Ordered:\t", selection_sort(array))
