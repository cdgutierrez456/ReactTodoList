import React, { Fragment, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
// import './css/App.css';

const todos = [
  {
    text: 'Cortar cebolla',
    completed: true
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
              completed={todo.completed}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
