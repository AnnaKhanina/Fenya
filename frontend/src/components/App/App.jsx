import '../App/App.styled';
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
    <App>
      <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:id" component={ProductScreen} />
      <Route exact path="/cart" component={CartScreen} />
      </Switch>      
    </App>
    </Router>
  ); 
}

export default App;
