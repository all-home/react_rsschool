import React from 'react';

interface ResultItemProps {
  result: { id: number; name: string; description: string };
  onItemClick: (item: { id: number; name: string; description: string }) => void;
}

const ResultItem: React.FC<ResultItemProps> = ({ result, onItemClick }) => {
  const cellStyle = {
    padding: '8px',
    borderBottom: '1px solid #444',
    cursor: 'pointer',
  };

  return (
    <tr onClick={() => onItemClick(result)}>
      <td style={cellStyle}>{result.name}</td>
      <td style={cellStyle}>{result.description}</td>
    </tr>
  );
};

export default ResultItem;
