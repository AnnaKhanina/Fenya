const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   name: {
     type: String,
     required: true,
   },
   imageUrl: {
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
   size: {
    type: String,
    required: true,
   },
   color: {
    type: String,
    required: true,
   },
   countInStock: {
     type: Number,
     required: true,
   },  
   dateAdded: {
    type: Date,
    default: Date.now,
  },
 });
 
 const Product = mongoose.model("product", productSchema);
 
 module.exports = Product;