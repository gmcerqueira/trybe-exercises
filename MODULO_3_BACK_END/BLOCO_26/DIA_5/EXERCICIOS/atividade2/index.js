const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const btcRouter = require("./routers/btcRouter.js");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/btc", btcRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
