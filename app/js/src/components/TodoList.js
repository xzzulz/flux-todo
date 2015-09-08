import React from 'react';
import actions from '../actions/actions.js'
import todoStore from '../stores/TodoStore.js'
import TodoItem from '../components/TodoItem.js'



var TodoList = React.createClass({

  getInitialState: function() {
    return { todoList: todoStore.getTodos() }
  },

  _onStoreUpdate: function() {
    this.setState({ todoList: todoStore.getTodos() })
  },

  componentDidMount: function() {
    todoStore.addListener(this._onStoreUpdate);
  },

  _todosAsJsxItemsArray: function() {
    var todoList = this.state.todoList
    return Object.keys(this.state.todoList)
      .sort((a, b) => a < b)
      .map(function(key) {
        return (
          <TodoItem item={todoList[key]} key={'item' + key}/>
        )
    })
  },

  render: function() { return <div>{this._todosAsJsxItemsArray()}</div> }
})

export { TodoList as default }
