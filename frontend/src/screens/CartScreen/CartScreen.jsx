import  "../CartScreen/CartScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
                        <h2 className="screen-title">Кошик</h2> 
                        {/* <div className="cartscreen">
                            <ul className="cartscreen-list">
                                <li className="cartscreen-list-item">
                                <CartItem/>
                                </li>
                                <li className="cartscreen-list-item">
                                    <div className="cartscreen-info">                           
                                        <p className="cartscreen-name">Кількість (0)</p>
                                        <p className="cartscreen-name">259грн</p>                            
                                        <button className="cartscreen-button">замовити</button>                                        
                                    </div>
                                </li>
                            </ul>                           
                        </div>                          */}
                                                
                    </div>
                </IconContext.Provider>                
            </main>
    );
};

export default CartScreen;