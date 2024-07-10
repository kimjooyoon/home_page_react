import {Meta, StoryObj} from '@storybook/react';

import ProjectWorkListMolecule from '../../../../../src/components/molecules/work/ProjectWorkListMolecule';

const meta: Meta<typeof ProjectWorkListMolecule> = {
  component: ProjectWorkListMolecule,
};

export default meta;

type Story = StoryObj<typeof ProjectWorkListMolecule>;


// @ts-ignore
export const Base: Story = {
  args: {
    dateRange: '2024-07-02 14:00 ~ 2024-07-25 18:00',
    description: '해당 작업은 (domain) 과 관련된 작업임. 필요시, 사내 담당자(홍길동 과장,010-0000-0000)과 통화하여, 관련 프로젝트를 전달받을 수 있음.이후 작업은 A 회사 솔루션 사(강아무개 주임, 010-0000-0000)에게 전달할 예정임.연락 담당자: Joy',
  }
};
