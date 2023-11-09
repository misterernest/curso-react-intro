import React from 'react';
import { useLocalStorage  } from './useLocalStorage';
import { AppUI } from './AppUI';

/* localStorage.removeItem('TODOS_V1');
//crea un localStorage de pruebas, mientras implemento el crear tarea
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.js', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'cantar LALALAL', completed: false},
  {text: 'Cortar tomate', completed: true},
  {text: 'Usar estados derivados', completed: true},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function App() {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const SearchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
    <AppUI
    loading={ loading }
    error={ error }
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    SearchedTodos={SearchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
