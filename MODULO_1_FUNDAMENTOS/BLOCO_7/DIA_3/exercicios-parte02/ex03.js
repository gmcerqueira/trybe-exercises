// 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.
const assert = require("assert");
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arrNum) => {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i += 1) {
    if (typeof arrNum[i] !== "number")
      throw new Error("Array deve ser composto somente de números");
    sum += arrNum[i];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, "function");
assert.strictEqual(output, expected);
