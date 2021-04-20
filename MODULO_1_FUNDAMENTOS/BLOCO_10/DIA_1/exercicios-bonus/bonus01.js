// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialties: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialties: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialties: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialties: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialties: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialties: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const employeeDetails = professionalBoard.find((employee) => employee.id === id);
  if (!employeeDetails) {
    throw Error('ID não identificada');
  }
  if (!employeeDetails[detail]) {
    throw Error('Informação indisponível');
  }
  
  return employeeDetails[detail];
};

module.exports = searchEmployee;