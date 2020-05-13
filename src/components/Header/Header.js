import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as CartIcon } from '../../assets/icons/commerce-and-shopping.svg'
import { ReactComponent as AuthIcon } from '../../assets/icons/social.svg'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Button} from "../Button/Button";
import {userGetOrders, userLogout} from "../../redux/user/actions";

const Header = ({cart}) => {
    const amountOfItemsInCart = cart.length
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const handleGetOrders = () => dispatch(userGetOrders())
    const handleLogout = () => dispatch(userLogout())
    return (
        <div className='header'>
            <div className='header__content container'>
                <Link to="/" className='header__logo-link'>
                    Pizza <span>express</span>
                </Link>
                <div className='header__icons'>
                    <div className='header__auth'>
                        {!user
                            ? <p>
                                <Link to="/auth/login"><span>Sign In </span></Link>
                                /
                                <Link to="/auth/registration"><span> Sign Up</span></Link>
                            </p>
                            : <Button onClick={handleLogout}>Logout</Button>
                        }
                    </div>
                    {user &&
                    <div onClick={handleGetOrders} className='icon icon-cart'>
                        <AuthIcon />
                    </div>}
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