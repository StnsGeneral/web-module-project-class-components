import React from 'react';

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.item.id)}
      className={`todo${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
