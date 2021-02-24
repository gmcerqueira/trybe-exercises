let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(
  typeof patientId,
  typeof isEnrolled,
  typeof patientInfo,
  typeof patientInfo.firstName,
  typeof patientInfo.lastName,
  typeof patientAge
);

patientId = "50";

console.log(typeof patientId);

let base = "5";
let altura = 8;
console.log(typeof base, typeof altura);
let area = base * altura;
console.log("Área:", area, typeof area);
// Apesar de a variável base ser um string, quando existe uma multiplicação, o JavaScript realiza está operação normalmente

let perimetro = base + base + altura + altura;
console.log("Perímetro:", perimetro, typeof perimetro);
// Já quando uma soma é realizada o JS realiza uma concatenação das variáveis

perimetro = 2 * base + 2 * altura;

console.log("Área:", area, typeof area);
console.log("Perímetro:", perimetro, typeof perimetro);
