function add(numero1, numero2) {
  let arrNumero1 = numero1.toString().split("").reverse();
  let arrNumero2 = numero2.toString().split("").reverse();
  let maiorArray, menorArray;
  let arrSaida = [];

  if (arrNumero1.length > arrNumero2.length) {
    maiorArray = arrNumero1;
    menorArray = arrNumero2;
  } else {
    maiorArray = arrNumero2;
    menorArray = arrNumero1;
  }

  for (let i = 0; i < maiorArray.length; i++) {
    if (menorArray[i] != undefined) {
      arrSaida[i] = parseInt(menorArray[i]) + parseInt(maiorArray[i]);
    } else {
      arrSaida[i] = parseInt(maiorArray[i]);
    }
  }
  let saida = parseInt(arrSaida.reverse().join(""));

  console.log(saida);
  return saida;
}

add(1240, 336);

// (2).toString()
// "teste".split
