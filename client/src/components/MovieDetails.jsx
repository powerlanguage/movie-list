import React from 'react';
import ReactDOM  from 'react-dom';

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
        <div><img src="" /></div>
        <ul>
          <li>Year</li>
          <li>Runtime</li>
          <li>Metascore</li>
          <li>imdbRating</li>
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