import React from 'react';
import ReactDOM  from 'react-dom';

import Search from './Search.jsx';

var Filters = (props) => {
  return (
    <div className="filters">
      <Search onSearch={props.onSearch}/>
        <div>
          <span onClick={() => props.onToggleFilter("watched")}>Watched</span> |
          <span onClick={() => props.onToggleFilter("unwatched")}> To Watch</span> |
          <span onClick={() => props.onToggleFilter("")}> Clear</span>
        </div>
    </div>
  )
}

module.exports = Filters;