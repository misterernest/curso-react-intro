import React from 'react';
import './style/TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <input
      id='todoSearch'
      placeholder="Cortar cebolla"
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} 
      />
  )
}

export { TodoSearch }