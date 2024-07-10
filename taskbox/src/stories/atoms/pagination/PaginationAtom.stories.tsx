import { Meta, StoryObj } from '@storybook/react';
import PaginationAtom from '../../../../../src/components/atoms/pagination/PaginationAtom';

const meta: Meta<typeof PaginationAtom> = {
  component: PaginationAtom,
  title: 'Components/Atoms/PaginationAtom',
  argTypes: {
    count: { control: 'number' },
    page: { control: 'number' },
    onChange: { action: 'page changed' },
    siblingCount: { control: 'number' },
    boundaryCount: { control: 'number' },
    variant: { control: 'radio', options: ['text', 'outlined'] },
    shape: { control: 'radio', options: ['circular', 'rounded'] },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationAtom>;

export const Basic: Story = {
  args: {
    count: 10,
    page: 1,
    siblingCount: 1,
    boundaryCount: 1,
    variant: 'text',
    shape: 'rounded',
  },
};
