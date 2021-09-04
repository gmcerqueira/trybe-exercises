const connection = require("./connections.js");
const { ObjectId } = require("mongodb");

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = () =>
  connection()
    .then((db) => db.collection("authors").find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({ id: _id, firstName, middleName, lastName })
      )
    );

const findById = (id) =>
  connection()
    .then((db) => db.collection("authors").findOne(ObjectId(id)))
    .then((author) => {
      if (!author) return null;

      const { firstName, middleName, lastName } = author;

      return getNewAuthor({ id, firstName, middleName, lastName });
    })
    .catch(() => false);

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (middleName && typeof middleName !== "string") return false;

  return true;
};

const create = (firstName, lastName, middleName = null) =>
  connection().then((db) =>
    db.collection("authors").insertOne({ firstName, lastName, middleName })
  );

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
