class Car:
    def __init__(self):
        pass

    def ronk(self):
        print("bee bee")


class Truck(Car):
    def __init__(self):
        super().__init__()

    def ronk(self):
        print("Truck")

    def get_parent(self):
        super().ronk()


truck = Truck()

truck.ronk()
truck.get_parent()
