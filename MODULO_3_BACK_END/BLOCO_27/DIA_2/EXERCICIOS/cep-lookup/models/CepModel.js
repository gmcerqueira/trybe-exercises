const connection = require("./connection.js");

const removeHyphen = (cep) => cep.replace("-", "");

const formatCep = (cep) => {
  if (cep.match(/\d{5}-\d{3}/)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
};

const getCep = async (cep) => {
  const result = await connection
    .execute(
      `SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ? `,
      [removeHyphen(cep)]
    )
    .then(([res]) => (res.length ? res[0] : null));
    
  if (!result) return null;

  return { ...result, cep: formatCep(cep) };
};

const create = ({ cep, logradouro, bairro, localidade, uf }) =>
  connection
    .execute(
      `INSERT INTO  cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`,
      [removeHyphen(cep), logradouro, bairro, localidade, uf]
    )
    .then(() => ({
      cep: formatCep(cep),
      logradouro,
      bairro,
      localidade,
      uf,
    }));

module.exports = { getCep, create };
