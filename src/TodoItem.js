import './style/TodoItem.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span className={`TodoItem-Icon__check ${props.completed && 'TodoItem-Icon__check--completed'}`}>V</span>
      <p className={`TodoItem-text ${props.completed && 'TodoItem-text--completed'}`}>{props.text}</p>
      <span className='TodoItem-Icon__delete'>X</span>
    </li>
  );
}

  export { TodoItem }