import React, { Fragment } from 'react';
import './css/TodoItem.css'

function TodoItem(props) {

  const onCompleted = () => {
    alert('Tarea completada: ' + props.text)
  }

  const onDelete = () => {
    alert(`Se elimino la tarea ${props.text}`)
  }

  return (
    <Fragment>
      <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onCompleted}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}>
        X
      </span>
    </li>
    </Fragment>
  );
}

export { TodoItem };
