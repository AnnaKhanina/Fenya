import { Route, Routes } from "react-router-dom";
import  HomeScreen  from "../../screens/HomeScreen/HomeScreen";
import  ProductScreen  from "../../screens/ProductScreen/ProductScreen";
import SizeScreen from "../../screens/SizeScreen/SizeScreen";
import PaymentDeliveryScreen from "../../screens/PaymentDeliveryScreen/PaymentDeliveryScreen"
import ContactsScreen from "../../screens/ContactsScreen/ContactsScreen";
import  CartScreen  from "../../screens/CartScreen/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import  NotFoundScreen   from "../../screens/NotFoundScreen/NotFoundScreen";
import AboutUsScreen from "../../screens/AboutUsScreen/AboutUsScreen";
import CooperationScreen from "../../screens/CooperationScreen/CooperationScreen";
import SocialScreen from "../../screens/SocialScreen/SocialScreen";
import BlogScreen from "../../screens/BlogScreen/BlogScreen";
import { Container } from "../App/App.styled";
// import SideDrawer from "../SideDrawer/SideDrawer";
// import Backdrop from "../Backdrop/Backdrop";
// import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  return (
     <Container>
       <Header />  
       <Footer />  
      {/* <SideDrawer />  
      <Backdrop /> */}
      {/* <Main /> */}
        {/* Route path="/product/:id" element={<ProductScreen />} />*/}         
  
      <Routes>                    
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/size" element={<SizeScreen />} />
          <Route path="/payment_delivery" element={<PaymentDeliveryScreen />} />     
          <Route path="/contacts" element={<ContactsScreen />} /> 
          <Route path="/favorite" element={<FavoriteScreen />} /> 
          <Route path="/cart" element={<CartScreen />} />  
          <Route path="/profile" element={<ProfileScreen />} /> 
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/сooperation" element={<CooperationScreen />} /> 
          <Route path="/social" element={<SocialScreen />} /> 
          <Route path="/blog" element={<BlogScreen />} /> 
          <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Container>  
  ); 
};

export default App;


