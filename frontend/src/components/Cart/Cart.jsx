import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import "./Cart.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <IconContext.Provider value={{ color: "#fff" }}>  
        <h2 className="cart-title">Кошик</h2>
        {cartItems.length === 0 ? (
          <p className="cart-text">Ваш кошик порожній</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.productId}>
                <div className="cart-image">
                  <img src={item.product.imageUrl} alt={item.product.name} />
                </div>
                <div className="cart-info">
                  <span className="cart-name">{item.product.name}</span>
                  <span className="cart-stock">Кількість на складі: {item.product.countInStock}</span>
                </div>
                <div className="cart-actions">
                  <button className="cart-deleteBtn" onClick={() => removeFromCartHandler(item.productId)}>
                    Видалити
                    <span className="cart-icon"><FaIcons.FaTrash /></span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </IconContext.Provider>
    </div>
  );
};

export default Cart;