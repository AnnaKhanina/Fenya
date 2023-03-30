import { Route, Routes } from "react-router-dom";
import  HomeScreen  from "../../screens/HomeScreen/HomeScreen";
import  ProductScreen  from "../../screens/ProductScreen/ProductScreen";
import  CartScreen  from "../../screens/CartScreen/CartScreen";
import  NotFoundScreen   from "../../screens/NotFoundScreen/NotFoundScreen";
import { Container, Header, Logo, Link, Navbar } from "../App/App.styled";

//import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          
        </Logo>
      <Navbar>
        <Link to="/" end>
          Головна          
        </Link>
        <Link to="/products">
          Товари          
        </Link>
        <Link to="/cart">
          Кошик         
        </Link>
      </Navbar>  
      </Header>

        {/* <Routes>                    
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />     
          <Route path="*" element={<NotFoundScreen />} />
        </Routes> */}

<Routes>                    
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />     
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </Container>  
  ); 
}

export default App;
