import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage'; // Assuming MainPage is in a separate file
import NotFound from './components/NotFound'; // Import the 404 page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={<MainPage />} />

        {/* 404 Page Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
