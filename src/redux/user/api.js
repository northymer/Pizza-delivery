import { ApiGenerator } from '../../api/ApiGenerator'

export const apiRegisterUser = data => ApiGenerator.post('auth/register', data)
export const apiLoginUser = data => ApiGenerator.post('auth/login', data)
export const apiGetUserOrders = data => ApiGenerator.get('orders/getOrders', data)
export const apiPutUserOrder = data => ApiGenerator.post('orders/placeOrder', data)