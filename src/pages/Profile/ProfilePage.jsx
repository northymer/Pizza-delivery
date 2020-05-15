import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {Loading} from '../../components/Loading/Loading'
import {SectionSubTitle} from '../../components/SectionSubTitle/SectionSubTitle'
import {userGetOrders} from '../../redux/user/actions'
import {getTitleItem} from '../../utils/helperItems'

import './ProfilePage.scss'


export const ProfilePage = () => {
  const user = useSelector(state => state.user.user)
  const orderList = useSelector(state => state.user.orderList)

  console.log(orderList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userGetOrders())
  }, [])

  const slide = (e) => {
    console.log('e', e.target.nextSibling.scrollHeight)
    const content = e.target.nextSibling
    const hideClass = 'history__item-content__hide'
    if (content.classList.contains(hideClass)) {

      content.style.height = content.scrollHeight + 'px'
      content.classList.remove(hideClass)
    } else {
      content.style.height = '0px'
      content.classList.add(hideClass)
    }
  }

  if (!user) {
    return ( <Loading/> )
  }
  return (
    <div className='profile'>
      <ContainerBg>
        <SectionTitle title='Profile' />
        <div className="section-bottom">
          <p>You: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <SectionSubTitle title='Order history'/>
        <div className="history">
          {orderList && orderList.map((item, index) => {
            return (
              <div className='history__item' key={index}>
                <div className="history__item-title" onClick={(e) => slide(e)}>{item.form.name} {item.form.date}</div>
                <div className="history__item-content history__item-content__hide">
                  <div className="history__item-wrap">
                    <p>{item.form.phone}</p>
                    {item.form.cart.map((cartItem, cartIndex) => {
                      return (
                        <div className='history__cart row no-gutters' key={cartIndex}>
                          <div className="col-auto">
                            <div className="history__cart-img"><img src={cartItem.image} className='img-fluid' alt=""/></div>
                          </div>
                          <div className="col-auto">
                            <div className="history__cart-text">{getTitleItem(cartItem.type)} {cartItem.name}, {cartItem.amount} pieces</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </ContainerBg>
    </div>
  )
}