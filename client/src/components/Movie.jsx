import React from 'react';
import ReactDOM  from 'react-dom';

import MovieDetails from './MovieDetails.jsx'

var Movie = (props) => {

  let classname = 'watched';
  props.movie.watched ? classname += '' : classname += ' hide';

  return (
    <li className="movie">
      <div className="title" onClick={() => props.onClick(props.movie)}>{props.movie.title}</div>
      <div className={classname}>Watched</div>
      {props.focusedMovie === props.movie &&
        <MovieDetails movie={props.movie} toggleWatched={props.toggleWatched}/>
      }
    </li>
  )
}

module.exports = Movie;