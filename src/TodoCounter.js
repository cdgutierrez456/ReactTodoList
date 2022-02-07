import React, { Fragment } from 'react'
import './css/TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    <Fragment>
      <h2 className="TodoCounter">Has completado {completed} de {total} TODO's</h2>
    </Fragment>
  );
}

export { TodoCounter };
