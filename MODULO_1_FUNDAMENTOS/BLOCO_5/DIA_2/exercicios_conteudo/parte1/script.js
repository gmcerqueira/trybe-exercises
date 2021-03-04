// 1 - Acesse o elemento elementoOndeVoceEsta.
let whereYouAre = document.getElementById("elementoOndeVoceEsta");

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereYouAre.parentNode.style.color = "red";
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
whereYouAre.firstElementChild.innerText = "Acessando o primeiro filho do filho";

// 4 - Acesse o primeiroFilho a partir de pai.
let father = document.getElementById("pai");
console.log(father.firstElementChild);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(whereYouAre.previousElementSibling);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(whereYouAre.nextSibling);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(whereYouAre.nextSibling.nextSibling);

// 8 -Agora acesse o terceiroFilho a partir de pai.
console.log(father.lastElementChild.previousElementSibling);
