import React from 'react'
import './MainPage.scss'
import {PizzaCard} from "../../components/PizzaCard/PizzaCard";
import pizzaImg from '../../assets/images/pepperoni-4991789_640.jpg'
import { connect } from 'react-redux'
import {addToCart, changeAmountInCart, removeFromCart} from "../../redux/cart/actions";
import {getItemAmount} from "../../utils/helperItems";

const PIZZAS = [
    { id: 'Margherita', name: 'Margherita', image: pizzaImg, price: 10 },
    { id: 'Burger', name: 'Burger', image: pizzaImg, price: 11 },
    { id: 'Mexican', name: 'Mexican', image: pizzaImg, price: 12 },
    { id: 'Vegan', name: 'Vegan', image: pizzaImg, price: 13 },
    { id: 'Pineapple', name: 'Pineapple', image: pizzaImg, price: 14 },
    { id: 'Cheezy', name: 'Cheezy', image: pizzaImg, price: 15 },
    { id: 'Asian', name: 'Asian', image: pizzaImg, price: 16 },
    { id: 'Pepperoni', name: 'Pepperoni', image: pizzaImg, price: 17 },
    { id: 'MeatHero', name: 'Meat Hero', image: pizzaImg, price: 18 },
]

const MainPage = (props) => {
    const {
        cart,
        addItemToCart,
        removeItemFromCart,
        changeAmountOfItem,
    } = props
    console.log(cart)

    const handleChangeAmountOfItems = (id, nextAmount) => {
        if (nextAmount <= 0) {
            removeItemFromCart(id)
        } else {
            changeAmountOfItem(id, nextAmount)
        }
    }

    return (
        <div className='Main-page'>
            {PIZZAS.map(pizza => (
                <PizzaCard
                    item={pizza}
                    key={pizza.name}
                    amount={getItemAmount(pizza.id, cart)}
                    addItemToCart={addItemToCart}
                    removeitemFromCart={removeItemFromCart}
                    changeAmountOfItem={handleChangeAmountOfItems}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addToCart(item)),
    removeItemFromCart: (id) => dispatch(removeFromCart(id)),
    changeAmountOfItem: (id, amount) => dispatch(changeAmountInCart(id, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)