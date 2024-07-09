import {Meta, StoryObj} from '@storybook/react';

import MenuItemAtom from '../../../../../src/components/atoms/menuitem/MenuItemAtom';

const meta: Meta<typeof MenuItemAtom> = {
  component: MenuItemAtom,
};

export default meta;

type Story = StoryObj<typeof MenuItemAtom>;

export const Basic: Story = {
  args: {
    children: 'test',
  }
};
