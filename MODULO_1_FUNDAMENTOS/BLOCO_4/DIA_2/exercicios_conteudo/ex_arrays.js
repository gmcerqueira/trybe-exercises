// Obtenha o valor "Serviços" do array menu
// Procure o índice do valor "Portfólio" do array menu
// Adicione o valor "Contato" no final do array menu

let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf("Portfólio");

menu.push("Contato");

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);