import React, { Fragment } from 'react';
import './css/CreateTodoButton.css'

function CreateTodoButton(props) {

  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <Fragment>
      <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Pulso el boton')}
      >+</button>
    </Fragment>
  );
}

export { CreateTodoButton }
