import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeAmountInCart, removeFromCart } from '../../redux/cart/actions'
import { CartItem } from '../../components/CartItem/CartItem'
import { Button } from '../../components/Button/Button'
import { ContainerBg } from '../../containers/ContainerBg/ContainerBg'
import { rounded } from '../../utils/helperItems'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

import './CartPage.scss'


const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  const handleChangeAmountOfItems = (id, nextAmount) => {
    if (nextAmount <= 0) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(changeAmountInCart(id, nextAmount))
    }
  }

  if (!cart.length) {
    return <div className='container'>
      <ContainerBg>
        Cart is empty
      </ContainerBg>
    </div>
  }

  const totalPrice = rounded(cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0))

  return (
    <div className='cart'>
      <ContainerBg>
        <SectionTitle title='Cart' />
        <>
          {
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                changeAmountOfItem={handleChangeAmountOfItems}
              />
            ))
          }
          {!!cart.length &&
          <div className='cart-total'>
            <div className='cart-total__wrap'>
              <p className='cart-total__value'>
                <span>Total: <b>{totalPrice} Eu</b></span></p>
              <Button link="/checkout">Proceed to checkout</Button>
            </div>
          </div>
          }
        </>
      </ContainerBg>
    </div>
  )
}

export default CartPage