const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});