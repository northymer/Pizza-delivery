import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as CartIcon } from '../../assets/icons/commerce-and-shopping.svg'
import { connect } from 'react-redux'

const Header = ({cart}) => {
    const amountOfItemsInCart = cart.length
    return (
        <div className='header'>
            <div className='header__content container'>
                <Link to="/" className='header__logo-link'>
                    Pizza <span>express</span>
                </Link>
                <Link to="/cart" className='cart-icon'>
                    <CartIcon />
                    {!!amountOfItemsInCart &&
                        <div className='cart-indicator'>{amountOfItemsInCart}</div>
                    }
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
})

export default connect(mapStateToProps, () => ({}))(Header)