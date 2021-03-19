// const longestWord = (string) => {
//   let arrWords = string.split(" ");
//   let result = "";
//   for (let i = 0; i < arrWords.length; i += 1) {
//     if (arrWords[i].length >= result.length) result = arrWords[i];
//   }
//   return result;
// };

const longestWord = (string) =>
  string.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
