import { createStore } from 'redux'
import { cartReducer } from './cart/redusers'

export const store = createStore(cartReducer)