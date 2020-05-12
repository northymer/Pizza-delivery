import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as CartIcon } from '../../assets/icons/commerce-and-shopping.svg'
import { ReactComponent as AuthIcon } from '../../assets/icons/social.svg'
import { connect } from 'react-redux'

const Header = ({cart}) => {
    const amountOfItemsInCart = cart.length
    return (
        <div className='header'>
            <div className='header__content container'>
                <Link to="/" className='header__logo-link'>
                    Pizza <span>express</span>
                </Link>
                <div className='header__icons'>
                    <div className='header__auth'>
                        <p>
                            <Link to="/auth/login"><span>Sign In </span></Link>
                            /
                            <Link to="/auth/registration"><span> Sign Up</span></Link>
                        </p>
                    </div>
                    <Link to="/cart" className='icon icon-cart'>
                        <CartIcon />
                        {!!amountOfItemsInCart &&
                        <div className='cart-indicator'>{amountOfItemsInCart}</div>
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
})

export default connect(mapStateToProps, () => ({}))(Header)