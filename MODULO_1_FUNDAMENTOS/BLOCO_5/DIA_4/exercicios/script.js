// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

function loadPreferences(storage) {
  let preferencesArray = [];
  for (let key in JSON.parse(storage.getItem("preferences"))) {
    preferencesArray.push(JSON.parse(storage.getItem("preferences"))[key]);
  }
  textStyle.backgroundColor = preferencesArray[0];
  textStyle.color = preferencesArray[1];
  textStyle.fontSize = preferencesArray[2];
  textStyle.lineHeight = preferencesArray[3];
  textStyle.fontFamily = preferencesArray[4];
}

let textStyle = document.getElementById("text").style;
let buttonTextPreferences = document.getElementById("text_preferences");
let input = document.querySelectorAll("input");
let storage = localStorage;

loadPreferences(storage)


buttonTextPreferences.addEventListener("click", (event) => {
  event.preventDefault();
  let preferences = {
    backgroundColor: input[0].value,
    color: input[1].value,
    fontSize: input[2].value + "px",
    lineHeight: input[3].value + "px",
    fontFamily: input[4].value,
  };
  storage.setItem("preferences", JSON.stringify(preferences));
  document.location.reload();
});
