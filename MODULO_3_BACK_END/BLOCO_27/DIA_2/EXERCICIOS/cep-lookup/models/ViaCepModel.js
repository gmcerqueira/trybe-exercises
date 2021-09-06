import fetch from "node-fetch";

const lookupCep = async (cepToLookup) => {
  const response = await fetch(`https://viacep.com.br/ws/${cepToLookup}/json/`);

  if (!response.ok) return null;

  const address = await response.json();

  if (address.erro) return null;

  return address;
};

export default {
  lookupCep,
};
