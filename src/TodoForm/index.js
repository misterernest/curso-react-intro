import React from "react";
import './style/TodoForm.css';

function TodoForm() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Write your new ToDo</label>
      <textarea 
        placeholder="Chop onion to the lunch"
      />

      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button--cancel"
        >Cancel</button>
        <button 
          className="TodoForm-button TodoForm-button--add"
        >Add ToDO</button>
      </div>
    </form>
  )
}

export {TodoForm};