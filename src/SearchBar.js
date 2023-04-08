import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchTermChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchTerm: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;