import { actionGenerator } from "../helpers"

export const USER_CHECK_AUTH = 'USER_CHECK_AUTH'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_REGISTER = 'USER_REGISTER'
export const USER_GET_ORDERS = 'USER_GET_ORDERS'
export const USER_GET_ORDERS_SUCCEEDED = 'USER_GET_ORDERS_SUCCEEDED'
export const USER_PLACE_ORDER = 'USER_PLACE_ORDER'
export const USER_PLACE_ORDER_SUCCEEDED = 'USER_PLACE_ORDER_SUCCEEDED'
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED'
export const USER_REGISTER_SUCCEEDED = 'USER_REGISTER_SUCCEEDED'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGOUT_SUCCEEDED = 'USER_LOGOUT_SUCCEEDED'

const userCheckAuth = () => actionGenerator(USER_CHECK_AUTH)

const userLogin = ({ email, password }) => actionGenerator(USER_LOGIN, { email, password })
const userLoginSucceeded = (data) => actionGenerator(USER_LOGIN_SUCCEEDED, data)

const userRegister = ({ name, email, password }) => actionGenerator(USER_REGISTER, { name, email, password })
const userRegisterSucceeded = (data) => actionGenerator(USER_REGISTER_SUCCEEDED, data)

const userGetOrders = () => actionGenerator(USER_GET_ORDERS)
const userGetOrdersSucceeded = (data) => actionGenerator(USER_GET_ORDERS_SUCCEEDED, data)

const userLogout = () => actionGenerator(USER_LOGOUT)
const userLogoutSucceeded = () => actionGenerator(USER_LOGOUT_SUCCEEDED)

const userPutOrder = (data) => actionGenerator(USER_PLACE_ORDER, data)
const userPutOrderSucceeded = () => actionGenerator(USER_PLACE_ORDER_SUCCEEDED)

export {
    userCheckAuth,
    userLogin,
    userLoginSucceeded,
    userRegister,
    userRegisterSucceeded,
    userGetOrders,
    userGetOrdersSucceeded,
    userLogout,
    userLogoutSucceeded,
    userPutOrder,
    userPutOrderSucceeded
}