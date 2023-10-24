# Chapter 4 - Quicksort
# Exercises

A = [1,2,3,4,5,6,7]

# def factorial(val):
#     fact = 1
#     if val >=1:
#         fact = factorial(val -1) * val
#     return fact

# x = factorial(5)
# print(x)

# def countdown(val):
#     if val >= 1:
#         print(f"{val -1} ...")
#         countdown(val -1)

# countdown(5)

# Call stack - call a function inside another one

# def greet(name):
#     print("hello, " + name + "!" )
#     greet2(name)
#     print("getting ready to say bye...")
#     bye()

# def greet2(name):
#     print(f"how are you {name}")

# def bye():
#     print("ok bye")

# greet('Leonardo')

# def factorial(x):
#     if x == 1:
#         return 1
#     return factorial(x -1) * x

# print(factorial(5))

# def sum(array):
#     total = 0
    
#     if len(array) == 0:
#         return 0

#     total = array.pop()
#     return total + sum(array)

# print(sum(A))

# def sum(list):
#     if list == []:
#         return 0
#     return list[0] + sum(list[1:])

# print(sum(A))

# 4.1

# def sum(num):
#     if num == []:
#         return 0
#     return num[0] + sum(num[1:])

# print(sum(A))

# 4.2

def count_elements(array):
    if array == []:
        return 0
    
    return 1 + count_elements(array[1:])

print(count_elements(A))

# 4.3

