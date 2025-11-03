//---------------------closer----------------------------

// const createCounter = () => {
//   let count = 0;
//   return (amount) => {
//     count = count + amount;
//     return count;
//   };

// };
// const counter=createCounter();
// console.log(counter(3));
// console.log(counter(2));

//--------------------------class add--------------------------------

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);

counter1.add(5);
counter1.add(6);
counter1.print();

const counter2 = new Counter(0);
counter2.add(20);
counter2.add(20);

counter2.print()
//-----------------------------------------------
