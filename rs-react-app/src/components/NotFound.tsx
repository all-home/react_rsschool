import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: '1.2rem' }}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
