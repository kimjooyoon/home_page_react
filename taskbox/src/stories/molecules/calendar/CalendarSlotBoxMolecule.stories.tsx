// CalendarGridAtom.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import CalendarSlotBoxMolecule from '../../../../../src/components/molecules/calendar/CalendarSlotBoxMolecule';

const meta: Meta<typeof CalendarSlotBoxMolecule> = {
  component: CalendarSlotBoxMolecule,
};

export default meta;

type Story = StoryObj<typeof CalendarSlotBoxMolecule>;

export const Schedule: Story = {
  args: {
    usage: 'schedule',
    currentTime: '2024-07-25 18:00',
    onAdd: () => {
      console.log('Add clicked');
    },
    onCancel: () => {
      console.log('Cancel clicked');
    },
  },
};
export const Calendar: Story = {
  args: {
    usage: 'calendar',
    currentTime: '2024-07-25 18:00',
    onAdd: () => {
      console.log('Add clicked');
    },
    onCancel: () => {
      console.log('Cancel clicked');
    },
  },
};
