const CepModel = require("../models/CepModel.js");
const buscaCep = require("busca-cep");

const getCep = async (cep) => {
  if (!cep.match(/\d{5}-?\d{3}/))
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    };

  const cepSearch = await CepModel.getCep(cep);

  if (cepSearch) return cepSearch;

  const cepFromApi = await buscaCep(cep);

  if (cepFromApi.erro)
    return { error: { code: "notFound", message: "CEP não encontrado" } };

  return await CepModel.create(cepFromApi);
};

const create = async (bodyReq) => {
  const cepAlreadyExist = await CepModel.getCep(bodyReq.cep);

  if (cepAlreadyExist) {
    return {
      error: { code: "alreadyExists", message: "CEP já existente" },
    };
  }

  return CepModel.create(bodyReq);
};

module.exports = { getCep, create };
