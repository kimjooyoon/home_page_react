import {Meta, StoryObj} from '@storybook/react';

import WorkTitleMolecule from '../../../../../src/components/molecules/work/WorkTitleMolecule';

const enum Status {
  Planned="planned",
  InProgress="inProgress",
  Canceled="canceled",
  Completed="completed"
}

const meta: Meta<typeof WorkTitleMolecule> = {
  component: WorkTitleMolecule,
};

export default meta;

type Story = StoryObj<typeof WorkTitleMolecule>;


// @ts-ignore
export const Planned: Story = {
  args: {
    status: Status.Planned,
    title:"주문데이터 수집 및 업무 자동화 프로그램 개발",
    startDate:"2024-07-02 14:00",
    endDate:"2024-07-25 18:00",
  }
};

export const InProgress: Story = {
  args: {
    status: Status.InProgress,
    title:"주문데이터 수집 및 업무 자동화 프로그램 개발",
    startDate:"2024-07-02 14:00",
    endDate:"2024-07-25 18:00",
  }
};

export const Canceled: Story = {
  args: {
    status: Status.Canceled,
    title:"주문데이터 수집 및 업무 자동화 프로그램 개발",
    startDate:"2024-07-02 14:00",
    endDate:"2024-07-25 18:00",
  }
};

export const Completed: Story = {
  args: {
    status: Status.Completed,
    title:"주문데이터 수집 및 업무 자동화 프로그램 개발",
    startDate:"2024-07-02 14:00",
    endDate:"2024-07-25 18:00",
  }
};