// 4 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas
//     corretas(Gabarito), o segundo será um array de respostas a serem checadas(Respostas
//     da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e
//     faz a contagem da pontuação final recebida pela pessoa estudante.Ao final a HOF deve
//     retornar o total da contagem de respostas certas.
//     - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta
//       desce 0.5 pontos, e quando não houver resposta("N.A") não altera - se a contagem.

const checkStudentScore = (testAnswers, studentAnswers, action) => {
  let points = 0;
  for (let i = 0; i < testAnswers.length; i += 1) {
    points += action(testAnswers[i], studentAnswers[i]);
  }
  return `Nota final: ${points}`;
};

const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

console.log(
  checkStudentScore(rightAnswers, studentAnswers, (rAns, sAns) => {
    if (sAns === rAns) return 1;
    if (sAns === "N.A") return 0;
    return -0.5;
  })
);
