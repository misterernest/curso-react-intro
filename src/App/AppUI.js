import React from 'react';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI() {

  const {
    loading,
    error,
    SearchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext( TodoContext );

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && SearchedTodos.length === 0)  && <EmptyTodos />}
        
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

      {openModal && (
        <Modal>
          {/* Agrega Modal */}  
        </Modal> 
      )}
    </>
  );
}

export { AppUI }