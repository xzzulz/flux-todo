

var TodoHeader = React.createClass({
  render: () => {
    return (
      <div>
        <div id="top"><h1>Flux Todo</h1></div>
        <div className="newItemBox">
          <input id="newItem"/>
          <img id="addIcon" src="img/add.png"/>
        </div>
      </div>
    )
  }
})

export { TodoHeader as default }
/*
React.render(
  <TodoHeader />,
  document.getElementById('box')
);
*/
