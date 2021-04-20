// EN - Receives a array with technologies and names to create a new array with objects owning properties tech and name. Then sort new array from the tech propriety. If empty array, return "Empty!"
// PT-BR - Receber um array de tecnologias e nomes para criar um novo array com objetos possuindo campos tech e name. Então ordenar novo array a partir do campo tech. Se array vazio retornar 'Empty!'
const techList = (techArray, name) => {
  if (techArray.length === 0) return 'Vazio!';
  const sortedTechArray = techArray.sort().map((technology) => ({
    tech: technology,
    name,
  }));
  return sortedTechArray;
};

module.exports = techList;