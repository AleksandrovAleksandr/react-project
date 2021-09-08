import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  addCashActionCreator,
  asyncAdd,
  getCashActionCreator,
  sagaAddCashActionCreator,
  sagaGetCashActionCreator,
} from './store/reducers/cashReducer'
import {
  addCustomerActionCreator,
  fetchCustomers,
  fetchUsers,
  removeCustomerActionCreator,
} from './store/reducers/customerReducer'

const App = () => {
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)
  const dispatch = useDispatch()

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    }
    dispatch(addCustomerActionCreator(customer))
  }

  return (
    <div>
      <div style={{border: '1px solid teal', padding: '10px 20px'}}>
        <h2>{cash}</h2>
        <button onClick={() => dispatch(addCashActionCreator())}>
          ADD CASH
        </button>
        <button onClick={() => dispatch(getCashActionCreator())}>
          GET CASH
        </button>
        <button onClick={() => dispatch(asyncAdd())}>
          ASYNC_ADD_CASH_THUNK
        </button>
        <button
          onClick={() => {
            dispatch(sagaAddCashActionCreator())
          }}
        >
          SAGA ADD CASH
        </button>
        <button
          onClick={() => {
            dispatch(sagaGetCashActionCreator())
          }}
        >
          SAGA GET CASH
        </button>
      </div>
      <div
        style={{
          border: '1px solid orange',
          padding: '10px 20px',
          marginTop: 15,
        }}
      >
        <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          FETCH CUSTOMERS
        </button>
        <button onClick={() => dispatch(fetchUsers())}>
          FETCH CUSTOMERS WITH SAGA
        </button>
        {customers.map((customer) => (
          <p
            onClick={() => {
              dispatch(removeCustomerActionCreator(customer.id))
            }}
            key={customer.id}
            style={{
              padding: '10px 20px',
              marginTop: 10,
              border: '1px solid grey',
            }}
          >
            {customer.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App
