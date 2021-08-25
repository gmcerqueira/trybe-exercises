const { questionInt } = require("readline-sync");

const calcFactorial = (factorial) => {
  if (factorial === 0) return 1;
  let total = factorial;
  for (let i = factorial - 1; i > 0; i -= 1) {
    total = total * i;
  }
  return total;
};

const selectFactorial = () => {
  const factorial = questionInt("Which factorial do you wanna know? ");
  if (factorial < 0) {
    console.log("!!!Can't calculate the factorial of negative numbers!!!");
    return selectFactorial();
  }

  const calc = calcFactorial(factorial);
  console.log(`${factorial}! = ${calc}`);
};

selectFactorial();
