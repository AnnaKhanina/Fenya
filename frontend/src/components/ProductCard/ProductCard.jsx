import "../ProductCard/ProductCard.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Ціна: {product.price}грн</p>
      <p>Розмір: {product.size}</p>
      <p>Колір: {product.color}</p>
      <p>Кількість: {product.quantity}</p>
      <button onClick={addToCartHandler}>Додати до кошику</button>
    </div>
  );
};

export default ProductCard;