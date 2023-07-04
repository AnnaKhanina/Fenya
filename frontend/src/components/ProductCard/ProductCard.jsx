import "./Product.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;