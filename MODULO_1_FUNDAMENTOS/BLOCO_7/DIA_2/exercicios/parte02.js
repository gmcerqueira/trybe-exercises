const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (lesson, key, value) => {
  lesson[key] = value;
  console.log(lesson);
};
addKey(lesson2, "turno", "manhã");

console.log("-----------------");
//  2 -Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => console.log(Object.keys(object));
listKeys(lesson3);

console.log("-----------------");
// 3 - Crie uma função para mostrar o tamanho de um objeto.
const objectSize = (object) => console.log(Object.keys(object).length);

objectSize(lesson1);
console.log("-----------------");
// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (object) => console.log(Object.values(object));
listValues(lesson2);

console.log("-----------------");
// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
console.log("-----------------");
// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalNumberOfStudents = (allLessons) => {
  let sum = 0;
  const lessons = Object.values(allLessons);
  for (let i = 0; i < lessons.length; i++) {
    sum += parseInt(lessons[i]["numeroEstudantes"]);
  }
  console.log(sum);
};

totalNumberOfStudents(allLessons);

console.log("-----------------");
// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (object, position) =>
  console.log(Object.values(object)[position]);

getValueByNumber(lesson1, 0);
console.log("-----------------");
// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (object, key, value) => console.log(object[key] === value);

verifyPair(lesson3, "turno", "noite");
// Output: true,
verifyPair(lesson3, "materia", "Maria Clara");
// Output: false

console.log("-----------------");
// Bônus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const studentsAttendedMath = (object) => {
  const lessons = Object.values(object);
  let sum = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    if (lessons[i]['materia'] === "Matemática") {
      sum+=lessons[i]['numeroEstudantes']
    }
  }
  console.log(sum);
};

studentsAttendedMath(allLessons);

console.log("-----------------");
// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
