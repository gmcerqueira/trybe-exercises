function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*
Exercício 1:
O array decDaysList contém os dois últimos dias de novembro e os dias do mês de decembro.
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas
da tag < ul > com ID "days".Note que os dias 29 e 30 de novembro estão no array pois representam
respectivamente Segunda-feira e Terça-feira.
  - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day.
    Ex: <li class="day">3</li>
  - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday.
    Ex: <li class="day holiday">24</li>
  - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.
    Ex: <li class="day friday">4</li>
*/
// const decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const decDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const decFridays = [4, 11, 18, 25];
const decHolidays = [24, 25, 31];
const december = {
  days: decDaysList,
  fridays: decFridays,
  holidays: decHolidays,
};

function isHoliday(day, holidays) {
  if (holidays.includes(day)) return true;
}

function isFriday(day, fridays) {
  if (fridays.includes(day)) return true;
}

function isFridayOrHoliday(day, fridays, holidays) {
  let classes = "day";
  if (isFriday(day, fridays) && isHoliday(day, holidays))
    return classes + " friday holiday";
  if (isFriday(day, fridays)) return classes + " friday";
  if (isHoliday(day, holidays)) return classes + " holiday";
  return classes;
}

function calenderDays(array) {
  let month = Object.values(array)[0];
  let fridays = Object.values(array)[1];
  let holidays = Object.values(array)[2];

  for (const day in month) {
    let listItem = document.createElement("li");
    listItem.innerText = month[day];
    listItem.className = isFridayOrHoliday(month[day], fridays, holidays);
    document.querySelector("#days").appendChild(listItem);
  }
}

calenderDays(december);

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente
um botão com o nome "Feriados".
  - Adicione a este botão a ID "btn-holiday".
  - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
  Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

function createButton(text, id) {
  let button = document.createElement("button");
  button.id = id;
  button.innerText = text;
  document.querySelector(".buttons-container").appendChild(button);
}

function changeColor(color) {
  let backgroundColor = "rgb(238,238,238)";

  const holidays = document.querySelectorAll(".holiday");
  for (let i = 0; i < holidays.length; i++) {
    const holiday = holidays[i];
    if (holidays[i].style.backgroundColor === color)
      holidays[i].style.backgroundColor = backgroundColor;
    else holidays[i].style.backgroundColor = color;
  }
}

createButton("Feriados", "btn-holiday");
let holidayButton = document.querySelector("#btn-holiday");
holidayButton.addEventListener("click", () => changeColor("white"));

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
- Adicione a este botão o ID "btn-friday".
- Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function changeText(text, array) {
  let monthFridays = Object.values(array)[1];
  const fridays = document.querySelectorAll(".friday");
  for (let i = 0; i < fridays.length; i++) {
    const friday = fridays[i];
    if (friday.innerHTML !== text) friday.innerHTML = text;
    else friday.innerHTML = monthFridays[i];
  }
}

createButton("Sexta-Feira", "btn-friday");
let fridayButton = document.querySelector("#btn-friday");
fridayButton.addEventListener("click", () => changeText("SEXTOU!", december));
