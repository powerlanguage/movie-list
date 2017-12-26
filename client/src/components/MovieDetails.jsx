import React from 'react';
import ReactDOM  from 'react-dom';

import config from '../../../config.js'

class MovieDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      watched: this.props.movie.watched
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.toggleWatched(this.props.movie);
    // I think this pattern is incorrect,
    // state should come from the top, not balancing it here
    this.setState({watched: !this.props.movie.watched});
  }

  render() {
    console.log(this.state.watched);
    return (
      <div className="movie-details">
        <div><img src={this.props.movie.poster_path} /></div>
        <ul>
          <li>Year: {this.props.movie.year.split('-')[0]}</li>
          <li>Vote: {this.props.movie.vote_average}</li>
          <li>{this.props.movie.overview}</li>
          <li>
            <form>
              <label>Watched</label>
                <input
                  name="watched"
                  type="checkbox"
                  checked={this.state.watched}
                  onChange={this.handleInputChange}
                />
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = MovieDetails;