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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px',
          backgroundColor: '#1e1e1e', // Dark background
          borderRadius: '5px',
        }}
      >
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search..."
          style={{
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #444', // Darker border
            borderRadius: '4px',
            flex: '1',
            backgroundColor: '#333', // Dark input background
            color: '#fff', // White text
          }}
        />
        <button
          onClick={this.handleSearch}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
