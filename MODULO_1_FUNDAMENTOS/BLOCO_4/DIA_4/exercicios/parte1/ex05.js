// Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim"
};

for (let i in info) {
  if (info[i] === info.recorrente && info[i] === "sim" && info2[i] === "sim") {
    console.log("Ambos recorrentes");
  } else if (info[i] === info.recorrente && (info[i] === "não" || info2[i] === "não"
  )) {
    console.log("Ambos não são recorrentes");
  } else {
    console.log(`${info[i]} e ${info2[i]}.`);
  }
}
