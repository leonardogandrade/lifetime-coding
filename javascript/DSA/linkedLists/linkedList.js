class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            this.addNode(this.head, newNode);
        }
    }

    addNode(frontier, newNode) {
        if (frontier.next === null) {
            frontier.next = newNode;
        } else {
            this.addNode(frontier.next, newNode);
        }
    }

    addStart(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addPosition(value, afterNode, node = this.head) {
        if (node === null)
            return

        const newNode = new Node(value);

        if (node.value === afterNode) {
            newNode.next = node.next;
            node.next = newNode;
        } else {
            this.addPosition(value, afterNode, node.next)
        }
    }

    show() {
        console.log(JSON.stringify(this.head))
    }
}

const list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.addPosition(12, 1)
list.show();