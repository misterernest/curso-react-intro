import './style/TodoList.css';
function TodoList({ children }) {
    return (
      <ul className='TodoList'>
        {children}
      </ul>
    )
  }

  export { TodoList }