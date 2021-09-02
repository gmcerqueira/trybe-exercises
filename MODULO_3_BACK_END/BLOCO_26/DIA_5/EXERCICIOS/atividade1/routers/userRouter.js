const router = require("express").Router();
const {
  validateUserName,
  validateEmail,
  validatePassword,
} = require("../middlewares/validations.js");

router.post(
  "/register",
  validateUserName,
  validateEmail,
  validatePassword,
  (_req, res) => {
    res.status(201).json({ message: "user created" });
  }
);

router.post("/login", validateEmail, validatePassword, (_req, res) => {
  res.status(200).json({ token: "86567349784e" });
});

module.exports = router;
