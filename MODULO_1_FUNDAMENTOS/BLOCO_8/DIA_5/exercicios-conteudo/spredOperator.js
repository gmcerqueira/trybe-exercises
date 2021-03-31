// Faça uma lista com as suas frutas favoritas
const specialFruit = ["laranja", "abacaxi", "uva"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["morango", "mamão", "banana"];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
