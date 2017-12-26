import React from 'react';
import ReactDOM  from 'react-dom';

import Search from './Search.jsx';

class Filters extends React.Component {
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
    this.props.clearFilters('');
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onSearch(event.target.value);
  }


  render() {return (
    <div className="filters">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
        </div>
        <div className="form-group">
          <button className="filter" onClick={() => this.props.onToggleFilter("watched")}>Watched</button>
          <button className="filter" onClick={() => this.props.onToggleFilter("unwatched")}> To Watch</button>
          <button>Clear</button>
        </div>
      </form>
    </div>
  )
  }
}

module.exports = Filters;