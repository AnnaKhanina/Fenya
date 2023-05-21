import  "../CartScreen/CartScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import CartItem from "../../components/CartItem/CartItem";

const CartScreen = () => {
    return (
            <main className="main-screen">
                <div className="container">
                    <div className="cartscreen-left">
                        <h2 className="screen-title">Кошик</h2> 
                        <CartItem/>
                    </div>                    
                    <div className="cartscreen-right">
                        <div className="cartscreen-info">                           
                            <p>Кількість</p>
                            <p>259грн</p>                            
                        <div>
                            <button>замовити</button>
                        </div>
                        </div>
                    </div> 
                </div>                
            </main>
    );
};

export default CartScreen;