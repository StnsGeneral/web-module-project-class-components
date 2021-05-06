import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const list = [
  {
    task: 'Style Todo list',
    id: 1528817077286,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: list,
    };
  }

  handleChanges = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodo(this.state.newTask);
  };

  addTodo = (newTask) => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: newTask,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toggleCompleted = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleClick = () => {
    this.toggleCompleted(this.state.todo.completed);
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>TODO List: MVP</h2>
        </div>
        <TodoList
          todo={this.state.todo}
          clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
          handleClick={this.handleClick}
        />
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          handleSubmit={this.handleSubmit}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
