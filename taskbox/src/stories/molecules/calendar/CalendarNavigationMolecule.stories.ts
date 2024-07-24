// CalendarGridAtom.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import CalendarNavigationMolecule from '../../../../../src/components/molecules/calendar/CalendarNavigationMolecule';

const meta: Meta<typeof CalendarNavigationMolecule> = {
  component: CalendarNavigationMolecule,
};

export default meta;

type Story = StoryObj<typeof CalendarNavigationMolecule>;

export const Basic: Story = {
  args: {
    currentDate: "2024-07",
    onPrev: () => {},
    onNext: () => {},
    onToday: () => {},
  }
};
