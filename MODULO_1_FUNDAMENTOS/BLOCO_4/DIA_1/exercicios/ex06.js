// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//  - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
//    quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//  - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//  - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//  - Exemplo: bishop -> diagonals
// king queen rook bishop knight pawn

let chessPiece = "paw"

console.log("Movimento da peça:");
switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("Um espaço em qualquer direção.");
    break;
  
  case "queen":
    console.log("Qualquer espaço em qualquer direção.");
    break;
  
  case "rook":
    console.log("Qualquer espaço nas linhas e colunas.");
    break;
  
  case "bishop":
    console.log("Qualquer espaço nas diagonais.");
    break;
  
  case "knight":
    console.log("2 casa em uma direção e 1 para lado.");
    break;
  
  case "pawn":
    console.log("Uma casa para frente e captura outros peões e peças na primeira casa diagonal superior.");
    break;

  default:
    console.log("***PEÇA INVÁLIDA!***");
    break;
}