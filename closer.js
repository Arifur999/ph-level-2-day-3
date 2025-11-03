//---------------------closer----------------------------

const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };

};
const counter=createCounter();
console.log(counter(3));
console.log(counter(2));
//----------------------------------------------------------