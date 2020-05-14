import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_AMOUNT_IN_CART,
    USER_LOGIN,
    USER_REGISTER,
    USER_GET_ORDERS,
    USER_LOGIN_SUCCEEDED,
    USER_REGISTER_SUCCEEDED,
    USER_LOGOUT_SUCCEEDED,
    USER_GET_ORDERS_SUCCEEDED,
    USER_PLACE_ORDER_SUCCEEDED, USER_LOGOUT_ERROR,
    USER_PLACE_ORDER_ERROR, USER_CLEAR_ERROR,
} from './actions'
import {getLocalstorage, setLocalstorage} from '../helpers'

const localstorage = getLocalstorage('cart')

const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    orderList: []
}

const handlers = {
    [USER_LOGIN]: (state) => ({
        ...state,
        loading: true,
    }),
    [USER_LOGIN_SUCCEEDED]: (state, { userId, token, name, email }) => ({
        ...state,
        user: {
            userId,
            name,
            email,
        },
        token,
        loading: false,
    }),
    [USER_REGISTER]: (state, { id }) => ({
        ...state,
        loading: true,
    }),
    [USER_REGISTER_SUCCEEDED]: (state, { message }) => ({
        ...state,
        loading: false,
    }),
    [USER_GET_ORDERS_SUCCEEDED]: (state, { orders }) => ({
        ...state,
        orderList: orders,
    }),
    [USER_PLACE_ORDER_SUCCEEDED]: (state) => ({
        ...state
    }),
    [USER_PLACE_ORDER_ERROR]: (state, data) => ({
        ...state,
        error: data
    }),
    [USER_CLEAR_ERROR]: (state) => ({
        ...state,
        error: null
    }),
    [USER_LOGOUT_SUCCEEDED]: () => {
        return {...initialState}
        },
    DEFAULT: state => state
}

export function userReducer (state = initialState, action = {}) {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}