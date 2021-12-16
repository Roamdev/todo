import React, {Component} from 'react';
import './SearchPanel.scss'

export default class SearchPanel extends Component {
  state= {
    term: ''
  };

  handleSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.handleSearch(term);
  }
  render() {

    return (
      <input
          type='text'
          className='form-control search-input'
          placeholder='type to seatch'
          onChange={this.handleSearch}
      />
    );
  }
};