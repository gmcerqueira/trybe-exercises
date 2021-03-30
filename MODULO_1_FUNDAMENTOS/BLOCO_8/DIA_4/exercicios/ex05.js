const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];
// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula
//     ou minúscula.
const containsA = () =>
  names.reduce(
    (result, current) =>
      result +
      current
        .split("")
        .reduce(
          (result, current) =>
            current === "a" || current === "A" ? (result += 1) : result,
          0
        ),
    0
  );
  
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
