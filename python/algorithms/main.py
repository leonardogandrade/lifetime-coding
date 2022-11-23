from binary_search import BinarySearch

A = [9,8,7,6,5,4,3,2,1]
# binarySearch = BinarySearch()
# binarySearch.search(A, 6)
# binarySearch.display()
# [1,2,3,4,5,6,7,8,9]
# [0,1,2,3,4,5,6,7,8]
A.sort()

def bin_search(array, goal):
    if array != []:
        key = round(len(array) / 2)

    if array[key] != goal and goal < array[key]:
        return bin_search(array[:key], goal)

    if array[key] != goal and goal > array[key]:
        return bin_search(array[key:], goal)

    if goal == array[key]:
        return 'FOUND'

print(bin_search(A, 8))
