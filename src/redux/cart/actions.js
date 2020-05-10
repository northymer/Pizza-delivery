import { actionGenerator } from "../helpers"

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_AMOUNT_IN_CART = 'CHANGE_AMOUNT_IN_CART'

const addToCart = (item) => actionGenerator(ADD_TO_CART, { item })

const removeFromCart = (id) => actionGenerator(REMOVE_FROM_CART, { id })

const changeAmountInCart = (id, amount) => actionGenerator(CHANGE_AMOUNT_IN_CART, { id, amount })

export {
    addToCart,
    removeFromCart,
    changeAmountInCart,
}