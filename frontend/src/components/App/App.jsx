import './App.styled';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return <AppStyled>
    {/* NavBar */}
    {/* SideDrawer */}
    {/* Backdrop */}
    <Main>
      <Router exact path="/" component={} />
      <Router exact path="/product/:id" component={ProductScreen} />
      <Router exact path="/cart" component={CartScreen} />
    </Main>
    {/* HomeScreen */}
    {/* ProductScreen */}
    {/* CartScreen*/}
  </AppStyled>;
}

export default App;
