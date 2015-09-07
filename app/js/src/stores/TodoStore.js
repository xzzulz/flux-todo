import {Store} from 'flux/utils'
import actions, { actionTypes } from '../actions/actions.js'
import dispatcher from '../dispatcher/dispatcher.js'

//
// TodoStore
//


// generic object where the todo data is stored
var todos = {
  1441663644782: { id: 1441663644782, text: 'Write a blog post about flux', done: false },
  1441663644781: { id: 1441663644781, text: 'Buy orange juice', done: true },
  1441663644780: { id: 1441663644780, text: 'Prepare weekend trip', done: false },
  1441663644779: { id: 1441663644779, text: 'Read a book ', done: false },
}


/**
 * Create new todo item
 * @param  {Object} action
 */
var createTodo = (action) => {
  var id = Number(new Date())
  todos[id] = {
    id: id,
    text: action.text,
    done: false
  }
}


/**
 * Swaps todo/done status of a todo item
 * @param  {Object} action
 */
var doneTodo = (action) => {
  todos[action.id].done = ! todos[action.id].done
}


/**
 * Remove a todo item
 * @param  {Object} action
 */
var removeTodo = (action) => {
  delete(todos[action.id])
}


/**
 * Removes all completed todo items
 */
var removeAllCompleted = () => {
  for (var id in todos) {
    todos[id].done ? delete(todos[id]) : 0
  }
}


/**
 * Todo items flux store
 */
class TodoStore extends Store {

  // returns all todos data
  getTodos() {
    return todos
  }

  // returns a count of done todos and pending todos
  getTotals() {
    var totals = { done: 0, todo: 0 }
    for (var id in todos) todos[id].done ? totals.done++ : totals.todo++
    return totals
  }

  // react to dispatched action from the dispatcher
  __onDispatch(action) {
    switch(action.actionType) {

      case actionTypes.TODO_CREATE:
        createTodo(action)
        this.__emitChange()
        break

      case actionTypes.TODO_DONE:
        doneTodo(action)
        this.__emitChange()
        break

      case actionTypes.TODO_REMOVE:
        removeTodo(action)
        this.__emitChange()
        break

      case actionTypes.TODO_REMOVE_ALL:
        removeAllCompleted()
        this.__emitChange()
        break

      default:
        // no op
    }
  }
}


export default new TodoStore(dispatcher)
