import { Meta, StoryObj } from '@storybook/react';
import DropDownAtom from '../../../../../src/components/atoms/dropdown/DropDownAtom';

const meta: Meta<typeof DropDownAtom> = {
  component: DropDownAtom,
  title: 'Components/Atoms/DropDownAtom',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    options: { 'Control': 'array' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof DropDownAtom>;

export const Basic: Story = {
  args: {
    label: 'Test Dropdown',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onChange: () => {},
  },
};
