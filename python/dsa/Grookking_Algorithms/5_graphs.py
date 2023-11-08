class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def add_beginning(self, value):
        new_node = Node(value)

        if self.head == None:
            self.head = new_node
            return
        else:
            new_node.next = self.head
            self.head = new_node

    def add_end(self, value):
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
            return

        current_node = self.head

        while current_node.next:
            current_node = current_node.next

        current_node.next = new_node

    def update(self, old_value, new_value):
        current_node = self.head
        found = False

        while not found:
            current_node = current_node.next
            if current_node.value == old_value:
                current_node.value = new_value
                break

    def delete(self, value):
        current_node = self.head

        while current_node:
            if current_node.next.value == value:
                current_node.next = current_node.next.next
                break
            current_node = current_node.next

    def add(self, position, value):
        new_node = Node(value)
        current_node = self.head
        current_position = 0

        while current_node:
            if current_position == position - 1:
                new_node.next = current_node.next
                current_node.next = new_node
                break
            current_node = current_node.next
            current_position += 1

    def pass_through(self):
        print("### PRINT LIST ###")
        current_node = self.head
        while current_node:
            print(current_node.value)
            current_node = current_node.next


if __name__ == "__main__":
    linked_list = LinkedList()
    # linked_list.add_beginning(1)
    # linked_list.add_beginning(2)
    # linked_list.add_beginning(3)
    # linked_list.add_beginning(4)

    linked_list.add_end(1)
    linked_list.add_end(2)
    linked_list.add_end(3)
    linked_list.add_end(4)
    linked_list.add_end(5)

    linked_list.pass_through()
    linked_list.update(2, 40)
    linked_list.delete(3)
    linked_list.add(2, 100)
    linked_list.pass_through()
