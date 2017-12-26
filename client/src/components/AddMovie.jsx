import React from 'react';
import ReactDOM  from 'react-dom';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddMovie(this.state.value);
    this.setState({value: ''});
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render(){
    return (
      <div className="add-movie">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Movie title.."/>
            <button type="submit" value="Add">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = AddMovie;