const connection = require("./connection");
const emailValidator = require("email-validator");
const { ObjectId } = require("mongodb");

const formatUse = ({ _id, firstName, lastName, email }) => {
  return {
    id: _id,
    firstName,
    lastName,
    email,
  };
};

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || firstName === "") return "Campo 'first name' é obrigatório";
  if (!lastName || lastName === "") return "Campo 'last name' é obrigatório";
  if (!email || email === "") return "Campo 'email' é obrigatório";
  if (!emailValidator.validate(email)) return "Email inválido";
  if (!password || password === "") return "Campo 'password' é obrigatório";
  if (password.length < 6)
    return "O campo 'password' deve ter pelo menos 6 caracteres";
};

const returnLastCreatedUser = () =>
  connection()
    .then((db) => db.collection("user").find().toArray())
    .then((array) => formatUse(array[array.length - 1]));

const getAll = () =>
  connection()
    .then((db) => db.collection("user").find().toArray())
    .then((users) => users.map((u) => formatUse(u)));

const findById = (id) =>
  connection()
    .then((db) => db.collection("user").findOne(ObjectId(id)))
    .then((user) => formatUse(user))
    .catch(() => false);

const create = (firstName, lastName, email, password) =>
  connection().then((db) =>
    db.collection("user").insertOne({ firstName, lastName, email, password })
  );

const update = (id, firstName, lastName, email, password) =>
  connection()
    .then((db) =>
      db.collection("user").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: { firstName, lastName, email, password },
        }
      )
    )
    .then(() => findById(id));

module.exports = {
  isValid,
  create,
  returnLastCreatedUser,
  getAll,
  findById,
  update,
};
