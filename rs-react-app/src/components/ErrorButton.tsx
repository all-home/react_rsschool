import React from 'react';

const ErrorButton: React.FC = () => {
  const throwError = () => {
    throw new Error('Test Error');
  };

  return (
    <button
      onClick={throwError}
      style={{
        padding: '8px 16px',
        fontSize: '16px',
        backgroundColor: '#ff6b6b',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
      }}
    >
      Throw Error
    </button>
  );
};

export default ErrorButton;
