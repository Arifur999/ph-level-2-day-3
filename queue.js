class Queue {
  constructor() {
    this.item = [];
  }

  // O(1)
  enqueue(value) {
    this.item.push(value); // <-- push() for adding at the end
  }

  // O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.shift(); // <-- shift() removes from front
  }

  // O(n)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[0]; // front element
  }

  // O(1)
  isEmpty() {
    return this.item.length === 0;
  }

  // O(n)
  print() {
    console.log(this.item);
  }
}

// Test
const queue = new Queue();

console.log(queue.peek());      // undefined
console.log(queue.isEmpty());   // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();                  // [10, 20, 30]
console.log(queue.peek());      // 10
console.log(queue.dequeue());   // 10
console.log(queue.peek());      // 20
