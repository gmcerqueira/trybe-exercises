const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { postRouter } = require("./routers/postRouter.js");
const { routeNotFound } = require("./middlewares/routeNotFound.js");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/post", postRouter);

app.use("*", (_req, _res, next) =>
  next({ statusCode: 404, message: "Opsss router not found" })
);

app.use(routeNotFound);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
