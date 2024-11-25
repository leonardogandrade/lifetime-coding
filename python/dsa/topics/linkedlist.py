class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class Linked_list:
    def __init__(self):
        self.head = None
        self.size = 0

    def is_empty(self):
        if self.head is not None:
            return False

        return True

    def insert_begin(self, data):
        new_node = Node(data)

        if self.is_empty():
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node

        self.size += 1

    def print_list(self):
        print("--* print *--")
        if not self.is_empty():
            current = self.head
            while current:
                print(current.value)
                current = current.next

    def insert_index(self, data, insert_after_idx):
        if self.size < insert_after_idx:
            print(
                f"list is smaller than provided index. Enter a index value between 0 and {self.size -1}"
            )
            return

        current = self.head
        new_node = Node(data)
        node_idx = 0

        while current:
            if node_idx == insert_after_idx:
                new_node.next = current.next
                current.next = new_node
                break
            current = current.next
            node_idx += 1

    def remove_first(self):
        if self.is_empty():
            return

        self.head = self.head.next

    def remove_index(self, idx):
        current = self.head
        node_idx = 0

        while current:
            if node_idx == (idx - 1):
                current.next = current.next.next
                # print(current.value)  # 20
                # print(current.next.next.value)  # 70
                break

            current = current.next
            node_idx += 1


# linked_list = Linked_list()
# linked_list.insert_begin(10)
# linked_list.insert_begin(20)
# linked_list.insert_begin(30)
# linked_list.insert_begin(40)

# linked_list.print_list()

# # Add index
# linked_list.insert_index(70, 3)
# linked_list.print_list()

# # Remove First
# linked_list.remove_first()
# linked_list.print_list()

# # Remove index
# linked_list.remove_index(2)
# linked_list.print_list()
