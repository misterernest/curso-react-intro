import './style/TodoCounter.css';

function TodoCounter({ total, completed }) { 
    return (
      <h1>
        has completado {completed} de {total} TODOs
        </h1>
    )
  }

  export { TodoCounter }