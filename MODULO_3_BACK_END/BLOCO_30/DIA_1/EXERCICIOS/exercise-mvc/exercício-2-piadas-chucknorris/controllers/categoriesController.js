const categoriesModel = require("../models/categoriesModel");

const listCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();

  return res.render("categories/index", { categories });
};

module.exports = { listCategories };
