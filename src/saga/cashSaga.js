import {put, takeEvery} from 'redux-saga/effects'
import {
  addCashActionCreator,
  ASYNC_ADD_CASH,
  ASYNC_GET_CASH,
  getCashActionCreator,
} from '../store/reducers/cashReducer'

const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

function* addCashWorker() {
  yield sleep(1000)
  yield put(addCashActionCreator())
}

function* getCashWorker() {
  yield sleep(1000)
  yield put(getCashActionCreator())
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, addCashWorker)
  yield takeEvery(ASYNC_GET_CASH, getCashWorker)
}
