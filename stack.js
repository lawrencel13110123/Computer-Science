class Stack {
	constructor() {
		this.items = []; 
	}

	push(element) {
		this.items.push(element)
	}

	pop() {
		this.items.pop(); 
	}

	peek() {
		return this.items[this.items.length - 1]; 
	}

	// checks if Stack is empty --> returns true or false
	isEmpty() {
		return this.items.length === 0; 
	}

	clear() {
		this.items = []
	}
}

var newStack = new Stack();

// Starts running methods
newStack.push(1);
newStack.push(2);
newStack.push(4);

console.log(newStack);
console.log(newStack.peek());
console.log(newStack.isEmpty());
newStack.pop();
console.log(newStack)
newStack.clear();
console.log(newStack);