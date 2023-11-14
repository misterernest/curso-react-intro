import React from "react";
import { TodoContext } from "../TodoContext";
import './style/TodoForm.css';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new ToDo</label>
      <textarea 
        placeholder="Chop onion to the lunch"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancel</button>
        <button 
          className="TodoForm-button TodoForm-button--add"
        >Add ToDO</button>
      </div>
    </form>
  )
}

export {TodoForm};