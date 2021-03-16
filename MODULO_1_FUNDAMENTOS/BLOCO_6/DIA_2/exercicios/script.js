const states = document.querySelector("#states");

const stateList = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba ",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul ",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina ",
  SP: "São Paulo ",
  SE: "Sergipe",
  TO: "Tocantins",
};

// const blankOption = document.createElement("option");
// blankOption.innerHTML = "Select your state";
// states.appendChild(blankOption);
for (const key in stateList) {
  const option = document.createElement("option");
  option.innerHTML = stateList[key];
  option.setAttribute("value", key);
  states.appendChild(option);
}

function verifyDate() {
  const inputDate = document.querySelector("#start-date").value;

  const dateValues = inputDate.match(/\d+/g);

  const day = dateValues[0];
  const month = dateValues[1];
  const year = dateValues[2];

  const verifyDay = day > 0 && day <= 31;
  const verifyMonth = month > 0 && month <= 12;
  const verifyYear = year > 0;

  if (!verifyDay) {
    alert("Invalid day value!\n Must be between 1 and 31");
  }
  if (!verifyMonth) {
    alert("Invalid month value!\n Must be between 1 and 12");
  }
  if (!verifyYear) {
    alert("Invalid year value!\n Shouldn't be negative");
  }
}

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const cpfInput = document.querySelector("#cpf");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#states");
const curriculumInput = document.querySelector("#curriculum");
const roleInput = document.querySelector("#role");
const roleDescriptionInput = document.querySelector("#role-description");
const startDateInput = document.querySelector("#start-date");
const submitResponse = document.querySelector("#submit-response");

function selectedInput() {
  const types = document.querySelectorAll("[name='type']");
  let selectedValue;
  for (const type of types) {
    if (type.checked) selectedValue = type.value;
  }
  if (!selectedValue) return "Value not selected";
  return selectedValue;
}

function createFormData() {
  submitResponse.innerHTML = `
  <h1>Personal data</h1>
  Name: ${nameInput.value}<br>
  Email: ${emailInput.value}<br>
  CPF: ${cpfInput.value}<br>
  Address: ${addressInput.value}<br>
  City: ${cityInput.value}<br>
  State: ${stateInput.value}<br>
  Type: ${selectedInput()}<br>

  <h1>Your las job</h1>
  Curriculum: ${curriculumInput.value}<br>
  Role: ${roleInput.value}<br>
  Role Description: ${roleDescriptionInput.value}<br>
  Start date: ${startDateInput.value}<br>
  `;
}

const submitBtn = document.querySelector("[type='submit']");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  verifyDate();
  createFormData();
});

const clearBtn = document.querySelector("[type='button']");

clearBtn.addEventListener("click", () => {
  const values = document.querySelectorAll(".input");
  for (let i = 0; i < values.length; i += 1) {
    values[i].value = ''
  }
});
