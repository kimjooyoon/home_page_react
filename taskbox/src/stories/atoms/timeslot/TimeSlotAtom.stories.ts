import {Meta, StoryObj} from '@storybook/react';

import TimeSlotAtom from '../../../../../src/components/atoms/timeslot/TimeSlotAtom';

const meta: Meta<typeof TimeSlotAtom> = {
  component: TimeSlotAtom,
};

export default meta;

type Story = StoryObj<typeof TimeSlotAtom>;

export const Basic: Story = {
  args: {
    label: 'Sample Task',
    color: '#3f51b5',
  }
};
