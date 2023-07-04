// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
// import * as FaIcons from "react-icons/fa"; 
// import "../CartItem/CartItem.css";

// const CartItem = (item, qtyChangeHandler, removeHandler) => {
//     return (                      
//             <div className="cartItem">
//                 <IconContext.Provider value={{ color: "#fff" }}>                   
//                     <img className="cartItem-image img"src={item.imageUrl} alt={item.name}/>                
//                     <Link to={`/product/${item.product}`} className="cartitem-name">
//                         <p>{item.name}</p>
//                     </Link>
//                     <p className="cartItem-price">${item.price}</p>
//                     <select
//                        className="cartItem-select"
//                        value={item.qty}
//                        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
//                     >
//                         {[...Array(item.countInStock).keys()].map((x) => (
//                             <option key={x + 1} value={x + 1}>
//                                 {x + 1}
//                             </option>
//                         ))}
//                     </select>
//                     <button
//                         className="cartItem-deleteBtn"
//                         onClick={() => removeHandler(item.product)}
//                     >
//                         <span className="cartItem-icon"><FaIcons.FaTrash /></span>
//                     </button>
//                 </IconContext.Provider>
//             </div>    
//     );
// };

// export default CartItem;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import "../CartItem/CartItem.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <span>{item.product.name}</span>
              <button onClick={() => removeFromCartHandler(item.productId)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;