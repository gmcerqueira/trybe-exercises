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

for (const key in stateList) {
  const option = document.createElement("option");
  option.innerHTML = stateList[key];
  option.setAttribute("value", key);
  states.appendChild(option);
}

function selectedInput() {
  const types = document.querySelectorAll("[name='type']");
  let selectedValue;
  for (const type of types) {
    if (type.checked) selectedValue = type.value;
  }
  if (!selectedValue) return "Value not selected";
  return selectedValue;
}

const submitBtn = document.querySelector("[type='submit']");

const clearBtn = document.querySelector("[type='button']");

clearBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  const select = document.querySelector("select");
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = "";
  }
  textArea.value = "";
  select.value = "";
});

const inputDate = document.querySelector("#start-date").DatePickerX.init({
  format: "dd/mm/yyyy",
});

new JustValidate("#form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
      value: true,
    },
    radio: {
      required: true,
    },
    curriculum: {
      required: true,
      maxLength: 1000,
    },
    role: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      maxLength: "O limite é de 40 caracteres.",
    },
    email: {
      email: "O email digitado não é válido.",
      maxLength: "O limite é de 50 caracteres.",
    },
    cpf: {
      maxLength: "O limite é de 11 caracteres.",
    },
    address: {
      maxLength: "O limite é de 200 caracteres.",
    },
    city: {
      maxLength: "O limite é de 28 caracteres.",
    },
    curriculum: {
      maxLength: "O limite é de 1000 caracteres.",
    },
    role: {
      maxLength: "O limite é de 40 caracteres.",
    },
    description: {
      maxLength: "O limite é de 500 caracteres.",
    },
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});
