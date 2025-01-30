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
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }

    return (
      <div>
        {this.props.results.map((result, index) => (
          <div key={index}>
            <strong>{result.name}</strong>: {result.description}
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
