import './style/TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-text ${props.completed && 'TodoItem-text--completed'}`}>{props.text}</p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

  export { TodoItem }