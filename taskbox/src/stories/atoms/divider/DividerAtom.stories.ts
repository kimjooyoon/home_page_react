import {Meta, StoryObj} from '@storybook/react';

import DividerAtom from '../../../../../src/components/atoms/divider/DividerAtom';

const meta: Meta<typeof DividerAtom> = {
  component: DividerAtom,
};

export default meta;

type Story = StoryObj<typeof DividerAtom>;

export const Basic: Story = {
  args: {
    children: 'test',
  }
};
