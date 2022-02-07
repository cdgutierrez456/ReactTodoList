import React, { Fragment, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
// import './css/App.css';

const defaultTodos = [
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

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  return (
    <Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      /> 
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchedTodos.map(todo => (
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
