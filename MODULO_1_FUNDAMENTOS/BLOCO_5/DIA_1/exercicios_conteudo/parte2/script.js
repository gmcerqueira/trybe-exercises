let firstParagraph = document.getElementById("first-paragraph");
firstParagraph.style.color = "red";

let title = document.getElementById("page-title");
title.innerText = "TENET";

let secondParagraph = document.getElementById("second-paragraph");
secondParagraph.style.fontSize = "40px";

let subtitle = document.getElementById("subtitle");
subtitle.innerText =
  "Aventura cabeçuda e não oficial de James Bond é o puro suco de Nolan"; // Fonte subtitulo: https://www.omelete.com.br/filmes/criticas/tenet
subtitle.style.background = "orange";
subtitle.style.wi = "white";

let paragraphs = document.getElementsByClassName('paragraph')
console.log(paragraphs);
paragraphs[0].style.fontSize = "30px"

let subtitleTag = document.getElementsByTagName('h4')
console.log(subtitleTag);
subtitleTag[0].style.width = "600px"
