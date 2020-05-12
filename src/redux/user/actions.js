import { actionGenerator } from "../helpers"

export const USER_LOGIN = 'USER_LOGIN'
export const USER_REGISTER = 'USER_REGISTER'
export const USER_GET_ORDERS = 'USER_GET_ORDERS'
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED'
export const USER_REGISTER_SUCCEEDED = 'USER_REGISTER_SUCCEEDED'


const userLogin = ({ email, password }) => actionGenerator(USER_LOGIN, { email, password })

const userRegister = ({ name, email, password }) => actionGenerator(USER_REGISTER, { name, email, password })

const userGetOrders = (id, amount) => actionGenerator(USER_GET_ORDERS, { id, amount })

export {
    userLogin,
    userRegister,
    userGetOrders,
}