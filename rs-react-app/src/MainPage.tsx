import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Details from './components/Details';
import ErrorButton from './components/ErrorButton';
import useSearchQuery from './hooks/useSearchQuery'; // Import the custom hook

const ITEMS_PER_PAGE = 8;

interface Result {
  id: number;
  name: string;
  description: string;
}

interface ApiResponse {
  name: string;
  birth_year: string;
}

const MainPage: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Result | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Use the custom hook to manage the search term
  const [searchTerm, setSearchTerm] = useSearchQuery('searchTerm', '');

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || '1', 10);
  const detailsId = queryParams.get('details');

  // Fetch results when the page loads or the search term changes
  useEffect(() => {
    fetchResults(searchTerm);
  }, [searchTerm]);

  // Fetch results based on search term
  const fetchResults = async (searchTerm: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ results: ApiResponse[] }>(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      const results = response.data.results.map((item, index) => ({
        id: index + 1, // Use index as ID for simplicity
        name: item.name,
        description: `Born in ${item.birth_year}`,
      }));
      setResults(results);
    } catch (error) {
      console.error('Axios Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch results.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle item click
  const handleItemClick = (item: Result) => {
    setSelectedItem(item);
    navigate(`/?page=${currentPage}&details=${item.id}`);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    navigate(`/?page=${page}${selectedItem ? `&details=${selectedItem.id}` : ''}`);
  };

  // Close details section
  const closeDetails = () => {
    setSelectedItem(null);
    navigate(`/?page=${currentPage}`);
  };

  // Paginate results
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Section: Search Results */}
      <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #444' }}>
        <Search onSearch={setSearchTerm} />
        {loading && <div>Loading...</div>}
        <Results
          results={paginatedResults}
          error={error}
          onItemClick={handleItemClick}
          currentPage={currentPage}
          totalPages={Math.ceil(results.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
        <ErrorButton /> {/* Add the error button here */}
      </div>

      {/* Right Section: Details */}
      {selectedItem && (
        <div style={{ flex: 1, padding: '20px' }}>
          <button onClick={closeDetails} style={{ marginBottom: '10px' }}>
            Close Details
          </button>
          <Details itemId={selectedItem.id} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
