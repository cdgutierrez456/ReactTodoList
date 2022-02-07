import React, { Fragment } from 'react';
import './css/TodoList.css'

function TodoList(props) {
  return (
    <Fragment>
      <section>
        <ul>
          {props.children}
        </ul>
      </section>
    </Fragment>
  );
}

export { TodoList }
