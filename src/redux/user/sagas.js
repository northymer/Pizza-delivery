import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import {
    USER_CHECK_AUTH,
    USER_GET_ORDERS,
    USER_LOGIN,
    USER_LOGIN_SUCCEEDED,
    USER_LOGOUT,
    USER_PLACE_ORDER,
    USER_REGISTER,
    USER_REGISTER_SUCCEEDED,
    userGetOrdersSucceeded,
    userLogin,
    userLoginSucceeded,
    userLogout,
    userLogoutSucceeded, userPutOrderError,
    userPutOrderSucceeded,
    userRegisterSucceeded
} from "./actions";
import {actionGenerator} from "../helpers";
import {apiGetUserOrders, apiLoginUser, apiPutUserOrder, apiRegisterUser} from "./api";
import {clearCart} from "../cart/actions";

export const USER_STORAGE_KEY = 'userData'

function* registerUser(action) {
    try {
        console.log(action)
        // debugger
        const { message, userId } = yield call(apiRegisterUser, action.payload)
        yield put(userRegisterSucceeded({ message, userId }))
    } catch (e) {
        console.log(e)
    }
}

function* loginUser(action) {
    try {
        const user = yield call(apiLoginUser, action.payload)
        yield localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
        yield put(userLoginSucceeded(user))
        yield window.location.pathname = '/'
    } catch (e) {
        console.log(e)
    }
}

function* checkAuthUser(action) {
    const userData = yield localStorage.getItem(USER_STORAGE_KEY)
    if (userData) {
        yield put(userLoginSucceeded(JSON.parse(userData)))
    }
}

function* logoutUser() {
    yield localStorage.removeItem(USER_STORAGE_KEY)
    yield put(userLogoutSucceeded())
}

function* getUserOrders(action) {
    try {
        debugger
        const orders = yield call(apiGetUserOrders, action.payload)
        yield put(userGetOrdersSucceeded(orders))
    } catch (e) {
        console.log(e)
    }
}

function* placeUserOrder(action) {
    try {
        console.log(action)
        debugger
        const response = yield call(apiPutUserOrder, action.payload)
        console.log('response', response)
        if (!response.errors) {
            yield put(userPutOrderSucceeded())
        } else {
            yield put(userPutOrderError(response.errors))
        }
        // yield put(clearCart())
    } catch (e) {
        console.log(e)
    }
}

function* watchUserLogin() {
    yield takeLatest(USER_LOGIN, loginUser)
}

function* watchUserRegister() {
    yield takeLatest(USER_REGISTER, registerUser)
}

function* watchCheckAuth() {
    yield takeLatest(USER_CHECK_AUTH, checkAuthUser)
}

function* watchLogout() {
    yield takeLatest(USER_LOGOUT, logoutUser)
}

function* watchGetOrders() {
    yield takeLatest(USER_GET_ORDERS, getUserOrders)
}

function* watchPlaceOrder() {
    yield takeLatest(USER_PLACE_ORDER, placeUserOrder)
}

export default function* saga() {
    yield all([
        fork(watchUserRegister),
        fork(watchUserLogin),
        fork(watchCheckAuth),
        fork(watchLogout),
        fork(watchGetOrders),
        fork(watchPlaceOrder),
    ])
}
