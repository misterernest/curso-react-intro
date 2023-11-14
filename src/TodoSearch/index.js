import React from 'react';
import './style/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      id='todoSearch'
      placeholder="Chop onion"
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} 
      />
  )
}

export { TodoSearch }