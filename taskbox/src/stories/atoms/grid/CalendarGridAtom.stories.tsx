// CalendarGridAtom.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import CalendarGridAtom from '../../../../../src/components/atoms/grid/CalendarGridAtom';

const meta: Meta<typeof CalendarGridAtom> = {
  component: CalendarGridAtom,
};

export default meta;

type Story = StoryObj<typeof CalendarGridAtom>;

export const Basic: Story = {};
