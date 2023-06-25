const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');

const productRoutes = require("./routes/productRoutes");
 
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("DataBase of FenyaDB");
});

app.use("/api/products", productRoutes);

const testProxy = createProxyMiddleware ({
  target: 'http://localhost:3000/',
  changeOrigin: true,
});

app.use('/api', testProxy);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000);

module.exports = app;