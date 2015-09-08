import React from 'react';
import TodoHeader from "./components/TodoHeader.js"
import TodoList from "./components/TodoList.js"
import TodoFooter from "./components/TodoFooter.js"



React.render(
  <TodoHeader />,
  document.getElementById('todoHeader')
);

React.render(
  <TodoList />,
  document.getElementById('todoList')
);

React.render(
  <TodoFooter />,
  document.getElementById('todoFooter')
);
