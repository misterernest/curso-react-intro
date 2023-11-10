import React from 'react';
import { TodoContext } from '../TodoContext'
import './style/TodoCounter.css';

function TodoCounter() {
	const { completedTodos, totalTodos } = React.useContext(TodoContext);
	return (
		<h1 className='TodoCounter'>
			Haz completado <span>{completedTodos}</span> de <span>{ totalTodos }</span> TODOs
		</h1>
	)
}

export { TodoCounter }