const { validateId } = require("../middlewares/validations.js");

const postRouter = require("express").Router();

const posts = [
  { id: 1, author: "José Neto", comment: "Mais um dia de Sol !" },
  { id: 2, author: "Antonio Neto", comment: "Hoje o dia está maneiro!" },
  { id: 3, author: "Rodrigo Garga", comment: "To aqui também" },
];

postRouter.get("/", (_req, res) => res.status(200).json({ posts }));

postRouter.get("/:id", validateId, (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return next({ statusCode: 404, message: "post not found" });

  res.status(200).json(post);
});

module.exports = { postRouter };
