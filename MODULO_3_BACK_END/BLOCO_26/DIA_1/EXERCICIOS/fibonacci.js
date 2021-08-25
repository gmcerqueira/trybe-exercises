const { questionInt } = require("readline-sync");

const showFibonacciSequence = (numElements) => {
  let elements = [0];
  for (let i = 0; i < numElements - 1; i += 1) {
    const f1 = elements[elements.length - 1];
    const f2 = elements[elements.length - 2];
    if (!f2) elements.push(1);
    else elements.push(f1 + f2);
  }
  console.log(elements);
};

const selectNumElements = () => {
  const numElements = questionInt("Who many elements from the Fibonacci sequence do you wanna know? ");
  if (numElements <= 0) {
    console.log("!!!Positive number required!!!");
    return selectNumElements();
  }

  showFibonacciSequence(numElements);
};

selectNumElements();
