import { render, screen } from '@testing-library/react';
import CardMoleculeProject, { CardMoleculeProjectProps } from './CardMoleculeProject';
import '@testing-library/jest-dom';

const mockProps: CardMoleculeProjectProps = {
  projectName: '프로젝트 이름',
  startDate: '2024-07-02 14:00',
  endDate: '2024-07-25 18:00',
  status: 'in-progress',
  projectDetails: '기획서 00 내용 기반으로 시스템 전반 설계 및 교차사 진행',
  description: '프로젝트 메모 내용',
  customerProfile: {
    name: '홍길동',
    email: 'hong@gildong.com',
    phone: '010-0000-0000',
    company: 'ABC 회사',
    position: '과장',
  },
  isAdmin: true,
};

describe('CardMoleculeProject', () => {
  test('관리자 모드에서 모든 정보가 표시되는지 확인', () => {
    render(<CardMoleculeProject {...mockProps} />);

    // 프로젝트 기본 정보 확인
    expect(screen.getByText('프로젝트 이름')).toBeVisible();
    expect(screen.getByText('2024-07-02 14:00 ~ 2024-07-25 18:00')).toBeVisible();
    expect(screen.getByDisplayValue('기획서 00 내용 기반으로 시스템 전반 설계 및 교차사 진행')).toBeVisible();

    // 메모 및 고객 프로필 정보 확인
    expect(screen.getByDisplayValue('프로젝트 메모 내용')).toBeVisible();
    expect(screen.getByDisplayValue('홍길동')).toBeVisible();
    expect(screen.getByDisplayValue('hong@gildong.com')).toBeVisible();
    expect(screen.getByDisplayValue('010-0000-0000')).toBeVisible();
    expect(screen.getByDisplayValue('ABC 회사')).toBeVisible();
    expect(screen.getByDisplayValue('과장')).toBeVisible();
  });

  test('일반 사용자 모드에서 메모 및 고객 프로필 정보가 표시되지 않는지 확인', () => {
    const userProps = { ...mockProps, isAdmin: false };
    render(<CardMoleculeProject {...userProps} />);

    // 프로젝트 기본 정보 확인
    expect(screen.getByText('프로젝트 이름')).toBeVisible();
    expect(screen.getByText('2024-07-02 14:00 ~ 2024-07-25 18:00')).toBeVisible();
    expect(screen.getByDisplayValue('기획서 00 내용 기반으로 시스템 전반 설계 및 교차사 진행')).toBeVisible();

    // 메모 및 고객 프로필 정보가 없는지 확인
    expect(screen.queryByDisplayValue('프로젝트 메모 내용')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('홍길동')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('hong@gildong.com')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('010-0000-0000')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('ABC 회사')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('과장')).not.toBeInTheDocument();
  });
});
