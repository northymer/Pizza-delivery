import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as CartIcon } from '../../assets/icons/commerce-and-shopping.svg'
import logo from '../../assets/images/logo.png'
import { connect } from 'react-redux'

const Header = ({cart}) => {
    const amountOfItemsInCart = cart.length
    return (
        <div className='header'>
            <div className='header__content'>
                <Link to="/" className='header__logo_link'>
                    <div className='header__logo_img'>
                        <img src={logo} />
                    </div>
                </Link>
                <Link to="/cart" className='cart-icon'>
                    <CartIcon style={{height: '38px', width: '38px'}}/>
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