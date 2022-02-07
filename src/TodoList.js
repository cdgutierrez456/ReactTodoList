import React, { Fragment } from 'react';

function TodoList(props) {
  return (
    <Fragment>
      <section>
        {props.children}
      </section>
    </Fragment>
  );
}

export { TodoList }
