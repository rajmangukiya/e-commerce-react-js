import './App.css';
import MainPage from './Main_page/Components/MainPage';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import CartPage from './Cart_Page/Components/CartPage';
import LoginPage from './Login_page/Components/LoginPage';
import SignUpPage from './Sign_in_page/Components/SignUpPage';
import ProductPage from './Product_page/Components/ProductPage';
import SellingPage from './Selling_page/Components/SellingPage';
import React, { useState } from 'react';

export const WholeContext = React.createContext()

function App() {

  const [productOnView, setProductOnView] = useState({})
  const [cartValue, setCartValue] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  return (
    <HashRouter basename="/" >
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
          <Route exact path="/" component={MainPage} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/signUpPage" component={SignUpPage} />
          <Route path="/productPage" component={ProductPage} />
          <Route path="/cartPage" component={CartPage} />
          <Route path="/sellingPage" component={SellingPage} />
        </WholeContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
