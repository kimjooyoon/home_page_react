import { Meta, StoryObj } from '@storybook/react';
import ProjectViewerTemplate from '../../../../../src/components/templates/project/ProjectViewerTemplate';
import { CardMoleculeProjectProps } from '../../../../../src/components/molecules/card/CardMoleculeProject';

const meta: Meta<typeof ProjectViewerTemplate> = {
  component: ProjectViewerTemplate,
};

export default meta;

type Story = StoryObj<typeof ProjectViewerTemplate>;

const customerProfile = {
  name: '홍길동',
  email: 'hong@gildong.com',
  phone: '010-0000-0000',
  company: 'ABC 회사',
  position: '과장',
};

const adminProjects: CardMoleculeProjectProps[] = [
  {
    projectName: '주류데이터 수집 및 업무 자동화 프로그램 개발',
    startDate: '2024-07-02 14:00',
    endDate: '2024-07-25 18:00',
    status: 'in-progress',
    projectDetails: '기획서 00 내용 기반으로 시스템 전반 설계 및 교차사 진행',
    description: `해당 작업은 (domain) 과 관련된 작업임.
필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 통화하여,
관련 프로젝트를 전달받을 수 있음.
이후 작업은 A 회사 솔루션 사
(강아무개 주임, 010-0000-0000)에게 전달할 예정임.
연락 담당자: Joy`,
    customerProfile,
    isAdmin: true,
  },
  {
    projectName: '사내 인트라넷 시스템 업그레이드',
    startDate: '2024-08-01 09:00',
    endDate: '2024-08-15 18:00',
    status: 'completed',
    projectDetails: '기존 인트라넷 시스템의 성능 향상 및 보안 업데이트',
    description: `해당 프로젝트는 사내 네트워크 및 보안 팀과 협력하여 진행됨.
기존 시스템의 백업과 데이터 이전 작업 포함.`,
    customerProfile,
    isAdmin: true,
  },
  {
    projectName: '신규 고객 관리 시스템 개발',
    startDate: '2024-09-01 10:00',
    endDate: '2024-09-30 18:00',
    status: 'planned',
    projectDetails: '고객 관리 및 데이터 분석 기능 추가',
    description: `고객 데이터베이스 통합 및 분석 기능 구현.
고객 이탈 방지 및 만족도 향상 목표.`,
    customerProfile,
    isAdmin: true,
  },
  {
    projectName: '제품 재고 관리 시스템 개선',
    startDate: '2024-10-01 11:00',
    endDate: '2024-10-20 17:00',
    status: 'canceled',
    projectDetails: '재고 관리 시스템의 오류 수정 및 성능 개선',
    description: `현재 재고 관리 시스템의 문제점 파악 및 수정.
향후 확장성을 고려한 개선 작업.`,
    customerProfile,
    isAdmin: true,
  },
  {
    projectName: '회사 홈페이지 리뉴얼',
    startDate: '2024-11-01 12:00',
    endDate: '2024-11-30 18:00',
    status: 'in-progress',
    projectDetails: '회사 홈페이지 디자인 및 기능 개선',
    description: `UI/UX 개선을 위한 사용자 인터페이스 재설계.
신규 기능 추가 및 기존 기능 개선.`,
    customerProfile,
    isAdmin: true,
  },
];

const userProjects: CardMoleculeProjectProps[] = [
  {
    projectName: '고객 데이터 분석 시스템 개발',
    startDate: '2024-07-02 10:00',
    endDate: '2024-07-25 16:00',
    status: 'in-progress',
    projectDetails: '고객 데이터를 분석하여 인사이트 도출',
    description: '',
    customerProfile,
    isAdmin: false,
  },
  {
    projectName: '사내 메신저 시스템 구축',
    startDate: '2024-08-01 09:00',
    endDate: '2024-08-15 18:00',
    status: 'completed',
    projectDetails: '사내 커뮤니케이션을 위한 메신저 시스템 구축',
    description: '',
    customerProfile,
    isAdmin: false,
  },
  {
    projectName: '신규 모바일 앱 개발',
    startDate: '2024-09-01 10:00',
    endDate: '2024-09-30 18:00',
    status: 'planned',
    projectDetails: '모바일 앱 디자인 및 기능 구현',
    description: '',
    customerProfile,
    isAdmin: false,
  },
  {
    projectName: '사내 교육 시스템 개선',
    startDate: '2024-10-01 11:00',
    endDate: '2024-10-20 17:00',
    status: 'canceled',
    projectDetails: '사내 교육 시스템의 사용자 경험 개선',
    description: '',
    customerProfile,
    isAdmin: false,
  },
  {
    projectName: '신규 마케팅 캠페인 기획',
    startDate: '2024-11-01 12:00',
    endDate: '2024-11-30 18:00',
    status: 'in-progress',
    projectDetails: '신규 제품 출시를 위한 마케팅 캠페인 기획',
    description: '',
    customerProfile,
    isAdmin: false,
  },
];

export const AdminViewer: Story = {
  args: {
    projects: adminProjects,
  },
};

export const UserViewer: Story = {
  args: {
    projects: userProjects,
  },
};
