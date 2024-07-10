import {Meta, StoryObj} from '@storybook/react';

import ProjectWorkListMolecule from '../../../../../src/components/molecules/list/ProjectWorkListMolecule';

const meta: Meta<typeof ProjectWorkListMolecule> = {
  component: ProjectWorkListMolecule,
};

export default meta;

type Story = StoryObj<typeof ProjectWorkListMolecule>;


export const AdminViewer: Story = {
  args: {
    taskName: '캘린더 API 개발',
    dateRange: '2024-07-02 14:00 ~ 2024-07-25 18:00',
    description: `명세 내용.
캘린더는 구글 캘린더 기준으로 개발.
일정 API 와 겹치는 부분은 일정 개발로 이전함
`,
    status: 'planned',
    tagCategory: 'back-end',
    memo: `해당 작업은 (domain) 과 관련된 작업임.
필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 연락하여,
관련 프로젝트를 전달받을 수 있음.
이후 작업은 A 회사 솔루션 사(강아무개 주임, 010-0000-0000)에게 전달할 예정임.
연락 담당자: Joy`,
    isAdmin: true
  }
};

export const UserViewer: Story = {
  args: {
    dateRange: '2024-07-02 14:00 ~ 2024-07-25 18:00',
    description: `명세 내용.
캘린더는 구글 캘린더 기준으로 개발.
일정 API 와 겹치는 부분은 일정 개발로 이전함`,
    status: 'in-progress',
    tagCategory: 'back-end',
    isAdmin: false
  }
};
