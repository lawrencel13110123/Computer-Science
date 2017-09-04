// Creates the Queue Class for use later
class Queue {

  constructor() {
    this.items = [];
  }

  // Push, Pop, Peek 
  enqueue(element) {
    this.items.push(element);
  }
  
  // pops out the very first index
  dequeue() {
    this.items.shift();
  }

  // "get" is a pseudo variable, so when we call it we didn't have to use ()
  // check out line 42
  get first() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

}

// Creates an instance of the Queue
var newQueue = new Queue();

// Starts running methods
newQueue.enqueue("Ahmed");
newQueue.enqueue("Roger");
newQueue.enqueue("John");

console.log(newQueue.first);
