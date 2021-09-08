import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from './toolkitRedux/toolkitSlice'
// import {decrement, increment} from './toolkitRedux/toolkitReducer'

const addAsyncTodo = () => (dispatch) => {
  setTimeout(() => {
    dispatch(addTodo('ASYNC TODO'))
  }, 2000)
}

const App = () => {
  const count = useSelector((state) => state.toolkit.count)
  const todos = useSelector((state) => state.toolkit.todos)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        -
      </button>
      <button onClick={() => dispatch(removeLastTodo())}>
        REMOVE LAST TODO
      </button>
      <button onClick={() => dispatch(addAsyncTodo())}>ASYNC TODO</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
