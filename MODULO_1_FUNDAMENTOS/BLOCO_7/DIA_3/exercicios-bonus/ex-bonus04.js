const getLargestNumber = (array) => {
  let largestNumber = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] < array[index + 1]) {
      largestNumber = array[index + 1];
    }
  }
  return largestNumber;
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const output = getLargestNumber(parameter)
const originalArray = [45, 8, 2, 50, 1, 7, 99]

const assert = require("assert");
assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, originalArray)
