import React from 'react';
import useSearchQuery from '../hooks/useSearchQuery'; // Import the custom hook

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  // Use the custom hook to manage the search term
  const [searchTerm, setSearchTerm] = useSearchQuery('searchTerm', '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#1e1e1e',
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
          border: '1px solid #444',
          borderRadius: '4px',
          flex: '1',
          backgroundColor: '#333',
          color: '#fff',
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
