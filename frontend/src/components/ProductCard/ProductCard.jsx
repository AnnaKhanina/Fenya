import "../ProductCard/ProductCard.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { Link } from 'react-router-dom';

const ProductCard = ({ product}) => {
  const dispatch = useDispatch();

  const handleAddToCart  = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      {/* <img src={product.imageUrl} alt={product.name} /> */}
      <Link to={"/product/${product._id"}>
        <h3>{product.name}</h3>
        <p>Опис: {product.description}</p>
        <p>Ціна: {product.price}грн</p>
        <p>Розмір: {product.size}</p>
        <p>Колір: {product.color}</p>
        {product.quantity && <p>Кількість: {product.quantity}</p>}
      </Link>
      <button onClick={handleAddToCart }>Додати до кошику</button>
    </div>
  );
};

export default ProductCard;

