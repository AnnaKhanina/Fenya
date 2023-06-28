const Product = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, countInStock, imageUrl } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      countInStock,
      imageUrl,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {                
    console.error('Помилка при створенні товара:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createProduct,
  getProducts
};       