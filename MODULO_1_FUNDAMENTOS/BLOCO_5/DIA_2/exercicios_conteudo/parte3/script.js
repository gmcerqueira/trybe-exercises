let whereYouAre = document.getElementById("elementoOndeVoceEsta");
let father = document.getElementById("pai");
let childOfChild = document.getElementById("primeiroFilhoDoFilho");

// 1 - Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
whereYouAre.removeChild(document.getElementById("segundoFilhoDoFilho"));

father.removeChild(document.getElementById("primeiroFilho"));
father.removeChild(document.getElementById("terceiroFilho"));
father.removeChild(document.getElementById("quartoFilho"));
