const Product = require("../models/Product");
const Category = require("../models/Category");

class ProductController {
  async create(req, res) {
    const category = await Category.find();

    return res.render("pages/create", { categories: category });
  }

  async store(req, res) {
    await Product.create(req.body);

    return res.redirect("/list");
  }

  async show(req, res) {
    const products = await Product.find();

    const category = await Product.find({}).select({ category_id: 1, _id: 0 });

    const id = category[0].category_id;

    const categories = await Category.findById(id);

    return res.render(
      "pages/list",
      { products: products },
      { categories: categories }
    );
  }

  async edit(req, res) {
    const product = await Product.findById(req.params.id, req.body);

    return res.render("pages/edit", { product });
  }

  async update(req, res) {
    await Product.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.redirect("/list");
  }

  async destroy(req, res) {
    await Product.findOneAndRemove({ _id: req.params.id });

    return res.redirect("/list");
  }
}

module.exports = new ProductController();
