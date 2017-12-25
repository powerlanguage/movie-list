import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx'


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFilter: '',
      movies: [],
      watchedFilter: '',
      focusedMovie: '',
    }
    this.onSearch = this.onSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatchedFilter = this.toggleWatchedFilter.bind(this);
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
        <AddMovie onAddMovie={this.addMovie}/>
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