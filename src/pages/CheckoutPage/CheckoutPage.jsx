import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {getTitleItem} from '../../utils/helperItems'
import {InputText} from '../../components/Form/InputText'
import {Button} from '../../components/Button/Button'
import {Radio} from '../../components/Form/Radio'
import {Select} from '../../components/Form/Select'
import {userClearError, userPutOrder} from '../../redux/user/actions'
import {SectionTitle} from '../../components/SectionTitle/SectionTitle'
import {SectionSubTitle} from '../../components/SectionSubTitle/SectionSubTitle'
import {Loading} from '../../components/Loading/Loading'

import './CheckoutPage.scss'



const CheckoutPage = () => {
  const cart = useSelector(state => state.cart.cart)
  const user = useSelector(state => state.user.user)
  const error = useSelector(state => state.user.error)

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [delivery, setDelivery] = useState('delivery')
  const [payment, setPayment] = useState('cash')

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    comment: '',
    cart: []
  }

  const [form, setForm] = useState(initialForm)
  // console.log(user, 'user')
  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = () => {
    dispatch(userClearError())
    dispatch(userPutOrder({form: {...form, date: moment().format('DD.MM.YYYY')}}))
    console.log('form', form)
  }

  const getError = (name) => {
    if (error && error.length !== 0) {
      let err = error.find((item) => item.param === `form.${name}`)
      return err ? err.msg : ''
    }
    return ''
  }

  useEffect(() => {
    if (user && cart) {
      setForm({
        ...form,
        name: user ? user.name : '',
        email: user ? user.email : '',
        cart: cart
      })
      setLoading(false)
    }
  }, [user, cart])

  console.log('error', error)

  if (loading) {
    return <Loading/>
  }
  return (
      <div className='checkout'>
          <ContainerBg>
            <SectionTitle title='Your order' />
            <div className='checkout-order row'>
              {cart.map((item, index) => {
                return (
                  <div className="checkout-order__item col-12  col-lg-6 col-xl-4" key={index}>
                    <img className="checkout-order__item-img checkout-order__item-col" src={item.image} alt=""/>
                    <h3 className="checkout-order__item-title checkout-order__item-col">{getTitleItem(item.type) + ' ' + item.name}</h3>
                    <p className="checkout-order__item-amount checkout-order__item-col">{item.amount} шт.</p>
                  </div>
                )
              })}
            </div>
            <form>
              <SectionSubTitle title='Contacts'/>
              <div className="form-row form-group">
                <div className="col-6">
                  <InputText onChange={handleChange} value={form.name} title='Name' required name='name' error={getError('name')}/>
                </div>
                <div className="col-6">
                  <InputText onChange={handleChange} value={form.email} title='Email' required name='email' type='email' error={getError('email')}/>
                </div>
              </div>
              <div className="form-row form-group">
                <div className="col-6">
                  <InputText onChange={handleChange} value={form.phone} title='Phone' required name='phone' error={getError('phone')}/>
                </div>
              </div>
              <SectionSubTitle title='Delivery'/>
              <div className="form-row form-group">
                <div className="col-auto">
                  <Radio name='delivery' title='Delivery' checked={delivery === 'delivery' ? true : false}  onClick={() => setDelivery('delivery')} />
                </div>
                <div className="col-auto">
                  <Radio name='pickup' title='Pickup' checked={delivery === 'pickup' ? true : false}  onClick={() => setDelivery('pickup')} />
                </div>
              </div>
              {delivery === 'delivery' &&
                <>
                  <div className="form-row form-group">
                    <div className="col-6">
                      <InputText onChange={handleChange} value={form.address} title='Address' required name='address'/>
                    </div>
                    <div className="col-6">
                      <InputText onChange={handleChange} value={form.apartment} title='Apartment' required name='apartment'/>
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col-6">
                      <Select title='Payment' name='payment'
                        onClick={(event => setPayment(event.target.value))}
                        required
                        options={
                          [
                            {
                              value: 'cash',
                              title: 'Cash'
                            },
                            {
                              value: 'card',
                              title: 'Card'
                            },
                          ]
                        }
                      />
                    </div>
                  </div>
                </>
              }
              {delivery === 'pickup' &&
              <div className="form-row form-group">
                <div className="col-6">
                  <Select title='Choose address' name='address'
                    onClick={(event => setPayment(event.target.value))}
                    required
                    options={
                      [
                        {
                          value: 'adress1',
                          title: 'Tuna street, house 2'
                        },
                        {
                          value: 'adress2',
                          title: 'Salmon street, house 98'
                        },
                        {
                          value: 'adress3',
                          title: 'Parsley street, house 34'
                        },
                      ]
                    }
                  />
                </div>
              </div>
              }
              <div className="form-row form-group">
                <div className="col">
                  <label htmlFor="comment">Comment</label>
                  <textarea onChange={handleChange} value={form.comment} className="form-control" id="comment" name="comment" />
                </div>
              </div>
              <div className="checkout__bottom">
                <Button onClick={handleSubmit} disabled={loading}>Order</Button>
              </div>
            </form>
          </ContainerBg>
      </div>
  )
}

export default CheckoutPage