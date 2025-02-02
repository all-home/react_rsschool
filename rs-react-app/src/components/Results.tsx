import React from 'react';

interface Result {
  name: string;
  description: string;
}

interface ResultsProps {
  results: Result[];
  error: string | null;
}

class Results extends React.Component<ResultsProps> {
  render() {
    const containerStyle = {
      backgroundColor: '#1e1e1e', // Dark background
      padding: '10px',
      borderRadius: '5px',
      color: '#fff', // White text
    };

    const tableStyle = {
      width: '100%',
    };

    const headerStyle = {
      backgroundColor: '#333', // Darker background for headers
      padding: '10px',
      borderBottom: '1px solid #444', // Darker border for separation
    };

    const cellStyle = {
      padding: '8px',
      borderBottom: '1px solid #444', // Darker border for separation
    };

    const errorStyle = {
      color: '#ff6b6b', // Red color for error messages
      backgroundColor: '#1e1e1e', // Dark background
      padding: '10px',
      borderRadius: '5px',
    };

    const noResultsStyle = {
      color: '#ff6b6b', // Red color for no results message
      backgroundColor: '#1e1e1e', // Dark background
      padding: '10px',
      borderRadius: '5px',
    };

    if (this.props.error) {
      return <div style={errorStyle}>{this.props.error}</div>;
    }

    if (this.props.results.length === 0) {
      return <div style={noResultsStyle}>No results to show.</div>;
    }

    return (
      <div style={containerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>Name</th> {/* Header for Name column */}
              <th style={headerStyle}>Description</th>{' '}
              {/* Header for Description column */}
            </tr>
          </thead>
          <tbody>
            {this.props.results.map((result, index) => (
              <tr key={index}>
                <td style={cellStyle}>{result.name}</td> {/* Name cell */}
                <td style={cellStyle}>{result.description}</td>{' '}
                {/* Description cell */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Results;
