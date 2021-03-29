// 2 - Escreva a função wordLengths para passar nos testes já implementados.
const assert = require("assert");
// escreva a função wordLengths aqui
const wordLengths = (arrWords) => {
  const wordLength = [];
  for (let i = 0; i < arrWords.length; i += 1)
    wordLength.push(arrWords[i].length);
  return wordLength;
};

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
