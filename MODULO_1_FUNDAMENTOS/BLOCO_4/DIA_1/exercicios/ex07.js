// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// Siga essas regras:
// - Porcentagem >= 90 -> A
// - Porcentagem >= 80 -> B
// - Porcentagem >= 70 -> C
// - Porcentagem >= 60 -> D
// - Porcentagem >= 50 -> E
// - Porcentagem < 50 -> F
// - O programa deve retornar uma mensagem de erro e encerrar
//   se a nota passada for menor que 0 ou maior que 100.

let reputationScore = -1;
console.log("Nota conceito:");
if (reputationScore >= 90 && reputationScore <= 100) {
  console.log("A");
} else if (reputationScore >= 80 && reputationScore < 90) {
  console.log("B");
} else if (reputationScore >= 70 && reputationScore < 80) {
  console.log("C");
} else if (reputationScore >= 60 && reputationScore < 70) {
  console.log("D");
} else if (reputationScore >= 50 && reputationScore < 60) {
  console.log("E");
} else if (reputationScore < 50 && reputationScore >= 0) {
  console.log("F");
} else {
  console.log("***NOTA INVÁLIDA!***");
}
