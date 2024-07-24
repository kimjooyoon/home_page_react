import { Meta, StoryObj } from '@storybook/react';
import CalendarOrganism from '../../../../../src/components/organisms/calendar/CalendarOrganism';

const meta: Meta<typeof CalendarOrganism> = {
  component: CalendarOrganism,
};

export default meta;

type Story = StoryObj<typeof CalendarOrganism>;

export const Basic: Story = {};
