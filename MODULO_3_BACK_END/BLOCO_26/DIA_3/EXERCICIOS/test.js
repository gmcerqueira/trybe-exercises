const sinon = require("sinon");
const { expect } = require("chai");
const fs = require("fs");
const numberIs = require("./numberIs.js");
const writeOnFile = require("./writeOnFile.js");

describe("Verifica retorno da função numberIs se", () => {
  const positivo = "Número positivo";
  const negativo = "Número negativo";
  const neutro = "Número neutro";

  it("parâmetro não é um número", () => {
    const response = numberIs("Não é um número");
    expect(response).to.be.null;
  });

  it("parâmetro é um número", () => {
    const response = numberIs(5);
    expect(response).to.be.a("string");
  });

  it("número positivo", () => {
    const response = numberIs(5);
    expect(response).to.be.equal(positivo);
  });

  it("número negativo", () => {
    const response = numberIs(-5);
    expect(response).to.be.equal(negativo);
  });

  it("número neutro", () => {
    const response = numberIs(0);
    expect(response).to.be.equal(neutro);
  });
});

describe("Verifica retorno da função writeOnFile se", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  const content = "Testa a escrita de um arquivo";
  const fileName = "fileTest";

  it("foi realizado com sucesso", () => {
    const response = writeOnFile(content, fileName);
    expect(response).to.be.equals("ok");
  });
});
