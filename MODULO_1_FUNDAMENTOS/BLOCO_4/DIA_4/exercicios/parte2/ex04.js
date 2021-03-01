// Crie uma função que receba um array de nomes e retorne o
// nome com a maior quantidade de caracteres.

function longerName(names) {
  let longerName = "";
  for (const char in names) {
    if (names[char].length > longerName.length) {
      longerName = names[char];
    }
  }
  console.log(longerName);
}

let names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

longerName(names);
