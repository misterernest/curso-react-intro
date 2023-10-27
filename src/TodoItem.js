import './style/TodoItem.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span className='TodoTick'>V</span>
      <p>{props.text}</p>
      <span className='TodoX'>X</span>
    </li>
  );
}

  export { TodoItem }