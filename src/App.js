import './App.css';
import MainPage from './Main_page/Components/MainPage';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import CartPage from './Cart_Page/Components/CartPage';
import LoginPage from './Login_page/Components/LoginPage';
import SignUpPage from './Sign_in_page/Components/SignUpPage';
import ProductPage from './Product_page/Components/ProductPage';
import React, { useState } from 'react';

export const WholeContext = React.createContext()

function App() {

  const [productOnView, setProductOnView] = useState({})
  const [cartValue, setCartValue] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  return (
    <Router>
      <div className="App">
        <WholeContext.Provider value={{
          productOnView: productOnView,
          setProductOnView: setProductOnView,
          cartValue: cartValue,
          setCartValue: setCartValue,
          cartProducts: cartProducts,
          setCartProducts: setCartProducts,
          cartTotalPrice: cartTotalPrice,
          setCartTotalPrice: setCartTotalPrice
        }}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cartPage" component={CartPage} />
            <Route exact path="/loginPage" component={LoginPage} />
            <Route exact path="/signUpPage" component={SignUpPage} />
            <Route exact path="/productPage" component={ProductPage} />
          </Switch>
        </WholeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
