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
                        <div className="cartscreen"> 
                            <div className="cartscreen-left">
                                <h2 className="screen-title">Кошик</h2> 
                                <CartItem/>
                            </div>                    
                            <div className="cartscreen-right">
                                <div className="cartscreen-info">                           
                                    <p className="cartscreen-name">Кількість (0)</p>
                                    <p className="cartscreen-name">259грн</p>                            
                                <div>
                                    <button className="cartscreen-button">замовити</button>
                                </div>
                                </div>
                            </div> 
                        </div>                         
                    </div>
                </IconContext.Provider>                
            </main>
    );
};

export default CartScreen;