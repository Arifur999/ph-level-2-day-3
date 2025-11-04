class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    //if the link list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if the link list is not empty

      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

//   prepend() {}

//   insert() {}

//   remove() {}

  print() {
    const arr=[]
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join("->"),"-> null");
  }
}

const linklist = new LinkList();
linklist.append(1);
linklist.append(2);
linklist.append(3);

linklist.print();
