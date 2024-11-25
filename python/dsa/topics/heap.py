class Heap:
    def __init__(self):
        self.data = []

    def push(self, value):
        self.data.append(value)

    def size(self):
        return len(self.data)

    def print_heap(self):
        for value in enumerate(self.data):
            print(f"{value}")


heap = Heap()

heap.push(1)
heap.push(2)
heap.push(3)
heap.push(4)
print(heap.size())
heap.print_heap()
