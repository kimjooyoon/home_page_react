// NavigationBarMolecule.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationBarMolecule from './NavigationBarMolecule';
import { PaletteMode } from '@mui/material';

const mockToggleColorMode = jest.fn();

const renderComponent = (mode: PaletteMode) => {
  render(<NavigationBarMolecule mode={mode} toggleColorMode={mockToggleColorMode} />);
};

describe('NavigationBarMolecule', () => {
  it('renders without crashing', () => {
    renderComponent('light');
    expect(screen.getByAltText('logo of sitemark')).toBeInTheDocument();
  });

  it('opens and closes the drawer menu', () => {
    renderComponent('light');
    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton);

    const companyIntro = screen.queryAllByText('회사 소개');
    expect(companyIntro).toHaveLength(2); // Check if two instances are found
    expect(companyIntro[0]).toBeInTheDocument(); // Verify the first instance
    expect(companyIntro[1]).toBeInTheDocument(); // Verify the second instance

    const closeButton = screen.queryAllByText('회사 소개')[1]; // Use the second instance for closing
    fireEvent.click(closeButton);
    expect(screen.queryAllByText('회사 소개')[0]).toBeInTheDocument(); // The first instance should still be present
  });

  it('toggles color mode', () => {
    renderComponent('light');
    const toggleButton = screen.getByLabelText('button to toggle theme');
    fireEvent.click(toggleButton);
    expect(mockToggleColorMode).toHaveBeenCalled();
  });

  it('renders all navigation items', () => {
    renderComponent('light');
    const navItems = ['회사 소개', '프로젝트', '관리자와 대화', '일정', '프로필'];
    navItems.forEach(item => {
      expect(screen.queryAllByText(item)[0]).toBeInTheDocument();
    });
  });

  it('renders Sign in and Sign up buttons', () => {
    renderComponent('light');
    const signInButtons = screen.queryAllByText('Sign in');
    const signUpButtons = screen.queryAllByText('Sign up');
    expect(signInButtons[0]).toBeInTheDocument();
    expect(signUpButtons[0]).toBeInTheDocument();
  });

  it('renders Sign in and Sign up buttons in drawer', () => {
    renderComponent('light');
    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton);

    const signInButtons = screen.queryAllByText('Sign in');
    const signUpButtons = screen.queryAllByText('Sign up');
    expect(signInButtons[1]).toBeInTheDocument();
    expect(signUpButtons[1]).toBeInTheDocument();
  });
});
