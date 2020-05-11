import React, {useState} from 'react'
import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {getTitleItem} from '../../utils/helperItems'
import {InputText} from '../../components/Form/InputText'
import './CheckoutPage.scss'
import {Button} from '../../components/Button/Button'
import {Radio} from '../../components/Form/Radio'
import {Select} from '../../components/Form/Select'


const CheckoutPage = (props) => {
  const {cart} = props
  const [delivery, setDelivery] = useState('delivery')
  const [inTime, setInTime] = useState('possible')
  const [payment, setPayment] = useState('cash')

    return (
        <div className='checkout'>
            <ContainerBg>
              <h1 className='title-section'>Your order:</h1>
              <div className='checkout-order row'>
                {cart.map(item => {
                  return (
                    <div className="checkout-order__item col-12  col-lg-6 col-xl-4">
                      <img className="checkout-order__item-img checkout-order__item-col" src={item.image} alt=""/>
                      <h3 className="checkout-order__item-title checkout-order__item-col">{getTitleItem(item.type) + ' ' + item.name}</h3>
                      <p className="checkout-order__item-amount checkout-order__item-col">{item.amount} шт.</p>
                    </div>
                  )
                })}
              </div>
              <form>
                <h2 className='title-section-min'>Contacts</h2>
                <div className="form-row form-group">
                  <div className="col-6">
                    <InputText title='Name' required name='name'/>
                  </div>
                  <div className="col-6">
                    <InputText title='Email' required name='email' type='email'/>
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-6">
                    <InputText title='Phone' required name='phone'/>
                  </div>
                </div>
                <h2 className='title-section-min'>Delivery</h2>
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
                        <InputText title='Address' required name='address'/>
                      </div>
                      <div className="col-6">
                        <InputText title='Apartment' required name='apartment'/>
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-6">
                        <InputText title='Floor' name='floor'/>
                      </div>
                      <div className="col-6">
                        <InputText title='Porch' name='porch'/>
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-6">
                        <Select title='Time delivery' name='timeDelivery'
                        onClick={(event => setInTime(event.target.value))}
                        required
                        options={
                            [
                              {
                                value: 'possible',
                                title: 'As soon as possible'
                              },
                              {
                                value: 'inTime',
                                title: 'In time'
                              },
                            ]
                          }
                        />
                      </div>
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
                    {inTime === 'inTime' &&
                    <div className="form-row form-group">
                      <div className="col-6">
                        <InputText title='Choose time' name='time' type='text'/>
                      </div>
                    </div>
                    }
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
                    <textarea className="form-control" id="comment" />
                  </div>
                </div>
                <div className="checkout__bottom">
                  <Button>Order</Button>
                </div>
              </form>
            </ContainerBg>
        </div>
    )
}

export default CheckoutPage