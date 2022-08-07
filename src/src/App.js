import React from 'react';
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoItem } from './ToDoItem';
import { TodoList } from './ToDoList';
import { CreateTodoButton } from './CreateToDoButton';

// import './App.css';

const toDo = [
  {text: 'Correr 2km', completed: true},
  {text: 'Estudiar', completed: false},
  {text: 'Programar', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
    
      <TodoList>
        {toDo.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}   
      </TodoList> 

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
