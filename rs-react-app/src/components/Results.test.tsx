import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';

const mockResults = [
  { id: 1, name: 'Luke Skywalker', description: 'Born in 19BBY' },
  { id: 2, name: 'Darth Vader', description: 'Born in 41.9BBY' },
];

describe('Results Component', () => {
  it('renders the results table', () => {
    render(
      <Results
        results={mockResults}
        error={null}
        onItemClick={() => {}}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    render(
      <Results
        results={[]}
        error="Failed to fetch results"
        onItemClick={() => {}}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    );

    expect(screen.getByText('Failed to fetch results')).toBeInTheDocument();
  });

  it('displays a "No results to show" message when there are no results', () => {
    render(
      <Results
        results={[]}
        error={null}
        onItemClick={() => {}}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    );

    expect(screen.getByText('No results to show.')).toBeInTheDocument();
  });
});