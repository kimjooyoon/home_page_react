// BadgeAtom.spec.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BadgeAtom from './BadgeAtom';
import { BadgeProps } from '@mui/material/Badge';

const renderComponent = (props: BadgeProps) => {
  render(<BadgeAtom {...props} />);
};

describe('BadgeAtom', () => {
  it('renders without crashing', () => {
    renderComponent({ badgeContent: 4 });
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('displays the correct badge content', () => {
    renderComponent({ badgeContent: 99 });
    expect(screen.getByText('99')).toBeInTheDocument();
  });

  it('applies the color correctly', () => {
    renderComponent({ badgeContent: 5, color: 'primary' });
    const badge = screen.getByText('5');
    expect(badge).toHaveClass('MuiBadge-colorPrimary');
  });

  it('renders invisible badge when invisible prop is true', () => {
    renderComponent({ badgeContent: 5, invisible: true });
    const badge = screen.queryByText('5');
    expect(badge).not.toBeInTheDocument();
  });

  it('renders badge with max value when max prop is set', () => {
    renderComponent({ badgeContent: 100, max: 99 });
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('renders badge with different variants', () => {
    renderComponent({ badgeContent: 'New', variant: 'standard' });
    const badge = screen.getByText('New');
    expect(badge).toBeInTheDocument();
  });
});
