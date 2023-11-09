import React from "react";
import { TodoItem } from '../TodoItem';
import './style/TodosLoading.css';

function TodosLoading() {
  const EmptyTodosLoading = [
    {text: '.', completed: false, classNameItem: 'loading'},
    {text: ' .', completed: false, classNameItem: 'loading'},
    {text: '  .', completed: false, classNameItem: 'loading'},
  ];

  return (
    EmptyTodosLoading.map(todo => (
      <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        classNameItem={'loading'}
      />
    ))
  );
}

export { TodosLoading };