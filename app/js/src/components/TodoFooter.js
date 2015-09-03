

var TodoFooter = React.createClass({
  render: () => {
    return (
      <div className="footer">
        <span>5 todos, 4 completed </span>
        <button>remove all completed</button>
      </div>
    )
  }
})

export { TodoFooter as default }
