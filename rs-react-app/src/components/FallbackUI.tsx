import React from 'react';

interface FallbackUIProps {
  errorMessage: string;
  onRefresh: () => void;
}

const FallbackUI: React.FC<FallbackUIProps> = ({ errorMessage, onRefresh }) => {
  const fallbackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '20px',
    textAlign: 'center',
  } as const;

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#721c24',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={fallbackStyle}>
      <h1>Oops! Something went wrong.</h1>
      <p>{errorMessage}</p>
      <button style={buttonStyle} onClick={onRefresh}>
        Refresh Page
      </button>
    </div>
  );
};

export default FallbackUI;
