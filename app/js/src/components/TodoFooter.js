import React from 'react';
import actions from '../actions/actions.js'
import todoStore from '../stores/TodoStore.js'



var TodoFooter = React.createClass({

  getInitialState: function() {
    return todoStore.getTotals()
  },

  _onStoreUpdate: function() {
    this.setState(todoStore.getTotals())
  },

  componentDidMount: function() {
    todoStore.addListener(this._onStoreUpdate);
  },

  render: function() { return(
    <div className="footer">
      <span>{this.state.todo} todo, {this.state.done} completed </span>
      <button onClick={actions.removeAllCompleted}>remove all completed</button>
    </div>
  )}
})

export { TodoFooter as default }
