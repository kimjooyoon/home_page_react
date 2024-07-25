import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarAtom from './AvatarAtom';

describe('AvatarAtom', () => {
  it('renders without crashing', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    render(<AvatarAtom src={src} alt={alt} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('displays the provided image source', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    render(<AvatarAtom src={src} alt={alt} />);
    expect(screen.getByAltText(alt)).toHaveAttribute('src', src);
  });

  it('displays the provided image alt text', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    render(<AvatarAtom src={src} alt={alt} />);
    expect(screen.getByAltText(alt)).toHaveAttribute('alt', alt);
  });
});
