class Algorithms:
    def __init__(self) -> None:
        pass

    def factorial(n:int)-> int:
        if n <= 0:
            return 1
                
        return  n * Algorithms.factorial(n-1)

    def sum(n: int, n2:int)-> int:
        assert isinstance(n, int), "should be an integer"
        return n + n2

    def fibonacci(n: int)->int:
        if n == 0: 
            return 0
        
        if n <= 2:
            return 1
        
        return Algorithms.fibonacci(n -1) + Algorithms.fibonacci(n - 2)
    
    def quick_sort(array: list)->list:
        if len(array) < 2:
            return array
        
        pivot = array[0]
        greater = []
        less = []

        for item in array:
            if item > pivot:
                greater.append(item)
            elif item < pivot:
                less.append(item)
        
        return Algorithms.quick_sort(less) + [pivot] + Algorithms.quick_sort(greater)
        

# Fibonacci
# 0, 1, 2, 3, 3, 5
# 1, 1, 2, 3, 5, 8

# result = Algorithms.fibonacci(5)
# print(result)


# Quick Sort
# 8   7   6   5   4   3   2   1

numbers = [8,1,7,2,6,3,5,4]
result = Algorithms.quick_sort(numbers)
print(result)
