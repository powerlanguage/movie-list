import React from 'react';
import ReactDOM  from 'react-dom';

import MovieDetails from './MovieDetails.jsx'

var Movie = (props) => {

  let classname = 'watched';
  props.movie.watched ? classname += '' : classname += ' hide';

  return (
    <div className="movie">
      <div className="title" onClick={() => props.onClick(props.movie)}>{props.movie.title}</div>
      <div className={classname}>Watched</div>
      {props.focusedMovieId === props.movie.id &&
        <MovieDetails movie={props.movie} toggleWatched={props.toggleWatched}/>
      }
    </div>
  )
}

module.exports = Movie;