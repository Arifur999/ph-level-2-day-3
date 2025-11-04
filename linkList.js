//----------------------------link list-----------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(10);
console.log(head.next);

head.next = new Node(20);
head.next.next = new Node(30);
console.log(head);


let tamp=head
while (tamp!==null) {
    console.log(tamp.value,'');
    tamp=tamp.next
}