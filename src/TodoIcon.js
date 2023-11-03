import react from "react";
import './style/TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
  'check': (color) => <CheckSVG className="TodoItem-Icon__svg" fill={ color }/>,
  'delete': (color)=> <DeleteSVG className="TodoItem-Icon__svg" fill={ color } />
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span 
      className={`TodoItem-Icon__container-${type}`}
      onClick={onClick}  
    >
      { iconTypes[type](color) }
    </span>
  )
}

export { TodoIcon };