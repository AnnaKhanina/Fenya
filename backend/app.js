const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const { errorHandler } = require("./helpers/index");

const productRoutes = require("./routes/productRoutes");
 
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("DataBase of Contacts");
});

app.use("api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// app.use(errorHandler);

module.exports = app;