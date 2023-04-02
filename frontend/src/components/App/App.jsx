import { Route, Routes, Link} from "react-router-dom";
import  HomeScreen  from "../../screens/HomeScreen/HomeScreen";
import  ProductScreen  from "../../screens/ProductScreen/ProductScreen";
import PaymentDeliveryScreen from "../../screens/PaymentDeliveryScreen/PaymentDeliveryScreen"
import ContactsScreen from "../../screens/ContactsScreen/ContactsScreen";
import  CartScreen  from "../../screens/CartScreen/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";
import  NotFoundScreen   from "../../screens/NotFoundScreen/NotFoundScreen";
import { Container, Header, Navbar, NavbarLinks, NavbarLinksItem, NavbarLogo, NavbarTitle, NavbarIcon, NavbarButton } from "../App/App.styled";
// import  Navbar  from "../Navbar/Navbar";
// import SideDrawer from "../SideDrawer/SideDrawer";
// import Backdrop from "../Backdrop/Backdrop";

const App = () => {
  return (
    <Container>
      <Header>
      <Navbar> 
            <NavbarLinks>
                <NavbarLinksItem>
                    <Link to="/" end>
                        <NavbarLogo>
                            <NavbarTitle>Fenya</NavbarTitle>
                        </NavbarLogo>                         
                    </Link>
                </NavbarLinksItem>
                <NavbarLinksItem>
                    <Link to="/products">Товари</Link>
                </NavbarLinksItem>
                <NavbarLinksItem>
                    <Link to="/payment_delivery">Оплата і доставка</Link>
                </NavbarLinksItem>
                <NavbarLinksItem>
                    <Link to="/contacts">Контакти</Link>
                </NavbarLinksItem>
                
                <NavbarLinksItem>
                    <Link to="/favorite">
                        <NavbarIcon>

                        </NavbarIcon>
                        Бажане      
                    </Link>
                </NavbarLinksItem>
                <NavbarLinksItem>
                <Link to="/cart">
                   <NavbarIcon>
                    
                   </NavbarIcon>
                    Кошик       
                </Link>
                </NavbarLinksItem> 
                
             </NavbarLinks> 
            <NavbarButton>Увійти</NavbarButton>  
      </Navbar>          
      </Header>
      {/* <SideDrawer />  
      <Backdrop /> */}
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


