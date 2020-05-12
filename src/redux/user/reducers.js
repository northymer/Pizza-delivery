import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_AMOUNT_IN_CART,
    USER_LOGIN,
    USER_REGISTER,
    USER_GET_ORDERS, USER_LOGIN_SUCCEEDED, USER_REGISTER_SUCCEEDED, USER_LOGOUT
} from './actions'
import {getLocalstorage, setLocalstorage} from '../helpers'

const localstorage = getLocalstorage('cart')

const initialState = {
    loading: false,
    error: null,
    user: null,
    orderList: []
}

const handlers = {
    [USER_LOGIN]: (state) => ({
        ...state,
        loading: true,
    }),
    [USER_LOGIN_SUCCEEDED]: (state, action) => ({
        ...state,
        user: action.userId,
        loading: false,
    }),
    [USER_REGISTER]: (state, { id }) => ({
        ...state,
        loading: true,
    }),
    [USER_REGISTER_SUCCEEDED]: (state, { userId, message }) => ({
        ...state,
        user: userId,
        loading: false,
    }),
    [USER_GET_ORDERS]: (state, { id, amount }) => ({
        ...state,
        cart: state.cart.map(item => item.id === id ? {...item, amount} : item)
    }),
    [USER_LOGOUT]: () => ({...initialState}),
    DEFAULT: state => state
}

export function userReducer (state = initialState, action = {}) {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}