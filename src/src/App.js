import React from 'react';
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoItem } from './ToDoItem';
import { TodoList } from './ToDoList';
import { CreateTodoButton } from './CreateToDoButton';

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

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
    
      <TodoList>
        {searchedTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}   
      </TodoList> 

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
