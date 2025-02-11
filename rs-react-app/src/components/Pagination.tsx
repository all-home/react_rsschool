import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageButtonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const activePageButtonStyle = {
    ...pageButtonStyle,
    backgroundColor: '#0056b3',
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          style={page === currentPage ? activePageButtonStyle : pageButtonStyle}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
