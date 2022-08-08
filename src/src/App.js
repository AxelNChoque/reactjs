import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

const defaulttoDo = [
  {text: 'Correr 2km', completed: true},
  {text: 'Estudiar', completed: false},
  {text: 'Programar', completed: true},
  {text: 'Caminar', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaulttoDo);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed==true).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if(!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
