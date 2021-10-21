require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "12345678", // preencha com a senha do seu banco de dados, caso tenha
    database: "orm_assoc_test_db",
    host: "127.0.0.1",
    dialect: "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: "mysql",
  },
};
