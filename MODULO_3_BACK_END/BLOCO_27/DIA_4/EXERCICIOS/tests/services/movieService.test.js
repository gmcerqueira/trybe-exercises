const sinon = require("sinon");
const { expect } = require("chai");

const MoviesModel = require("../../models/movieModel");
const MoviesService = require("../../services/movieService");

describe("Busca todos os filmes no BD", () => {
  describe("quando não existe nenhum filme criado", () => {
    before(() => {
      sinon.stub(MoviesModel, "getAll").resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it("retorna um array", async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an("array");
    });

    it("o array está vazio", async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.empty;
    });
  });

  describe("quando existem filmes criados", () => {
    before(() => {
      sinon.stub(MoviesModel, "getAll").resolves([
        {
          id: "604cb554311d68f491ba5781",
          title: "Example Movie",
          directedBy: "Jane Dow",
          releaseYear: 1999,
        },
      ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it("retorna um array", async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an("array");
    });

    it("o array não está vazio", async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.not.empty;
    });

    it("o array possui itens do tipo objeto", async () => {
      const [item] = await MoviesService.getAll();

      expect(item).to.be.an("object");
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesService.getAll();

      expect(item).to.include.all.keys(
        "id",
        "title",
        "releaseYear",
        "directedBy"
      );
    });
  });
});

describe("Insere um novo filme no BD", () => {
  describe("quando o payload informado não é válido", () => {
    const payloadMovie = {};

    it("retorna um boolean", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("boolean");
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe("quando é inserido com sucesso", () => {
    const payloadMovie = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = "604cb554311d68f491ba5781";

      sinon.stub(MoviesModel, "create").resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});


describe("Busca apenas um filme no BD através do ID", () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;

  const ID_EXAMPLE = "604cb554311d68f491ba5781";
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    sinon.stub(MongoClient, "connect").resolves(connectionMock);
    sinon.stub(ObjectId, "isValid").resolves(true);
  });

  after(async () => {
    await connectionMock.close();
    MongoClient.connect.restore();
    ObjectId.isValid.restore();
    await DBServer.stop();
  });

  describe("quando não existe um filme para o ID informado", () => {
    it('retorna "null"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.equal(null);
    });
  });

  describe("quando existe um filme para o ID informado", () => {
    before(async () => {
      const moviesCollection = await connectionMock
        .db("model_example")
        .collection("movies");
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: "Example Movie",
        directedBy: "Jane Dow",
        releaseYear: 1999,
      });
    });

    it("retorna um objeto", async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.a("object");
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys(
        "id",
        "title",
        "releaseYear",
        "directedBy"
      );
    });
  });
});