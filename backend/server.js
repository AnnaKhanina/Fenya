// require("dotenv").config();
// const express = require("express");
// const productRoutes = require("./routes/productRoutes");
// const connectDB = require("./config/db");

// connectDB();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });
// });

// app.use("api/products", productRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const app = require('./app');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const { mongoDbConnect } = require('./config/db');

const runConnection = async () => {
  try {
    await mongoDbConnect();
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

runConnection();