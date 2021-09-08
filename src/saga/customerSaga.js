import {put, call, takeEvery} from 'redux-saga/effects'
import {
  fetchCustomersActionCreator,
  SAGA_FETCH,
} from '../store/reducers/customerReducer'

const fetchCustomers = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchCustomersWorker() {
  const response = yield call(fetchCustomers)
  const customers = yield response.json()
  yield put(fetchCustomersActionCreator(customers))
}

export function* customerWatcher() {
  yield takeEvery(SAGA_FETCH, fetchCustomersWorker)
}
