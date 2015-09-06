/**
 * actions
 */

import dispatcher from '../dispatcher/dispatcher.js';


export var actionTypes = {
  TODO_CREATE: 'todo_create',
  TODO_DONE: 'todo_done'
}

//export { actionTypes as actionTypes }

var actions = {

  /**
   * @param  {string} text
   */
  createTodo: function(text) {
    dispatcher.dispatch({
      actionType: actionTypes.TODO_CREATE,
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  done: function(id) {
    dispatcher.dispatch({
      actionType: actionTypes.TODO_DONE,
      id: id
    });
  },

};

export { actions as default }
