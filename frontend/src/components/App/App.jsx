import './App.styled';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import ProductScreen from "../../screens/ProductScreen/ProductScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

function App() {
  return (
    <Router>
    {/* NavBar */}
    {/* SideDrawer */}
    {/* Backdrop */}
    <Main>
      <Router exact path="/" component={HomeScreen} />
      <Router exact path="/product/:id" component={ProductScreen} />
      <Router exact path="/cart" component={CartScreen} />
    </Main>
    </Router>
  ); 
}

export default App;
