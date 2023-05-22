import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import "../CartItem/CartItem.css";
import "../../screens/MainScreen/MainScreen.css";
import "../Container/Container.css";

const CartItem = () => {
    return (
        <main className="main-screen">
            <IconContext.Provider value={{ color: "#060b26" }}> 
            <div className="container">
                <div className="cartitem">
                    <div className="cartitem-image">
                        <img src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt ="жіноча білизна"/>
                    </div>
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
                </div>
            </div>
            </IconContext.Provider>          
        </main>
    );
};

export default CartItem;