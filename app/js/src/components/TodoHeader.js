import React from 'react';
import actions from '../actions/actions.js'



var TodoHeader = React.createClass({
  addTodo: function() {
    var input = React.findDOMNode(this.refs.newItem)
    if (input.value) {
      actions.createTodo(input.value)
      input.value = ''
    }
  },
  render: function() {
    return (
    <div>
      <div id="top"><h1>Flux Todo</h1></div>
      <div className="newItemBox">
        <input id="newItem" ref="newItem"/>
        <img id="addIcon" src="img/add.png" onClick={this.addTodo} />
      </div>
    </div>)
  }
})

export { TodoHeader as default }
