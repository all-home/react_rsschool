import React from 'react';

const NotFound: React.FC = () => {
  const notFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
  };

  return (
    <div style={notFoundStyle}>
      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={paragraphStyle}>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
