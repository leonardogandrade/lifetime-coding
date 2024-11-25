"""
Decorators are functions which can change the another fucntion's behavior
It is possible to be achieved in two ways:

1 - Creating a function which receives a funciton as parameter and return it.
    So you create function_one(f) and inside function_one you create a wrapper function to be returned.
    Now you can receive the function from function_one

2 - Use the @ statement

"""


def function_one(f):
    def wrapper():
        print("start")
        f()
        print("end")

    return wrapper


@function_one
def funciton_two():
    print("function two was called")


funciton_two()

# f = function_one(funciton_two)
# f()
