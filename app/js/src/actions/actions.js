/**
 * actions
 * Contains action constants, and the actions wrapped in action
 * creator functions.
 */

import dispatcher from '../dispatcher/dispatcher.js';



export var actionTypes = {
  TODO_CREATE: 'todo_create',
  TODO_DONE: 'todo_done',
  TODO_REMOVE: 'todo_remove',
  TODO_REMOVE_ALL_COMPLETED: 'todo_remove_all_completed',
}



var actions = {

  /**
   * Creates a new todo item
   * @param  {string} text
   */
  createTodo: function(text) {
    dispatcher.dispatch({
      type: actionTypes.TODO_CREATE,
      text: text
    });
  },

  /**
   * Swaps todo/done status from a todo item
   * @param  {string} id
   */
  done: function(id) {
    dispatcher.dispatch({
      type: actionTypes.TODO_DONE,
      id: id
    });
  },

  /**
   * Removes a todo item from the list
   * @param  {string} id
   */
  remove: function(id) {
    dispatcher.dispatch({
      type: actionTypes.TODO_REMOVE,
      id: id
    });
  },

  /**
   * Removes all completed todos
   */
  removeAllCompleted: function() {
    dispatcher.dispatch({
      type: actionTypes.TODO_REMOVE_ALL_COMPLETED
    });
  },

};

export { actions as default }
