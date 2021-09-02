const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { teamsRouter } = require("./routers/teamsRouter.js");
const { routeNotFound } = require("./middlewares/routeNotFound.js");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/teams", teamsRouter);

app.use("*", (_req, _res, next) =>
  next({ statusCode: 404, message: "Opsss router not found" })
);

app.use(routeNotFound);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
