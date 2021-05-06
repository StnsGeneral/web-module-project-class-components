import React from 'react';

const TodoForm = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     newTodoName: '',
  //   };
  // }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChanges}
          // value={props.handleChanges}
          name="new-todo"
          type="text"
        />
        <button>Add Todo</button>
      </form>
      <button onClick={() => props.clearCompleted()}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
