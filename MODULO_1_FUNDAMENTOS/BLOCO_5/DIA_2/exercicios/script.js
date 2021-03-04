// Parte 1
// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(h1);

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement("div");
mainContent.className = "main-content";
body.appendChild(mainContent);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement("div");
centerContent.className = "center-content";
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement("p");
paragraph.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum illo vitae fugit voluptate est corrupti itaque numquam qui magnam facere eaque autem eos nam nemo, quaerat voluptatum! Explicabo, possimus maxime.";
centerContent.appendChild(paragraph);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement("div");
leftContent.className = "left-content";
body.appendChild(leftContent);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement("div");
rightContent.className = "right-content";
body.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
let smallImage = document.createElement("img");
smallImage.className = "small-image";
smallImage.setAttribute("href", "https://picsum.photos/200");
leftContent.appendChild(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let numbersInFull = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let list = document.createElement("ul");

for (const i in numbersInFull) {
  let listItem = document.createElement("li");
  listItem.innerText = numbersInFull[i]
  list.appendChild(listItem)
}
rightContent.appendChild(list)

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let i = 0; i < 3; i++) {
  let h3 = document.createElement('h3')
  h3.innerText = "teste"
  mainContent.appendChild(h3)
}

// Parte 2


