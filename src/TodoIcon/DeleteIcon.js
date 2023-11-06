import React from "react";
import { TodoIcon} from "./";

function DeleteIcon({ onDelete }) {
	return (
		<TodoIcon 
			type="delete"
			color="var(--color-icon-base)"
			onClick={onDelete}
		/>
	)
}

export { DeleteIcon };