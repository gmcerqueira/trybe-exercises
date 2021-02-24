let candidatoProcessoSeletivo;

// candidatoProcessoSeletivo = "aprovado"
// candidatoProcessoSeletivo = "lista"
// candidatoProcessoSeletivo = "reprovado"

switch (candidatoProcessoSeletivo) {
  case "aprovado":
    console.log(`Parabéns ${candidatoProcessoSeletivo}, você foi aprovado(a)!`);
    break;

  case "lista":
    console.log(
      `Prezado(a) ${candidatoProcessoSeletivo}, você está na nossa lista de espera.`
    );
    break;

  case "reprovado":
    console.log(`Prezado(a) ${candidatoProcessoSeletivo}, Você foi reprovada(o).`);
    break;

  default:
    console.log("Não se aplica.");
    break;
}
