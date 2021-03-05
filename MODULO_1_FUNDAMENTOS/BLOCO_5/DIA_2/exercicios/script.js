// Parte 1
// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(h1);

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
const mainContent = document.createElement("div");
mainContent.className = "main-content";
body.appendChild(mainContent);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const centerContent = document.createElement("div");
centerContent.className = "center-content";
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const paragraph = document.createElement("p");
paragraph.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum illo vitae fugit voluptate est corrupti itaque numquam qui magnam facere eaque autem eos nam nemo, quaerat voluptatum! Explicabo, possimus maxime.";
centerContent.appendChild(paragraph);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const leftContent = document.createElement("div");
leftContent.className = "left-content";
mainContent.appendChild(leftContent);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const rightContent = document.createElement("div");
rightContent.className = "right-content";
mainContent.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
const smallImage = document.createElement("img");
smallImage.className = "small-image";
smallImage.setAttribute("href", "https://picsum.photos/200");
leftContent.appendChild(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const numbersInFull = [
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
const list = document.createElement("ul");

for (const i in numbersInFull) {
  const listItem = document.createElement("li");
  listItem.innerText = numbersInFull[i]
  listItem.style.color = 'white'
  list.appendChild(listItem)
}
rightContent.appendChild(list)

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let i = 1; i <= 3; i++) {
  const h3 = document.createElement('h3')
  h3.innerText = `Teste ${i}`
  h3.className = 'description'
  h3.style.backgroundColor = 'yellow'
  mainContent.appendChild(h3)
}

// Parte 2
// 1 - Adicione a classe title na tag h1 criada;
h1.className = "title"

// 2 - Adicione a classe description nas 3 tags h3 criadas;
//     Complementando exercício 9 da parte 1

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função.removeChild();
mainContent.removeChild(leftContent)

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div;
rightContent.style.marginRight = "auto"

// 5 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
mainContent.style.backgroundColor = 'green'

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
list.lastChild.remove()
list.lastChild.remove()

