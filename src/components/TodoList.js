import Todo from './Todo';
import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todo.map((item) => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
