const candidato = "Gustavo";
let notaDesafioTecnico = 10000;

if (notaDesafioTecnico >= 80 &&notaDesafioTecnico <= 100) {
  console.log(
    `Parabéns ${candidato}, você foi aprovado(a)!\nSua nota foi: ${notaDesafioTecnico}.`
  );
} else if (notaDesafioTecnico >= 60 && notaDesafioTecnico < 80) {
  console.log(
    `Prezado(a) ${candidato}, você está na nossa lista de espera.\nSua nota foi: ${notaDesafioTecnico}.`
  );
} else if (notaDesafioTecnico < 60 && notaDesafioTecnico >= 0) {
  console.log(
    `Prezado(a) ${candidato}, Você foi reprovada(o).\nSua nota foi: ${notaDesafioTecnico}.`
  );
} else {
  console.log("***NOTA INVÁLIDA***");
}
