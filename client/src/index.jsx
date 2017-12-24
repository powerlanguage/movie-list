import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx'

var movieData = [
  {
    title: 'Mean Girls',
    watched: false,
  },
  {
    title: 'Hackers',
    watched: false,
  },
  {
    title: 'The Grey',
    watched: false,
  },
  {
    title: 'Sunshine',
    watched: false,
  },
  {
    title: 'Ex Machina',
    watched: false,
  },
];

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFilter: '',
      movies: movieData,
      watchedFilter: '',
      focusedMovie: '',
    }
    this.onSearch = this.onSearch.bind(this);
    this.onAddMovie = this.onAddMovie.bind(this);
    this.toggleWatchedFilter = this.toggleWatchedFilter.bind(this);
    this.onMovieTitleClick = this.onMovieTitleClick.bind(this);
    this.onMovieToggleWatched = this.onMovieToggleWatched.bind(this);
  }

  onSearch(searchParams){
    this.setState({searchFilter: searchParams.toLowerCase()})
  }

  onAddMovie(movieTitle){
    const movies = this.state.movies;
    movies.push({title: movieTitle});
    this.setState({movies: movies});
  }

  toggleWatchedFilter(filter) {
    this.setState({watchedFilter: filter})
  }

  onMovieToggleWatched(movie){
    const updatedMovies = this.state.movies;
    let i = updatedMovies.indexOf(movie);
    updatedMovies[i].watched = !updatedMovies[i].watched;
    this.setState({movies: updatedMovies});
  }

  onMovieTitleClick(movie) {
    this.state.focusedMovie === movie ? this.setState({focusedMovie: ''}) : this.setState({focusedMovie: movie});
  }

  render() {

    let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchFilter));
    // see if we should be filtering based on watched
    if(this.state.watchedFilter) {
      const watched = this.state.watchedFilter === "watched";
      filteredMovies = filteredMovies.filter(movie => movie.watched === watched);
    }

    return (
      <div>
        <AddMovie onAddMovie={this.onAddMovie}/>
        <Search onSearch={this.onSearch}/>
        <div>
          <span onClick={() => this.toggleWatchedFilter("watched")}>Watched</span> |
          <span onClick={() => this.toggleWatchedFilter("unwatched")}> To Watch</span> |
          <span onClick={() => this.toggleWatchedFilter("")}> Clear</span>
        </div>
        {filteredMovies.length ? (
          <ul>
            {filteredMovies.map((movie, index) =>
              <Movie
                movie={movie}
                key={index}
                onClick={this.onMovieTitleClick}
                focusedMovie={this.state.focusedMovie}
                toggleWatched={this.onMovieToggleWatched}
              />
            )}
          </ul>
          ) : (
          <div>No movies match that filter</div>
          )}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));