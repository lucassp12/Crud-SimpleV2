const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");

// iniciando app
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/crud-simplev2", {
  useNewUrlParser: true
});

app.use(express.static(__dirname + "/public"));

// view engine setup
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(expressLayouts);

//rotas
app.use("/", require("./src/routes"));

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
