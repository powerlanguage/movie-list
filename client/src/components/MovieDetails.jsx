import React from 'react';
import ReactDOM  from 'react-dom';

import config from '../../../config.js'

class MovieDetails extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   watched: this.props.movie.watched
    // }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.props.toggleWatched(this.props.movie);
    // I think this pattern is incorrect,
    // state should come from the to!this.props.movie.watchedzp, not balancing it here
    //const toggle = !this.props.movie.watched;
    //this.setState({watched: toggle});
  }

  render() {
    return (
      <div className="movie-details">
        <ul>
          <li className="metadata">{this.props.movie.year.split('-')[0]} | {this.props.movie.vote_average}★</li>
          <li className="overview">{this.props.movie.overview}</li>
          <li>
            <form>
              <label>Watched </label>
                <input
                  name="watched"
                  type="checkbox"
                  checked={this.props.movie.watched}
                  onChange={this.handleInputChange}
                />
            </form>
          </li>
        </ul>
        <div><img src={this.props.movie.poster_path} /></div>
      </div>
    )
  }
}

module.exports = MovieDetails;