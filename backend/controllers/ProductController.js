// const Product = require("../models/ProductModel");

// const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, countInStock, imageUrl } = req.body;

//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       countInStock,
//       imageUrl,
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json(savedProduct);
//   } catch (error) {                
//     console.error('Помилка при створенні товара:', error);
//     res.status(500).json({ error: 'Server Error' });
//   }
// };

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     res.json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = {
//   // createProduct,
//   getProducts,
//   getProductById,
// };       

const Product = require("../models/ProductModel");

// GET /products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET /products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST /products
// exports.createProduct = async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     const savedProduct = await product.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, size, color, countInStock } = req.body;
    const product = new Product({ name, description, price, imageUrl, size, color, countInStock });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// PUT /products/:id
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//нові надходження
exports.getNewArrivals = async (req, res) => {
  try {
    const newArrivals = await Product.find()
      .sort('-dateAdded') // Сортировка по убыванию даты добавления
      .limit(10); // Ограничение количества возвращаемых новых поступлений

    res.json(newArrivals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch new arrivals' });
  }
};
