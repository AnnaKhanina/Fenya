import  "../CartScreen/CartScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { IconContext } from "react-icons";

import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

const CartScreen = () => {
    return (
            <main className="main-screen">
                <IconContext.Provider value={{ color: "#FFF" }}>  
                    <div className="container">
                      <div className="cartscreen">
                        <div className="cartscreen-left">
                          <h2 className="screen-title">Кошик</h2>

                          {cartItems.length === 0 ? (
                            <div>
                              Ваш кошик порожній <Link to="/">назад</Link>
                            </div>
                          ) : (
                            cartItems.map((item) => (
                              <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeFromCartHandler}
                              />
                            ))
                          )}
                        </div>

                        <div className="cartscreen-right">
                          <div className="cartscreen-info">
                            <p>Усьго ({getCartCount()})</p>
                            <p>${getCartSubTotal()}</p>
                          </div>
                          <div>
                            <button className="cartscreen-button">Перейти до оформлення замовлення</button>
                          </div>
                        </div>
                      </div> 
                    </div>
                </IconContext.Provider>                
            </main>
    );
};

export default CartScreen;