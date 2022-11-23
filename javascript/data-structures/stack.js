class Stack {
    constructor() {
        this.items = [];
        this.peek = this.items.length;
        this.items[this.peek] = null;
    }

    push(value) {
        this.items[this.peek] = value;
        this.peek++;
        this.items[this.peek] = null;
    }

    pop() {
        this.items.pop();
        this.peek--;
        this.items[this.peek] = null;
    }

    show() {
        return this.items;
    }
}

// Create stack
let stack = new Stack();

// Add some elements
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.show());

// Remove the last element on the stack
stack.pop();
console.log(stack.show());