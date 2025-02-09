import React, { useState } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  defaultSearchTerm: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, defaultSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState<string>(defaultSearchTerm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };

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
        value={searchTerm}
        onChange={handleInputChange}
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
        onClick={handleSearch}
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
};

export default Search;
