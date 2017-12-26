import React from 'react';
import ReactDOM  from 'react-dom';

class Search extends React.Component {
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
    this.setState({value: ''});
    this.props.onSearch('');
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onSearch(event.target.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
        <input type="submit" value="x" />
      </form>
    )
  }
}

module.exports = Search;