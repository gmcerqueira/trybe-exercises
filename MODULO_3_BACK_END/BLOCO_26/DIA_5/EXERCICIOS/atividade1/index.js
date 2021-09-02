const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routers/userRouter.js");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
