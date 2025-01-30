import React from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  defaultSearchTerm: string;
}

class Search extends React.Component<SearchProps> {
  state = {
    searchTerm: this.props.defaultSearchTerm,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value.trim() });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm);
    localStorage.setItem('searchTerm', this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search..."
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
