const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const CategoryController = require("./controllers/CategoryController");

routes.get("/", (req, res) => {
  res.render("pages/index");
});

//Products
routes.get("/create", ProductController.create);
routes.post("/store", ProductController.store);
routes.get("/list", ProductController.show);
routes.get("/edit/:id", ProductController.edit);
routes.post("/update/:id", ProductController.update);
routes.get("/destroy/:id", ProductController.destroy);

//Category
routes.get("/category/create", CategoryController.create);
routes.post("/category/store", CategoryController.store);
routes.get("/category/list", CategoryController.show);
routes.get("/category/edit/:id", CategoryController.edit);
routes.post("/category/update/:id", CategoryController.update);
routes.get("/category/destroy/:id", CategoryController.destroy);

module.exports = routes;
