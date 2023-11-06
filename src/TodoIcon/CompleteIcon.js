import React from "react";
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
return (
	<TodoIcon 
		type="check"
		color={completed? 'var(--color-icon-check-completed)':'var(--color-icon-base)'}
		onClick={onComplete}
	/>
);
}

export { CompleteIcon }