import React from 'react'
import './MainPage.scss'
import { PizzaCard } from '../../components/PizzaCard/PizzaCard'
import { connect } from 'react-redux'
import { addToCart, changeAmountInCart, removeFromCart } from '../../redux/cart/actions'
import { getItemAmount } from '../../utils/helperItems'

import pizzaImg1 from '../../assets/images/item1.jpg'
import pizzaImg2 from '../../assets/images/item2.jpg'
import pizzaImg3 from '../../assets/images/item3.jpg'
import pizzaImg4 from '../../assets/images/item4.jpg'
import pizzaImg5 from '../../assets/images/item5.jpg'
import pizzaImg6 from '../../assets/images/item6.jpg'
import pizzaImg7 from '../../assets/images/item7.jpg'
import pizzaImg8 from '../../assets/images/item8.jpg'

const PIZZAS = [
  { id: '1', name: 'Hot Honey', image: pizzaImg1, price: 15.45, type: 'pizza', composition: 'Calabrese and pepperoni sausage, Roquito peppers, tomato, mozzarella, basil, honey and Gran Milano cheese served on a Romana base' },
  { id: '2', name: 'Pulled Lamb', image: pizzaImg2, price: 15.45, type: 'pizza', composition: 'Slow cooked spiced lamb, hint of chilli, peperonata sauce, red onion, mozzarella, fresh mint and pomegranate served on a Romana base' },
  { id: '3', name: 'Barbacoa', image: pizzaImg3, price: 15.45, type: 'pizza', composition: 'Pulled Barbacoa beef, spiced chipotle salsa, tomato, mozzarella and garlic oil topped with fresh red onion, tomato and coriander on a Romana base' },
  { id: '4', name: 'American Hot', image: pizzaImg4, price: 14.50, type: 'pizza', composition: 'Pepperoni, mozzarella and tomato, with your choice of hot green, Roquito or jalapeño peppers on a Romana base' },
  { id: '5', name: 'Diavolo', image: pizzaImg5, price: 15.30, type: 'pizza', composition: 'Hot spiced beef, pepperoni, mozzarella, tomato, green pepper, red onion and Tabasco, with your choice of hot green, Roquito or jalapeño peppers on a Romana base' },
  { id: '6', name: 'Padana', image: pizzaImg6, price: 14.95, type: 'pizza', composition: 'Goat’s cheese, mozzarella, caramelised onion, spinach, red onion, tomato and garlic oil on a Romana base (pictured). Vegan option available' },
  { id: '7', name: 'Pollo ad Astra', image: pizzaImg7, price: 14.95, type: 'pizza', composition: 'Chicken, sweet red peppers, red onion, mozzarella, tomato, Cajun spices and garlic oil on a Romana base' },
  { id: '8', name: 'Pollo Forza', image: pizzaImg8, price: 14.95, type: 'pizza', composition: 'Hot chilli chicken, Roquito peppers, roasted peppers, garlic oil, tomato, mozzarella, parsley, chilli oil and Gran Milano cheese on a Romana base' }
]

const MainPage = (props) => {
  const {
    cart,
    addItemToCart,
    removeItemFromCart,
    changeAmountOfItem,
  } = props

  const handleChangeAmountOfItems = (id, nextAmount) => {
    if (nextAmount <= 0) {
      removeItemFromCart(id)
    } else {
      changeAmountOfItem(id, nextAmount)
    }
  }

  return (
    <div className='Main-page'>
      <div className="container">
        <div className="row">
          {PIZZAS.map(pizza => (
            <PizzaCard
              item={pizza}
              key={pizza.name}
              amount={getItemAmount(pizza.id, cart)}
              addItemToCart={addItemToCart}
              removeitemFromCart={removeItemFromCart}
              changeAmountOfItem={handleChangeAmountOfItems}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: (item) => dispatch(addToCart(item)),
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),
  changeAmountOfItem: (id, amount) => dispatch(changeAmountInCart(id, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)