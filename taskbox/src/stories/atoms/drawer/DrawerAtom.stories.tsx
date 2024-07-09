import {Meta, StoryObj} from '@storybook/react';

import DrawerAtom from '../../../../../src/components/atoms/drawer/DrawerAtom';

const meta: Meta<typeof DrawerAtom> = {
  component: DrawerAtom,
};

export default meta;

type Story = StoryObj<typeof DrawerAtom>;

export const Basic: Story = {
  args: {
    children: 'test',
  }
};
