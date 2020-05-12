import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import {
    USER_CHECK_AUTH,
    USER_LOGIN,
    USER_LOGIN_SUCCEEDED, USER_LOGOUT,
    USER_REGISTER,
    USER_REGISTER_SUCCEEDED, userLogin, userLoginSucceeded, userLogout,
    userRegisterSucceeded
} from "./actions";
import {actionGenerator} from "../helpers";
import {apiLoginUser, apiRegisterUser} from "./api";

const USER_STORAGE_KEY = 'userData'

function* registerUser(action) {
    try {
        console.log(action)
        debugger
        const { message, userId } = yield call(apiRegisterUser, action.payload)
        yield put(userRegisterSucceeded({ message, userId }))
    } catch (e) {
        console.log(e)
    }
}

function* loginUser(action) {
    try {
        console.log(action)
        debugger
        const user = yield call(apiLoginUser, action.payload)
        yield localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
        yield put(userLoginSucceeded(user))
    } catch (e) {
        console.log(e)
    }
}

function* checkAuthUser(action) {
    const userData = yield localStorage.getItem(USER_STORAGE_KEY)
    debugger
    if (userData) {
        yield put(userLoginSucceeded(JSON.parse(userData)))
    }
}

function* logoutUser() {
    yield localStorage.removeItem(USER_STORAGE_KEY)
    yield put(userLogout())
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

export default function* saga() {
    yield all([
        fork(watchUserRegister),
        fork(watchUserLogin),
        fork(watchCheckAuth),
        fork(watchLogout)
    ])
}
