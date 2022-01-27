class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    isEmpty() {
        if (this.head != null)
            return false;
        return true;
    }

    remove(element) {
        let current = this.head;
        let previous = null;

        while (current && !this.isEmpty()) {
            if (element === current.element) {
                if (previous === null)
                    this.head = current.next
                else
                    previous.next = current.next;
                this.size--;
            }
            previous = current;
            current = current.next;
        }
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.element);
            current = current.next
        }
    }

}

const LINKED_LIST = new LinkedList();
LINKED_LIST.add(10);
LINKED_LIST.add(20);
LINKED_LIST.add(30);
LINKED_LIST.add(40);
LINKED_LIST.add(50);

LINKED_LIST.printList();

LINKED_LIST.remove(30);
console.log('-------------------')
LINKED_LIST.printList();