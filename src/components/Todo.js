import React from 'react';

const Todo = (props) => {
  return (
    // <div
    //   onClick={handleClick}
    //   className={`todo${props.todo.completed ? ' completed' : ''}`}>
    //   <p>{props.todo.name}</p>
    // </div>
    <div
      onClick={() => props.toggleCompleted(props.item.id)}
      className={`todo${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
