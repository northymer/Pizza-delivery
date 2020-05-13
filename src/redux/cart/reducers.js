import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT_IN_CART, CLEAR_CART} from './actions'
import {getLocalstorage, setLocalstorage} from '../helpers'

const localstorage = getLocalstorage('cart') ? getLocalstorage('cart') : []

const initialState = {
    cart: localstorage || []
}

const handlers = {
    [ADD_TO_CART]: (state, { item }) => ({
        ...state,
        cart: [...state.cart, {
            ...item,
            amount: 1
        }],
    }),
    [REMOVE_FROM_CART]: (state, { id }) => ({
        ...state,
        cart: state.cart.filter(item => item.id !== id)
    }),
    [CHANGE_AMOUNT_IN_CART]: (state, { id, amount }) => ({
        ...state, 
        cart: state.cart.map(item => item.id === id ? {...item, amount} : item)
    }),
    [CLEAR_CART]: (state) => ({
        ...state,
        cart: []
    }),
    DEFAULT: state => state
}

export function cartReducer (state = initialState, action = {}) {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
} 