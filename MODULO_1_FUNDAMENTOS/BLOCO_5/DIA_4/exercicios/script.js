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

function verifyStorage() {
  if (!storage.length) {
    preferences = {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "16px",
      lineHeight: "18px",
      fontFamily: "Times",
    };
    storage.setItem("preferences", JSON.stringify(preferences));
  }
}

function loadPreferences() {
  let preferencesArray = [];
  for (const key in JSON.parse(storage.getItem("preferences"))) {
    preferencesArray.push(JSON.parse(storage.getItem("preferences"))[key]);
  }
  const backgroundColor = preferencesArray[0];
  const color = preferencesArray[1];
  const fontSize = preferencesArray[2];
  const lineHeight = preferencesArray[3];
  const fontFamily = preferencesArray[4];
  textStyle.backgroundColor = backgroundColor;
  textStyle.color = color;
  textStyle.fontSize = fontSize;
  textStyle.lineHeight = lineHeight;
  textStyle.fontFamily = fontFamily;
  
  if (preferencesArray) {
    document.getElementById("background_color").value = backgroundColor;
    document.getElementById("color").value = color;
    document.getElementById("font_size").value = parseInt(fontSize);
    document.getElementById("line_height").value = parseInt(lineHeight);
    document.getElementById("font_family").value = fontFamily;
  } else {
    defaultPreferences();
  }
}

function savePreferences() {
  buttonSavePreferences.addEventListener("click", (event) => {
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
}

function defaultPreferences() {
  preferences["backgroundColor"] = "#ffffff";
  preferences["color"] = "#000000";
  preferences["fontSize"] = "16px";
  preferences["lineHeight"] = "18px";
  preferences["fontFamily"] = "Times";
}

function deletePreferences() {
  buttonDeletePreferences.addEventListener("click", (event) => {
    event.preventDefault();
    defaultPreferences();
    storage.setItem("preferences", JSON.stringify(preferences));
    document.location.reload();
  });
}

function creatFontOptions() {
  let fontFamilies = [
    "sans-serif",
    "serif",
    "monospace",
    "Courier",
    "Arial",
    "Caveat",
    "Cinzel",
    "Dancing Script",
    "Grenze Gotisch",
    "Orbitron",
    "Roboto",
    "Times",
  ];
  let fontSelect = document.getElementById("font_family");

  for (const font in fontFamilies.sort()) {
    let option = document.createElement("option");
    option.style.fontFamily = fontFamilies[font];
    option.style.fontSize = "20px";
    option.innerText = fontFamilies[font];
    fontSelect.appendChild(option);
  }
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
let buttonSavePreferences = document.getElementById("save_preferences");
let buttonDeletePreferences = document.getElementById("delete_preferences");
let inputs = document.querySelectorAll(".input");
let storage = localStorage;
let preferences = {};

verifyStorage();
creatFontOptions();
inputs.forEach((input) => inputChange(input));
loadPreferences();
deletePreferences();
savePreferences();
