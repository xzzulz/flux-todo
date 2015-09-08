import React from 'react';
import actions from '../actions/actions.js'



var TodoItem = React.createClass({
  getCheckboxSrc: function() {
    return this.props.item.done ? 'img/done.png' : 'img/todo.png'
  },
  getColor: function() {
    return this.props.item.done ? '#aaa' : '#000'
  },
  render: function() { return (
    <div className="item">
      <div className="itemIcon">
        <img className="todoCheck" src={this.getCheckboxSrc()}
          onClick={() => actions.done(this.props.item.id) }/>
      </div>
      <div className="itemText">
        <span style={{color:this.getColor()}}>{this.props.item.text}</span></div>
      <div className="itemClose">
        <img className="todoClose" src="img/delete.png"
          onClick={() => actions.remove(this.props.item.id) }/>
      </div>
    </div>
  )}
})

export { TodoItem as default }
