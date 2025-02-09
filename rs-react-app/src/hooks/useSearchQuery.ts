import { useState, useEffect } from 'react';

const useSearchQuery = (key: string, initialValue: string = '') => {
  // Get the search term from localStorage or use the initial value
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  // Update localStorage whenever the search term changes
  useEffect(() => {
    localStorage.setItem(key, searchTerm);
  }, [key, searchTerm]);

  return [searchTerm, setSearchTerm] as const;
};

export default useSearchQuery;
