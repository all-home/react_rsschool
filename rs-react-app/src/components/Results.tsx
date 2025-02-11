import React from 'react';
import ResultItem from './ResultItem';

interface ResultsProps {
  results: { id: number; name: string; description: string }[];
  error: string | null;
  onItemClick: (item: {
    id: number;
    name: string;
    description: string;
  }) => void;
}

const Results: React.FC<ResultsProps> = ({ results, error, onItemClick }) => {
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
            <ResultItem
              key={result.id}
              result={result}
              onItemClick={onItemClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
