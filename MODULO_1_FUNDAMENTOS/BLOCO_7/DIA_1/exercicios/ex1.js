const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)!";
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)!";
    elseScope = `${elseScope} Ótimo, fui utilizada no escopo!`;
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
};

testingScope(true);
testingScope(false);
