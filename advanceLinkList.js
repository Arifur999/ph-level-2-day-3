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

    return this
  }

  prepend(value) {
    const newNode = new Node(value);
    //if the link list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if the link list is not empty

      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index out of bound");
    }

    //if the insert is in the start of the link list
    if (index === 0) {
      return this.prepend(value);
    }

    //if the insert is the last of the link list
    if (index === this.length) {
      return this.append(value);
    }

    //if the insert is the mid of the link list

    //find the leading node
    const leadingNode=this._traverseToIndex(index-1)
    const holdingNode=leadingNode.next;


    const newNode=new Node(value)

    leadingNode.next=newNode;
    newNode.next=holdingNode;
    this.length++;
    console.log(leadingNode);
  }

  remove(index) {

// first a remove korte hoy

    if (index===0) {

        const removedItem=this.head.value;
        this.head=this.head.next
        

        if (this.length===1) {
            this.tail.null
            
            
        }
        this.length --
        return removedItem;
    }

const leadingNode=this._traverseToIndex(index-1)
const nodeToRemove=leadingNode.next;

leadingNode.next=nodeToRemove.next;

// last a remove korte
if (leadingNode===null) {
    this.tail=leadingNode
}

return nodeToRemove.value;
  }


//  private helper method
  _traverseToIndex(index) {
    let count = 0;

    let currentNode = this.head;
    while (count !== index - 1) {
      currentNode = currentNode.next;
      count++;
    }
     return currentNode;



  }

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join("->"), "-> null");
  }
}

const linklist = new LinkList();
linklist.append(1).append(2).append(3)


linklist.prepend(10);
linklist.prepend(20);
linklist.prepend(30);
linklist.insert(2, 100);
linklist.remove(2)
linklist.print();
