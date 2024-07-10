import { render, screen, fireEvent } from '@testing-library/react';
import PaginationAtom from './PaginationAtom';

describe('PaginationAtom', () => {
  test('renders correctly', () => {
    render(<PaginationAtom count={10} page={1} onChange={() => {}} />);
    expect(screen.getByRole('navigation')).toBeTruthy();
  });

  test('handles page change', () => {
    const handleChange = jest.fn();
    render(<PaginationAtom count={10} page={1} onChange={handleChange} />);

    const nextPageButton = screen.getByLabelText('Go to page 2');
    fireEvent.click(nextPageButton);

    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 2);
  });

  test('displays the correct number of pages', () => {
    render(<PaginationAtom count={5} page={1} onChange={() => {}} />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('5')).toBeTruthy();
  });
});
