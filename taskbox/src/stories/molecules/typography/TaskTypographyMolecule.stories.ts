import {Meta, StoryObj} from '@storybook/react';

import TaskTypographyMolecule from '../../../../../src/components/molecules/typography/TaskTypographyMolecule';

const meta: Meta<typeof TaskTypographyMolecule> = {
  component: TaskTypographyMolecule,
};

export default meta;

type Story = StoryObj<typeof TaskTypographyMolecule>;

export const Basic: Story = {
  args: {
    title: '주문데이터 수집 및 업무 자동화 프로그램 개발',
    startDate: '2024-07-02 14:00',
    endDate: '2024-07-25 18:00',
  }
};
