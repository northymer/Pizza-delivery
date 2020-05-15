import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as CartIcon } from '../../assets/icons/commerce-and-shopping.svg'
import {connect, useDispatch, useSelector} from 'react-redux'
import {userGetOrders, userLogout} from '../../redux/user/actions'

const Header = ({cart}) => {
  const amountOfItemsInCart = cart.length
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userLogout())
  }
  return (
    <div className='header'>
      <div className='header__content container'>
        <Link to="/" className='header__logo-link'>
                    Pizza <span>express</span>
        </Link>
        <div className='header__icons'>
          <div className='header__auth header__margin'>
            {!user
              ? <div className='header__sign'>
                <Link to="/auth/login" className='header__link'>Sign In</Link>
                <span className='header__sign-delimiter'>/</span>
                <Link to="/auth/registration" className='header__link'>Sign Up</Link>
              </div>
              : <button onClick={handleLogout} className='header__link'>Logout</button>
            }
          </div>
          {user &&
                    <Link to="/profile" className='header__link header__margin'>Profile</Link>}
          <Link to="/cart" className='icon cart-icon header__margin'>
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