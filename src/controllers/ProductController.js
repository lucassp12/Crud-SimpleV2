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

    console.log(products);

    return res.render("pages/list", { products: products });
  }

  async edit(req, res) {
    const categories = await Category.find();

    const product = await Product.findById(req.params.id, req.body);

    return res.render("pages/edit", { product, categories: categories });
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
