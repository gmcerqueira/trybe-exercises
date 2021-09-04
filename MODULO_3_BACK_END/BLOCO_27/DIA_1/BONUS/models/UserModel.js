const connection = require("./connection");
const emailValidator = require("email-validator");

const formatUser = ({ id, first_name, last_name, email }) => {
  return {
    id,
    first_name,
    last_name,
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
  connection.execute(`SELECT * FROM users_crud.users`)
    .then((res) => res[0])
    .then((array) => formatUser(array[array.length - 1]));

const getAll = () =>
  connection.execute(`SELECT * FROM users_crud.users`).then((res) => res[0]);

const findById = (id) =>
  connection
    .execute(`SELECT * FROM users_crud.users WHERE id = ?`, [id])
    .then((res) => res[0][0])
    .then((user) => formatUser(user))
    .catch(() => false);

const create = async (firstName, lastName, email, password) =>
  connection
    .execute(
      `INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
      [firstName, lastName, email, password]
    )
    .then((res) => findById(res[0].insertId))
    .then((user) => formatUser(user));

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
