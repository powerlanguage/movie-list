import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

import Movie from './components/Movie.jsx';
import AddMovie from './components/AddMovie.jsx'
import Title from './components/Title.jsx'
import Filters from './components/Filters.jsx'

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFilter: '',
      movies: [],
      watchedFilter: '',
      focusedMovieId: '',
    }
    this.onSearch = this.onSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatchedFilter = this.toggleWatchedFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.onMovieTitleClick = this.onMovieTitleClick.bind(this);
    this.onMovieToggleWatched = this.onMovieToggleWatched.bind(this);
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies(){
    axios.get('/movies')
      .then(response => {
        this.setState({movies: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  addMovie(movieTitle){
    axios.post('/movie', {title: movieTitle})
      .then(response => {
        this.getMovies();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSearch(searchParams){
    this.setState({searchFilter: searchParams.toLowerCase()})
  }

  toggleWatchedFilter(filter) {
    console.log(filter);
    this.setState({watchedFilter: filter})
  }

  clearFilters() {
    this.setState({
      watchedFilter: '',
      searchFilter: '',
    });
  }

  onMovieToggleWatched(movie){
    // post to endpoint to update watched status
    axios.post('/watched', {id: movie.id, watched: !movie.watched})
      .then(response => {
        this.getMovies();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onMovieTitleClick(movie) {
    this.state.focusedMovieId === movie.id ? this.setState({focusedMovieId: ''}) : this.setState({focusedMovieId: movie.id});
  }

  render() {

    let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchFilter));
    // see if we should be filtering based on watched
    if(this.state.watchedFilter) {
      const watched = this.state.watchedFilter === "watched";
      filteredMovies = filteredMovies.filter(movie => Boolean(movie.watched) === watched );
    }

    return (
      <div className="container">
        <Title />
        <AddMovie onAddMovie={this.addMovie}/>
        <Filters onSearch={this.onSearch} onToggleFilter={this.toggleWatchedFilter} clearFilters={this.clearFilters}/>
        {filteredMovies.length ? (
          <div className="movies">
            {filteredMovies.map((movie, index) =>
              <Movie
                movie={movie}
                key={index}
                onClick={this.onMovieTitleClick}
                focusedMovieId={this.state.focusedMovieId}
                toggleWatched={this.onMovieToggleWatched}
              />
            )}
          </div>
          ) : (
          <div className="error">No movies match that filter</div>
          )}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));