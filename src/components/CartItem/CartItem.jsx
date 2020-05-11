import React from 'react'
import {PizzaAmount} from '../PizzaAmount/PizzaAmount'
import {getTitleItem} from '../../utils/helperItems'
import {rounded} from '../../utils/helperItems'

import './CartItem.scss'

export const CartItem = (props) => {
    const {
        item,
        changeAmountOfItem,
    } = props
    const {
        name,
        image,
        amount,
        price,
        id,
        composition,
        type
    } = item
    const summPrice = rounded(price * amount)
    return (
        <div className='cartItem'>
          <div className='cartItem-col cartItem__img'>
            <img src={image} alt={name} className='img-fluid'/>
          </div>
          <div className='cartItem-col cartItem__name'>
            <p className='cartItem__name-title'>{getTitleItem(type) + ' ' + name}</p>
            <p className='cartItem__name-composition'>{composition}</p>
          </div>
          <div className='cartItem-col cartItem__price'><span>{price} Eu</span></div>
          <div className='cartItem-col cartItem__amount'>
              <PizzaAmount amount={amount} onChange={(nextAmount) => changeAmountOfItem(id, nextAmount)} />
          </div>
          <div className='cartItem-col cartItem__price-total'><span>{summPrice}</span></div>
        </div>
    )
}