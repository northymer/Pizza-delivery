import React from 'react'
import './PizzaCard.scss'
import { Button } from "../Button/Button";
import { PizzaAmount } from "../PizzaAmount/PizzaAmount";


export const PizzaCard = ({ item, amount, addItemToCart, changeAmountOfItem }) => {
    const {
        id,
        image,
        name,
        price,
    } = item
    const handleAddToCart = () => {
        addItemToCart(item)
    }
    const handleChangeAmountOfItems = (nextAmount) => {
        changeAmountOfItem(id, nextAmount)
    }
    return (
        <div className='Pizza-card'>
            <div className='Pizza-card__image'>
                <img src={image} alt='#'/>
            </div>
            <div>
                {name}
            </div>
            <div className='Pizza-card__bottom'>
                <p>{price} EU</p>
                {amount
                    ? <PizzaAmount amount={amount} onChange={handleChangeAmountOfItems} />
                    : <Button onClick={handleAddToCart}>Add to cart</Button>}
            </div>
        </div>
    )
}