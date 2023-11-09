import React from 'react';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/';


function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  SearchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
      />
  
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!</p>}
        {(!loading && SearchedTodos.length == 0)  && <p>Crea tu primer ToDo!</p>}
        
        {SearchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />  
    </>
  );
}

export { AppUI }