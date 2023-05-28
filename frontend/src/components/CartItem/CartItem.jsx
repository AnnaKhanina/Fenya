import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import "../CartItem/CartItem.css";

const CartItem = () => {
    return (                      
            <div className="cartitem">
                <IconContext.Provider value={{ color: "#fff" }}>                   
                    <img className="cartitem-image img" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt ="жіноча білизна"/>                
                    <Link to={`/product/${111}`} className="cartitem-name">
                        <p>Трусики жіночі Anna</p>
                    </Link>
                    <p className="cartitem-price">259грн</p>
                    <select className="cartitem-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button className="cartitem-deleteBtn">
                        <span className="cartitem-icon"><FaIcons.FaTrash /></span>
                    </button>
                </IconContext.Provider>
            </div>    
    );
};

export default CartItem;