// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email }
// de uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees para
// criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const createEmployee = (nomeCompleto) => ({
  nomeCompleto: nomeCompleto,
  email: criaEmail(nomeCompleto),
});


const criaEmail = (nomeCompleto) => `${nomeCompleto.toLowerCase().trim().split(" ").join("_")}@trybe.com`;


const newEmployees = (action) => {
  const employees = {
    id1: action("Pedro Guerra"),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: action("Luiza Drumond "),  // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: action("Carla Paiva"),  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(createEmployee));