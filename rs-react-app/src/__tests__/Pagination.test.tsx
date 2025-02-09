import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the correct number of page buttons', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(5);
  });

  test('highlights the current page button', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    const activeButton = screen.getByText('3');
    expect(activeButton).toHaveStyle('background-color: #0056b3');
  });

  test('calls onPageChange when a page button is clicked', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    const pageButton = screen.getByText('3');
    fireEvent.click(pageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  test('does not highlight any button if currentPage is out of range', () => {
    render(
      <Pagination
        currentPage={6}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    const pageButtons = screen.getAllByRole('button');
    const activeButton = screen.queryByText('6');

    expect(activeButton).not.toBeInTheDocument();
    expect(pageButtons[0]).toHaveStyle('background-color: #0056b3'); // First button should be highlighted
  });
});
