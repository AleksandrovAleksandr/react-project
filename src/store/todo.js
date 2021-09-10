import {makeAutoObservable} from 'mobx'

class Todo {
  todos = [
    {id: 1, title: '1', completed: false},
    {id: 2, title: '2', completed: false},
    {id: 3, title: '3', completed: false},
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  completeTodo(todo) {
    todo.completed = !todo.completed
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json
      })
  }
}

export default new Todo()
