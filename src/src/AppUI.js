import React from "react";
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoItem } from './ToDoItem';
import { TodoList } from './ToDoList';
import { CreateTodoButton } from './CreateToDoButton';

const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
}) => {
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
        <TodoItem key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete = {() => deleteTodo(todo.text)}
        />
        ))}   
      </TodoList> 

      <CreateTodoButton />

    </React.Fragment>
    )
};

export { AppUI };