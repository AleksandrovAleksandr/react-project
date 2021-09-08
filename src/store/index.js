import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from './reducers'
import {rootWatcher} from '../saga'

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleWare))
)

sagaMiddleWare.run(rootWatcher)
