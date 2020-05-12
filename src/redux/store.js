import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { cartReducer } from './cart/redusers'
import {userReducer} from './user/reducers'
import { reducer as formReducer } from 'redux-form'
import saga from "./user/sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(combineReducers({cart: cartReducer, user: userReducer, form: formReducer}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

