// const express = require("express");
// const router = express.Router();
// const ProductController = require("../controllers/ProductController");

// router.get("/api/products", ProductController.getProducts);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProducts
} = require("../controllers/ProductController");

router.get("/", getProducts);

module.exports = router;
