require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");

const fileExists = (fileName) => {
  //fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/uploads`);
  //Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some((file) => {
    const subtractedDate = file.replace(/\d*-/i, "");

    return subtractedDate === fileName;
  });
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "image/png") {
    //Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;

    //Rejeitar o arquivo
    return cb(null, false);
  }

  if (fileExists(file.originalname)) {
    //Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    //Rejeitar o arquivo
    return cb(null, false);
  }

  //Aceitar o arquivo
  return cb(null, true);
};

const { PORT } = process.env;

const controllers = require("./controllers");
const middlewares = require("./middlewares");

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/uploads"));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },

  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage, fileFilter });

app.post("/upload", upload.single("file"), controllers.upload);
app.get("/upload/:name", controllers.download);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
