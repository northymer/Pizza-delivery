import React from 'react'
import {PizzaAmount} from "../PizzaAmount/PizzaAmount";
import './CartItem.scss'
import {Button} from "../Button/Button";

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
    } = item
    const summPrice = price * amount
    return (
        <div className='cartItem'>
            <div className='cartItem__content'>
                <div className='cartItem__img'>
                    <img src={image} />
                </div>
                <p className='cartItem__content_name'>{name}</p>
            </div>
            <div>
                <PizzaAmount amount={amount} onChange={(nextAmount) => changeAmountOfItem(id, nextAmount)} />
            </div>
            <div className='cartItem__content_price'>
                    <p>{summPrice} Eu</p>
            </div>
        </div>
    )
}