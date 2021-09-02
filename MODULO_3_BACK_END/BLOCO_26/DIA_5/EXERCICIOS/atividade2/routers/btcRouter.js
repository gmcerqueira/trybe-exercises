const axios = require("axios");
const router = require("express").Router();
const { validateToken } = require("../middlewares/validations.js");

router.get("/price", validateToken, async (_req, res) => {
  const btc = await axios(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  res.status(200).json(btc.data);
});

module.exports = router;
