const express = require("express");
const multer = require("multer");

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/upload", upload.single("file"), (req, res) => {
  res.send(req.file);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
