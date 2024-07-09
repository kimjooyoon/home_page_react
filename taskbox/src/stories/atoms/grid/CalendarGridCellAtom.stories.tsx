// CalendarGridAtom.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import CalendarGridCellAtom from '../../../../../src/components/atoms/grid/CalendarGridCellAtom';

const meta: Meta<typeof CalendarGridCellAtom> = {
  component: CalendarGridCellAtom,
};

export default meta;

type Story = StoryObj<typeof CalendarGridCellAtom>;

export const Basic: Story = {};
