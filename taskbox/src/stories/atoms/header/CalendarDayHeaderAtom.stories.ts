import {Meta, StoryObj} from '@storybook/react';

import CalendarDayHeaderAtom from '../../../../../src/components/atoms/header/CalendarDayHeaderAtom';

const meta: Meta<typeof CalendarDayHeaderAtom> = {
  component: CalendarDayHeaderAtom,
};

export default meta;

type Story = StoryObj<typeof CalendarDayHeaderAtom>;

export const Basic: Story = {
  args: {}
};
