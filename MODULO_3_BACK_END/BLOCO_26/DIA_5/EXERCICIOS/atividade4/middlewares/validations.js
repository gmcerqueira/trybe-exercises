const validateTeam = (req, res, next) => {
  const { name, initials, country } = req.body;

  if (
    !name ||
    name === "" ||
    name.length <= 5 ||
    !initials ||
    initials === "" ||
    !initials.match(/^[A-Z]{3}$/gm) ||
    !country ||
    country === "" ||
    country.length <= 3
  )
    return res.status(400).json({ message: "invalid data" });

  next();
};

module.exports = { validateTeam };
