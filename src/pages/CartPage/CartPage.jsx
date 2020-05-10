import React from 'react'
import { connect } from 'react-redux'
import {addToCart, changeAmountInCart, removeFromCart} from "../../redux/cart/actions";
import {CartItem} from "../../components/CartItem/CartItem";
import './CartPage.scss'
import {Button} from "../../components/Button/Button";

const CartPage = (props) => {
    const {
        cart,
        addItemToCart,
        removeItemFromCart,
        changeAmountOfItem
    } = props

    const handleChangeAmountOfItems = (id, nextAmount) => {
        if (nextAmount <= 0) {
            removeItemFromCart(id)
        } else {
            changeAmountOfItem(id, nextAmount)
        }
    }

    if (!cart.length) {
        return <div style={{display: 'flex', flex: '1'}}>Cart is empty</div>
    }

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)

    return (
        <div>
            {
                cart.map(item => (
                    <CartItem
                        item={item}
                        changeAmountOfItem={handleChangeAmountOfItems}
                    />
                ))
            }
            {!!cart.length &&
                <div className='cart__total'>
                    <div>
                        <p className='cart__total_value'>Total: {totalPrice} Eu</p>
                        <Button link="/checkout">Proceed to checkout</Button>
                    </div>
                </div>
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)