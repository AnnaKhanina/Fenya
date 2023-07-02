// const express = require("express");
// const router = express.Router();
// const ProductController = require("../controllers/ProductController");

// router.get("/api/products", ProductController.getProducts);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/ProductController");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
