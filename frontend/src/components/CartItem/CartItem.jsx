import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import "../CartItem/CartItem.css";

const CartItem = (item, qtyChangeHandler, removeHandler) => {
    return (                      
            <div className="cartitem">
                <IconContext.Provider value={{ color: "#fff" }}>                   
                    <img className="cartitem-image img"src={item.imageUrl} alt={item.name}/>                
                    <Link to={`/product/${item.product}`} className="cartitem-name">
                        <p>{item.name}</p>
                    </Link>
                    <p className="cartitem-price">${item.price}</p>
                    <select
                       className="cartitem-select"
                       value={item.qty}
                       onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                    >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                    <button
                        className="cartitem-deleteBtn"
                        onClick={() => removeHandler(item.product)}
                    >
                        <span className="cartitem-icon"><FaIcons.FaTrash /></span>
                    </button>
                </IconContext.Provider>
            </div>    
    );
};

export default CartItem;