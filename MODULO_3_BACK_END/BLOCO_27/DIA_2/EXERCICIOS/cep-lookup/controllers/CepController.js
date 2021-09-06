const rescue = require("express-rescue");
const Joi = require("joi");

const CepService = require("../services/CepService.js");

const getCep = rescue(async (req, res) => {
  const { cep } = req.params;

  const cepSearch = await CepService.getCep(cep);

  res.status(200).json(cepSearch);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string()
      .regex(/\d{5}-\d{3}/)
      .required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);

  const seatedCep = await CepService.create(req.body);

  if (seatedCep.error) return next(seatedCep.error);

  res.status(200).json(seatedCep);
});

module.exports = { getCep, create };
