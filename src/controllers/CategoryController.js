const Category = require("../models/Category");

class CategoryController {
  async create(req, res) {
    return res.render("pages/create");
  }

  async store(req, res) {
    await Category.create(req.body);

    return res.redirect("/list");
  }

  async show(req, res) {
    const categories = await Category.find();

    return res.render("pages/categories/list", { categories: categories });
  }

  async edit(req, res) {
    const category = await Category.findById(req.params.id, req.body);

    return res.render("pages/categories/edit", { category });
  }

  async update(req, res) {
    await Category.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.redirect("/list");
  }

  async destroy(req, res) {
    await Category.findOneAndRemove({ _id: req.params.id });

    return res.redirect("/list");
  }
}

module.exports = new CategoryController();
