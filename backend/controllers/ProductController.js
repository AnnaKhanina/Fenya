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
