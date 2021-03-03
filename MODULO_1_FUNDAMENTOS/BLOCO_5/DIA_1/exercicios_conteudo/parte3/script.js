let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "#3fb069";

let emergencyTask = document.querySelectorAll(".emergency-tasks");
emergencyTask.forEach((element) => {
  element.style.backgroundColor = "#fa9e84";
});

let emergencyTaskH3 = document.querySelectorAll(".emergency-tasks h3");
emergencyTaskH3.forEach((element) => {
  element.style.backgroundColor = "#a85bf2";
});

let noEmergencyTask = document.querySelectorAll(".no-emergency-tasks");
noEmergencyTask.forEach((element) => {
  element.style.backgroundColor = "#f9db5e";
});

let noEmergencyTaskH3 = document.querySelectorAll(".no-emergency-tasks h3");
noEmergencyTaskH3.forEach((element) => {
  element.style.backgroundColor = "#232525";
});

let footerContainer = document.querySelector("#footer-container");
footerContainer.style.backgroundColor = "#093533";

let body = document.querySelector("body");
let finish = document.createElement("div");
finish.innerText = "Administrador de tempo finalizado"
finish.id= "finish"
body.appendChild(finish)
