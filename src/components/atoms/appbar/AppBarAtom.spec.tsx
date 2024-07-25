// AppBarAtomFixed.spec.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppBarProps } from '@mui/material/AppBar';
import {AppBarAtomFixed} from './AppBarAtom';

const renderComponent = (props: AppBarProps) => {
  return render(<AppBarAtomFixed {...props} />);
};

describe('AppBarAtomFixed', () => {
  it('renders without crashing', () => {
    renderComponent({});
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('applies the correct position', () => {
    renderComponent({ position: 'fixed' });
    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle({
      position: 'fixed',
    });
  });

  it('applies the correct styles', () => {
    renderComponent({});
    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle({
      boxShadow: 'none',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      marginTop: '16px',
    });
  });

  it('renders children correctly', () => {
    renderComponent({ children: <div>Test</div> });
    const appBar = screen.getByRole('banner');
    expect(appBar).toContainElement(screen.getByText('Test'));
  });
});