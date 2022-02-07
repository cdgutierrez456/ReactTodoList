import React, { Fragment } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
// import './App.css';

const todos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'React',
    completed: false
  },
  {
    text: 'Cortar tomate',
    completed: false
  },
      
]

function App(props) {
  return (
    <Fragment>
      <TodoCounter /> 
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
