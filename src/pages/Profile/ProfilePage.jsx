import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {Loading} from '../../components/Loading/Loading'
import {SectionSubTitle} from '../../components/SectionSubTitle/SectionSubTitle'

import './ProfilePage.scss'
import {userGetOrders} from "../../redux/user/actions";

export const ProfilePage = () => {
  const user = useSelector(state => state.user.user)
  const orderList = useSelector(state => state.user.orderList)
  console.log(orderList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userGetOrders())
  }, [])
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
      </ContainerBg>
    </div>
  )
}