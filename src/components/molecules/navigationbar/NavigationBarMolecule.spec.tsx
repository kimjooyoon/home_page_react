import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationBarMolecule from './NavigationBarMolecule';
import { PaletteMode } from '@mui/material';

const mockToggleColorMode = jest.fn();

const renderComponent = (mode: PaletteMode) => {
  render(<NavigationBarMolecule mode={mode} toggleColorMode={mockToggleColorMode} />);
};

describe('NavigationBarMolecule', () => {
  beforeEach(() => {
    // 브라우저 가로 길이를 설정합니다 (예: 600px 이하로 설정)
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    window.dispatchEvent(new Event('resize'));
  });

  it('renders without crashing', () => {
    renderComponent('light');
    expect(screen.getByAltText('logo of sitemark')).toBeInTheDocument();
  });

  it('opens and closes the drawer menu', async () => {
    renderComponent('light');
    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton);

    // Drawer가 열렸는지 확인
    await waitFor(() => {
      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });

    const companyIntro = screen.queryAllByText('회사 소개');
    expect(companyIntro).toHaveLength(2); // Check if two instances are found
    expect(companyIntro[0]).toBeInTheDocument(); // Verify the first instance
    expect(companyIntro[1]).toBeInTheDocument(); // Verify the second instance

    // 암영 영역 클릭하여 Drawer 닫기
    const backdrop = document.querySelector('.MuiModal-backdrop');
    if (backdrop) {
      await act(async () => {
        fireEvent.click(backdrop);
      });
    }

    // Drawer가 닫혔는지 확인
    await waitFor(() => {
      expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
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
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders Sign in and Sign up buttons', () => {
    renderComponent('light');
    const signInButton = screen.getByText('Sign in');
    const signUpButton = screen.getByText('Sign up');
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
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
