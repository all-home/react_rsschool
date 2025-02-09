import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search Component', () => {
  it('renders the search input and button', () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('calls the onSearch function when the button is clicked', () => {
    const onSearchMock = jest.fn();
    render(<Search onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText('Search...');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'Luke' } });
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('Luke');
  });
});