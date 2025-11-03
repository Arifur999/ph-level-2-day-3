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

const counter1 = new Counter(10);
counter1.print();
//-----------------------------------------------