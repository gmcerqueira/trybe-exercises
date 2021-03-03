/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
  1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
*/
function textYouTwoYearsFromNow(text) {
  let tagsP = document.getElementsByTagName("p");

  let firstP = tagsP[0];
  firstP.innerText = text;
}

/*
  2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3 - Crie uma função que mude a cor do quadrado vermelho para branco.
*/
function changeBackgroundColor(element, color) {
  let elementChange = document.getElementsByClassName(element);
  elementChange[0].style.backgroundColor = color;
}

/*
  4 - Crie uma função que corrija o texto da tag<h1>.
*/
function correctTitle() {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = "Exercício 5.1 - JavaScript";
}

/*
5 - Crie uma função que modifique todo o texto da tag < p > para maiúsculo.
*/
function upperCase(element) {
  let upperElement = document.getElementsByTagName(element);
  for (let i = 0; i < upperElement.length; i += 1) {
    upperElement[i].style.textTransform = "uppercase";
  }
}

/*
  6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function showOnConsole(element) {
  let consoleElement = document.getElementsByTagName(element);
  for (let i = 0; i < consoleElement.length; i += 1) {
    console.log(consoleElement[i]);
  }
}

// Execução das funções
textYouTwoYearsFromNow(
  "Em dois anos me vejo... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio libero molestias repellendus minus facilis ipsum doloremque facere vel, architecto numquam distinctio dignissimos dolorem amet id repudiandae totam nesciunt debitis!"
);

changeBackgroundColor("main-content", "rgb(76,164,109)");

changeBackgroundColor("center-content", "white");

correctTitle();

paragraphUpperCase();

showOnConsole("p");
