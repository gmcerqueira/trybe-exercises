const { readFileContent } = require("../helpers/readFileContent.js");
const { writeFileContent } = require("../helpers/writeFileContent.js");
const { validateTeam } = require("../middlewares/validations.js");

const teamsRouter = require("express").Router();

teamsRouter.get("/", async (req, res) => {
  const teams = await readFileContent("./teams.json") || [];
  res.status(200).json({ teams });
});

teamsRouter.post("/", validateTeam, async (req, res) => {
  const teams = await writeFileContent("./teams.json", req.body);

  res.status(200).json(teams);
});

module.exports = { teamsRouter };
