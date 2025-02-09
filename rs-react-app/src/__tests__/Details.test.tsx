import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Details from '../components/Details';

const mockAxios = new MockAdapter(axios);

describe('Details Component', () => {
  const itemId = 1;
  const mockDetails = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
  };

  beforeEach(() => {
    mockAxios.reset();
  });

  it('fetches and displays details', async () => {
    mockAxios
      .onGet(`https://swapi.dev/api/people/${itemId}/`)
      .reply(200, mockDetails);

    render(<Details itemId={itemId} />);

    // Check loading state
    expect(screen.getByText(/no details available/i)).toBeInTheDocument();

    // Wait for the details to be displayed
    await waitFor(() => {
      expect(screen.getByText(mockDetails.name)).toBeInTheDocument();
      expect(
        screen.getByText(`Height: ${mockDetails.height}`)
      ).toBeInTheDocument();
      expect(screen.getByText(`Mass: ${mockDetails.mass}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Birth Year: ${mockDetails.birth_year}`)
      ).toBeInTheDocument();
    });
  });

  it('handles fetch failure', async () => {
    mockAxios.onGet(`https://swapi.dev/api/people/${itemId}/`).reply(500);

    render(<Details itemId={itemId} />);

    await waitFor(() => {
      expect(screen.getByText(/no details available/i)).toBeInTheDocument();
    });
  });
});
