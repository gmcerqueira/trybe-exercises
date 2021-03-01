// (Difícil) Faça um programa que receba uma string em algarismos
// romanos e retorne o número que a string representa.
// Dicas:
//  - Uma string é um array de caracteres, então cada elemento do array é uma letra.
//  - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
//  - Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
//    Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número
//    maior que ele, ele deve ser subtraído.Exemplo: IX = 10 - 1 = 9.

function Romanos(roma) {
  const romaUp = roma.toUpperCase()

  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let i in romaUp) {
    arrayNumbers[i] = romanos[romaUp[i]];
  }

  for (let i in arrayNumbers) {
    if (arrayNumbers[i] < arrayNumbers[i + 1]) {
      arrayNumbers[i + 1] = arrayNumbers[i + 1] - arrayNumbers[i];
    } else {
      result += arrayNumbers[i];
    }
  }
  console.log(result);
  return result;
}

Romanos("MMXIV");
