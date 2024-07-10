import {Meta, StoryObj} from '@storybook/react';

import CardMoleculeProject from '../../../../../src/components/molecules/card/CardMoleculeProject';

const meta: Meta<typeof CardMoleculeProject> = {
  component: CardMoleculeProject,
};

export default meta;

type Story = StoryObj<typeof CardMoleculeProject>;

export const Basic: Story = {
  args: {
    projectName: "주문데이터 수집 및 업무 자동화 프로그램 개발",
    startDate: "2024-07-02 14:00",
    endDate: "2024-07-25 18:00",
    status: "in-progress",
    projectDetails: "기획서 00 내용 기반으로 시스템 전반 설계 및 고객사 컨펌",
    description: `해당 작업은 (domain) 과 관련된 작업임. 
필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 통화하여, 
관련 프로젝트를 전달받을 수 있음. 
이후 작업은 A 회사 솔루션사
(강아무개 주임, 010-0000-0000)에게 전달할 예정임.
연락 담당자: Joy`,
    customerProfile: {
      name: '',
      email: '',
      phone: '',
      company: '',
      position: '',
    }
  }
};
