// const express = require("express");
// const router = express.Router();
// const ProductController = require("../controllers/ProductController");

// router.get("/api/products", ProductController.getProducts);

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const {
//   getProducts,
//   getProductById,
// } = require("../controllers/ProductController");

// router.get("/", getProducts);
// router.get("/:id", getProductById);

// module.exports = router;

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// GET /products
router.get("/", productController.getAllProducts);

// GET /products/:id
router.get("/:id", productController.getProductById);

// POST /products
router.post("/", productController.createProduct);

// PUT /products/:id
router.put("/:id", productController.updateProduct);

// DELETE /products/:id
router.delete("/:id", productController.deleteProduct);

module.exports = router;

