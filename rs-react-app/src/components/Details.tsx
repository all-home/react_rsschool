import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DetailsProps {
  itemId: number;
}

const Details: React.FC<DetailsProps> = ({ itemId }) => {
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${itemId}/`);
        setDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch details:', error);
      }
    };

    fetchDetails();
  }, [itemId]);

  if (!details) {
    return <div>No details available.</div>;
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Height: {details.height}</p>
      <p>Mass: {details.mass}</p>
      <p>Birth Year: {details.birth_year}</p>
    </div>
  );
};

export default Details;
