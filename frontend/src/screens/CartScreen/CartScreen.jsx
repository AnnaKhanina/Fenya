import  "../CartScreen/CartScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import CartItem from "../../components/CartItem/CartItem";
import { IconContext } from "react-icons";
// import * as FaIcons from "react-icons/fa"; 

const CartScreen = () => {
    return (
            <main className="main-screen">
                <IconContext.Provider value={{ color: "#FFF" }}>  
                    <div className="container">
                        <h2 className="screen-title">Кошик</h2> 
                        <div className="cartscreen">
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
                        </div>                         
                    </div>
                </IconContext.Provider>                
            </main>
    );
};

export default CartScreen;