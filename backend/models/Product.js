const mongoose = require("mongoose");

//  const productSchema = mongoose.Schema ({
//     name: { type: String, require: true },
//     image: { type: String, require: true },
//     category: { type: String, require: true },
//     filter: [{ brand: String, color: String, size: String, description: String}],
//     countInStock: { type: Number, require: true },
//     instock: { type: Boolean, require: true },
//     price: { type: Number, require: true },
//     rainting: { type: Number, require: true },
//     reviews: { type: String }  
//  });

//  const Product = mongoose.model("product", productSchema);

//  module.exports = Product;

const productSchema = mongoose.Schema({
   name: {
     type: String,
     required: true,
   },
   description: {
     type: String,
     required: true,
   },
   price: {
     type: Number,
     required: true,
   },
   countInStock: {
     type: Number,
     required: true,
   },
   imageUrl: {
     type: String,
     required: true,
   },
 });
 
 const Product = mongoose.model("product", productSchema);
 
 module.exports = Product;