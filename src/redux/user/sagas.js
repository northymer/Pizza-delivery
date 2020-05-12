import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import {USER_LOGIN, USER_LOGIN_SUCCEEDED, USER_REGISTER, USER_REGISTER_SUCCEEDED} from "./actions";
import {actionGenerator} from "../helpers";
import {apiLoginUser, apiRegisterUser} from "./api";

function* registerUser(action) {
    try {
        console.log(action)
        debugger
        const { message } = yield call(apiRegisterUser, action.payload)
        yield put(actionGenerator(USER_REGISTER_SUCCEEDED), { message })
    } catch (e) {
        console.log(e)
    }
}

function* loginUser(action) {
    try {
        const user = yield call(apiLoginUser, action.payload)
        yield put(actionGenerator(USER_LOGIN_SUCCEEDED, { userId: user.userId }))
    } catch (e) {
        console.log(e)
    }
}

function* watchUserLogin() {
    yield takeLatest(USER_LOGIN, loginUser)
}

export default function* watchUserRegister() {
    yield takeLatest(USER_REGISTER, registerUser)
}

// export default function* saga() {
//     yield watchUserRegister()
// }
