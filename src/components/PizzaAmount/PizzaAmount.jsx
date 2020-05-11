import React from 'react'
import './PizzaAmount.scss'
import { Button } from '../Button/Button'

export const PizzaAmount = ({amount, onChange}) => {
    return (
        <div className='pizza-amount'>
            <Button className='pizza-amount__button' onClick={() => onChange(amount - 1)}>-</Button>
            <span className='pizza-amount__number'>{amount}</span>
            <Button className='pizza-amount__button' onClick={() => onChange(amount + 1)}>+</Button>
        </div>
    )
}