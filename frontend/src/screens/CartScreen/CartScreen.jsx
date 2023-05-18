import  "../CartScreen/CartScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import "../../components/CartItem/CartItem";

const CartScreen = () => {
    return (
            <main className="main-screen">
                <div className="container">
                    <div className="cartscreen-left">

                    </div>
                    <h2 className="screen-title">Кошик</h2>                    
                    <CartItem/>
                    <div className="cartscreen-right">
                        
                    </div> 
                </div>                
            </main>
    );
};

export default CartScreen;