import React from 'react';
import './style/CreateTodoButton.css';

function CreateTodoButton( {setOpenModal} ) {
  return (
    <button 
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }>+</button>
  )
}

export { CreateTodoButton }