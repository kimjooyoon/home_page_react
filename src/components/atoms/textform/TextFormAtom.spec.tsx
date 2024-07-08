import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // extend-expect를 생략합니다.
import TextFormAtom from './TextFormAtom.tsx';

describe('TextFormAtom Component', () => {
  test('should render correctly', () => {
    render(<TextFormAtom />);
    const inputElement = screen.getByPlaceholderText('Type here...');
    expect(inputElement).toHaveProperty('type', 'text');
  });

  test('should have the correct type', () => {
    render(<TextFormAtom />);
    const inputElement = screen.getByPlaceholderText('Type here...');
    expect(inputElement).toHaveProperty('type', 'text');
  });
});
