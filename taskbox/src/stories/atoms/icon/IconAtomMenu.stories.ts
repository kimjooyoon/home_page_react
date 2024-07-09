import {Meta, StoryObj} from '@storybook/react';

import {IconAtomMenu} from '../../../../../src/components/atoms/icon/IconAtom';

const meta: Meta<typeof IconAtomMenu> = {
  component: IconAtomMenu,
};

export default meta;

type Story = StoryObj<typeof IconAtomMenu>;

export const Basic: Story = {
  args: {}
};
