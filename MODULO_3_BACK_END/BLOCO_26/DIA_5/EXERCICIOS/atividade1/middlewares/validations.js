const validateUserName = (req, res, next) => {
  const { username } = req.body;

  if (!username || username < 3)
    res.status(400).json({ message: "Invalid username" });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes("@") || !email.includes(".com"))
    return res.status(400).json({ message: "Invalid email" });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || 4 <= password <= 8)
    res.status(400).json({ message: "Invalid password" });

  next();
};

module.exports = {
  validateUserName,
  validateEmail,
  validatePassword,
};
