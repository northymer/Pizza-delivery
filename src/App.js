import React, {useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import { Wrapper } from './containers/Wrapper/Wrapper'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import {useSelector} from 'react-redux'
import {setLocalstorage} from './redux/helpers'

import './App.scss'

function App() {

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    localStorage.removeItem('cart')
    setLocalstorage('cart', cart)
  }, [cart])

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Wrapper>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/checkout">
                        <CheckoutPage cart={cart} />
                    </Route>
                    <Route exact path="/cart">
                        <CartPage />
                    </Route>
                </Wrapper>
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
