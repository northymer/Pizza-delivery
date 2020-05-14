import React, {useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {setLocalstorage} from './redux/helpers'
import {userCheckAuth} from './redux/user/actions'

import MainPage from './pages/MainPage/MainPage'
import CartPage from './pages/CartPage/CartPage'
import { Wrapper } from './containers/Wrapper/Wrapper'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import {ProfilePage} from './pages/Profile/ProfilePage'
import AuthPage from './pages/AuthPage/AuthPage'


import './App.scss'

function App() {
  const cart = useSelector(state => state.cart.cart)
  const userId = useSelector(state => state.user.user)
    console.log(userId)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.removeItem('cart')
    setLocalstorage('cart', cart)
  }, [cart])

  useEffect(() => {
      dispatch(userCheckAuth())
      if (userId) {}
  }, [])

    console.log(window.location)

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
                    <Route exact path="/auth/:authMethod">
                        <AuthPage/>
                    </Route>
                  <Route exact path="/profile">
                    <ProfilePage/>
                  </Route>
                </Wrapper>
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
