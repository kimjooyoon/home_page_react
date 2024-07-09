// CalendarGridAtom.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import CalendarMolecule from '../../../../../src/components/molecules/calendar/CalendarMolecule';

const meta: Meta<typeof CalendarMolecule> = {
  component: CalendarMolecule,
};

export default meta;

type Story = StoryObj<typeof CalendarMolecule>;

export const Basic: Story = {};
