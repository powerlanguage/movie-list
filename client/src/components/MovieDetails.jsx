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
  }

  render() {
    return (
      <div className="movie-details">
        <div><img src={`${config.BASE_URL}w185/${this.props.movie.poster_path}`} /></div>
        <ul>
          <li>Year: {this.props.movie.release_date.split('-')[0]}</li>
          <li>Metascore {this.props.movie.vote_average}</li>
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