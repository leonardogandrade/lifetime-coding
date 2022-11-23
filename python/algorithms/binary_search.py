class BinarySearch:
    def __init__(self):
        self.steps = 0

    def display(self):
        print(f'---* Binary Search *---')
        print(f'Array length: {len(self.array)}')
        print(f'Steps: {self.steps}')
        print(f'Goal\'s value: {self.goal}')
        print(f'Goal\'s key: {self.key}')

    def search(self, array, goal):
        self.array = array
        self.goal = goal
        
        array.sort()
        found = False
        top = len(array)
        key = round(top / 2)

        while not found:
            if goal > array[key]:
                key = round((top + key) / 2)

            if goal < array[key]:
                top = key
                key = round(top / 2)

            if array[key] == goal:
                found = True

            self.steps += 1

        self.key = key
