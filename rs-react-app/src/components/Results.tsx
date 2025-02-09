import React from 'react';

interface ResultsProps {
  results: Result[];
  error: string | null;
  onItemClick: (item: Result) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Results: React.FC<ResultsProps> = ({
  results,
  error,
  onItemClick,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const containerStyle = {
    backgroundColor: '#1e1e1e',
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
  };

  const tableStyle = {
    width: '100%',
  };

  const headerStyle = {
    backgroundColor: '#333',
    padding: '10px',
    borderBottom: '1px solid #444',
  };

  const cellStyle = {
    padding: '8px',
    borderBottom: '1px solid #444',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: '#ff6b6b',
    backgroundColor: '#1e1e1e',
    padding: '10px',
    borderRadius: '5px',
  };

  const noResultsStyle = {
    color: '#ff6b6b',
    backgroundColor: '#1e1e1e',
    padding: '10px',
    borderRadius: '5px',
  };

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const pageButtonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  if (error) {
    return <div style={errorStyle}>{error}</div>;
  }

  if (results.length === 0) {
    return <div style={noResultsStyle}>No results to show.</div>;
  }

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id} onClick={() => onItemClick(result)}>
              <td style={cellStyle}>{result.name}</td>
              <td style={cellStyle}>{result.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={paginationStyle}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            style={{
              ...pageButtonStyle,
              backgroundColor: page === currentPage ? '#0056b3' : '#007bff',
            }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Results;