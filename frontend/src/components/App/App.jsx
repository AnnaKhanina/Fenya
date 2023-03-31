import { Route, Routes, Link} from "react-router-dom";
import  HomeScreen  from "../../screens/HomeScreen/HomeScreen";
import  ProductScreen  from "../../screens/ProductScreen/ProductScreen";
import PaymentDeliveryScreen from "../../screens/PaymentDeliveryScreen/PaymentDeliveryScreen"
import ContactsScreen from "../../screens/ContactsScreen/ContactsScreen";
import  CartScreen  from "../../screens/CartScreen/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";
import  NotFoundScreen   from "../../screens/NotFoundScreen/NotFoundScreen";
import { Container, Header, Navbar, NavbarLogo, NavbarTitle, NavbarLinks, NavbarButton, NavbarIcon } from "../App/App.styled";
// import  Navbar  from "../Navbar/Navbar";

const App = () => {
  return (
    <Container>
      <Header>  
      <Navbar> 
            <NavbarLinks>
                <Link to="/" end>
                    <NavbarLogo>
                        <NavbarTitle>Fenya</NavbarTitle>
                    </NavbarLogo>                         
                </Link>
                <Link to="/products">
                    Товари          
                </Link>
                <Link to="/payment_delivery">
                    Оплата і доставка        
                </Link>
                <Link to="/contacts">
                    Контакти        
                </Link>
                <Link to="/favorite">
                    <NavbarIcon>
                  
                    </NavbarIcon>
                    Бажане      
                </Link>
                <Link to="/cart">
                   <NavbarIcon>
                    
                   </NavbarIcon>
                    Кошик       
                </Link>
             </NavbarLinks> 
            <NavbarButton>Увійти</NavbarButton>  
      </Navbar>     
      </Header>
        {/* Route path="/product/:id" element={<ProductScreen />} />*/}
      <Routes>                    
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/payment_delivery" element={<PaymentDeliveryScreen />} />     
          <Route path="/contacts" element={<ContactsScreen />} /> 
          <Route path="/favorite" element={<FavoriteScreen />} /> 
          <Route path="/cart" element={<CartScreen />} /> 
          <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Container>  
  ); 
};

export default App;


