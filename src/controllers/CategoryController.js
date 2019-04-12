const Category = require("../models/Category");

class CategoryController {
  async create(req, res) {
    return res.render("pages/category/create");
  }

  async store(req, res) {
    await Category.create(req.body);

    return res.redirect("/category/list");
  }

  async show(req, res) {
    const categories = await Category.find();

    return res.render("pages/category/list", { categories: categories });
  }

  async edit(req, res) {
    const category = await Category.findById(req.params.id, req.body);

    return res.render("pages/category/edit", { category });
  }

  async update(req, res) {
    await Category.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.redirect("/category/list");
  }

  async destroy(req, res) {
    await Category.findOneAndRemove({ _id: req.params.id });

    return res.redirect("/category/list");
  }
}

module.exports = new CategoryController();
