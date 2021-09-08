const defaultState = {
  customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const SAGA_FETCH = 'SAGA_FETCH'

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      }
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export const addCustomerActionCreator = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
})

export const removeCustomerActionCreator = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
})

export const fetchCustomersActionCreator = (payload) => ({
  type: FETCH_CUSTOMERS,
  payload,
})

export const fetchCustomers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((customers) => dispatch(fetchCustomersActionCreator(customers)))
}

export const fetchUsers = () => ({type: SAGA_FETCH})
