class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DataStore {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const new_node = new Node(value);
        let current = this.head;

        if (this.head === null) {
            this.head = new_node;
        } else {
            while (current.next) {
                current = current.next;
            }

            current.next = new_node;
        }
        this.size++;
    }

    insert(value, after) {
        const new_node = new Node(value);
        let current = this.head;

        while (current.value != after) {
            current = current.next;
        }

        new_node.next = current.next;
        current.next = new_node;
        this.size++;
    }

    remove(value_to_remove) {
        let current = this.head;
        let node_before = null;

        while (current.value != value_to_remove) {
            node_before = current;
            current = current.next;
        }

        node_before.next = current.next;
    }

    isEmpty() {
        return this.head === null;
    }

    find(value) {
        let current = this.head;
        let position = 0;

        if (current.next != null)
            return 'not found';

        while (current.value != value) {
            current = current.next;
            position++;
        }

        return {
            value: current.value,
            position: position + 1
        }
    }

    printList() {
        let current = this.head;
        console.log('------------');
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const dataStore = new DataStore();

dataStore.append(10);
dataStore.append(20);
dataStore.append(30);
dataStore.insert(23, 20);
dataStore.insert(34, 30);
dataStore.append(40);
dataStore.append(50);

dataStore.printList();
dataStore.remove(34)
dataStore.printList();

console.log(dataStore.find(230))