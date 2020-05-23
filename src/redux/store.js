import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { cartReducer } from './cart/reducers'
import { userReducer } from './user/reducers'
import saga from './user/sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(combineReducers({ cart: cartReducer, user: userReducer }), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

