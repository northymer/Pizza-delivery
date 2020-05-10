import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import { Wrapper } from "./Containers/Wrapper/Wrapper";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Wrapper>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/checkout">
                        <CheckoutPage />
                    </Route>
                    <Route exact path="/cart">
                        <CartPage />
                    </Route>
                </Wrapper>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
