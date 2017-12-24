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
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add movie title here"/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

module.exports = AddMovie;