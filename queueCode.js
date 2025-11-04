class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //o(1)
  peek(){
    return this.first?this.first.value:undefined;
  }
//o(1)
  enqueue(value) {
    const newNode = new Node(value);
    //if the link list is empty
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //if the link list is not empty

      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }
//o(1)
dequeue(){
    if (this.isEmpty()) {
        return undefined
    }
    const nodeToRemove =this.first;
if (this.first===this.last) {
    this.last =null
}
this.first=this.first.next;
this.length--;

return nodeToRemove.value;
}

//o(1)
isEmpty(){
    return this.length===0;

}

size(){
    return this.length;
}

//o(n)
print(){
    const array=[]
    let currentNode=this.first;
    while (currentNode) {
        array.push(currentNode.value);
        currentNode=currentNode.next;
    }

 console.log("front --> " + array.join(" --> ") + " --> back");
}

}
// Example usage:
const que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);


console.log("Dequeued:", q.dequeue()); // Dequeued: 10

que.print(); // front --> 10 --> 20 --> 30 --> back




















