import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { PizzaAmount } from '../PizzaAmount/PizzaAmount'
import { getTitleItem } from '../../utils/helperItems'

import './PizzaCard.scss'

export const PizzaCard = ({ item, amount, addItemToCart, changeAmountOfItem }) => {
  const {
    id,
    image,
    name,
    price,
    type,
    composition
  } = item
  const handleAddToCart = () => {
    addItemToCart(item)
  }
  const handleChangeAmountOfItems = (nextAmount) => {
    changeAmountOfItem(id, nextAmount)
  }

  return (
    <div className='Pizza-card col-xxl-3 col-lg-4 col-sm-6 col-12 col-margin-bottom'>
      <div className='Pizza-card__wrap'>
        <div className="Pizza-card__top">
          <div className='Pizza-card__image'>
            <img src={image} alt='#' className='img-fluid'/>
          </div>
          <h3 className='Pizza-card__title Pizza-card__padding'>
            <span className='Pizza-card__title-wrap'>{getTitleItem(type) + ' ' + name}</span>
          </h3>
          <p className='Pizza-card__composition Pizza-card__padding'>{composition}</p>
        </div>
        <div className='Pizza-card__bottom Pizza-card__padding'>
          <p className='Pizza-card__price'>{price} EU</p>
          {amount
            ? <PizzaAmount amount={amount} onChange={handleChangeAmountOfItems} />
            : <Button onClick={handleAddToCart}>Add to cart</Button>}
        </div>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  amount: PropTypes.number,
  addItemToCart: PropTypes.func,
  changeAmountOfItem: PropTypes.func,
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    composition: PropTypes.string,
    type: PropTypes.string,
  }).isRequired
}