const defaultState = {
  cash: 0,
}

const GET_CASH = 'GET_CASH'
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH'
const ADD_CASH = 'ADD_CASH'
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH'

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CASH:
      return {...state, cash: state.cash - 1}
    case ADD_CASH:
      return {...state, cash: state.cash + 1}
    default:
      return state
  }
}

export const getCashActionCreator = () => ({type: GET_CASH})
export const addCashActionCreator = () => ({type: ADD_CASH})

export const asyncAdd = () => (dispatch) =>
  setTimeout(() => dispatch(addCashActionCreator()), 1000)

export const sagaAddCashActionCreator = () => ({type: ASYNC_ADD_CASH})
export const sagaGetCashActionCreator = () => ({type: ASYNC_GET_CASH})
