import React, { Fragment, useState } from 'react'
import './css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <Fragment>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </Fragment>
  );
}

export { TodoSearch };