

var TodoList = React.createClass({
  render: () => {
    return (
      <div>
        <div className="item">
          <div className="itemIcon"><img className="todoCheck" src="img/todo.png"/></div>
          <div className="itemText"><span>abcdef ghijkl mnopqr </span></div>
          <div className="itemClose"><img className="todoClose" src="img/delete.png"/></div>
        </div>

        <div className="item">
          <div className="itemIcon"><img className="todoCheck" src="img/todo.png"/></div>
          <div className="itemText"><span>abcdef ghijkl mnopqr </span></div>
          <div className="itemClose"><img className="todoClose" src="img/delete.png"/></div>
        </div>

        <div className="item">
          <div className="itemIcon"><img className="todoCheck" src="img/todo.png"/></div>
          <div className="itemText"><span>abcdef ghijkl mnopqr </span></div>
          <div className="itemClose"><img className="todoClose" src="img/delete.png"/></div>
        </div>

      </div>
    )
  }
})

export { TodoList as default }
