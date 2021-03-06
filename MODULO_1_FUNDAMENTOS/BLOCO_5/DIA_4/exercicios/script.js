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

function inputChange(input) {
  input.addEventListener("input", () => {
    if (input.id === "background_color")
      textStyle.backgroundColor = input.value;
    if (input.id === "color") textStyle.color = input.value;
    if (input.id === "font_size") textStyle.fontSize = input.value + "px";
    if (input.id === "line_height") textStyle.lineHeight = input.value + "px";
    if (input.id === "font_family") textStyle.fontFamily = input.value;
  });
}

let textStyle = document.getElementById("text").style;
let buttonTextPreferences = document.getElementById("text_preferences");
let inputs = document.querySelectorAll("input");
let storage = localStorage;

inputs.forEach((input) => inputChange(input));

loadPreferences(storage);

buttonTextPreferences.addEventListener("click", (event) => {
  event.preventDefault();
  let preferences = {
    backgroundColor: inputs[0].value,
    color: inputs[1].value,
    fontSize: inputs[2].value + "px",
    lineHeight: inputs[3].value + "px",
    fontFamily: inputs[4].value,
  };
  storage.setItem("preferences", JSON.stringify(preferences));
  document.location.reload();
});
